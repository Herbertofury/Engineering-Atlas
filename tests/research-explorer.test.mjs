import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMMUNITY_PRIOR, PAGE_SIZE, cohortFor, communityScore, csvCell, encodeState,
  evidenceFor, exportCSV, measurement, parseState, publicationYearMatches, publishedDate, queryCatalog,
  ratingURL, repositorySignal, safeURL,
} from '../docs/explorer/explorer-core.mjs';

// All entries, accounts, popularity counts and measurements in this file are
// synthetic fixtures. They are not research findings or real project scores.
const TRACK = 'synthetic-build';
const OTHER_TRACK = 'synthetic-runtime';
const CHECKED = '2026-10-27';

function source(published_at = '2026-03-12', extra = {}) {
  return {url: 'https://example.invalid/synthetic-source', title: 'Synthetic source',
    checked_at: CHECKED, published_at, note: 'Synthetic test evidence only.', ...extra};
}

function entry(id, extra = {}) {
  return {id: 'synthetic-' + id, name: 'Synthetic ' + id, kind: 'tool',
    category: 'synthetic-tools', summary: 'Synthetic compilation fixture.',
    tags: ['synthetic', 'compiled'], repo: null, paper_url: null,
    url: 'https://example.invalid/synthetic-' + id, sources: [source()],
    status: 'candidate', maturity: 'experimental', priority: 1,
    priority_reason: 'Synthetic queue priority.', latest_signal: null,
    evaluation: {track: TRACK, proposal: 'Synthetic test proposal.',
      metrics: ['Synthetic duration'], caveats: ['Never a real result.']}, ...extra};
}

function cohort(id, direction = 'lower', evidence = 'atlas_measured') {
  return {id: 'synthetic-' + id, label: 'Synthetic ' + id, metric: 'synthetic metric',
    unit: direction === 'lower' ? 'ms' : 'ops/s', direction, evidence,
    description: 'Synthetic comparison only.', protocol: 'Synthetic protocol.',
    caveats: ['Never a real benchmark.'], source_url: 'https://example.invalid/synthetic-protocol',
    observed_at: CHECKED};
}

function observation(candidate, group, value) {
  return {candidate_id: candidate.id, cohort_id: group.id, value,
    subject: 'Synthetic subject', note: 'Synthetic test observation, never real evidence.',
    source_url: 'https://example.invalid/synthetic-result', observed_at: CHECKED};
}

function catalog(entries = [], extra = {}) {
  return {entries, results: {cohorts: [], observations: []},
    signals: {repositories: {}, errors: []}, community: {ratings: []}, ...extra};
}

function state(extra = {}) { return {...parseState(''), ...extra}; }
function ids(result) { return result.entries.map(e => e.id); }
function csvRecords(csv) {
  // These export fixtures contain no embedded line breaks. Read quoted fields,
  // including escaped quotes and commas, independently of the export function.
  const rows = csv.split('\r\n').map(line => Array.from(line.matchAll(/"((?:[^"]|"")*)"(?:,|$)/g),
    match => match[1].replaceAll('""', '"')));
  return rows.slice(1).map(row => Object.fromEntries(rows[0].map((key, i) => [key, row[i]])));
}
function ratings(candidate, count, score) {
  return Array.from({length: count}, (_, i) => ({candidate_id: candidate.id,
    track: candidate.evaluation.track, score, author_id: i + 1,
    author: 'synthetic-account-' + (i + 1), review_state: 'approved',
    experience: 'Synthetic account fixture.', version: 'synthetic-version',
    issue_url: 'https://github.com/Herbertofury/Engineering-Atlas/issues/' + (i + 1),
    updated_at: CHECKED + 'T12:00:00Z'}));
}

test('search combines whitespace-separated case-insensitive tokens across catalog metadata', () => {
  const alpha = entry('alpha', {name: 'Synthetic Alpha Runner',
    summary: 'Synthetic streaming incremental compilation.', repo: 'Synthetic/Runner',
    tags: ['synthetic', 'wasm'], latest_signal: 'Synthetic LLVM backend',
    sources: [source(null, {title: 'Synthetic compiler design notes'})]});
  const beta = entry('beta', {summary: 'Synthetic streaming network fixture.'});
  const data = catalog([beta, alpha]);
  for (const q of ['  STREAMING\tLLVM\n', 'alpha wasm', 'synthetic/runner design',
    'synthetic-tools tool synthetic-build', 'incremental compiler']) {
    const expected = q === 'synthetic-tools tool synthetic-build' ? [alpha.id, beta.id] : [alpha.id];
    assert.deepEqual(ids(queryCatalog(data, state({q, sort: 'name'}))), expected, q);
  }
  assert.deepEqual(ids(queryCatalog(data, state({q: 'wasm network'}))), []);
  assert.equal(queryCatalog(data, state({q: ' \t\n '})).total, 2);
});

