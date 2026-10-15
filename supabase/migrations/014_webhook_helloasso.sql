-- ==============================================================================
-- SCRIPT SQL: Fonction Webhook HelloAsso pour l'adhésion
-- ==============================================================================
-- Ce script configure la base de données pour gérer automatiquement
-- l'attribution du rôle "Adhérent" pendant 12 mois suite à un paiement HelloAsso.
--
-- INSTRUCTIONS : 
-- Exécutez ce code dans le SQL Editor de Supabase.

-- 1. On s'assure que la table user_roles possède une colonne expires_at
ALTER TABLE user_roles ADD COLUMN IF NOT EXISTS expires_at TIMESTAMP WITH TIME ZONE;

-- 2. Création ou mise à jour de la fonction appelée par le webhook
CREATE OR REPLACE FUNCTION grant_adhesion_by_email(payer_email TEXT, secret_token TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Vérifier le secret pour la sécurité (à modifier selon votre configuration)
  IF secret_token != 'tc_webhook_secret_2026' THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  -- Trouver l'ID de l'utilisateur basé sur l'email
  SELECT id INTO target_user_id
  FROM auth.users
  WHERE email = payer_email;

  -- Si l'utilisateur n'existe pas, on retourne false (le webhook ignorera)
  IF target_user_id IS NULL THEN
    RETURN FALSE;
  END IF;

  -- Insérer ou mettre à jour le rôle pour 'Adhérent' et définir l'expiration à +1 an
  -- Si une date future existe déjà, on ajoute 1 an à cette date.
  INSERT INTO user_roles (id, role, expires_at)
  VALUES (target_user_id, 'Adhérent', NOW() + INTERVAL '1 year')
  ON CONFLICT (id) DO UPDATE
  SET 
    role = 'Adhérent', 
    expires_at = CASE 
      WHEN user_roles.expires_at > NOW() THEN user_roles.expires_at + INTERVAL '1 year'
      ELSE NOW() + INTERVAL '1 year'
    END;

  RETURN TRUE;
END;
$$;
