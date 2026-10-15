<p align="center">
  <img src="public/logo.jpeg" alt="Transmission Circulaire" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">Transmission Circulaire</h1>

<p align="center">
  <strong>Relier les générations, faire circuler les savoirs et valoriser les patrimoines culturels.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Cloudflare-Pages%20%2F%20Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" />
  <img src="https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node->=22.12.0-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node" />
</p>

---

## 📖 À propos

**Transmission Circulaire** est une association loi 1901 fondée en juin 2026. Elle œuvre pour créer des passerelles durables entre générations, cultures et territoires à travers des projets artistiques, éditoriaux et humains.

Ce dépôt héberge le site web officiel et la plateforme collaborative de l'association, comprenant une vitrine publique multilingue, une cartographie interactive mondiale de nos parcours, ainsi qu'un tableau de bord de gestion pour les membres, guides et administrateurs.

---

## ✨ Fonctionnalités clés

### 🗺️ Les Routes Circulaires
- **Cartographie interactive (Leaflet)** : visualisation mondiale des parcours, étapes et actions menées.
- **Tracés géodésiques fluides** : courbes de Bézier quadratiques et pointes de flèches dynamiques adaptées au niveau de zoom.
- **Détails des étapes** : affichage des collaborateurs (membres et intervenants externes), biographies et descriptions d'actions.
- **Espace Guide dédié** : gestion simplifiée des points et connexions pour les référents d'itinéraires.

### 📚 Édition & Livres
- Catalogue complet des publications et ouvrages édités par l'association.
- Fiches de présentation détaillées (auteur, description, galerie d'images, liens).

### 📅 Événements & Billetterie
- Calendrier des rencontres, ateliers et conférences.
- Gestion des inscriptions et intégration de la billetterie / dons via webhooks HelloAsso.

### ✍️ Livre d'or & Adhésions
- Formulaire d'adhésion et de don en ligne pour soutenir l'association.
- Mur des messages et témoignages laissé par la communauté.

### 🛡️ Dashboard d'administration & Contrôle d'accès (RBAC)
- **Super Admin / Admin** : gestion complète des utilisateurs, attribution des rôles, modération, publication d'événements et de livres.
- **Guide** : administration autonome des routes circulaires et de leurs étapes.
- **Membre** : profil public, biographie, avatar et historique de participation.

### 🌍 Multilingue (i18n)
- Support natif bilingue : **Français** (`fr`, langue par défaut) et **Anglais** (`en`).
- Routage préfixé automatique avec détection de la langue et redirection fluide.

---

## 🛠️ Stack Technique

| Domaine | Technologies |
| :--- | :--- |
| **Framework Web** | [Astro](https://astro.build/) (v5) en mode SSR (`output: 'server'`) |
| **Hébergement / Runtime** | [Cloudflare Pages / Workers](https://pages.cloudflare.com/) via `@astrojs/cloudflare` |
| **Styles & UI** | [Tailwind CSS](https://tailwindcss.com/) (v4 via `@tailwindcss/vite`) & SCSS variables |
| **Base de données & Auth** | [Supabase](https://supabase.com/) (PostgreSQL, Row Level Security, Storage, Auth SSR) |
| **Cartographie** | [Leaflet](https://leafletjs.com/) (tiles ArcGIS World Gray Canvas) |
| **Gestionnaire de paquets** | [pnpm](https://pnpm.io/) |

---

## 📁 Architecture du projet

```text
Transmission-Circulaire/
├── public/                 # Assets statiques (logos, illustrations, cartes)
├── src/
│   ├── components/         # Composants Astro réutilisables (Navbar, Footer, Hero, etc.)
│   │   ├── dashboard/      # Vues de gestion (Routes, Livres, Rôles, Événements)
│   │   └── pages/          # Composants de pages dédiés
│   ├── i18n/               # Dictionnaires de traduction et helpers (ui.ts, utils.ts)
│   ├── layouts/            # Layouts globaux (HTML, méta-tags SEO, en-têtes)
│   ├── lib/                # Clients Supabase (côté serveur et côté client)
│   ├── pages/              # Routes Astro & API endpoints
│   │   ├── [lang]/         # Routes localisées (/en)
│   │   ├── api/            # Webhooks (HelloAsso) & endpoints API (DeepL)
│   │   ├── dashboard/      # Tableau de bord d'administration
│   │   └── routes/         # Pages publiques des Routes Circulaires
│   └── styles/             # Feuilles de styles globales (Tailwind, palettes couleurs)
├── supabase/               # Gestion de la base de données Supabase
│   ├── schema_full.sql     # Schéma consolidé complet (tables, fonctions RPC, RLS)
│   ├── migrations/         # Historique ordonné des migrations SQL (001 à 015)
│   └── README.md           # Guide explicatif de chaque script de migration
└── astro.config.mjs        # Configuration Astro & intégrations (Cloudflare, i18n, Tailwind)
```

---

## 🚀 Démarrage local

### 1. Prérequis
- [Node.js](https://nodejs.org/) `>= 22.12.0`
- [pnpm](https://pnpm.io/) `>= 9.0.0`

### 2. Cloner le dépôt
```bash
git clone https://github.com/JeremyLebourgeois/transmission-circulaire.git
cd transmission-circulaire
```

### 3. Installer les dépendances
```bash
pnpm install
```

### 4. Configurer les variables d'environnement
Créez un fichier `.env` à la racine en copiant l'exemple :
```bash
cp .env.example .env
```

Renseignez vos clés de projet Supabase :
```env
PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Initialiser la base de données (Supabase)
Pour initialiser ou mettre à niveau votre base de données, consultez le dossier `supabase/` :
- **Déploiement initial complet :** Exécutez [`supabase/schema_full.sql`](supabase/schema_full.sql) dans l'éditeur SQL de votre tableau de bord Supabase.
- **Historique / patches spécifiques :** Retrouvez tous les scripts détaillés dans [`supabase/migrations/`](supabase/migrations/) et consultez [`supabase/README.md`](supabase/README.md).

### 6. Lancer le serveur de développement
```bash
pnpm dev
```
L'application est accessible sur [http://localhost:4321](http://localhost:4321).

---

## 📦 Scripts disponibles

| Commande | Action |
| :--- | :--- |
| `pnpm dev` | Démarre le serveur de développement local avec rechargement à chaud (HMR) |
| `pnpm build` | Compile l'application pour la production (build SSR adapté Cloudflare) |
| `pnpm preview` | Prévisualise localement le build de production via Wrangler |
| `pnpm astro` | Exécute les commandes de la CLI Astro (`check`, `sync`, etc.) |

---

## 🚢 Déploiement

Le projet est configuré pour un déploiement continu sur **Cloudflare Pages** :
- **Build command :** `pnpm build`
- **Output directory :** `.wrangler/` ou `dist/` (géré par `@astrojs/cloudflare`)
- **Variables d'environnement Cloudflare :** Définir `PUBLIC_SUPABASE_URL` et `PUBLIC_SUPABASE_ANON_KEY` dans les paramètres du projet Cloudflare Pages.
- **KV Binding :** Assurer la liaison du namespace KV `SESSION` pour la gestion des sessions SSR.

---

## 📬 Contact & Liens

- **Association :** Transmission Circulaire (Loi 1901)
- **Email :** [transmission.circulaire@gmail.com](mailto:transmission.circulaire@gmail.com)
- **LinkedIn :** [Transmission Circulaire](https://www.linkedin.com/company/transmission-circulaire/home/)
