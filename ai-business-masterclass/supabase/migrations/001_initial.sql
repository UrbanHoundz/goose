-- AI For Business Growth Masterclass — initial schema

-- Enrollments: tracks who has paid and been granted access
create table if not exists public.enrollments (
    id            uuid primary key default gen_random_uuid(),
    user_id       uuid not null references auth.users(id) on delete cascade,
    stripe_session_id text,
    status        text not null default 'pending', -- pending | active | refunded
    enrolled_at   timestamptz not null default now(),
    unique (user_id)
);
alter table public.enrollments enable row level security;
create policy "Users read own enrollment"
    on public.enrollments for select using (auth.uid() = user_id);

-- Progress: per-lesson completion records
create table if not exists public.progress (
    id         uuid primary key default gen_random_uuid(),
    user_id    uuid not null references auth.users(id) on delete cascade,
    lesson_id  text not null,
    completed_at timestamptz not null default now(),
    unique (user_id, lesson_id)
);
alter table public.progress enable row level security;
create policy "Users manage own progress"
    on public.progress for all using (auth.uid() = user_id);

-- Assessment results
create table if not exists public.assessment_results (
    id         uuid primary key default gen_random_uuid(),
    user_id    uuid not null references auth.users(id) on delete cascade,
    score      int  not null,
    passed     boolean not null,
    taken_at   timestamptz not null default now()
);
alter table public.assessment_results enable row level security;
create policy "Users manage own results"
    on public.assessment_results for all using (auth.uid() = user_id);

-- Certificates
create table if not exists public.certificates (
    id           uuid primary key default gen_random_uuid(),
    user_id      uuid not null references auth.users(id) on delete cascade,
    student_name text not null,
    score        int  not null,
    issued_at    timestamptz not null default now(),
    unique (user_id)
);
alter table public.certificates enable row level security;
create policy "Users manage own certificate"
    on public.certificates for all using (auth.uid() = user_id);
