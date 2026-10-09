-- Autoriser les rôles de l'API Supabase à accéder aux tables
GRANT ALL ON TABLE routes TO anon, authenticated, service_role;
GRANT ALL ON TABLE route_points TO anon, authenticated, service_role;
GRANT ALL ON TABLE route_connections TO anon, authenticated, service_role;

-- Si jamais les tables utilisent des séquences (bien qu'on utilise gen_random_uuid)
-- On s'assure que tout est accessible
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
