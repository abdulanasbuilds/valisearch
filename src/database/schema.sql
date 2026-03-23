-- ValiSearch — PostgreSQL Schema
-- Run in Supabase SQL editor or via migration tool.
-- This is a reference file — actual tables are created via Lovable Cloud migrations.

create extension if not exists "uuid-ossp";

-- Users table (managed by Supabase Auth, extended here)
create table if not exists public.users (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Ideas submitted by users
create table if not exists public.ideas (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.users (id) on delete cascade,
  idea_text text not null,
  created_at timestamptz not null default now()
);

create index if not exists ideas_user_id_idx on public.ideas (user_id);

-- Analysis results (stored as JSONB)
create table if not exists public.analysis (
  id uuid primary key default uuid_generate_v4(),
  idea_id uuid not null references public.ideas (id) on delete cascade,
  result_json jsonb not null,
  source text not null default 'mock', -- 'ai' | 'mock'
  created_at timestamptz not null default now()
);

create index if not exists analysis_idea_id_idx on public.analysis (idea_id);

-- Credits system (pay-as-you-go)
create table if not exists public.credits (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.users (id) on delete cascade,
  balance integer not null default 5,
  updated_at timestamptz not null default now()
);

create index if not exists credits_user_id_idx on public.credits (user_id);

-- Credit transactions log
create table if not exists public.credit_transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.users (id) on delete cascade,
  amount integer not null, -- negative = deduction, positive = purchase
  reason text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security (enable when auth is configured)
-- alter table public.users enable row level security;
-- alter table public.ideas enable row level security;
-- alter table public.analysis enable row level security;
-- alter table public.credits enable row level security;
-- alter table public.credit_transactions enable row level security;
