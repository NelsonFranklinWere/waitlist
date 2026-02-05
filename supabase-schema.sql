-- Supabase schema for OCH Waitlist
-- Run this in your Supabase SQL editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'landing',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  confirmed_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'notified')),
  notified_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Only allow inserts from server (service role)
-- No public select access
CREATE POLICY "Allow inserts from service role only" ON waitlist
  FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- No public read access - only service role can read/write
CREATE POLICY "Allow service role full access" ON waitlist
  FOR ALL
  USING (auth.role() = 'service_role');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_notified_at ON waitlist(notified_at);


