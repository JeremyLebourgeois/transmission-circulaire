-- ==============================================================================
-- PATCH SQL: Ajouter la couleur personnalisée pour les liaisons (trajectoires)
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase.

ALTER TABLE route_connections 
ADD COLUMN IF NOT EXISTS color VARCHAR(7) DEFAULT '#556B2F';
