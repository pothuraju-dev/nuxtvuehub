drop table if exists interview_questions;

drop type if exists difficulties;
create type difficulties as enum ('easy', 'medium', 'hard');

create table interview_questions (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    question text not null,
    answer text not null,
    is_active boolean default true not null,
    tags text array default array[]::varchar[] not null,
    difficulty difficulties not null
);