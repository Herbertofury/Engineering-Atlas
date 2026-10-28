"""Build isolated browser receiver assets from the tested experiment sources."""
import hashlib,json,argparse
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'docs/card-receiver-lab'
def outputs():
    names={};files={}
    paths=[ROOT/'docs/card-lab/lab-core.mjs',ROOT/'experiments/card-receiver-lab/baseline.mjs',ROOT/'experiments/card-receiver-lab/bounded-encoding.mjs',ROOT/'experiments/card-receiver-lab/verified-receiver.mjs',ROOT/'experiments/card-receiver-lab/receipt-protocol.mjs',OUT/'receiver-worker.mjs',OUT/'receiver.js']
    for path in paths:
        text=path.read_text().replace('../../docs/card-lab/lab-core.mjs','./lab-core.mjs')
        for old,new in names.items():text=text.replace("'./"+old+"'","'./"+new+"'")
        data=text.encode();name=path.stem+'.'+hashlib.sha256(data).hexdigest()[:16]+path.suffix;names[path.name]=name;files[name]=data
    files['index.html']=(OUT/'index.template.html').read_text().replace('src="receiver.js"','src="'+names['receiver.js']+'"').encode()
    files['build-manifest.json']=(json.dumps({'harness':'atlas-complete-receiver-v5-input-receipt','artifacts':{name:hashlib.sha256(data).hexdigest() for name,data in files.items()}},indent=2)+'\n').encode()
    return files
if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--check',action='store_true');args=parser.parse_args()
    for name,data in outputs().items():
        p=OUT/name
        if args.check:
            if not p.exists() or p.read_bytes()!=data:raise SystemExit('Asset mismatch: '+name)
        else:p.write_bytes(data)
    print('Receiver asset identities verified' if args.check else 'Receiver assets generated')
