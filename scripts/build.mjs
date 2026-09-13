import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const clientSource = await readFile('src/supabase-client.js', 'utf8');
const client = clientSource
  .replace('__NEXT_PUBLIC_SUPABASE_URL__', JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''))
  .replace('__NEXT_PUBLIC_SUPABASE_ANON_KEY__', JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''));

await writeFile('supabase-client.js', client);
await rm('public', { recursive: true, force: true });
await mkdir('public', { recursive: true });
await Promise.all([
  ...['index.html', 'manifest.webmanifest', 'sw.js', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']
    .map((file) => copyFile(file, `public/${file}`)),
  writeFile('public/supabase-client.js', client),
]);