test('category, kind, maturity, track, evidence, publication year and search filters intersect', () => {
  const matching = entry('matching');
  const wrong = [entry('category', {category: 'synthetic-other'}),
    entry('kind', {kind: 'paper'}), entry('maturity', {maturity: 'established'}),
    entry('track', {evaluation: {...matching.evaluation, track: OTHER_TRACK}}),
    entry('year', {sources: [source('2025-12-01')]}),
    entry('search', {summary: 'Synthetic unrelated fixture.'}), entry('unmeasured')];
  const group = cohort('filters');
  const data = catalog([matching, ...wrong], {results: {cohorts: [group],
    observations: [matching, ...wrong.slice(0, -1)].map(e => observation(e, group, 5))}});
  const result = queryCatalog(data, state({q: 'compilation', category: matching.category,
    kind: matching.kind, maturity: matching.maturity, track: TRACK,
    evidence: 'measured', year: '2026'}));
  assert.deepEqual(ids(result), [matching.id]);
  assert.deepEqual(ids(queryCatalog(data, state({evidence: 'candidate'}))), [wrong.at(-1).id]);
});

test('2026 publication filtering never substitutes the source check date or a release mention', () => {
  const old = entry('old', {sources: [source('2025-12-31')], latest_signal: 'Reviewed in 2026'});
  const current = entry('current', {sources: [source('2026-01-01')]});
  const undated = entry('undated', {sources: [source(null)]});
  const mixed = entry('mixed', {sources: [source('2024-06-01'), source('2026-02-01')]});
  const data = catalog([old, current, undated, mixed]);
  assert.deepEqual(ids(queryCatalog(data, state({year: '2026', sort: 'name'}))), [current.id, mixed.id]);
  assert.deepEqual(ids(queryCatalog(data, state({year: '2025'}))), [old.id]);
  assert.equal(publishedDate(undated), '');
});

test('a verified paper publication year includes undated papers without replacing dated-source matching', () => {
  const yearOnly = entry('year-only', {kind: 'paper', publication_year: 2026, sources: [source(null)]});
  const dated = entry('dated', {sources: [source('2026-02-01')]});
  const revisedSource = entry('revised-source', {kind: 'paper', publication_year: 2025,
    sources: [source('2025-01-01'), source('2026-08-01')]});
  const old = entry('old', {kind: 'paper', publication_year: 2025, sources: [source(null)]});
  const merelyChecked = entry('checked', {kind: 'paper', sources: [source(null)]});
  const data = catalog([yearOnly, merelyChecked, old, revisedSource, dated]);
  assert.deepEqual(ids(queryCatalog(data, state({year: '2026', sort: 'name'}))),
    [dated.id, revisedSource.id, yearOnly.id]);
  assert.deepEqual(ids(queryCatalog(data, state({year: '2025', sort: 'name'}))), [old.id, revisedSource.id]);
});

test('publication-year precision never creates a synthetic date or moves an undated paper ahead in recent sorting', () => {
  const yearOnly = entry('a-year-only', {kind: 'paper', publication_year: 2026, sources: [source(null)]});
  const dated2025 = entry('z-dated-2025', {sources: [source('2025-12-31')]});
  const dated2026 = entry('z-dated-2026', {sources: [source('2026-01-01')]});
  const data = catalog([yearOnly, dated2025, dated2026]);
  const before = structuredClone(data);
  assert.equal(publishedDate(yearOnly), '');
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'recent'}))),
    [dated2026.id, dated2025.id, yearOnly.id]);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'recent', year: '2026'}))),
    [dated2026.id, yearOnly.id]);
  assert.deepEqual(data, before);
});

