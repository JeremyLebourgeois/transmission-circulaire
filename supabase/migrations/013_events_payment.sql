-- ==============================================================================
-- SCRIPT SQL: Prise en charge du prix et du paiement pour les événements
-- ==============================================================================
-- Exécutez ce code dans le SQL Editor de Supabase.

-- 1. Ajouter le prix et le lien de billetterie à la table events
ALTER TABLE events ADD COLUMN IF NOT EXISTS price NUMERIC(10, 2) DEFAULT 0;
ALTER TABLE events ADD COLUMN IF NOT EXISTS ticket_url TEXT;

-- 2. Ajouter le statut de paiement à la table event_registrations
ALTER TABLE event_registrations ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'non_requis';
-- Les valeurs possibles sont : 'non_requis', 'en_attente', 'effectue'

-- 3. (Optionnel) Mettre à jour les inscriptions existantes pour les événements gratuits
UPDATE event_registrations er
SET payment_status = 'non_requis'
WHERE er.payment_status IS NULL;

-- 4. Fonction webhook pour marquer un paiement comme effectué
-- Appelée par le webhook HelloAsso dès qu'un paiement est confirmé
CREATE OR REPLACE FUNCTION confirm_event_payment(payer_email TEXT, event_form_slug TEXT, secret_token TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  target_user_id UUID;
  target_event_id UUID;
BEGIN
  -- Vérifier le secret
  IF secret_token != 'tc_webhook_secret_2026' THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  -- Trouver l'utilisateur
  SELECT id INTO target_user_id FROM auth.users WHERE email = payer_email;
  IF target_user_id IS NULL THEN RETURN FALSE; END IF;

  -- Trouver l'événement par son slug dans le lien HelloAsso (stocké dans ticket_url)
  SELECT id INTO target_event_id FROM events WHERE ticket_url ILIKE '%' || event_form_slug || '%' LIMIT 1;
  IF target_event_id IS NULL THEN RETURN FALSE; END IF;

  -- Mettre à jour le statut de paiement
  UPDATE event_registrations
  SET payment_status = 'effectue'
  WHERE event_id = target_event_id AND user_id = target_user_id;

  RETURN TRUE;
END;
$$;
