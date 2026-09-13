import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = __NEXT_PUBLIC_SUPABASE_URL__;
const supabaseAnonKey = __NEXT_PUBLIC_SUPABASE_ANON_KEY__;

window.onMyMindSupabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

window.dispatchEvent(new Event('on-my-mind-supabase-ready'));
