-- ==============================================================================
-- SCRIPT SQL: Création des tables pour "Les Routes Circulaires"
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase.

-- 1. Table principale : Les Routes
CREATE TABLE IF NOT EXISTS routes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table des points d'étape (Villes/Pays)
CREATE TABLE IF NOT EXISTS route_points (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
  location_name TEXT NOT NULL, -- Ex: "Paris, France"
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  collaborators UUID[] DEFAULT '{}', -- Tableau d'IDs d'utilisateurs (profils)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table des liaisons (Actions entre deux points)
CREATE TABLE IF NOT EXISTS route_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  route_id UUID NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
  start_point_id UUID NOT NULL REFERENCES route_points(id) ON DELETE CASCADE,
  end_point_id UUID NOT NULL REFERENCES route_points(id) ON DELETE CASCADE,
  title TEXT,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
