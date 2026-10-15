-- ==============================================================================
-- SCRIPT SQL: Ajout des champs de traduction anglaise (Option Bilingue avec fallback)
-- ==============================================================================
-- Exécutez ce script dans le SQL Editor de Supabase pour ajouter les colonnes anglaises optionnelles.

-- 1. Table Livres (books)
ALTER TABLE books ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE books ADD COLUMN IF NOT EXISTS short_description_en TEXT;
ALTER TABLE books ADD COLUMN IF NOT EXISTS long_description_en TEXT;

-- 2. Table Événements (events)
ALTER TABLE events ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE events ADD COLUMN IF NOT EXISTS description_en TEXT;

-- 3. Table Routes Circulaires (routes)
ALTER TABLE routes ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE routes ADD COLUMN IF NOT EXISTS description_en TEXT;

-- 4. Table Liaisons des Routes (route_connections)
ALTER TABLE route_connections ADD COLUMN IF NOT EXISTS title_en TEXT;
ALTER TABLE route_connections ADD COLUMN IF NOT EXISTS description_en TEXT;
