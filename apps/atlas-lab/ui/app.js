'use strict';
import {collectionJob,versionExperimentJob,versionCollectionJob,upstreamReviewJob,projectArchiveJob,jobLabel,jobIdentity} from './collection-input.mjs';
import {createArchiveSelection,loadSavedArchive} from './archive-view.mjs';
import {createLocalComparison} from './local-compare.mjs';
import {submitJob} from './job-submit.mjs';
const $ = id => document.getElementById(id);
const renderedJobs = new Map();
let emptyNode = null;
let renderedInstance = null;
const panels = new Set(['overview','collectors','experiments']);
function showPanel(name) {
  if (!panels.has(name)) name='overview';
  document.querySelectorAll('.panel').forEach(p=>p.hidden=p.id!==name);
  document.querySelectorAll('[data-panel]').forEach(b=>b.setAttribute('aria-current',b.dataset.panel===name?'page':'false'));
}
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>{location.hash=b.dataset.panel;}));
window.addEventListener('hashchange',()=>showPanel(location.hash.slice(1)));showPanel(location.hash.slice(1));
function text(tag,value,className) {const e=document.createElement(tag);e.textContent=value;if(className)e.className=className;return e;}
// SQL GROUP BY omits zero-count states. Only absence means zero: coercing a
// present value can concatenate strings, hide nulls or display rounded totals.
function overviewMetrics(data) {
  const invalid=()=>{throw new Error('Invalid overview counts; previous results are retained.');};
  if(!data||typeof data!=='object'||Array.isArray(data)||!Array.isArray(data.jobs))invalid();
  const counts=data.counts;
  if(!counts||typeof counts!=='object'||Array.isArray(counts))invalid();
  for(const value of Object.values(counts))if(!Number.isSafeInteger(value)||value<0)invalid();
  const count=state=>Object.hasOwn(counts,state)?counts[state]:0;
  const pending=count('queued')+count('running');
  if(!Number.isSafeInteger(pending))invalid();
  return {pending,completed:count('succeeded'),failed:count('failed')};
}
function render(data,instance=null) {
  // Validate before preparing cards or committing a new engine/cache identity.
  const metrics=overviewMetrics(data);
  if(instance!==null&&!/^[a-f0-9]{32}$/.test(instance))throw new Error('Invalid engine identity; previous results are retained.');
  const reuse=instance!==null&&instance===renderedInstance;
  const identities=data.jobs.map(jobIdentity);
  if(new Set(identities).size!==identities.length)throw new Error('Repeated job identities; previous results are retained.');
  const nodes=[],nextRenderedJobs=new Map();
  if(!data.jobs.length){if(!emptyNode){emptyNode=text('div','','empty');emptyNode.append(text('strong','Your first experiment starts with a question.'),text('span','Open Collection to retrieve public project metadata.'));}nodes.push(emptyNode);}
  for(const [index,job] of data.jobs.entries()){const identity=identities[index];const signature=job.state+':'+job.attempt;const prior=reuse?renderedJobs.get(identity):null;if(prior&&prior.signature===signature){nextRenderedJobs.set(identity,prior);nodes.push(prior.node);continue;}const e=text('article','','job');const top=text('div','','job-top');
    const name=jobLabel(job.job);
    top.append(text('h3',name),text('span',job.state.toUpperCase(),'badge '+job.state));e.append(top,text('p','Job '+identity+' · attempt '+job.attempt));
    if(job.result?.project){const p=job.result.project;e.append(text('p',p.title+' · '+p.id+' · '+p.versions.length+' version IDs'));}
    if(job.result?.batch){const b=job.result.batch;e.append(text('p',b.projects.length+' retrieved · '+b.missing_ids.length+' missing from response'));if(b.missing_ids.length)e.append(text('p','Partial result. Missing IDs: '+b.missing_ids.join(', '),'error'));}
    if(job.result?.project_archive){const a=job.result.project_archive;e.append(text('p','Complete project archive · '+a.canonical_id+' · generation '+a.generation+' · '+a.payload_bytes+' bytes retained locally'));}
    if(job.result?.version_collection){const v=job.result.version_collection;e.append(text('p',v.records.length+' versions saved · '+v.missing_ids.length+' missing · complete JSON retained locally'));if(v.missing_ids.length)e.append(text('p','Partial result. Missing version IDs: '+v.missing_ids.join(', '),'error'));}
    if(job.result?.upstream_review){const u=job.result.upstream_review;e.append(text('p',u.repository+' · '+(u.revision||u.state||'No new observation')),text('p',u.comparison?'Comparison: '+u.comparison+' · observed '+u.observed_at_utc+' UTC':(u.error||'No new observation')),text('p','Observation only, not an upgrade or security clearance.'));}
    if(job.result?.experiment){const run=job.result.experiment;const decision=typeof run.decision==='string'?run.decision:Object.keys(run.decision)[0];e.append(text('p',run.evidence.trials.length+' timed pairs · '+run.evidence.stress_cases+' stress cases · '+run.reason),text('p','Gate: '+decision+' · execution is not promotion.'));}
    if(job.result?.error)e.append(text('p',job.result.error,'error'));
    if(job.result){const d=document.createElement('details');d.append(text('summary','Inspect recorded result'),text('pre',JSON.stringify(job.result,null,2)));e.append(d);}
    nextRenderedJobs.set(identity,{signature,node:e});nodes.push(e);
  }
  // Prepare every card before committing metrics or keyed reuse state.
  // A later malformed record must not poison the next successful refresh.
  const container=$('jobs');let cursor=container.firstChild;
  for(const node of nodes){if(node===cursor){cursor=cursor.nextSibling;}else{container.insertBefore(node,cursor);}}
  while(cursor){const next=cursor.nextSibling;cursor.remove();cursor=next;}
  renderedJobs.clear();for(const [identity,record] of nextRenderedJobs)renderedJobs.set(identity,record);
  renderedInstance=instance;
  $('pending').textContent=metrics.pending;$('completed').textContent=metrics.completed;$('failed').textContent=metrics.failed;
}
let fetching=false;
async function refresh(){if(fetching||document.hidden)return;fetching=true;const controller=new AbortController(),timer=setTimeout(()=>controller.abort(new DOMException('Local overview request timed out','TimeoutError')),15000);try{const r=await fetch('/api/overview',{cache:'no-store',signal:controller.signal});if(!r.ok)throw Error('Local engine unavailable ('+r.status+').');const data=await r.json();render(data,r.headers?.get('x-atlas-engine-instance')??null);$('connection').textContent='Connected · worker '+data.worker_status+' · refreshed '+new Date().toLocaleTimeString();$('connection').classList.remove('error');}catch(e){$('connection').textContent=e.message+' Previous results remain visible.';$('connection').classList.add('error');}finally{clearTimeout(timer);fetching=false;}}
$('collect-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;$('collect-status').textContent='Queuing request…';$('collect-status').classList.remove('error');try{const j=await submitJob(collectionJob($('project').value));$('collect-status').textContent='Job '+j.id+' queued. Follow its result in Overview.';await refresh();}catch(error){$('collect-status').textContent=error.message;$('collect-status').classList.add('error');}finally{button.disabled=false;}});
refresh();setInterval(refresh,2500);document.addEventListener('visibilitychange',refresh);

$('run-experiment').addEventListener('click',async()=>{const button=$('run-experiment');if(button.disabled)return;button.disabled=true;const status=$('experiment-status');status.textContent='Queuing the fixed bounded experiment…';try{const job=await submitJob('DedupExperiment');status.textContent='Job '+job.id+' queued. Review raw evidence and its gate in Overview; no deployment occurs.';await refresh();}catch(error){status.textContent=error.message;}finally{button.disabled=false;}});

$('version-experiment-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('version-experiment-status');status.classList.remove('error');status.textContent='Queuing a fixed comparison of the saved record…';try{const job=await submitJob(versionExperimentJob($('version-experiment-id').value));status.textContent='Job '+job.id+' queued. This does not fetch data or change the default parser.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

$('version-collect-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('version-collect-status');status.classList.remove('error');status.textContent='Queuing public version metadata…';try{const job=await submitJob(versionCollectionJob($('version-collect-ids').value));status.textContent='Job '+job.id+' queued. Wait for saved records in Overview before comparing a version in Experiments.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

$('upstream-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('upstream-status');status.classList.remove('error');status.textContent='Queuing the fixed public checkpoint…';try{const job=await submitJob(upstreamReviewJob($('upstream-source').value));status.textContent='Job '+job.id+' queued. Results require review; no download or upgrade will run.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

$('project-archive-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('project-archive-status');status.classList.remove('error');status.textContent='Queuing complete received project JSON for local storage…';try{const job=await submitJob(projectArchiveJob($('project-archive-id').value));status.textContent='Job '+job.id+' queued. Overview will show a hash/generation receipt; original JSON stays in local snapshots.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

const archiveSelection=createArchiveSelection(({kind,id},options)=>loadSavedArchive(kind,id,options));
function showSavedArchive(){const record=archiveSelection.last;if(!record)return;$('saved-archive-title').textContent=record.kind+' '+record.id+' · generation '+record.generation;$('saved-archive-meta').textContent=record.bytes.byteLength+' bytes · SHA-256 '+record.hash;$('saved-archive-text').textContent=record.text;if(!$('saved-archive-dialog').open)$('saved-archive-dialog').showModal();}
$('saved-archive-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button'),status=$('saved-archive-status');button.disabled=true;$('cancel-archive-load').disabled=false;status.classList.remove('error');status.textContent='Reading and verifying local bytes; previous verified response is retained…';try{const result=await archiveSelection.load({kind:$('saved-archive-kind').value,id:$('saved-archive-id').value.trim()});if(result.status!=='ready')return;$('show-last-archive').disabled=false;status.textContent='Exact saved JSON verified. Provider markup is displayed only as text.';showSavedArchive();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=archiveSelection.pending;$('cancel-archive-load').disabled=!archiveSelection.pending;}});
$('cancel-archive-load').addEventListener('click',()=>{archiveSelection.cancel();$('saved-archive-form').querySelector('button').disabled=false;$('cancel-archive-load').disabled=true;$('saved-archive-status').textContent='Load cancelled. The previous verified response remains available.';});
$('show-last-archive').addEventListener('click',showSavedArchive);
function cancelPendingArchiveViewer(){if(!archiveSelection.pending)return;archiveSelection.cancel();$('saved-archive-form').querySelector('button').disabled=false;$('cancel-archive-load').disabled=true;$('saved-archive-status').textContent='Viewer closed; pending load cancelled. The previous verified response remains available.';}
$('close-saved-archive').addEventListener('click',()=>{cancelPendingArchiveViewer();$('saved-archive-dialog').close();});
$('saved-archive-dialog').addEventListener('cancel',cancelPendingArchiveViewer);
$('saved-archive-dialog').addEventListener('close',cancelPendingArchiveViewer);
$('download-saved-archive').addEventListener('click',()=>{const record=archiveSelection.last;if(!record)return;const url=URL.createObjectURL(new Blob([record.bytes],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=(record.kind==='upstream'?'github-upstream':'modrinth-'+record.kind)+'-'+record.id+'-generation-'+record.generation+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});

$('saved-archive-kind').addEventListener('change',()=>{archiveSelection.cancel();$('saved-archive-form').querySelector('button').disabled=false;$('cancel-archive-load').disabled=true;$('saved-archive-status').textContent='Archive type changed. The previous verified response remains available with its original type.';});

if(typeof createLocalComparison==='function'){
// Explicitly compare a user-selected local Modrinth response against a dated public Atlas card.
// The selected bytes stay in this browser; the only network read is the same-origin fixture asset.
const galleryComparison=createLocalComparison();
let galleryRequest=0,galleryCard=null,galleryPending=false;
const galleryStatus=$('gallery-compare-status');
function setGalleryStatus(state,message){galleryStatus.dataset.state=state;galleryStatus.textContent=message;galleryStatus.classList.toggle('error',state==='error');}
function showGalleryResult(record,prefix=''){
 const result=record.result,label=result.status[0].toUpperCase()+result.status.slice(1);
 const detail=result.reason||('Source '+result.actual_count+' URL pairs; card '+result.snapshot_count+'.');
 setGalleryStatus(result.status,prefix+label+': '+detail+' Input SHA-256 '+record.sha256+'. URL-pair comparison only; this does not verify image decoding, playback, freshness or complete contents.');
}
async function loadGalleryReference(){
 const target=$('gallery-reference-card'),run=$('gallery-compare-run');
 try{
  const response=await fetch('/gallery-fixtures.json',{cache:'no-store',redirect:'error',credentials:'same-origin'});
  if(!response.ok||new URL(response.url).origin!==location.origin)throw Error('The local public card fixture is unavailable.');
  const fixture=await response.json();
  if(fixture?.schema_version!==1||fixture.access!=='public-only'||fixture.private_data_included!==false||!Array.isArray(fixture.cards))throw Error('The local public card fixture failed validation.');
  galleryCard=fixture.cards.find(card=>card?.id==='modrinth:AANobbMI'&&card.provider==='Modrinth');
  if(!galleryCard||typeof galleryCard.title!=='string'||!Array.isArray(galleryCard.gallery))throw Error('The existing Modrinth card is unavailable.');
  target.textContent='Existing public card: '+galleryCard.title+' ('+galleryCard.id+'), '+galleryCard.gallery.length+' saved gallery entries. Dated Atlas snapshot; no provider request.';
  run.disabled=!$('gallery-compare-file').files?.length;
  setGalleryStatus('ready','Public Atlas card ready. Choose a saved JSON archive to compare.');
 }catch(error){target.textContent=error.message;target.classList.add('error');setGalleryStatus('error',error.message);run.disabled=true;}
}
function cancelGalleryComparison(message){
 galleryRequest++;galleryComparison.cancel();galleryPending=false;$('gallery-compare-cancel').disabled=true;
 $('gallery-compare-run').disabled=!galleryCard||!$('gallery-compare-file').files?.length;
 setGalleryStatus(galleryComparison.last?'ready':'idle',message+(galleryComparison.last?' The last successful comparison remains available.':''));
}
$('gallery-compare-file').addEventListener('change',()=>{
 if(galleryPending)cancelGalleryComparison('File selection changed; pending comparison cancelled.');
 else setGalleryStatus('idle',galleryComparison.last?'File selection changed. Run a new comparison; the last successful result remains available.':'File selected. Run the comparison when ready.');
 $('gallery-compare-run').disabled=!galleryCard||!$('gallery-compare-file').files?.length;
});
$('gallery-compare-form').addEventListener('submit',async event=>{
 event.preventDefault();const file=$('gallery-compare-file').files?.[0];if(!file||!galleryCard)return;
 const own=++galleryRequest;galleryPending=true;$('gallery-compare-run').disabled=true;$('gallery-compare-cancel').disabled=false;
 setGalleryStatus('pending','Reading the selected file locally; any previous successful comparison is retained.');
 try{const result=await galleryComparison.load(file,galleryCard);if(own!==galleryRequest||result.status!=='ready')return;showGalleryResult(result.record);$('gallery-compare-last').disabled=false;}
 catch(error){if(own===galleryRequest)setGalleryStatus('error',error.message+(galleryComparison.last?' The last successful comparison remains available.':''));}
 finally{if(own===galleryRequest){galleryPending=false;$('gallery-compare-cancel').disabled=true;$('gallery-compare-run').disabled=!galleryCard||!$('gallery-compare-file').files?.length;}}
});
$('gallery-compare-cancel').addEventListener('click',()=>cancelGalleryComparison('Comparison cancelled.'));
$('gallery-compare-last').addEventListener('click',()=>{if(galleryPending)cancelGalleryComparison('Pending comparison cancelled.');if(galleryComparison.last){$('gallery-compare-last').disabled=false;showGalleryResult(galleryComparison.last,'Last successful result. ');}});
loadGalleryReference();
}