test('publication-year matching accepts a complete year and does not infer paper metadata from unrelated values', () => {
  const yearOnly = entry('year-only', {kind: 'paper', publication_year: 2026, sources: []});
  assert.equal(publicationYearMatches(yearOnly, '2026'), true);
  assert.equal(publicationYearMatches(yearOnly, 2026), true);
  for (const year of ['', '202', '2026-10', '02026', 'unknown']) {
    assert.equal(publicationYearMatches(yearOnly, year), false, year);
  }
  assert.equal(publicationYearMatches({...yearOnly, kind: 'tool'}, '2026'), false);
  assert.equal(publicationYearMatches({...yearOnly, publication_year: '2026'}, '2026'), false);
  assert.equal(publicationYearMatches(entry('checked-only', {sources: [source(null)]}), '2026'), false);
});

test('recent sorting uses the latest known publication and places undated sources last', () => {
  const old = entry('old', {sources: [source('2025-12-31')]});
  const multi = entry('multi', {sources: [source('2026-01-01'), source(null), source('2026-08-01')]});
  const newest = entry('newest', {sources: [source('2026-10-01', {checked_at: '2026-10-01'})]});
  const unknown = entry('unknown', {sources: [source(null)]});
  const data = catalog([unknown, old, multi, newest]);
  assert.equal(publishedDate(multi), '2026-08-01');
  assert.equal(publishedDate({}), '');
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'recent'}))), [newest.id, multi.id, old.id, unknown.id]);
});

test('missing popularity sorts last, while an observed zero remains a valid count', () => {
  const missing = entry('a-missing', {repo: 'Synthetic/Missing'});
  const zero = entry('z-zero', {repo: 'SYNTHETIC/Zero'});
  const popular = entry('popular', {repo: 'Synthetic/Popular'});
  const noRepository = entry('b-no-repository');
  const data = catalog([missing, zero, noRepository, popular], {signals: {errors: [], repositories: {
    'synthetic/zero': {stars: 0, observed_at: CHECKED + 'T12:00:00Z'},
    'synthetic/popular': {stars: 9, observed_at: CHECKED + 'T12:00:00Z'},
  }}});
  assert.equal(repositorySignal(zero, data).stars, 0);
  assert.equal(repositorySignal(missing, data), null);
  assert.equal(repositorySignal(noRepository, data), null);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'stars'}))),
    [popular.id, zero.id, missing.id, noRepository.id]);
});

test('queue/name sorting has deterministic ties and does not reorder the source catalog', () => {
  const a = entry('a', {name: 'Synthetic Equal', priority: 2});
  const b = entry('b', {name: 'Synthetic Equal', priority: 2});
  const early = entry('early', {name: 'Synthetic Zebra', priority: 1});
  const data = catalog([b, a, early]);
  const before = structuredClone(data);
  assert.deepEqual(ids(queryCatalog(data, state())), [early.id, a.id, b.id]);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'name'}))), [a.id, b.id, early.id]);
  assert.deepEqual(data, before);
});

test('each benchmark uses its declared lower/higher direction and retains zero measurements', () => {
  const a = entry('a', {priority: 1});
  const b = entry('b', {priority: 2});
  const c = entry('c', {priority: 3});
  const latency = cohort('latency');
  const throughput = cohort('throughput', 'higher');
  const data = catalog([a, b, c], {results: {cohorts: [latency, throughput], observations: [
    observation(a, latency, 20), observation(b, latency, 5), observation(c, latency, 0),
    observation(a, throughput, 200), observation(b, throughput, 50), observation(c, throughput, 0),
  ]}});
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'measured', cohort: latency.id}))), [c.id, b.id, a.id]);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'measured', cohort: throughput.id}))), [a.id, b.id, c.id]);
});

test('rankings require a selected cohort from the correct evidence lane', () => {
  const candidate = entry('a');
  const local = cohort('local');
  const external = cohort('external', 'higher', 'external_reported');
  const data = catalog([candidate], {results: {cohorts: [local, external],
    observations: [observation(candidate, local, 5), observation(candidate, external, 80)]}});
  for (const selected of [{sort: 'measured'}, {sort: 'external'},
    {sort: 'measured', cohort: 'synthetic-nonexistent'},
    {sort: 'measured', cohort: external.id}, {sort: 'external', cohort: local.id}]) {
    const view = state(selected);
    const result = queryCatalog(data, view);
    assert.equal(cohortFor(data, view), null);
    assert.equal(measurement(candidate, data, view), null);
    assert.deepEqual(result.entries, []);
    assert.equal(result.total, 0);
    assert.match(result.reason, /cohort/i);
  }
  assert.equal(cohortFor(data, state({sort: 'priority', cohort: local.id})), null);
});

