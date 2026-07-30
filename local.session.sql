-- Run this after connecting to the PostgreSQL database named "website".
-- Example connection URL:
-- postgresql://postgres:your_password@localhost:5432/website

create table if not exists contact_messages (
  id bigserial primary key,
  name varchar(160) not null,
  email varchar(255) not null,
  organization varchar(200),
  role varchar(160),
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on contact_messages (created_at desc);
