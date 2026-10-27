#!/usr/bin/env python3
"""Build deterministic content-addressed browser lab assets; --check never writes."""
import argparse,hashlib,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]/'docs/card-lab'
def outputs():
    core=(ROOT/'lab-core.mjs').read_bytes();core_name=f'lab-core.{hashlib.sha256(core).hexdigest()[:16]}.mjs'
    script=(ROOT/'lab.js').read_text().replace("'./lab-core.mjs'",repr('./'+core_name)).encode()
    script_name=f'lab.{hashlib.sha256(script).hexdigest()[:16]}.js'
    css=(ROOT/'lab.css').read_bytes();css_name=f'lab.{hashlib.sha256(css).hexdigest()[:16]}.css'
    html=(ROOT/'index.template.html').read_text().replace('href="lab.css"',f'href="{css_name}"').replace('src="lab.js"',f'src="{script_name}"').encode()
    files={core_name:core,script_name:script,css_name:css,'index.html':html}
    manifest={'harness':'atlas-card-density-v6-metadata-regions','artifacts':{name:hashlib.sha256(data).hexdigest() for name,data in files.items()}}
    files['build-manifest.json']=(json.dumps(manifest,indent=2)+'\n').encode()
    return files
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--check',action='store_true');args=p.parse_args()
    for name,data in outputs().items():
        path=ROOT/name
        if args.check:
            if not path.exists() or path.read_bytes()!=data:raise SystemExit(f'Stale or missing generated asset: {name}')
        else:path.write_bytes(data)
    print('Card lab asset identities verified' if args.check else 'Card lab versioned assets generated')
