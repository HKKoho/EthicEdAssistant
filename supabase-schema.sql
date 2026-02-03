-- Supabase Schema for Ethics Explorer
-- Run this in Supabase SQL Editor to create the required tables

-- Cycles table
CREATE TABLE IF NOT EXISTS cycles (
  id int8 PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL
);

-- Modules table
CREATE TABLE IF NOT EXISTS modules (
  id int8 PRIMARY KEY,
  cycle_id int8 REFERENCES cycles(id),
  title text NOT NULL,
  subtitle text NOT NULL,
  life_questions jsonb NOT NULL DEFAULT '[]',
  perspectives jsonb NOT NULL DEFAULT '{}',
  tension_guide text NOT NULL DEFAULT '',
  discussion_prompts jsonb NOT NULL DEFAULT '[]',
  summary text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Student Progress table
CREATE TABLE IF NOT EXISTS student_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  module_id int8 REFERENCES modules(id),
  step text NOT NULL DEFAULT '',
  user_inputs jsonb NOT NULL DEFAULT '{}',
  ai_feedback text,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_name, module_id)
);

-- Enable Row Level Security (optional - adjust policies as needed)
ALTER TABLE cycles ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;

-- Allow public read/write for now (adjust for production)
CREATE POLICY "Allow all on cycles" ON cycles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on modules" ON modules FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on student_progress" ON student_progress FOR ALL USING (true) WITH CHECK (true);
