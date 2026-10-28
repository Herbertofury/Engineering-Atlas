import hashlib,importlib.util,json,unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('receiver_build',ROOT/'scripts/build_receiver_lab.py');build=importlib.util.module_from_spec(spec);spec.loader.exec_module(build)
class ReceiverAssets(unittest.TestCase):
 def test_exact_assets_and_manifest(self):
  expected=build.outputs()
  for name,data in expected.items():self.assertEqual((build.OUT/name).read_bytes(),data)
  manifest=json.loads(expected['build-manifest.json'])
  for name,digest in manifest['artifacts'].items():self.assertEqual(hashlib.sha256(expected[name]).hexdigest(),digest)
 def test_worker_and_main_share_verified_candidate(self):
  files=build.outputs();worker=next(v for k,v in files.items() if k.startswith('receiver-worker.'));main=next(v for k,v in files.items() if k.startswith('receiver.') and k.endswith('.js'))
  verifier=next(k for k in files if k.startswith('verified-receiver.'))
  self.assertIn(verifier.encode(),worker);self.assertIn(verifier.encode(),main)
  self.assertIn(b'no silent fallback',main);self.assertIn(b'w.terminate()',main)
