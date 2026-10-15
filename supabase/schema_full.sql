-- ==============================================================================
-- SCHEMA COMPLET CONSOLIDÉ : TRANSMISSION CIRCULAIRE
-- ==============================================================================
-- Ce fichier contient l'intégralité du schéma de base de données PostgreSQL / Supabase,
-- avec les tables, colonnes multilingues, contraintes, fonctions RPC et politiques RLS.
--
-- Exécutez ce script dans le SQL Editor de Supabase pour initialiser une base complète.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. EXTENSIONS
-- ------------------------------------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 2. TABLES UTILISATEURS & PROFILS
-- ------------------------------------------------------------------------------

-- Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  bio_en TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des rôles utilisateurs (Admin, Guide, Adhérent, Membre, etc.)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT DEFAULT 'Membre',
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 3. TABLES ÉDITION & LIVRES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  author TEXT NOT NULL,
  description TEXT,
  description_en TEXT,
  price NUMERIC(10, 2) DEFAULT 0,
  link TEXT,
  main_image_url TEXT,
  additional_images TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. TABLES ÉVÉNEMENTS & INSCRIPTIONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT NOT NULL,
  max_attendees INTEGER,
  image_url TEXT,
  price NUMERIC(10, 2) DEFAULT 0,
  ticket_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.event_registrations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  event_id BIGINT REFERENCES public.events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  payment_status TEXT DEFAULT 'non_requis',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (event_id, user_id)
);