test('a benchmark cohort never borrows another cohort value or admits an unmatched candidate', () => {
  const a = entry('a');
  const b = entry('b');
  const unmatched = entry('unmatched');
  const selected = cohort('selected');
  const other = cohort('other');
  const data = catalog([a, unmatched, b], {results: {cohorts: [selected, other], observations: [
    observation(a, other, 1), observation(unmatched, other, 0),
    observation(a, selected, 100), observation(b, selected, 2),
  ]}});
  const view = state({sort: 'measured', cohort: selected.id});
  assert.equal(measurement(a, data, view).value, 100);
  assert.equal(measurement(unmatched, data, view), null);
  assert.deepEqual(ids(queryCatalog(data, view)), [b.id, a.id]);
});

test('external results, popularity and community ratings never promote a candidate to Atlas measured', () => {
  const externalOnly = entry('external', {repo: 'Synthetic/External'});
  const localOnly = entry('local');
  const absent = entry('absent');
  const external = cohort('external', 'higher', 'external_reported');
  const local = cohort('local');
  const data = catalog([externalOnly, localOnly, absent], {
    results: {cohorts: [external, local], observations: [
      observation(externalOnly, external, 99), observation(localOnly, local, 8)]},
    signals: {repositories: {'synthetic/external': {stars: 999}}, errors: []},
    community: {ratings: ratings(externalOnly, 8, 5)},
  });
  assert.equal(evidenceFor(externalOnly, data), 'candidate');
  assert.equal(evidenceFor(absent, data), 'candidate');
  assert.equal(evidenceFor(localOnly, data), 'measured');
  assert.deepEqual(ids(queryCatalog(data, state({evidence: 'measured'}))), [localOnly.id]);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'external', cohort: external.id}))), [externalOnly.id]);
  assert.equal(externalOnly.status, 'candidate');
  assert.equal(localOnly.status, 'candidate');
});

test('absent source dates, popularity, ratings and observations remain unknown rather than zero evidence', () => {
  const unknown = entry('unknown', {sources: [], repo: 'Synthetic/Unknown'});
  const data = catalog([unknown]);
  assert.equal(publishedDate(unknown), '');
  assert.equal(repositorySignal(unknown, data), null);
  assert.equal(communityScore(unknown, data, TRACK), null);
  assert.equal(measurement(unknown, data, state({sort: 'measured', cohort: 'synthetic-absent'})), null);
  assert.equal(evidenceFor(unknown, data), 'candidate');
  for (const sort of ['priority', 'stars', 'recent', 'community']) {
    assert.deepEqual(ids(queryCatalog(data, state({sort, track: TRACK}))), [unknown.id]);
  }
  assert.deepEqual(ids(queryCatalog(data, state({evidence: 'measured'}))), []);
  assert.deepEqual(ids(queryCatalog(data, state({year: '2026'}))), []);
});

test('community eligibility starts at three reviewed reports and uses the disclosed five-vote prior', () => {
  const candidate = entry('community');
  assert.deepEqual(COMMUNITY_PRIOR, {mean: 3, weight: 5, minimum: 3});
  assert.equal(communityScore(candidate, catalog([candidate]), TRACK), null);
  for (const count of [1, 2, 3]) {
    const data = catalog([candidate], {community: {ratings: ratings(candidate, count, 5)}});
    const score = communityScore(candidate, data, TRACK);
    assert.equal(score.count, count);
    assert.equal(score.mean, 5);
    assert.equal(score.adjusted, (count * 5 + 15) / (count + 5));
    assert.equal(score.eligible, count >= 3);
    assert.equal(score.votes.length, count);
  }
});

test('community sorting uses adjusted scores and leaves insufficient/unrated candidates unranked at the end', () => {
  const small = entry('small');
  const established = entry('established');
  const insufficient = entry('a-insufficient');
  const unrated = entry('z-unrated');
  const data = catalog([small, insufficient, unrated, established], {community: {ratings: [
    ...ratings(small, 3, 5), ...ratings(established, 20, 4), ...ratings(insufficient, 2, 5),
  ]}});
  assert.equal(communityScore(small, data, TRACK).adjusted, 3.75);
  assert.equal(communityScore(established, data, TRACK).adjusted, 3.8);
  assert.equal(communityScore(insufficient, data, TRACK).eligible, false);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'community', track: TRACK}))),
    [established.id, small.id, insufficient.id, unrated.id]);
});

