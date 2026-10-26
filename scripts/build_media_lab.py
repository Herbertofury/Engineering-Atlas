#!/usr/bin/env python3
"""Content-addressed public-media lab, with pinned third-party bundle integrity."""
import argparse,base64,hashlib,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]/'docs/media-lab'
def outputs():
 core=(ROOT/'media-core.mjs').read_bytes();core_name='media-core.'+hashlib.sha256(core).hexdigest()[:16]+'.mjs'
 fixture=(ROOT/'public-fixtures.json').read_bytes();fixture_name='public-fixtures.'+hashlib.sha256(fixture).hexdigest()[:16]+'.json'
 script=(ROOT/'media.js').read_text().replace("'./media-core.mjs'",repr('./'+core_name)).replace("'./public-fixtures.json'",repr('./'+fixture_name)).encode();script_name='media.'+hashlib.sha256(script).hexdigest()[:16]+'.js'
 css=(ROOT/'media.css').read_bytes();css_name='media.'+hashlib.sha256(css).hexdigest()[:16]+'.css'
 vendor=(ROOT/'vendor/hls-1.7.3.min.js').read_bytes();provenance=json.loads((ROOT/'vendor/provenance.json').read_text())
 if hashlib.sha256(vendor).hexdigest()!=provenance['bundle_sha256']:raise ValueError('Pinned player bundle changed')
 sri='sha384-'+base64.b64encode(hashlib.sha384(vendor).digest()).decode()
 script=script.replace(b'__HLS_SRI__',sri.encode());script_name='media.'+hashlib.sha256(script).hexdigest()[:16]+'.js'
 html=(ROOT/'index.template.html').read_text().replace('href="media.css"',f'href="{css_name}"').replace('src="media.js"',f'src="{script_name}"').replace('src="vendor/hls-1.7.3.min.js"',f'src="vendor/hls-1.7.3.min.js" integrity="{sri}" crossorigin="anonymous"').encode()
 files={core_name:core,fixture_name:fixture,script_name:script,css_name:css,'index.html':html}
 manifest={'harness':'atlas-real-media-v3-provider-binding','artifacts':{n:hashlib.sha256(b).hexdigest() for n,b in files.items()},'vendor_sha256':provenance['bundle_sha256'],'vendor_sri':sri}
 files['build-manifest.json']=(json.dumps(manifest,indent=2)+'\n').encode();return files
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--check',action='store_true');args=p.parse_args()
 for name,data in outputs().items():
  path=ROOT/name
  if args.check:
   if not path.exists() or path.read_bytes()!=data:raise SystemExit('Stale media asset: '+name)
  else:path.write_bytes(data)
 print('Media asset identities verified' if args.check else 'Media assets generated')