-- ------------------------------------------------------------------------------
-- 5. TABLES ROUTES CIRCULAIRES & ÉTAPES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.routes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  description TEXT,
  description_en TEXT,
  color TEXT DEFAULT '#991B1B',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.route_points (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
  location_name TEXT NOT NULL,
  lat NUMERIC NOT NULL,
  lng NUMERIC NOT NULL,
  color TEXT,
  order_index INTEGER DEFAULT 0,
  collaborators UUID[] DEFAULT '{}',
  external_collaborators JSONB DEFAULT '[]'::jsonb,
  action_title TEXT,
  action_title_en TEXT,
  action_description TEXT,
  action_description_en TEXT,
  action_images TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.route_connections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  route_id UUID REFERENCES public.routes(id) ON DELETE CASCADE,
  from_point_id UUID REFERENCES public.route_points(id) ON DELETE CASCADE,
  to_point_id UUID REFERENCES public.route_points(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 6. TABLES LIVRE D'OR & INTERACTIONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.guestbook (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  message TEXT NOT NULL,
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.guestbook_likes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  message_id BIGINT REFERENCES public.guestbook(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (message_id, user_id)
);

-- ------------------------------------------------------------------------------
-- 7. FONCTIONS RPC (Suppression compte, Webhooks HelloAsso)
-- ------------------------------------------------------------------------------

-- Suppression sécurisée du compte utilisateur par lui-même (RGPD / CNIL)
CREATE OR REPLACE FUNCTION delete_user()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  DELETE FROM auth.users WHERE id = auth.uid();
$$;

-- Webhook HelloAsso : Attribution de l'adhésion 12 mois
CREATE OR REPLACE FUNCTION grant_adhesion_by_email(payer_email TEXT, secret_token TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  target_user_id UUID;
BEGIN
  IF secret_token != 'tc_webhook_secret_2026' THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  SELECT id INTO target_user_id FROM auth.users WHERE email = payer_email;
  IF target_user_id IS NULL THEN RETURN FALSE; END IF;

  INSERT INTO public.user_roles (id, role, expires_at)
  VALUES (target_user_id, 'Adhérent', NOW() + INTERVAL '1 year')
  ON CONFLICT (id) DO UPDATE
  SET 
    role = 'Adhérent', 
    expires_at = CASE 
      WHEN public.user_roles.expires_at > NOW() THEN public.user_roles.expires_at + INTERVAL '1 year'
      ELSE NOW() + INTERVAL '1 year'
    END;

  RETURN TRUE;
END;
$$;

-- Webhook HelloAsso : Validation de paiement d'un événement
CREATE OR REPLACE FUNCTION confirm_event_payment(payer_email TEXT, event_form_slug TEXT, secret_token TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  target_user_id UUID;
  target_event_id BIGINT;
BEGIN
  IF secret_token != 'tc_webhook_secret_2026' THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  SELECT id INTO target_user_id FROM auth.users WHERE email = payer_email;
  IF target_user_id IS NULL THEN RETURN FALSE; END IF;

  SELECT id INTO target_event_id FROM public.events WHERE ticket_url ILIKE '%' || event_form_slug || '%' LIMIT 1;
  IF target_event_id IS NULL THEN RETURN FALSE; END IF;

  UPDATE public.event_registrations
  SET payment_status = 'effectue'
  WHERE event_id = target_event_id AND user_id = target_user_id;

  RETURN TRUE;
END;
$$;

-- ------------------------------------------------------------------------------
-- 8. BUCKETS DE STOCKAGE SUPABASE
-- ------------------------------------------------------------------------------
INSERT INTO storage.buckets (id, name, public) 
VALUES ('route-actions', 'route-actions', true) 
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true) 
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 9. POLITIQUES DE SÉCURITÉ (Row Level Security - RLS)
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.route_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guestbook_likes ENABLE ROW LEVEL SECURITY;

-- Lecture publique pour les éléments de contenu
CREATE POLICY "Public read profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Public read user_roles" ON public.user_roles FOR SELECT USING (true);
CREATE POLICY "Public read books" ON public.books FOR SELECT USING (true);
CREATE POLICY "Public read events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Public read routes" ON public.routes FOR SELECT USING (true);
CREATE POLICY "Public read route_points" ON public.route_points FOR SELECT USING (true);
CREATE POLICY "Public read route_connections" ON public.route_connections FOR SELECT USING (true);
CREATE POLICY "Public read guestbook" ON public.guestbook FOR SELECT USING (true);
CREATE POLICY "Public read guestbook_likes" ON public.guestbook_likes FOR SELECT USING (true);

-- Édition des profils par leur propriétaire
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Édition par les utilisateurs connectés
CREATE POLICY "Auth user register event" ON public.event_registrations FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Auth user post guestbook" ON public.guestbook FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Auth user like guestbook" ON public.guestbook_likes FOR ALL USING (auth.uid() = user_id);

-- Administration des routes (Admin et Guide)
CREATE POLICY "Guides and admins can edit routes" ON public.routes FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.id = auth.uid() 
    AND user_roles.role IN ('admin', 'super_admin', 'guide')
  )
);

CREATE POLICY "Guides and admins can edit route_points" ON public.route_points FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.id = auth.uid() 
    AND user_roles.role IN ('admin', 'super_admin', 'guide')
  )
);

CREATE POLICY "Guides and admins can edit route_connections" ON public.route_connections FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.id = auth.uid() 
    AND user_roles.role IN ('admin', 'super_admin', 'guide')
  )
);

-- Administration générale réservée aux admins
CREATE POLICY "Admins full access books" ON public.books FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role IN ('admin', 'super_admin'))
);

CREATE POLICY "Admins full access events" ON public.events FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role IN ('admin', 'super_admin'))
);

CREATE POLICY "Admins full access user_roles" ON public.user_roles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role IN ('admin', 'super_admin'))
);

CREATE POLICY "Admins full access guestbook" ON public.guestbook FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role IN ('admin', 'super_admin'))
);

-- Politiques Storage Bucket pour route-actions
CREATE POLICY "Public read route-actions bucket" ON storage.objects FOR SELECT USING (bucket_id = 'route-actions');
CREATE POLICY "Guides/admins upload route-actions bucket" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'route-actions' AND 
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.id = auth.uid() AND user_roles.role IN ('admin', 'super_admin', 'guide'))
);

-- Politiques Storage Bucket pour avatars
CREATE POLICY "Public read avatars bucket" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Auth user upload avatar" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');