test('community scores require an explicit matching track and cannot mix tracks', () => {
  const a = entry('a');
  const b = entry('b', {evaluation: {...a.evaluation, track: OTHER_TRACK}});
  const data = catalog([a, b], {community: {ratings: [...ratings(a, 3, 2), ...ratings(b, 3, 5)]}});
  assert.equal(communityScore(a, data, ''), null);
  assert.equal(communityScore(a, data, OTHER_TRACK), null);
  assert.equal(communityScore(b, data, TRACK), null);
  const unscoped = queryCatalog(data, state({sort: 'community'}));
  assert.deepEqual(unscoped.entries, []);
  assert.match(unscoped.reason, /track/i);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'community', track: TRACK}))), [a.id]);
  assert.deepEqual(ids(queryCatalog(data, state({sort: 'community', track: OTHER_TRACK}))), [b.id]);
});

test('URL state roundtrips every supported filter and safely preserves Unicode/reserved search characters', () => {
  const original = state({q: 'C++ & Rust / λ # "synthetic"', category: 'synthetic-tools',
    kind: 'tool', maturity: 'experimental', evidence: 'measured', year: '2026',
    track: TRACK, cohort: 'synthetic-latency', sort: 'measured', page: 2});
  const encoded = encodeState(original);
  assert.deepEqual(parseState('?' + encoded), original);
  assert.equal(new URLSearchParams(encoded).get('q'), original.q);
  assert.equal(encodeState(state()), '');
  assert.equal(encodeState({...state(), injected: 'not-a-state-field'}), '');
});

test('malformed URL state cannot select unsupported sorts or unbounded query/page values', () => {
  for (const page of ['0', '-1', '1.5', 'NaN', 'Infinity', 'bogus', '']) {
    assert.equal(parseState('?page=' + page).page, 1, page);
  }
  assert.equal(parseState('?page=10001').page, 10000);
  assert.equal(parseState('?page=2').page, 2);
  assert.equal(parseState('?sort=arbitrary').sort, 'priority');
  assert.equal(parseState('?sort=stars').sort, 'stars');
  assert.equal(parseState('?q=' + 'x'.repeat(400)).q, 'x'.repeat(300));
});

test('link sanitizer permits clean HTTPS and rejects executable, relative or credential-bearing URLs', () => {
  assert.equal(safeURL('https://example.invalid/path?q=synthetic#source'),
    'https://example.invalid/path?q=synthetic#source');
  for (const url of ['javascript:alert(1)', 'data:text/html,<script>alert(1)</script>',
    'http://example.invalid', 'ftp://example.invalid', 'file:///etc/passwd',
    'blob:https://example.invalid/uuid', '//example.invalid/path', '/relative/path',
    'https://user:password@example.invalid', 'https://user@example.invalid',
    'https://example.invalid@attacker.invalid', 'https://', 'not a URL', '', null, undefined]) {
    assert.equal(safeURL(url), null, String(url));
  }
});

test('rating links retain the intended repository and encode entry names without query injection', () => {
  const candidate = entry('rating', {name: 'Synthetic <script> &labels=accepted#fragment'});
  const url = new URL(ratingURL(candidate));
  assert.equal(url.origin, 'https://github.com');
  assert.equal(url.pathname, '/Herbertofury/Engineering-Atlas/issues/new');
  assert.equal(url.searchParams.get('template'), 'research-rating.yml');
  assert.equal(url.searchParams.get('candidate_id'), candidate.id);
  assert.equal(url.searchParams.get('track'), TRACK);
  assert.equal(url.searchParams.get('title'), '[Research rating] ' + candidate.name);
  assert.equal(url.searchParams.has('labels'), false);
  assert.equal(url.hash, '');
});

test('CSV neutralizes formula and leading-control prefixes while quoting text and preserving zero', () => {
  for (const value of ['=SUM(1,2)', '+1', '-1', '@SUM(A1)', '  =1', '\t=1',
    '\r=1', '\n=1', '\tordinary text', '\uFEFF=1']) {
    assert.ok(csvCell(value).startsWith('"\''), JSON.stringify(value));
  }
  assert.equal(csvCell('Synthetic "quoted", value\nsecond line'),
    '"Synthetic ""quoted"", value\nsecond line"');
  assert.equal(csvCell('synthetic@example.invalid'), '"synthetic@example.invalid"');
  assert.equal(csvCell(0), '"0"');
  assert.equal(csvCell(null), '""');
  assert.equal(csvCell(undefined), '""');
});

