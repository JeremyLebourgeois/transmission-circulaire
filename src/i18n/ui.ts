export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';
export const showDefaultLang = false;

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'L\'Association',
    'nav.books': 'Nos Livres',
    'nav.events': 'Événements',
    'nav.routes': 'Les Routes',
    'nav.donate': 'Soutenir',
    'nav.login': 'Connexion',
    'nav.dashboard': 'Mon Espace',
    'books.description': 'Découvrez nos ouvrages dédiés à la transmission intergénérationnelle, la culture et la paix.',
    'books.manage': 'Gérer les livres',
    'routes.manage': 'Gérer les routes',
    'books.read_more': 'En savoir plus',
    'auth.register.title': 'Rejoindre l\'association',
    'auth.register.subtitle': 'Créez votre compte pour interagir avec notre communauté',
    'auth.email': 'Adresse email',
    'auth.password': 'Mot de passe (6 caractères min.)',
    'auth.consent.prefix': 'J\'accepte la ',
    'auth.consent.link': 'politique de confidentialité',
    'auth.consent.suffix': ' concernant le traitement de mes données.',
    'auth.register.submit': 'S\'inscrire',
    'auth.has_account': 'Déjà un compte ?',
    'auth.login.link': 'Se connecter',

        'privacy.title': 'Mentions Légales & Confidentialité',
    'privacy.subtitle': 'Informations juridiques, propriété intellectuelle et protection de vos données personnelles (RGPD).',
    'privacy.tab.legal': 'Mentions Légales',
    'privacy.tab.privacy': 'Protection des Données (RGPD)',

    // Mentions légales
    'legal.editor.title': '1. Éditeur du site',
    'legal.editor.desc': 'Association Transmission Circulaire, régie par la loi du 1er juillet 1901 et son décret d\'application du 16 août 1901.\nSiège social : Rueil-Malmaison (92500), France.\nNuméro RNA : W922023435.\nContact : transmission.circulaire@gmail.com',

    'legal.director.title': '2. Direction de la publication',
    'legal.director.desc': 'Les co-présidentes de l\'association : Éloïne Ramon-Burgada et Meltem Etcheberry.',

    'legal.host.title': '3. Hébergement & Infrastructure technique',
    'legal.host.desc': '• Hébergement web & distribution (CDN/SSR) : Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis (https://www.cloudflare.com).\n• Base de données & Authentification : Supabase Inc., 970 Toa Payoh North #07-04, Singapour 318992 (données hébergées au sein de l\'Union Européenne - région AWS Francfort).',

    'legal.ip.title': '4. Propriété intellectuelle & Droits d\'auteur',
    'legal.ip.desc': 'L\'ensemble des éléments figurant sur le site (textes, récits de parcours, photographies, illustrations, logos, chartes graphiques, ainsi que la présentation des ouvrages édités) sont protégés par les dispositions du Code de la propriété intellectuelle (article L.122-4).\nSauf mention contraire, ils sont la propriété exclusive de l\'association Transmission Circulaire ou font l\'objet d\'une autorisation expresse d\'utilisation accordée par leurs auteurs ou créateurs respectifs. Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, est strictement interdite sans accord écrit préalable.',

    'legal.credits.title': '5. Crédits & Cartographie',
    'legal.credits.desc': 'La cartographie interactive des Routes Circulaires est propulsée par la bibliothèque open-source Leaflet. Les tuiles cartographiques sont fournies par Esri (ArcGIS World Light Gray Canvas — Tiles © Esri, DeLorme, NAVTEQ).\nPhotographies et illustrations : Association Transmission Circulaire et contributeurs partenaires.',

    'legal.liability.title': '6. Limitation de responsabilité & Liens externes',
    'legal.liability.desc': 'L\'association met tout en œuvre pour assurer l\'exactitude des informations diffusées sur son site. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou des interruptions temporaires de service.\nLe site contient des liens vers des plateformes tierces (notamment HelloAsso, LinkedIn et sites de partenaires). L\'association n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leurs contenus ou pratiques.',

    // Confidentialité & RGPD
    'privacy.dpo.title': '1. Responsable du traitement',
    'privacy.dpo.desc': 'L\'association Transmission Circulaire s\'engage à protéger la vie privée des membres et des visiteurs de son site web, conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi Informatique et Libertés.\nResponsable du traitement : Association Transmission Circulaire — Contact : transmission.circulaire@gmail.com',

    'privacy.data.title': '2. Données collectées & Finalités',
    'privacy.data.desc': '• Données de compte : adresse email obligatoire et mot de passe sécurisé.\n• Profil membre : nom, prénom, biographie et photo de profil (facultatifs).\nCes données sont collectées exclusivement pour sécuriser l\'accès à votre espace membre, vous permettre de gérer vos contributions (routes, étapes) selon vos permissions, et échanger avec vous sur les activités de l\'association. Aucune donnée n\'est cédée ou commercialisée à des tiers.',

    'privacy.partners.title': '3. Sous-traitants & Paiements sécurisés',
    'privacy.partners.desc': '• Supabase : hébergement chiffré des données de compte et profils dans l\'Union Européenne.\n• HelloAsso : gestion intégrale et sécurisée des adhésions, dons et billetteries.\nImportant : Aucune coordonnée bancaire (numéro de carte, cryptogramme) n\'est collectée, traitée ou stockée par Transmission Circulaire. Les transactions financières sont opérées directement par HelloAsso sous agrément bancaire sécurisé (PCI-DSS, 3D-Secure).',

    'privacy.security.title': '4. Sécurité des mots de passe',
    'privacy.security.desc': 'Les mots de passe sont hachés de manière asymétrique via les protocoles cryptographiques stricts de Supabase. Les membres ou administrateurs de l\'association n\'ont en aucun cas accès à vos mots de passe en clair. Les communications avec le site sont intégralement chiffrées en HTTPS/TLS.',

    'privacy.retention.title': '5. Durée de conservation des données',
    'privacy.retention.desc': '• Données de compte utilisateur : conservées tant que votre compte est actif. En cas de suppression de compte (effectuable en 1 clic depuis votre profil), vos données d\'authentification et de profil sont immédiatement et définitivement purgées.\n• Données comptables (justificatifs de dons ou d\'adhésions) : conservées pour la durée légale requise par les obligations fiscales et administratives (10 ans).',

    'privacy.rights.title': '6. Vos droits & Recours (CNIL)',
    'privacy.rights.desc': 'Vous disposez d\'un droit d\'accès, de rectification, de portabilité, de limitation et d\'effacement de vos données personnelles. Vous pouvez exercer ces droits à tout moment depuis votre tableau de bord ou par email à : transmission.circulaire@gmail.com.\nSi vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez le droit d\'introduire une réclamation auprès de la CNIL (Commission Nationale de l\'Informatique et des Libertés — www.cnil.fr).',

    'privacy.cookies.title': '7. Cookies techniques',
    'privacy.cookies.desc': 'Ce site utilise exclusivement des cookies techniques strictement nécessaires au maintien de votre session de connexion sécurisée. Aucun traceur publicitaire, cookie de profilage ou outil d\'analyse intrusif n\'est déposé. Conformément aux directives de la CNIL, ces cookies indispensables sont exemptés de consentement préalable.',

    'dashboard.title': 'Tableau de bord',
    'dashboard.welcome': 'Bienvenue, ',
    'dashboard.role': 'Statut : ',
    'dashboard.tools': 'Outils disponibles',
    'dashboard.profile': 'Mon profil',
    'dashboard.profile.desc': 'Gérez vos informations personnelles et vos préférences.',
    'dashboard.edit': 'Modifier →',
    'dashboard.books': 'Gestion des Livres',
    'dashboard.books.desc': 'Ajouter, modifier ou supprimer des livres du catalogue.',
    'dashboard.books.manage': 'Gérer les livres →',
    'dashboard.events': 'Gestion des Événements',
    'dashboard.events.desc': 'Créer et organiser les événements de l\'association.',
    'dashboard.events.manage': 'Gérer les événements →',
    'dashboard.routes': 'Les Routes Circulaires',
    'dashboard.routes.desc': 'Gérer la carte du monde, les étapes et les actions.',
    'dashboard.routes.manage': 'Gérer les routes →',
    'dashboard.roles': 'Gestion des Rôles',
    'dashboard.roles.desc': 'Attribuer des rôles (Admin, Trésorier) aux utilisateurs.',
    'dashboard.roles.manage': 'Gérer les membres →',
    'dashboard.logout': 'Me déconnecter',
    'dashboard.events.upcoming': 'Mes événements à venir',
    'dashboard.events.none': "Vous n'êtes inscrit à aucun événement à venir.",
    'dashboard.events.view': 'Voir les événements disponibles →',
    'dashboard.delete.confirm': 'Êtes-vous sûr de vouloir supprimer définitivement votre compte ? Cette action est irréversible.',
    'dashboard.delete.password_label': 'Mot de passe pour confirmer',
    'dashboard.delete.password_placeholder': 'Mot de passe',
    'dashboard.delete.button': 'Supprimer mon compte',

    'profile.edit.title': 'Modifier mon profil',
    'profile.edit.name': 'Nom complet',
    'profile.edit.description': 'Description / Bio',
    'profile.edit.avatar': 'Photo de profil',
    'profile.edit.save': 'Enregistrer les modifications',
    'profile.edit.success': 'Profil mis à jour avec succès.',
    'profile.edit.error': 'Erreur lors de la mise à jour.',

    'hero.title': 'Transmission Circulaire',
    'hero.subtitle': 'Bâtir des connexions entre les générations par le partage de la culture, des valeurs et de la paix.',
    'hero.cta.discover': 'Découvrir nos actions',
    'hero.cta.support': 'Soutenir l\'association',

    'footer.description': 'Transmission Circulaire est une association dédiée à la transmission intergénérationnelle et au partage des cultures.',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.books': 'Our Books',
    'nav.events': 'Events',
    'nav.routes': 'The Routes',
    'nav.donate': 'Support Us',
    'nav.login': 'Login',
    'nav.dashboard': 'My Account',
    'books.description': 'Discover our books dedicated to intergenerational transmission, culture, and peace.',
    'books.manage': 'Manage books',
    'routes.manage': 'Manage routes',
    'books.read_more': 'Read more',
    'auth.register.title': 'Join the association',
    'auth.register.subtitle': 'Create your account to interact with our community',
    'auth.email': 'Email address',
    'auth.password': 'Password (min. 6 characters)',
    'auth.consent.prefix': 'I accept the ',
    'auth.consent.link': 'privacy policy',
    'auth.consent.suffix': ' regarding the processing of my data.',
    'auth.register.submit': 'Sign Up',
    'auth.has_account': 'Already have an account?',
    'auth.login.link': 'Log in',

        'privacy.title': 'Legal Notice & Privacy Policy',
    'privacy.subtitle': 'Legal information, intellectual property, and protection of your personal data (GDPR).',
    'privacy.tab.legal': 'Legal Notice',
    'privacy.tab.privacy': 'Data Protection (GDPR)',

    // Legal notice
    'legal.editor.title': '1. Website Publisher',
    'legal.editor.desc': 'Transmission Circulaire Association, governed by the French law of July 1, 1901.\nRegistered Office: Rueil-Malmaison (92500), France.\nRNA Number: W922023435.\nContact: transmission.circulaire@gmail.com',

    'legal.director.title': '2. Publication Direction',
    'legal.director.desc': 'The co-presidents of the association: Éloïne Ramon-Burgada and Meltem Etcheberry.',

    'legal.host.title': '3. Hosting & Technical Infrastructure',
    'legal.host.desc': '• Web hosting & distribution (CDN/SSR): Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (https://www.cloudflare.com).\n• Database & Authentication: Supabase Inc., 970 Toa Payoh North #07-04, Singapore 318992 (data hosted in the European Union - AWS Frankfurt region).',

    'legal.ip.title': '4. Intellectual Property & Copyright',
    'legal.ip.desc': 'All elements on this website (texts, journey logs, photographs, illustrations, logos, visual identity, and presentation of published books) are protected under the French Intellectual Property Code (Article L.122-4).\nUnless stated otherwise, they are the exclusive property of Transmission Circulaire or are used with express authorization from their respective authors or creators. Any reproduction, adaptation, or distribution without prior written consent is strictly prohibited.',

    'legal.credits.title': '5. Credits & Mapping',
    'legal.credits.desc': 'The interactive Circular Routes map is powered by the open-source Leaflet library. Map tiles are provided by Esri (ArcGIS World Light Gray Canvas — Tiles © Esri, DeLorme, NAVTEQ).\nPhotographs and illustrations: Transmission Circulaire and contributing partners.',

    'legal.liability.title': '6. Limitation of Liability & External Links',
    'legal.liability.desc': 'The association makes every effort to ensure the accuracy of the information published on its site. However, it cannot be held responsible for omissions, inaccuracies, or temporary service interruptions.\nThe site contains links to third-party platforms (including HelloAsso, LinkedIn, and partner sites). The association has no control over these sites and disclaims all responsibility for their content or practices.',

    // Privacy & GDPR
    'privacy.dpo.title': '1. Data Controller',
    'privacy.dpo.desc': 'Transmission Circulaire is committed to protecting the privacy of members and website visitors in accordance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679).\nData Controller: Transmission Circulaire Association — Contact: transmission.circulaire@gmail.com',

    'privacy.data.title': '2. Data Collected & Purposes',
    'privacy.data.desc': '• Account data: mandatory email address and secure password.\n• Member profile: optional name, bio, and avatar.\nThis data is collected solely to secure access to your member area, manage your route contributions, and communicate about association activities. No data is ever sold or shared for commercial purposes.',

    'privacy.partners.title': '3. Subprocessors & Secure Payments',
    'privacy.partners.desc': '• Supabase: encrypted data storage within the European Union.\n• HelloAsso: end-to-end secure handling of memberships, donations, and event ticketing.\nImportant: No banking details (card numbers, CVV) are collected or stored by Transmission Circulaire. Financial transactions are processed directly by HelloAsso under strict banking standards (PCI-DSS, 3D-Secure).',

    'privacy.security.title': '4. Password Security',
    'privacy.security.desc': 'Passwords are encrypted and asymmetrically hashed via Supabase security protocols. Association members and administrators cannot access passwords in clear text. Communications are encrypted end-to-end with HTTPS/TLS.',

    'privacy.retention.title': '5. Data Retention Period',
    'privacy.retention.desc': '• User account data: kept as long as your account is active. If you delete your account (available in 1 click from your profile), your personal data is immediately and permanently erased.\n• Accounting data (donation/membership receipts): retained for the legally required duration (10 years).',

    'privacy.rights.title': '6. Your Rights & Recourse (CNIL)',
    'privacy.rights.desc': 'You have the right to access, rectify, port, limit, and delete your personal data. You can exercise these rights at any time from your dashboard or by emailing: transmission.circulaire@gmail.com.\nYou also have the right to lodge a complaint with the French supervisory authority (CNIL — www.cnil.fr).',

    'privacy.cookies.title': '7. Technical Cookies',
    'privacy.cookies.desc': 'This website only uses technical cookies strictly necessary to maintain your secure logged-in session. No advertising trackers or profiling cookies are used. In accordance with CNIL guidelines, these essential cookies are exempt from prior consent.',

    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome, ',
    'dashboard.role': 'Status: ',
    'dashboard.tools': 'Available Tools',
    'dashboard.profile': 'My Profile',
    'dashboard.profile.desc': 'Manage your personal information and preferences.',
    'dashboard.edit': 'Edit →',
    'dashboard.books': 'Book Management',
    'dashboard.books.desc': 'Add, edit, or delete books from the catalog.',
    'dashboard.books.manage': 'Manage books →',
    'dashboard.events': 'Events Management',
    'dashboard.events.desc': 'Create and organize association events.',
    'dashboard.events.manage': 'Manage events →',
    'dashboard.routes': 'Circular Routes',
    'dashboard.routes.desc': 'Manage the world map, steps, and actions.',
    'dashboard.routes.manage': 'Manage routes →',
    'dashboard.roles': 'Role Management',
    'dashboard.roles.desc': 'Assign roles (Admin, Treasurer) to users.',
    'dashboard.roles.manage': 'Manage members →',
    'dashboard.logout': 'Log out',
    'dashboard.events.upcoming': 'My upcoming events',
    'dashboard.events.none': 'You are not registered for any upcoming events.',
    'dashboard.events.view': 'View available events →',
    'dashboard.delete.confirm': 'Are you sure you want to permanently delete your account? This action cannot be undone.',
    'dashboard.delete.password_label': 'Password to confirm',
    'dashboard.delete.password_placeholder': 'Password',
    'dashboard.delete.button': 'Delete my account',

    'profile.edit.title': 'Edit my profile',
    'profile.edit.name': 'Full name',
    'profile.edit.description': 'Description / Bio',
    'profile.edit.avatar': 'Profile picture',
    'profile.edit.save': 'Save changes',
    'profile.edit.success': 'Profile updated successfully.',
    'profile.edit.error': 'Error updating profile.',

    'hero.title': 'Circular Transmission',
    'hero.subtitle': 'Building bridges between generations by sharing culture, values, and peace.',
    'hero.cta.discover': 'Discover our actions',
    'hero.cta.support': 'Support the association',

    'footer.description': 'Circular Transmission is an association dedicated to intergenerational transmission and cultural sharing.',
    'footer.rights': 'All rights reserved.',
  }
} as const;
