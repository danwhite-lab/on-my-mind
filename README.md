# Things on My Mind

A small, dependency-free personal thinking log. Start with no topics, create your own, and add dated thoughts over time.

## Run

Open `index.html` in a modern browser, or serve this directory at a consistent local address:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173. No installation or build is needed. The same file can be served by any static web host.

## Data

Topics and thoughts are stored only in this browser's localStorage under `things-on-my-mind.v1`. They persist across reloads and browser restarts. Use the same browser profile and URL; different origins have separate storage. Clearing site data removes the log. Private browsing may discard data when closed. No accounts, analytics, remote storage, or network dependencies.

## Behavior

- Create, rename, and delete topics.
- Add, edit, and delete thoughts, with confirmation before deletion.
- New thoughts receive the current date automatically; edits retain the original date.
- Cards show the most recently updated thought and its update date.
- Histories show newest-created thoughts first.
- Empty or whitespace-only input is rejected.
- Storage failures are reported without silently overwriting unreadable data.

## Verification

Manually checked topic and thought creation, editing, deletion, blank initial state, narrow-screen layout, and persistence after reload.