test('CSV export preserves unknown versus zero popularity and does not invent measured status', () => {
  const zero = entry('zero', {name: '=SUM(1,2)', repo: 'Synthetic/Zero'});
  const missing = entry('missing', {name: 'Synthetic Missing', repo: 'Synthetic/Missing'});
  const data = catalog([zero, missing], {signals: {errors: [], repositories: {
    'synthetic/zero': {stars: 0, observed_at: CHECKED + 'T12:00:00Z'},
  }}});
  const exported = exportCSV([zero, missing], data);
  const expected = [
    '"id","name","kind","category","maturity","evidence","priority","track","github_stars","stars_observed_at","url"',
    '"synthetic-zero","\'=SUM(1,2)","tool","synthetic-tools","experimental","candidate","1","synthetic-build","0","2026-10-27T12:00:00Z","https://example.invalid/synthetic-zero"',
    '"synthetic-missing","Synthetic Missing","tool","synthetic-tools","experimental","candidate","1","synthetic-build","","","https://example.invalid/synthetic-missing"',
  ].join('\r\n');
  assert.equal(exported, expected);
  assert.equal(exportCSV([], data), expected.split('\r\n')[0]);
});

test('contextual CSV exports the selected benchmark cohort with provenance and measured zero intact', () => {
  const a = entry('a', {name: '=SUM(1,2)', repo: 'Synthetic/A'});
  const b = entry('b');
  const unmatched = entry('unmatched');
  const selected = cohort('external-selected', 'higher', 'external_reported');
  const other = cohort('external-other', 'higher', 'external_reported');
  const local = cohort('local');
  const chosenA = {...observation(a, selected, 81), source_url: 'https://example.invalid/selected-a',
    observed_at: '2026-10-26'};
  const chosenB = {...observation(b, selected, 0), source_url: 'https://example.invalid/selected-b'};
  const data = catalog([a, b, unmatched], {
    results: {cohorts: [other, local, selected], observations: [
      observation(a, other, 999), observation(a, local, 1), observation(unmatched, other, 500), chosenA, chosenB]},
    signals: {repositories: {'synthetic/a': {stars: 37, observed_at: CHECKED + 'T12:00:00Z'}}, errors: []},
    community: {ratings: ratings(a, 3, 5)},
  });
  const rows = csvRecords(exportCSV(data.entries, data, state({sort: 'external', cohort: selected.id})));
  assert.equal(rows[0].name, "'=SUM(1,2)");
  assert.equal(rows[0].github_stars, '37');
  assert.equal(rows[0].ranking_view, 'external');
  assert.equal(rows[0].benchmark_cohort_id, selected.id);
  assert.equal(rows[0].benchmark_metric, selected.metric);
  assert.equal(rows[0].benchmark_unit, 'ops/s');
  assert.equal(rows[0].benchmark_direction, 'higher');
  assert.equal(rows[0].benchmark_value, '81');
  assert.equal(rows[0].benchmark_source_url, chosenA.source_url);
  assert.equal(rows[0].benchmark_observed_at, chosenA.observed_at);
  assert.equal(rows[1].benchmark_value, '0');
  assert.equal(rows[1].benchmark_source_url, chosenB.source_url);
  assert.equal(rows[1].evidence, 'candidate');
  assert.equal(rows[2].benchmark_cohort_id, selected.id);
  for (const field of ['benchmark_value', 'benchmark_source_url', 'benchmark_observed_at']) {
    assert.equal(rows[2][field], '', field);
  }
  for (const row of rows) {
    for (const field of Object.keys(row).filter(key => key.startsWith('community_'))) assert.equal(row[field], '', field);
  }
});

