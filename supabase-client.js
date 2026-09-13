import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://xwjmdtqpjcntzmxghdzl.supabase.co";
const supabaseAnonKey = "sb_publishable_CniPZq46iBx_0bzPof53Mg_jvy_Kfm1";

window.onMyMindSupabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;

window.dispatchEvent(new Event('on-my-mind-supabase-ready'));
