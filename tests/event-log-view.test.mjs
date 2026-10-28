import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {formatEventChunk,createEventLogView} from '../docs/media-lab/event-log-view.mjs';
function fakeElement(){const children=[];return {ownerDocument:{createTextNode:data=>({data})},replaceChildren(...nodes){children.splice(0,children.length,...nodes);},insertBefore(node,before){const i=children.indexOf(before);assert.notEqual(i,-1);children.splice(i,0,node);},get textContent(){return children.map(n=>n.data).join('');},get nodes(){return children.length;}};}
test('every retained public event prefix is byte-identical to full-history JSON',()=>{
 const events=JSON.parse(readFileSync(new URL('../experiments/youtube-identity-lab/live-browser-receipt.json',import.meta.url))).events;
 const e=fakeElement(),view=createEventLogView(e);assert.equal(e.textContent,'[]');
 events.forEach((event,i)=>{view.append(event);assert.equal(e.textContent,JSON.stringify(events.slice(0,i+1),null,2));});
 assert.equal(view.count,events.length);assert.equal(e.nodes,events.length+2);
});
test('nested, escaped, Unicode and markup-like text retains exact JSON as text nodes',()=>{
 const rows=[{text:'</pre><script>not executable</script>\n☃😀',nested:{future:[null,false,0,'\\"']}},null,[],{optional:undefined}];
 const e=fakeElement(),v=createEventLogView(e);rows.forEach((r,i)=>{v.append(r);assert.equal(e.textContent,JSON.stringify(rows.slice(0,i+1),null,2));});
});
test('failed serialization leaves the existing log and index intact',()=>{
 const e=fakeElement(),v=createEventLogView(e);v.append({type:'valid'});const before=e.textContent;const circular={};circular.self=circular;
 for(const bad of [undefined,1n,circular]){assert.throws(()=>v.append(bad));assert.equal(e.textContent,before);assert.equal(v.count,1);}
 v.append({type:'next'});assert.equal(e.textContent,JSON.stringify([{type:'valid'},{type:'next'}],null,2));
});
test('invalid indexes fail explicitly',()=>{for(const n of [-1,NaN,0.5,Infinity])assert.throws(()=>formatEventChunk({},n));});
