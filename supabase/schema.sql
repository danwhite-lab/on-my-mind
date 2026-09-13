create table public.topics (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 120),
  created_at timestamptz not null,
  updated_at timestamptz not null default now()
);

create table public.thoughts (
  id uuid primary key,
  topic_id uuid not null references public.topics(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  text text not null check (char_length(text) between 1 and 10000),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  builds_on_thought_id uuid references public.thoughts(id) on delete set null
);

alter table public.topics enable row level security;
alter table public.thoughts enable row level security;

create policy "Users manage their own topics" on public.topics
  for all to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users manage their own thoughts" on public.thoughts
  for all to authenticated using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create index thoughts_user_id_idx on public.thoughts(user_id);
create index thoughts_topic_id_idx on public.thoughts(topic_id);
