-- ==============================================================================
-- PATCH SQL: Ajouter la personnalisation des couleurs pour les points
-- ==============================================================================

ALTER TABLE route_points ADD COLUMN IF NOT EXISTS bg_color VARCHAR(50) DEFAULT '#FAF9F6';
ALTER TABLE route_points ADD COLUMN IF NOT EXISTS border_color VARCHAR(50) DEFAULT '#9B2C2C';
