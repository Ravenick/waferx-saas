/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `company` (text, nullable) — optional company name
  - `message` (text, not null) — the inquiry body
  - `created_at` (timestamptz, default now()) — submission timestamp
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT (public contact form, no sign-in needed).
- No SELECT/UPDATE/DELETE for anon — only inserts are public.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);
