# On My Mind

A dependency-free personal thinking log, with topic cards and a visual map of each topic and its dated thoughts.

## Run

Serve this folder with `python3 -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/.

## Install

Host the complete folder on HTTPS for phone installation. On iPhone, open that HTTPS address in Safari and use Share → Add to Home Screen. The localhost address on a computer is not reachable from a phone. Manifest icons (192 and 512 pixels) and an Apple touch icon (180 pixels) are included. The app works offline after its first successful online load. HTTPS or localhost is required for service workers.

## Storage

Existing data is preserved under `things-on-my-mind.v1`. Every successful save writes to localStorage; reopening, switching views, offline use, and app updates do not clear it. Concurrent-window changes are detected before saving. Persistent browser storage is requested when supported, but browsers can decline. Data is local to the browser profile and origin, not synced between devices or domains. Clearing site data, deleting an app, or private browsing can remove it. Download backup saves a separate JSON copy; keep it somewhere safe. There is no in-app restore yet.

## Verification

Checked topic-to-thought map navigation, mobile map layout, retained data after reload, and editing and reloading with the local server stopped. Removed only generated test entries. iOS installation requires an HTTPS deployment and has not been tested on a physical iPhone.
