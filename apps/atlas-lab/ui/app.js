'use strict';
const $ = id => document.getElementById(id);
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
  if(!data.jobs.length){const e=text('div','','empty');e.append(text('strong','Your first experiment starts with a question.'),text('span','Open Collection to retrieve public project metadata.'));nodes.push(e);}
  for(const job of data.jobs){const e=text('article','','job');const top=text('div','','job-top');
    const name=job.job.CollectModrinth?'Modrinth · '+job.job.CollectModrinth.project:'Identifier deduplication';
    top.append(text('h3',name),text('span',job.state.toUpperCase(),'badge '+job.state));e.append(top,text('p','Job '+job.id+' · attempt '+job.attempt));
    if(job.result?.project){const p=job.result.project;e.append(text('p',p.title+' · '+p.id+' · '+p.versions.length+' version IDs'));}
    if(job.result?.error)e.append(text('p',job.result.error,'error'));
    if(job.result){const d=document.createElement('details');d.append(text('summary','Inspect recorded result'),text('pre',JSON.stringify(job.result,null,2)));e.append(d);}
    nodes.push(e);
  }
  $('jobs').replaceChildren(...nodes);
}
let fetching=false;
async function refresh(){if(fetching||document.hidden)return;fetching=true;try{const r=await fetch('/api/overview',{cache:'no-store'});if(!r.ok)throw Error('Local engine unavailable ('+r.status+').');const data=await r.json();render(data);$('connection').textContent='Connected · worker '+data.worker_status+' · refreshed '+new Date().toLocaleTimeString();$('connection').classList.remove('error');}catch(e){$('connection').textContent=e.message+' Previous results remain visible.';$('connection').classList.add('error');}finally{fetching=false;}}
$('collect-form').addEventListener('submit',async e=>{e.preventDefault();const button=e.currentTarget.querySelector('button');if(button.disabled)return;button.disabled=true;$('collect-status').textContent='Queuing request…';$('collect-status').classList.remove('error');try{const r=await fetch('/api/jobs',{method:'POST',headers:{'Content-Type':'application/json','X-Atlas-Request':'local-ui'},body:JSON.stringify({CollectModrinth:{project:$('project').value.trim()}})});if(!r.ok)throw Error('Could not queue request ('+r.status+').');const j=await r.json();$('collect-status').textContent='Job '+j.id+' queued. Follow its result in Overview.';await refresh();}catch(error){$('collect-status').textContent=error.message;$('collect-status').classList.add('error');}finally{button.disabled=false;}});
refresh();setInterval(refresh,2500);document.addEventListener('visibilitychange',refresh);
