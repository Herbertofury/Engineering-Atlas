import test from 'node:test';
import assert from 'node:assert/strict';
import {collectionJob,versionExperimentJob} from '../apps/atlas-lab/ui/collection-input.mjs';
test('existing single slug and ID remain supported',()=>{assert.deepEqual(collectionJob(' sodium '),{CollectModrinth:{project:'sodium'}});assert.deepEqual(collectionJob('AANobbMI'),{CollectModrinth:{project:'AANobbMI'}});});
test('batch retains exact identity order and case',()=>assert.deepEqual(collectionJob('AANobbMI, gvQqBUqZ,YL57xq9U'),{CollectModrinthBatch:{projects:['AANobbMI','gvQqBUqZ','YL57xq9U']}}));
test('malformed batches are rejected rather than silently repaired',()=>{for(const value of ['','https://localhost/private','AANobbMI,','AANobbMI,,gvQqBUqZ','sodium,lithium','AANobbMI,AANobbMI','AANobbMI,../test?','a'.repeat(513),null])assert.throws(()=>collectionJob(value));});
test('20-ID bound is inclusive and excess entries are not dropped',()=>{const ids=Array.from({length:21},(_,i)=>String(i).padStart(8,'0'));assert.equal(collectionJob(ids.slice(0,20).join(',')).CollectModrinthBatch.projects.length,20);assert.throws(()=>collectionJob(ids.join(',')));});

test('saved-version experiment accepts only one canonical ID',()=>{assert.deepEqual(versionExperimentJob(' g6ju16VJ '),{VersionValidationExperiment:{version:'g6ju16VJ'}});});
test('saved-version input rejects paths, URLs, slugs and batches',()=>{for(const x of [null,42,'sodium','../data','https://example.com/a','g6ju16VJ,Ag5S66CF','abcdefghijk',''])assert.throws(()=>versionExperimentJob(x));});
