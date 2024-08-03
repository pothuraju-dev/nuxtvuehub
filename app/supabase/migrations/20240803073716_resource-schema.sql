drop table if exists resources;

drop type if exists categories;
create type categories as enum ('documentation', 'tutorial', 'blog', 'article', 'example');

create table resources (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    title text unique not null,
    slug text unique not null,
    url text unique not null,
    author text not null,
    published_date timestamptz,
    description text,
    category categories not null,
    tags text array default array[]::varchar[] not null
);