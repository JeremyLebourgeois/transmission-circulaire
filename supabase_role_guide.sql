-- ==============================================================================
-- SCRIPT SQL: Ajout du rôle "guide"
-- ==============================================================================
-- Ce script configure les permissions pour le nouveau rôle "guide" dans Supabase :
-- 1. Met à jour la contrainte de vérification sur la table user_roles
-- 2. Met à jour la fonction RPC update_user_role_and_expiration pour permettre l'attribution du rôle guide
-- 3. Met à jour la politique de sécurité sur les profils pour que les guides puissent lister les membres (pour assigner les collaborateurs aux points des routes)

-- 1. Contrainte sur les rôles autorisés dans user_roles
ALTER TABLE user_roles DROP CONSTRAINT IF EXISTS user_roles_role_check;
ALTER TABLE user_roles ADD CONSTRAINT user_roles_role_check 
  CHECK (role IN ('super_admin', 'admin', 'guide', 'tresorier', 'adherent', 'membre'));

-- 2. Mise à jour de la fonction d'attribution des rôles par le Super Admin
CREATE OR REPLACE FUNCTION update_user_role_and_expiration(
  target_user_id UUID,
  new_role TEXT,
  new_expires_at TIMESTAMPTZ DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Vérifier que l'appelant est super_admin
  IF NOT EXISTS (
    SELECT 1 FROM user_roles 
    WHERE id = auth.uid() AND role = 'super_admin'
  ) THEN
    RAISE EXCEPTION 'Seul un Super Admin peut modifier les rôles.';
  END IF;

  -- Impossible d'attribuer super_admin via cette fonction
  IF new_role = 'super_admin' THEN
    RAISE EXCEPTION 'Impossible d''attribuer le rôle super_admin.';
  END IF;

  -- Validation du rôle
  IF new_role NOT IN ('admin', 'guide', 'tresorier', 'adherent', 'membre') THEN
    RAISE EXCEPTION 'Rôle invalide: %', new_role;
  END IF;

  -- Mise à jour ou insertion du rôle et de la date d'expiration
  INSERT INTO user_roles (id, role, expires_at)
  VALUES (target_user_id, new_role, new_expires_at)
  ON CONFLICT (id) DO UPDATE
  SET role = EXCLUDED.role,
      expires_at = EXCLUDED.expires_at;
END;
$$;

-- 3. Mise à jour de la politique de lecture des profils pour inclure les guides
DROP POLICY IF EXISTS "Les admins peuvent voir tous les profils" ON profiles;
DROP POLICY IF EXISTS "Les admins et guides peuvent voir tous les profils" ON profiles;

CREATE POLICY "Les admins et guides peuvent voir tous les profils" 
ON profiles 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_roles.id = auth.uid() 
    AND user_roles.role IN ('admin', 'super_admin', 'guide')
  )
);
