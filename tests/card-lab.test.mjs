import test from 'node:test';
import assert from 'node:assert/strict';
import {makeData,completePairs,updateOnePercent,workloadIsVisible} from '../docs/card-lab/lab-core.mjs';
test('dataset retains exact identities and selected metadata bytes',()=>{for(const size of [512,8192,65536]){const rows=makeData(17,size);assert.equal(rows.length,17);assert.equal(rows.at(-1).id,'card-000016');for(const row of rows){assert.equal(new TextEncoder().encode(row.metadata).length,size);assert.ok(row.metadata.startsWith(row.id+'|'));}}});
test('dataset is deterministic',()=>assert.deepEqual(makeData(8,512),makeData(8,512)));
test('invalid or over-budget workloads fail before allocation',()=>{for(const [n,b] of [[0,512],[3001,512],[100,0],[3000,65536],[NaN,512],[1.5,512]])assert.throws(()=>makeData(n,b),RangeError);});
test('partial rounds are excluded from paired summaries',()=>{const p=completePairs([{round:0,strategy:'full_dom'},{round:0,strategy:'containment'},{round:1,strategy:'full_dom'}]);assert.equal(p.length,1);assert.equal(p[0].full_dom.round,0);});
test('duplicate samples cannot silently replace evidence',()=>assert.throws(()=>completePairs([{round:0,strategy:'full_dom'},{round:0,strategy:'full_dom'}])));

test('one-percent update preserves every untouched record and exact metadata length',()=>{const original=makeData(1000,512),next=updateOnePercent(original);assert.equal(next.length,1000);assert.equal(next.filter((r,i)=>r!==original[i]).length,10);for(let i=0;i<next.length;i++){assert.equal(next[i].id,original[i].id);assert.equal(next[i].metadata.length,original[i].metadata.length);}});
test('incremental strategies pair separately',()=>assert.equal(completePairs([{round:0,strategy:'full_dom_update'},{round:0,strategy:'keyed_update'}]).length,1));

test('measurement refuses offscreen, clipped or invalid workload geometry',()=>{assert.ok(workloadIsVisible({top:50,bottom:650,height:600},750));for(const b of [{top:800,bottom:1400,height:600},{top:-100,bottom:500,height:600},{top:0,bottom:0,height:0},{top:NaN,bottom:500,height:500}])assert.equal(workloadIsVisible(b,750),false);});
