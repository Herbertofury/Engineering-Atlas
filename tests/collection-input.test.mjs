import test from 'node:test';
import assert from 'node:assert/strict';
import {collectionJob} from '../apps/atlas-lab/ui/collection-input.mjs';
test('existing single slug and ID remain supported',()=>{assert.deepEqual(collectionJob(' sodium '),{CollectModrinth:{project:'sodium'}});assert.deepEqual(collectionJob('AANobbMI'),{CollectModrinth:{project:'AANobbMI'}});});
test('batch retains exact identity order and case',()=>assert.deepEqual(collectionJob('AANobbMI, gvQqBUqZ,YL57xq9U'),{CollectModrinthBatch:{projects:['AANobbMI','gvQqBUqZ','YL57xq9U']}}));
test('malformed batches are rejected rather than silently repaired',()=>{for(const value of ['','https://localhost/private','AANobbMI,','AANobbMI,,gvQqBUqZ','sodium,lithium','AANobbMI,AANobbMI','AANobbMI,../test?','a'.repeat(513),null])assert.throws(()=>collectionJob(value));});
test('20-ID bound is inclusive and excess entries are not dropped',()=>{const ids=Array.from({length:21},(_,i)=>String(i).padStart(8,'0'));assert.equal(collectionJob(ids.slice(0,20).join(',')).CollectModrinthBatch.projects.length,20);assert.throws(()=>collectionJob(ids.join(',')));});
