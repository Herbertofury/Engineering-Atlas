'use strict';
import {collectionJob,versionExperimentJob,versionCollectionJob,upstreamReviewJob} from './collection-input.mjs';
const $ = id => document.getElementById(id);
const renderedJobs = new Map();
let emptyNode = null;
const panels = new Set(['overview','collectors','experiments']);
function showPanel(name) {
  if (!panels.has(name)) name='overview';
  document.querySelectorAll('.panel').forEach(p=>p.hidden=p.id!==name);
  document.querySelectorAll('[data-panel]').forEach(b=>b.setAttribute('aria-current',b.dataset.panel===name?'page':'false'));
}
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>{location.hash=b.dataset.panel;}));
window.addEventListener('hashchange',()=>showPanel(location.hash.slice(1)));showPanel(location.hash.slice(1));
function text(tag,value,className) {const e=document.createElement(tag);e.textContent=value;if(className)e.className=className;return e;}
function render(data) {
  $('pending').textContent=(data.counts.queued||0)+(data.counts.running||0);$('completed').textContent=data.counts.succeeded||0;$('failed').textContent=data.counts.failed||0;
  const nodes=[];
  if(!data.jobs.length){if(!emptyNode){emptyNode=text('div','','empty');emptyNode.append(text('strong','Your first experiment starts with a question.'),text('span','Open Collection to retrieve public project metadata.'));}nodes.push(emptyNode);}
  const present = new Set();
  for(const job of data.jobs){present.add(job.id);const signature=job.state+':'+job.attempt;const prior=renderedJobs.get(job.id);if(prior&&prior.signature===signature){nodes.push(prior.node);continue;}const e=text('article','','job');const top=text('div','','job-top');
    const name=job.job.ReviewUpstream?'Upstream review · '+job.job.ReviewUpstream.source:job.job.CollectModrinthVersions?'Modrinth versions · '+job.job.CollectModrinthVersions.versions.length+' records':job.job.CollectModrinth?'Modrinth · '+job.job.CollectModrinth.project:job.job.CollectModrinthBatch?'Modrinth batch · '+job.job.CollectModrinthBatch.projects.length+' projects':job.job.VersionValidationExperiment?'Version validation · '+job.job.VersionValidationExperiment.version:'Identifier deduplication';
    top.append(text('h3',name),text('span',job.state.toUpperCase(),'badge '+job.state));e.append(top,text('p','Job '+job.id+' · attempt '+job.attempt));
    if(job.result?.project){const p=job.result.project;e.append(text('p',p.title+' · '+p.id+' · '+p.versions.length+' version IDs'));}
    if(job.result?.batch){const b=job.result.batch;e.append(text('p',b.projects.length+' retrieved · '+b.missing_ids.length+' missing from response'));if(b.missing_ids.length)e.append(text('p','Partial result. Missing IDs: '+b.missing_ids.join(', '),'error'));}
    if(job.result?.version_collection){const v=job.result.version_collection;e.append(text('p',v.records.length+' versions saved · '+v.missing_ids.length+' missing · complete JSON retained locally'));if(v.missing_ids.length)e.append(text('p','Partial result. Missing version IDs: '+v.missing_ids.join(', '),'error'));}
    if(job.result?.upstream_review){const u=job.result.upstream_review;e.append(text('p',u.repository+' · '+(u.revision||u.state||'No new observation')),text('p',u.comparison?'Comparison: '+u.comparison+' · observed '+u.observed_at_utc+' UTC':(u.error||'No new observation')),text('p','Observation only, not an upgrade or security clearance.'));}
    if(job.result?.experiment){const run=job.result.experiment;const decision=typeof run.decision==='string'?run.decision:Object.keys(run.decision)[0];e.append(text('p',run.evidence.trials.length+' timed pairs · '+run.evidence.stress_cases+' stress cases · '+run.reason),text('p','Gate: '+decision+' · execution is not promotion.'));}
    if(job.result?.error)e.append(text('p',job.result.error,'error'));
    if(job.result){const d=document.createElement('details');d.append(text('summary','Inspect recorded result'),text('pre',JSON.stringify(job.result,null,2)));e.append(d);}
    renderedJobs.set(job.id,{signature,node:e});nodes.push(e);
  }
  for(const id of renderedJobs.keys())if(!present.has(id))renderedJobs.delete(id);
  const container=$('jobs');let cursor=container.firstChild;
  for(const node of nodes){if(node===cursor){cursor=cursor.nextSibling;}else{container.insertBefore(node,cursor);}}
  while(cursor){const next=cursor.nextSibling;cursor.remove();cursor=next;}
}
let fetching=false;
async function refresh(){if(fetching||document.hidden)return;fetching=true;try{const r=await fetch('/api/overview',{cache:'no-store'});if(!r.ok)throw Error('Local engine unavailable ('+r.status+').');const data=await r.json();render(data);$('connection').textContent='Connected · worker '+data.worker_status+' · refreshed '+new Date().toLocaleTimeString();$('connection').classList.remove('error');}catch(e){$('connection').textContent=e.message+' Previous results remain visible.';$('connection').classList.add('error');}finally{fetching=false;}}
$('collect-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;$('collect-status').textContent='Queuing request…';$('collect-status').classList.remove('error');try{const r=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify(collectionJob($('project').value))});if(!r.ok)throw Error('Could not queue request ('+r.status+').');const j=await r.json();$('collect-status').textContent='Job '+j.id+' queued. Follow its result in Overview.';await refresh();}catch(error){$('collect-status').textContent=error.message;$('collect-status').classList.add('error');}finally{button.disabled=false;}});
refresh();setInterval(refresh,2500);document.addEventListener('visibilitychange',refresh);

$('run-experiment').addEventListener('click',async()=>{const button=$('run-experiment');if(button.disabled)return;button.disabled=true;const status=$('experiment-status');status.textContent='Queuing the fixed bounded experiment…';try{const response=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify('DedupExperiment')});if(!response.ok)throw Error('Could not queue experiment ('+response.status+').');const job=await response.json();status.textContent='Job '+job.id+' queued. Review raw evidence and its gate in Overview; no deployment occurs.';await refresh();}catch(error){status.textContent=error.message;}finally{button.disabled=false;}});

$('version-experiment-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('version-experiment-status');status.classList.remove('error');status.textContent='Queuing a fixed comparison of the saved record…';try{const response=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify(versionExperimentJob($('version-experiment-id').value))});if(!response.ok)throw Error('Could not queue saved-record experiment ('+response.status+').');const job=await response.json();status.textContent='Job '+job.id+' queued. This does not fetch data or change the default parser.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

$('version-collect-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('version-collect-status');status.classList.remove('error');status.textContent='Queuing public version metadata…';try{const response=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify(versionCollectionJob($('version-collect-ids').value))});if(!response.ok)throw Error('Could not queue version collection ('+response.status+').');const job=await response.json();status.textContent='Job '+job.id+' queued. Wait for saved records in Overview before comparing a version in Experiments.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});

$('upstream-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;const status=$('upstream-status');status.classList.remove('error');status.textContent='Queuing the fixed public checkpoint…';try{const response=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify(upstreamReviewJob($('upstream-source').value))});if(!response.ok)throw Error('Could not queue upstream review ('+response.status+').');const job=await response.json();status.textContent='Job '+job.id+' queued. Results require review; no download or upgrade will run.';await refresh();}catch(error){status.textContent=error.message;status.classList.add('error');}finally{button.disabled=false;}});
