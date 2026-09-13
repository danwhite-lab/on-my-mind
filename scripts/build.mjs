import { readFile, writeFile } from 'node:fs/promises';

const clientSource = await readFile('src/supabase-client.js', 'utf8');
const client = clientSource
  .replace('__NEXT_PUBLIC_SUPABASE_URL__', JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''))
  .replace('__NEXT_PUBLIC_SUPABASE_ANON_KEY__', JSON.stringify(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''));

await writeFile('supabase-client.js', client);