test('CSV cannot borrow a result from the wrong evidence lane or a different cohort', () => {
  const candidate = entry('a');
  const local = cohort('local');
  const external = cohort('external', 'higher', 'external_reported');
  const measured = {...observation(candidate, local, 5), source_url: 'https://example.invalid/local-proof'};
  const data = catalog([candidate], {results: {cohorts: [external, local], observations: [
    observation(candidate, external, 95), measured]}});
  const actual = csvRecords(exportCSV([candidate], data, state({sort: 'measured', cohort: local.id})))[0];
  assert.equal(actual.ranking_view, 'measured');
  assert.equal(actual.benchmark_value, '5');
  assert.equal(actual.benchmark_direction, 'lower');
  assert.equal(actual.benchmark_source_url, measured.source_url);
  for (const view of [state({sort: 'measured', cohort: external.id}),
    state({sort: 'external', cohort: local.id}), state({sort: 'measured', cohort: 'synthetic-absent'})]) {
    const row = csvRecords(exportCSV([candidate], data, view))[0];
    assert.equal(row.ranking_view, view.sort);
    for (const field of Object.keys(row).filter(key => key.startsWith('benchmark_'))) assert.equal(row[field], '', field);
  }
});

test('community CSV exports scoped reports and only eligible adjusted scores, without benchmark contamination', () => {
  const eligible = entry('eligible');
  const insufficient = entry('insufficient');
  const unrated = entry('unrated');
  const outside = entry('outside', {evaluation: {...eligible.evaluation, track: OTHER_TRACK}});
  const group = cohort('local');
  const data = catalog([eligible, insufficient, unrated, outside], {
    community: {ratings: [...ratings(eligible, 3, 5), ...ratings(insufficient, 2, 5), ...ratings(outside, 20, 5)]},
    results: {cohorts: [group], observations: [observation(eligible, group, 1)]},
  });
  const rows = csvRecords(exportCSV(data.entries, data, state({sort: 'community', track: TRACK, cohort: group.id})));
  assert.equal(rows[0].ranking_view, 'community');
  assert.equal(rows[0].community_track, TRACK);
  assert.equal(rows[0].community_report_count, '3');
  assert.equal(rows[0].community_raw_mean, '5');
  assert.equal(rows[0].community_adjusted_score, '3.75');
  assert.equal(rows[0].community_rank_eligible, 'true');
  assert.equal(rows[1].community_report_count, '2');
  assert.equal(rows[1].community_raw_mean, '5');
  assert.equal(rows[1].community_adjusted_score, '');
  assert.equal(rows[1].community_rank_eligible, 'false');
  for (const field of ['community_report_count', 'community_raw_mean', 'community_adjusted_score', 'community_rank_eligible']) {
    assert.equal(rows[2][field], '', field);
    assert.equal(rows[3][field], '', field);
  }
  assert.equal(rows[3].community_track, '');
  for (const row of rows) {
    for (const field of Object.keys(row).filter(key => key.startsWith('benchmark_'))) assert.equal(row[field], '', field);
  }
  const unscoped = csvRecords(exportCSV([eligible], data, state({sort: 'community'})))[0];
  assert.equal(unscoped.community_adjusted_score, '');
  assert.equal(unscoped.community_report_count, '');
});

test('non-scoring CSV views leave benchmark and community scores absent even when evidence exists', () => {
  const candidate = entry('a');
  const group = cohort('local');
  const data = catalog([candidate], {results: {cohorts: [group], observations: [observation(candidate, group, 5)]},
    community: {ratings: ratings(candidate, 3, 5)}});
  for (const sort of ['priority', 'name', 'stars', 'recent']) {
    const row = csvRecords(exportCSV([candidate], data, state({sort, cohort: group.id, track: TRACK})))[0];
    assert.equal(row.ranking_view, sort);
    assert.equal(row.evidence, 'measured');
    for (const field of Object.keys(row).filter(key => /^(benchmark|community)_/.test(key))) assert.equal(row[field], '', field);
  }
});

test('pagination returns the selected slice, clamps stale pages and keeps empty queries well formed', () => {
  const entries = Array.from({length: PAGE_SIZE + 3}, (_, i) => entry(String(i).padStart(3, '0')));
  const data = catalog(entries);
  const page = queryCatalog(data, state({sort: 'name', page: 999}));
  assert.equal(page.total, PAGE_SIZE + 3);
  assert.equal(page.pages, 2);
  assert.equal(page.page, 2);
  assert.deepEqual(page.visible.map(e => e.id), entries.slice(PAGE_SIZE).map(e => e.id));
  const empty = queryCatalog(data, state({q: 'no-synthetic-match', page: 999}));
  assert.equal(empty.total, 0);
  assert.equal(empty.pages, 1);
  assert.equal(empty.page, 1);
  assert.deepEqual(empty.visible, []);
});
