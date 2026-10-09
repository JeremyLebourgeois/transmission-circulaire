-- ==============================================================================
-- PATCH SQL: Ajouter le champ "bio" (description) aux profils
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase pour que :
-- 1. Les collaborateurs puissent avoir une description
-- 2. On puisse afficher cette description dans la bulle d'info sur la carte

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS bio TEXT;
