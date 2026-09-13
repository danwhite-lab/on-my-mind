# On My Mind

A personal thinking log with topic cards, a visual map, and optional Supabase sync.

## Run

Serve this folder with `python3 -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/.

## Install

Host the complete folder on HTTPS for phone installation. On iPhone, open that HTTPS address in Safari and use Share → Add to Home Screen. The localhost address on a computer is not reachable from a phone. Manifest icons (192 and 512 pixels) and an Apple touch icon (180 pixels) are included. The app works offline after its first successful online load. HTTPS or localhost is required for service workers.

## Supabase sync

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. In Supabase Auth → Email Templates → Magic Link, replace the link with the contents of `supabase/email-otp-template.html`. This sends a code that is entered in the app, rather than a browser link.
3. Copy `.env.example` to `.env` and supply the project URL and publishable/anon key.
4. Build with `NEXT_PUBLIC_SUPABASE_URL=... NEXT_PUBLIC_SUPABASE_ANON_KEY=... pnpm run build`.
5. Deploy the complete folder, including the generated `supabase-client.js` file.

For Vercel, add both values as Production and Preview environment variables in the project settings. The included `vercel.json` builds the static `public` folder automatically.

The app uses an emailed one-time code for passwordless sign-in, verified in the same app screen. A first sign-in merges local records with cloud records, uploads the merged copy, and thereafter saves to the local cache and syncs the same changes to the authenticated user's account. Deletions are queued too. If offline, changes remain on the device and retry when it reconnects. The included SQL enables Supabase Realtime so open devices refresh after each other’s changes.

Only Supabase's publishable/anon key belongs in `.env`; never use a service-role key in the app. The provided Row Level Security policies restrict rows to their authenticated owner.

## Local cache

Existing data is preserved under `things-on-my-mind.v1`. Before sign-in, it is device-only. After sign-in, it is cached locally for offline use and synced to the account. Clearing browser data, deleting an app, or private browsing can still remove the cache, so keep a downloaded backup as a separate copy.

## Verification

Checked topic-to-thought map navigation, mobile map layout, retained data after reload, and editing and reloading with the local server stopped. Removed only generated test entries. iOS installation requires an HTTPS deployment and has not been tested on a physical iPhone.
