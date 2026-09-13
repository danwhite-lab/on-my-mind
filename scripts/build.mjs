import { build } from 'esbuild';
import { copyFile, mkdir, rm } from 'node:fs/promises';

const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const markdownUrl = configuredUrl.match(/^\[[^\]]+\]\((https?:\/\/[^)]+)\)$/)?.[1];

await build({
  entryPoints: ['src/supabase-client.js'],
  outfile: 'supabase-client.js',
  bundle: true,
  format: 'esm',
  define: {
    __NEXT_PUBLIC_SUPABASE_URL__: JSON.stringify(markdownUrl ?? configuredUrl),
    __NEXT_PUBLIC_SUPABASE_ANON_KEY__: JSON.stringify(
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '',
    ),
  },
});
await rm('public', { recursive: true, force: true });
await mkdir('public', { recursive: true });
await Promise.all([
  ...['index.html', 'manifest.webmanifest', 'sw.js', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']
    .map((file) => copyFile(file, `public/${file}`)),
  copyFile('supabase-client.js', 'public/supabase-client.js'),
]);
