# Documentation de la Base de Données & Migrations (Supabase)

Ce dossier regroupe les scripts SQL et migrations nécessaires au bon fonctionnement de la plateforme **Transmission Circulaire**.

---

## 📂 Structure du dossier

- **`schema_full.sql`** : Schéma SQL consolidé complet (tables, colonnes, triggers, fonctions RPC, politiques RLS et configuration des buckets de stockage). Idéal pour initialiser un nouvel environnement Supabase en une seule fois.
- **`migrations/`** : Historique ordonné chronologiquement de tous les patches et scripts appliqués au fil du projet.

---

## 📑 Liste des Migrations (`migrations/`)

| Fichier | Description |
| :--- | :--- |
| **`001_routes_schema.sql`** | Création des tables de base des Routes Circulaires (`routes`, `route_points`, `route_connections`). |
| **`002_routes_color_patch.sql`** | Ajout de la colonne `color` pour la personnalisation des itinéraires. |
| **`003_route_points_colors.sql`** | Ajout de la couleur spécifique par point d'étape. |
| **`004_routes_external_collabs.sql`** | Support des collaborateurs externes (`external_collaborators` JSONB) sur les étapes. |
| **`005_routes_grants.sql`** | Attribution des droits de lecture/écriture pour les rôles `authenticated` et `anon`. |
| **`006_routes_rls_patch.sql`** | Politiques de sécurité RLS (Row Level Security) pour la lecture publique et l'édition restreinte aux guides/admins. |
| **`007_routes_storage_patch.sql`** | Création du bucket de stockage `route-actions` et politiques d'accès aux images d'étapes. |
| **`008_role_guide.sql`** | Création du rôle `guide`, permissions associées et helpers de vérification de rôles. |
| **`009_profiles_admin_patch.sql`** | Politiques d'administration permettant aux admins de gérer les profils utilisateurs. |
| **`010_profiles_bio_patch.sql`** | Ajout du champ `bio` aux profils utilisateurs. |
| **`011_profiles_public_patch.sql`** | Ajout du flag `is_public` pour permettre aux membres d'apparaître publiquement sur le site. |
| **`012_delete_user.sql`** | Fonction RPC sécurisée `delete_user()` pour la suppression de compte conforme RGPD / CNIL. |
| **`013_events_payment.sql`** | Support des prix d'événements, liens de billetterie et statuts de paiement (`payment_status`). |
| **`014_webhook_helloasso.sql`** | Fonction RPC `grant_adhesion_by_email()` pour l'attribution automatique de l'adhésion 12 mois via webhook HelloAsso. |
| **`015_translation_fields.sql`** | Ajout des colonnes de traduction anglaise (`title_en`, `description_en`, `bio_en`, `action_title_en`, etc.). |

---

## 🚀 Comment appliquer ces scripts ?

### Option A : Déploiement initial sur une nouvelle instance Supabase
1. Rendez-vous sur votre projet dans le [Dashboard Supabase](https://app.supabase.com).
2. Ouvrez le **SQL Editor** dans le menu latéral gauche.
3. Créez une nouvelle requête et collez le contenu de **`schema_full.sql`**.
4. Cliquez sur **Run**.

### Option B : Application d'un correctif / patch spécifique
1. Ouvrez le fichier correspondant dans `supabase/migrations/`.
2. Copiez son contenu dans le **SQL Editor** de Supabase et exécutez-le.
