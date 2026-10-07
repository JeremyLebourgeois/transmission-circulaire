-- ==============================================================================
-- SCRIPT SQL: Fonction de suppression de compte utilisateur (Transmission Circulaire)
-- ==============================================================================
--
-- INSTRUCTIONS :
-- 1. Allez sur votre tableau de bord Supabase (https://app.supabase.com)
-- 2. Sélectionnez votre projet "Transmission-Circulaire"
-- 3. Allez dans le "SQL Editor" (icône avec symbole >_ sur le menu de gauche)
-- 4. Cliquez sur "New query"
-- 5. Copiez-collez l'intégralité du code ci-dessous et cliquez sur "Run"
--
-- Cela permettra à l'application web de supprimer de manière sécurisée
-- le compte d'un utilisateur lorsqu'il le demande depuis son tableau de bord.
--
-- Note: Vos tables utilisant des clés étrangères liées à `auth.users` 
-- doivent avoir `ON DELETE CASCADE` pour que la suppression fonctionne,
-- ou alors les lignes correspondantes dans public.* seront orphelines/bloquantes.

CREATE OR REPLACE FUNCTION delete_user()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  -- Supprime l'utilisateur actuellement authentifié de la table auth.users
  -- Cette action déclenchera les suppressions en cascade (si configurées)
  DELETE FROM auth.users WHERE id = auth.uid();
$$;
