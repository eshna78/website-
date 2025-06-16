/*
  # Update database schema with tables and policies

  1. Tables
    - event_registrations: Store event registration information
    - event_ideas: Store proposed event ideas from alumni
    - Update existing profiles table

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Ensure proper access control
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create event_registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users,
  event_id uuid NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  requirements text,
  created_at timestamptz DEFAULT now()
);

-- Create event_ideas table
CREATE TABLE IF NOT EXISTS event_ideas (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid REFERENCES auth.users,
  name text NOT NULL,
  email text NOT NULL,
  event_title text NOT NULL,
  description text NOT NULL,
  expected_date date NOT NULL,
  location text NOT NULL,
  expected_attendees integer NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_ideas ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create policies for event_registrations
CREATE POLICY "Users can read own event registrations"
  ON event_registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own event registrations"
  ON event_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for event_ideas
CREATE POLICY "Users can read own event ideas"
  ON event_ideas
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own event ideas"
  ON event_ideas
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_event_registrations_event_id ON event_registrations(event_id);
CREATE INDEX IF NOT EXISTS idx_event_ideas_status ON event_ideas(status);