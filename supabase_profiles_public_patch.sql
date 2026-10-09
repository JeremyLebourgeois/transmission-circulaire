-- ==============================================================================
-- PATCH SQL: Rendre les profils publics en lecture
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase pour que :
-- 1. Les admins puissent voir les membres dans le menu déroulant
-- 2. Les visiteurs puissent voir les noms des collaborateurs sur la carte publique

CREATE POLICY "Profils visibles par tous"
ON profiles
FOR SELECT
USING (true);
