-- =============================================
-- FS INTERIOR - Supabase Database Schema
-- =============================================
-- Run this in your Supabase SQL Editor

-- Leads Table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  property_type TEXT NOT NULL,
  bhk_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'site_visit_scheduled', 'in_progress', 'converted', 'lost')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  project_type TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  client_image TEXT,
  location TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Portfolio Table (optional, for dynamic portfolio)
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Living Room', 'Bedroom', 'Modular Kitchen', 'Complete Home', 'Office Interior')),
  image_url TEXT NOT NULL,
  description TEXT,
  before_image TEXT,
  after_image TEXT,
  is_visible BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Leads: Insert allowed for all (form submissions), read only for service role
CREATE POLICY "Allow public insert on leads" ON leads FOR INSERT TO anon WITH CHECK (true);

-- Reviews: Read allowed for all visible reviews
CREATE POLICY "Allow public read on visible reviews" ON reviews FOR SELECT TO anon USING (is_visible = true);

-- Portfolio: Read allowed for all visible items
CREATE POLICY "Allow public read on visible portfolio" ON portfolio FOR SELECT TO anon USING (is_visible = true);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Seed sample reviews
INSERT INTO reviews (client_name, project_type, rating, review_text, location, is_featured) VALUES
  ('Priya & Rahul Mehta', '3 BHK Complete Interior', 5, 'Absolutely stunning transformation! The team understood our vision perfectly and delivered beyond expectations. The attention to detail in the modular kitchen and master bedroom wardrobe is exceptional. Highly recommend FS Interior!', 'Satellite, Ahmedabad', true),
  ('Amit Patel', '2 BHK Interior Package', 5, 'What impressed me most was their transparent pricing – no hidden costs, everything was clear from day one. The 3D visualization helped us finalize the design with confidence. The execution was flawless and delivered on time.', 'Bopal, Ahmedabad', true),
  ('Nisha Desai', 'Living Room & Bedroom Design', 5, 'The design team brought creativity and practicality together beautifully. Our living room has become the highlight of every guest visit. Professional, punctual, and passionate about their work.', 'Prahlad Nagar, Ahmedabad', false),
  ('Vikram & Sunita Shah', '4 BHK Complete Interior', 5, 'We were nervous about a full home renovation, but FS Interior made the entire process stress-free. From the free site visit to final handover, the communication was excellent. Our dream home is now a reality!', 'South Bopal, Ahmedabad', true),
  ('Kavya Joshi', 'Modular Kitchen', 5, 'The modular kitchen they designed for us is both beautiful and incredibly functional. Smart storage solutions, premium finishes, and delivered within budget. The team was a pleasure to work with.', 'Vastrapur, Ahmedabad', false),
  ('Rajan & Meera Trivedi', '3 BHK Interior Package', 5, 'Outstanding quality of work! The false ceiling design in our living room is absolutely breathtaking. FS Interior truly understands how to blend aesthetics with functionality. Worth every rupee.', 'Thaltej, Ahmedabad', true);
