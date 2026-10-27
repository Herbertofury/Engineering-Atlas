import importlib.util,json,subprocess,tempfile,unittest
from pathlib import Path
p=Path(__file__).resolve().parents[1]/'experiments/dependency-audit-lab/run_pinned_audit.py';spec=importlib.util.spec_from_file_location('pinned_audit',p);audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
class PinnedAuditTests(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.addCleanup(self.temp.cleanup);self.root=Path(self.temp.name);self.db=self.root/'db';(self.db/'crates/example').mkdir(parents=True);(self.db/'crates/example/A.md').write_text('fixture only');self.head='a'*40;self.dirty='';self.audit_calls=0
  self.tool=self.root/'mock-tool-not-executed';self.tool.write_bytes(b'fixture identity only');self.tool_hash=audit.digest(self.tool.read_bytes())
  for path in audit.LOCKS:q=self.root/path;q.parent.mkdir(parents=True,exist_ok=True);q.write_text('fixture lock bytes only')
 def runner(self,command,**kwargs):
  if command[0]=='git':
   text=self.head+'\n' if 'rev-parse' in command else self.dirty if 'status' in command else 'crates/example/A.md\n';return subprocess.CompletedProcess(command,0,text,'')
  self.audit_calls+=1
  result={'settings':{'ignore':[],'target_arch':[],'target_os':[],'severity':None,'informational_warnings':['unmaintained','unsound','notice']},'vulnerabilities':{'count':0},'warnings':{}}
  return subprocess.CompletedProcess(command,0,json.dumps(result),'')
 def test_dirty_and_mismatched_database_refused_before_tool(self):
  self.dirty='?? crates/example/old.md\n'
  with self.assertRaisesRegex(ValueError,'not clean'):audit.validate_database(self.db,self.head,self.runner)
  self.dirty=''
  with self.assertRaisesRegex(ValueError,'mismatch'):audit.validate_database(self.db,'b'*40,self.runner)
  self.assertEqual(self.audit_calls,0)
 def test_ignored_extra_advisory_file_is_also_rejected(self):
  (self.db/'crates/example/hidden.md').write_text('fixture only')
  with self.assertRaisesRegex(ValueError,'inventory'):audit.validate_database(self.db,self.head,self.runner)
 def test_tool_pin_and_frozen_inputs(self):
  with self.assertRaisesRegex(ValueError,'identity'):audit.validate_tool(self.tool,'b'*64)
  out=self.root/'run';receipt=audit.run(self.root,self.db,self.head,self.tool,self.tool_hash,out,self.runner)
  self.assertTrue(receipt['completed']);self.assertTrue(receipt['all_clear']);self.assertEqual(self.audit_calls,3)
  for lock in receipt['locks']:self.assertEqual(audit.digest((out/lock['input_file']).read_bytes()),lock['sha256'])
  with self.assertRaises(FileExistsError):audit.run(self.root,self.db,self.head,self.tool,self.tool_hash,out,self.runner)
 def test_filtered_result_rejected_and_raw_evidence_retained(self):
  original=self.runner
  def filtered(command,**kwargs):
   p=original(command,**kwargs)
   if command[0]!='git':j=json.loads(p.stdout);j['settings']['ignore']=['fixture-advisory'];p.stdout=json.dumps(j)
   return p
  out=self.root/'filtered'
  with self.assertRaisesRegex(ValueError,'filtering'):audit.run(self.root,self.db,self.head,self.tool,self.tool_hash,out,filtered)
  self.assertTrue((out/'audit-0.json').exists());self.assertFalse(json.loads((out/'receipt.json').read_text())['completed'])
 def test_known_match_is_a_completed_nonclear_audit_not_silently_green(self):
  original=self.runner
  def finding(command,**kwargs):
   p=original(command,**kwargs)
   if command[0]!='git':j=json.loads(p.stdout);j['vulnerabilities']['count']=1;p.stdout=json.dumps(j);p.returncode=1
   return p
  receipt=audit.run(self.root,self.db,self.head,self.tool,self.tool_hash,self.root/'finding',finding)
  self.assertTrue(receipt['completed']);self.assertFalse(receipt['all_clear']);self.assertEqual(len(receipt['runs']),3)

 def test_timeout_retains_partial_output_and_incomplete_receipt(self):
  original=self.runner
  def timeout(command,**kwargs):
   if command[0]=='git':return original(command,**kwargs)
   raise subprocess.TimeoutExpired(command,60,output=b'fixture partial output',stderr=b'fixture timeout')
  out=self.root/'timeout'
  with self.assertRaises(subprocess.TimeoutExpired):audit.run(self.root,self.db,self.head,self.tool,self.tool_hash,out,timeout)
  self.assertEqual((out/'audit-0.partial.txt').read_text(),'fixture partial output');self.assertFalse(json.loads((out/'receipt.json').read_text())['completed'])
 def test_disabled_informational_checks_are_not_accepted(self):
  self.assertFalse(audit.unfiltered_result({'settings':{'ignore':[],'target_arch':[],'target_os':[],'severity':None,'informational_warnings':[]}}))
