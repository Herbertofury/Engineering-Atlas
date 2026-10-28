# Foreground measurement guard

2026-10-28. Actual prior card harness: [baseline source](baseline-lab.js), deployed v9 at commit `1b9fb1656c837d4fa2e0dc0d36ad78b396b9f6ce`.

The foreground-controlled event-log rerun found an important measurement gap: a document can report visible even when its browser window is behind another native window. The unchanged renderer produced approximately 600 ms scroll-frame waits in earlier limited runs and approximately 16–17 ms after explicit native foregrounding. This supports an environment-confounding hypothesis, not unique causal proof or an app speedup.

The actual card harness now requires document focus before preparation and checks it at measurement boundaries. A window blur is latched for the whole run, including a transient blur followed by refocus before the next frame. A new explicit run clears that latch. Missing focus capability fails closed. Failed/partial evidence remains downloadable, and prior completed evidence stays separate. The guard does not steal focus, alter browser flags, truncate data or silently restart work. Existing visibility and full-output checks remain.

[Six focused tests](../../tests/focus-guard.test.mjs) reproduce visibility-only acceptance of an unfocused document, transient and polling-detected loss, missing capability, independent new runs and actual harness wiring. They use generated document/event fixtures, not native OS events. Full local regression: 112 Node checks; both content-addressed site builders pass. Live native focus-loss/recovery remains to be verified against the deployed v10 build.

This repairs experiment acceptance, not UI throughput. Document focus is necessary for this controlled protocol, not a guarantee of physical paint, foreground scheduling, accurate INP, peak memory or a universally stable device. Existing raw results remain intact; none are retroactively relabeled as successful focus-controlled tests. No other project or production media renderer is changed.

Primary source FOCUS01: [Document.hasFocus](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus), checked 2026-10-28. Focus and active-element identity are distinct; a nonforeground popup may retain an active element without focus. Source facts and this experiment's stricter acceptance policy are separate.
