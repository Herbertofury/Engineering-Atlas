import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../docs/card-receiver-lab/receiver-worker.mjs',import.meta.url),'utf8');
test('actual worker handler returns complete result and retains request identity',async()=>{
 const messages=[],payload={records:[{all:'retained'}],dataset:{sha256:'fixture'}};
 const context={self:{postMessage:x=>messages.push(x)},performance:{now:()=>1},verifyPrepared:async x=>x,verifyPreparedBounded:async x=>x,Number,Error};
 vm.runInNewContext(source.replace(/^import .*;\n/,''),context);
 for(const lane of ['whole','bounded'])await context.self.onmessage({data:{id:3,lane,prepared:payload,count:1,bytes:64}});
 assert.equal(messages.length,2);for(const m of messages){assert.equal(m.id,3);assert.equal(m.ok,true);assert.equal(m.result,payload);}
});
test('actual worker handler refuses unknown lanes and reports validator failure without fallback',async()=>{
 const messages=[];let calls=0;const context={self:{postMessage:x=>messages.push(x)},performance:{now:()=>1},verifyPrepared:async()=>{calls++;throw Error('retained failure');},verifyPreparedBounded:async()=>{calls++;throw Error('retained failure');},Number,Error};
 vm.runInNewContext(source.replace(/^import .*;\n/,''),context);
 await context.self.onmessage({data:{id:1,lane:'unchecked'}});assert.equal(calls,0);assert.equal(messages[0].ok,false);
 await context.self.onmessage({data:{id:2,lane:'bounded'}});assert.equal(calls,1);assert.equal(messages[1].ok,false);assert.equal(messages[1].error,'retained failure');assert.equal(messages[1].id,2);
});
