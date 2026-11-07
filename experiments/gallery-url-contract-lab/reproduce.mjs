import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const ref=process.argv[2],output=process.argv[3];
const read=path=>ref?execFileSync('git',['show',ref+':'+path],{encoding:'utf8'}):readFileSync(new URL('../../'+path,import.meta.url),'utf8');
const comparator=read('docs/media-lab/compare.mjs'),loader=read('docs/media-lab/local-compare.mjs');
const moduleUrl=source=>'data:text/javascript;base64,'+Buffer.from(source).toString('base64');
const {createLocalComparison,comparisonReceipt}=await import(moduleUrl(loader.replace("'./compare.mjs'",JSON.stringify(moduleUrl(comparator)))));
const projectText=read('tests/fixtures/modrinth-sodium-public-excerpt-20261105.json');
const snapshotText=read('docs/media-lab/public-fixtures.json');
const card=JSON.parse(snapshotText).cards.find(c=>c.id==='modrinth:AANobbMI');
const mutations=[
 ['source preview array',(p)=>{p.gallery[0].url=[p.gallery[0].url];}],
 ['source original nested array',(p)=>{p.gallery[0].raw_url=[[p.gallery[0].raw_url]];}],
 ['card preview array',(_p,c)=>{c.gallery[0].preview=[c.gallery[0].preview];}],
 ['card original nested array',(_p,c)=>{c.gallery[0].original=[[c.gallery[0].original]];}],
 ['all source URLs wrapped',(p)=>{for(const item of p.gallery){item.url=[item.url];item.raw_url=[[item.raw_url]];}}],
];
const records=[];
for(const [name,change] of mutations){
 const project=JSON.parse(projectText),snapshot=structuredClone(card);change(project,snapshot);
 const bytes=new TextEncoder().encode(JSON.stringify(project)),file={size:bytes.byteLength,arrayBuffer:async()=>bytes.slice().buffer};
 // Round-trip snapshot too: no custom prototypes, getters or non-JSON values.
 const result=await createLocalComparison().load(file,JSON.parse(JSON.stringify(snapshot)));
 const receipt=comparisonReceipt(result.record);
 records.push({case:name,load_status:result.status,comparison_status:result.record.result.status,receipt_status:receipt.result.status,input_sha256:result.record.sha256,input_bytes:bytes.byteLength,correct_unknown:result.record.result.status==='unknown'&&receipt.result.status==='unknown'});
}
const sha256=text=>createHash('sha256').update(text).digest('hex');
const result={kind:'synthetic-malformations-of-existing-public-source-derived-excerpt',source_revision:ref||'working-tree',comparator_sha256:sha256(comparator),loader_sha256:sha256(loader),excerpt_sha256:sha256(projectText),snapshot_fixture_sha256:sha256(snapshotText),node:process.version,network_used:false,native_browser:false,real_provider_response:false,cases:records};
if(output)writeFileSync(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
