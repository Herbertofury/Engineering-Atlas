# Foreground measurement guard

2026-10-28. Actual prior card harness: [baseline source](baseline-lab.js), deployed v9 at commit `1b9fb1656c837d4fa2e0dc0d36ad78b396b9f6ce`.

The foreground-controlled event-log rerun found an important measurement gap: a document can report visible even when its browser window is behind another native window. The unchanged renderer produced approximately 600 ms scroll-frame waits in earlier limited runs and approximately 16–17 ms after explicit native foregrounding. This supports an environment-confounding hypothesis, not unique causal proof or an app speedup.

The actual card harness now requires document focus before preparation and checks it at measurement boundaries. A window blur is latched for the whole run, including a transient blur followed by refocus before the next frame. A new explicit run clears that latch. Missing focus capability fails closed. Failed/partial evidence remains downloadable, and prior completed evidence stays separate. The guard does not steal focus, alter browser flags, truncate data or silently restart work. Existing visibility and full-output checks remain.

[Six focused tests](../../tests/focus-guard.test.mjs) reproduce visibility-only acceptance of an unfocused document, transient and polling-detected loss, missing capability, independent new runs and actual harness wiring. They use generated document/event fixtures, not native OS events. Full local regression: 112 Node checks; both content-addressed site builders pass. Live native focus-loss/recovery remains to be verified against the deployed v10 build.

This repairs experiment acceptance, not UI throughput. Document focus is necessary for this controlled protocol, not a guarantee of physical paint, foreground scheduling, accurate INP, peak memory or a universally stable device. Existing raw results remain intact; none are retroactively relabeled as successful focus-controlled tests. No other project or production media renderer is changed.

Primary source FOCUS01: [Document.hasFocus](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus), checked 2026-10-28. Focus and active-element identity are distinct; a nonforeground popup may retain an active element without focus. Source facts and this experiment's stricter acceptance policy are separate.

## Native counterexample and second repair

The [actual v10 browser receipt](focus-only-native-mismatch.json) completed six samples and reported focused throughout, although desktop screenshots showed a different tab and then Terminal in front. Median scroll-frame wait was approximately 1,009.9 ms. The failed native acceptance is retained: focus API state alone did not establish native foreground state in this automated environment. No cause such as focus emulation is asserted without evidence, and no browser flags were changed.

The v11 harness supplements focus/visibility with eight empty-frame scheduling observations before preparation and after each sample, outside the render timer. Four or more waits of at least 200 ms reject this controlled performance run. This deliberately conservative protocol is not a universal display-refresh threshold or a performance optimization. It retains all raw calibration gaps, measured samples and previous completed evidence. A logical eight-second timer cancels a pending frame; page/OS suspension can delay timers, so this is not hard real-time isolation. User Stop and lost focus/visibility also terminate calibration without silent retry.

Five additional fixture tests cover normal cadence, the observed slow-cadence pattern, partial timeout cleanup, interruption and invalid clocks. Full Node regression: 117 tests. [Generated focus fixtures](fixture-results.json) remain separate from the native counterexample. Live v11 rejection, foreground recovery and last-good retention still require verification.

Primary source FRAME01: [requestAnimationFrame scheduling](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame), checked 2026-10-28. Callback cadence is ordinarily related to display refresh and may pause for background content; this does not make double-rAF a physical-paint measurement.
