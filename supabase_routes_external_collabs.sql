-- ==============================================================================
-- PATCH SQL: Ajouter les collaborateurs sans compte (externes)
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase.

ALTER TABLE route_points 
ADD COLUMN IF NOT EXISTS external_collaborators TEXT[] DEFAULT '{}';
