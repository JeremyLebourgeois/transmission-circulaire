-- Patch pour réparer les politiques de sécurité (RLS) sur les tables Routes
-- A exécuter dans le SQL Editor de Supabase

-- 1. Nettoyer les anciennes politiques
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON routes;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON routes;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON routes;

-- 2. Créer une politique globale (ALL) pour les utilisateurs connectés
CREATE POLICY "Enable ALL for authenticated users" 
ON routes 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- Faire la même chose pour les autres tables :
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON route_points;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON route_points;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON route_points;

CREATE POLICY "Enable ALL for authenticated users" 
ON route_points 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON route_connections;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON route_connections;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON route_connections;

CREATE POLICY "Enable ALL for authenticated users" 
ON route_connections 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
