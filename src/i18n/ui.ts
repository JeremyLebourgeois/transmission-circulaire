export const languages = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
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
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Asociación',
    'nav.books': 'Nuestros Libros',
    'nav.events': 'Eventos',
    'nav.donate': 'Apoyar',
    'nav.login': 'Iniciar sesión',
    'nav.dashboard': 'Mi Espacio',
    'books.description': 'Descubra nuestros libros dedicados a la transmisión intergeneracional, la cultura y la paz.',
    'books.manage': 'Gestionar libros',
    'routes.manage': 'Gestionar rutas',
    'books.read_more': 'Saber más',
    'auth.register.title': 'Únete a la asociación',
    'auth.register.subtitle': 'Crea tu cuenta para interactuar con nuestra comunidad',
    'auth.email': 'Correo electrónico',
    'auth.password': 'Contraseña (mínimo 6 caracteres)',
    'auth.consent.prefix': 'Acepto la ',
    'auth.consent.link': 'política de privacidad',
    'auth.consent.suffix': ' sobre el tratamiento de mis datos.',
    'auth.register.submit': 'Registrarse',
    'auth.has_account': '¿Ya tienes una cuenta?',
    'auth.login.link': 'Iniciar sesión',

        'privacy.title': 'Aviso Legal y Política de Privacidad',
    'privacy.subtitle': 'Información legal, propiedad intelectual y protección de sus datos personales (RGPD).',
    'privacy.tab.legal': 'Aviso Legal',
    'privacy.tab.privacy': 'Protección de Datos (RGPD)',

    // Aviso legal
    'legal.editor.title': '1. Editor del sitio',
    'legal.editor.desc': 'Asociación Transmission Circulaire, regida por la ley francesa del 1 de julio de 1901.\nSede: Rueil-Malmaison (92500), Francia.\nNúmero RNA: W922023435.\nContacto: transmission.circulaire@gmail.com',

    'legal.director.title': '2. Dirección de la publicación',
    'legal.director.desc': 'Las copresidentas de la asociación: Éloïne Ramon-Burgada y Meltem Etcheberry.',

    'legal.host.title': '3. Alojamiento e infraestructura técnica',
    'legal.host.desc': '• Alojamiento web y distribución (CDN/SSR): Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, EE. UU. (https://www.cloudflare.com).\n• Base de datos y autenticación: Supabase Inc., 970 Toa Payoh North #07-04, Singapur 318992 (datos alojados en la Unión Europea - región AWS Fráncfort).',

    'legal.ip.title': '4. Propiedad intelectual y derechos de autor',
    'legal.ip.desc': 'Todos los elementos presentes en el sitio web (textos, relatos, fotografías, ilustraciones, logotipos y libros presentados) están protegidos por el Código de Propiedad Intelectual.\nSalvo indicación en contrario, son propiedad exclusiva de Transmission Circulaire o cuentan con autorización expresa de sus respectivos autores. Queda prohibida toda reproducción sin consentimiento previo por escrito.',

    'legal.credits.title': '5. Créditos y cartografía',
    'legal.credits.desc': 'El mapa interactivo de Rutas Circulares utiliza la biblioteca de código abierto Leaflet. Las capas de mapas son suministradas por Esri (ArcGIS World Light Gray Canvas — Tiles © Esri, DeLorme, NAVTEQ).\nFotografías e ilustraciones: Transmission Circulaire y colaboradores.',

    'legal.liability.title': '6. Limitación de responsabilidad y enlaces externos',
    'legal.liability.desc': 'La asociación se esfuerza por garantizar la exactitud de la información publicada. No se responsabiliza de posibles omisiones o interrupciones del servicio.\nEl sitio contiene enlaces a plataformas de terceros (como HelloAsso o LinkedIn), sobre las cuales no ejerce control.',

    // Privacidad & RGPD
    'privacy.dpo.title': '1. Responsable del tratamiento',
    'privacy.dpo.desc': 'Transmission Circulaire se compromete a proteger la privacidad de sus usuarios de conformidad con el RGPD (Reglamento UE 2016/679).\nResponsable: Asociación Transmission Circulaire — Contacto: transmission.circulaire@gmail.com',

    'privacy.data.title': '2. Datos recopilados y finalidades',
    'privacy.data.desc': '• Cuenta: correo electrónico obligatorio y contraseña segura.\n• Perfil: nombre, biografía y foto opcionales.\nEstos datos se utilizan únicamente para asegurar el acceso a su cuenta de miembro y gestionar sus aportaciones. No se comercializan a terceros.',

    'privacy.partners.title': '3. Proveedores y pagos seguros',
    'privacy.partners.desc': '• Supabase: alojamiento seguro en la Unión Europea.\n• HelloAsso: gestión integral de membresías, donaciones y eventos.\nImportante: Transmission Circulaire no almacena datos bancarios. Las transacciones son gestionadas de forma segura por HelloAsso (PCI-DSS, 3D-Secure).',

    'privacy.security.title': '4. Seguridad de las contraseñas',
    'privacy.security.desc': 'Las contraseñas se almacenan cifradas asimétricamente mediante los protocolos de seguridad de Supabase. Nadie puede acceder a ellas en texto claro. La conexión es cifrada mediante HTTPS/TLS.',

    'privacy.retention.title': '5. Plazo de conservación de los datos',
    'privacy.retention.desc': '• Datos de cuenta: conservados mientras la cuenta esté activa y eliminados de forma inmediata si solicita su supresión.\n• Justificantes contables de donaciones: conservados según los plazos legales obligatorios (10 años).',

    'privacy.rights.title': '6. Sus derechos y reclamaciones (CNIL)',
    'privacy.rights.desc': 'Tiene derecho de acceso, rectificación, portabilidad y supresión de sus datos personales. Puede ejercerlos desde su panel o escribiendo a: transmission.circulaire@gmail.com.\nTambién tiene derecho a presentar una reclamación ante la autoridad de protección de datos (CNIL — www.cnil.fr).',

    'privacy.cookies.title': '7. Cookies técnicas',
    'privacy.cookies.desc': 'Este sitio web utiliza exclusivamente cookies técnicas necesarias para mantener su sesión activa. No se emplean cookies de seguimiento publicitario, por lo que están exentas de consentimiento previo.',

    'dashboard.title': 'Panel de control',
    'dashboard.welcome': 'Bienvenido/a, ',
    'dashboard.role': 'Estado: ',
    'dashboard.tools': 'Herramientas disponibles',
    'dashboard.profile': 'Mi Perfil',
    'dashboard.profile.desc': 'Gestione su información personal y preferencias.',
    'dashboard.edit': 'Editar →',
    'dashboard.books': 'Gestión de Libros',
    'dashboard.books.desc': 'Añadir, editar o eliminar libros del catálogo.',
    'dashboard.books.manage': 'Gestionar libros →',
    'dashboard.roles': 'Gestión de Roles',
    'dashboard.roles.desc': 'Asignar roles (Administrador, Tesorero) a los usuarios.',
    'dashboard.roles.manage': 'Gestionar miembros →',
    'dashboard.logout': 'Cerrar sesión',

    'profile.edit.title': 'Editar mi perfil',
    'profile.edit.name': 'Nombre completo',
    'profile.edit.description': 'Descripción / Biografía',
    'profile.edit.avatar': 'Foto de perfil',
    'profile.edit.save': 'Guardar cambios',
    'profile.edit.success': 'Perfil actualizado con éxito.',
    'profile.edit.error': 'Error al actualizar el perfil.',

    'hero.title': 'Transmisión Circular',
    'hero.subtitle': 'Construyendo puentes entre generaciones a través del intercambio de cultura, valores y paz.',
    'hero.cta.discover': 'Descubrir nuestras acciones',
    'hero.cta.support': 'Apoyar a la asociación',

    'footer.description': 'Transmisión Circular es una asociación dedicada a la transmisión intergeneracional y al intercambio cultural.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.books': 'Unsere Bücher',
    'nav.events': 'Veranstaltungen',
    'nav.donate': 'Unterstützen',
    'nav.login': 'Anmelden',
    'nav.dashboard': 'Mein Bereich',
    'books.description': 'Entdecken Sie unsere Bücher zur intergenerationellen Weitergabe, Kultur und Frieden.',
    'books.manage': 'Bücher verwalten',
    'routes.manage': 'Routen verwalten',
    'books.read_more': 'Mehr erfahren',
    'auth.register.title': 'Treten Sie dem Verein bei',
    'auth.register.subtitle': 'Erstellen Sie Ihr Konto, um mit unserer Community zu interagieren',
    'auth.email': 'E-Mail-Adresse',
    'auth.password': 'Passwort (mind. 6 Zeichen)',
    'auth.consent.prefix': 'Ich akzeptiere die ',
    'auth.consent.link': 'Datenschutzbestimmungen',
    'auth.consent.suffix': ' bezüglich der Verarbeitung meiner Daten.',
    'auth.register.submit': 'Registrieren',
    'auth.has_account': 'Haben Sie bereits ein Konto?',
    'auth.login.link': 'Anmelden',

        'privacy.title': 'Impressum & Datenschutz',
    'privacy.subtitle': 'Rechtliche Hinweise, Urheberrecht und Schutz Ihrer personenbezogenen Daten (DSGVO).',
    'privacy.tab.legal': 'Impressum',
    'privacy.tab.privacy': 'Datenschutz (DSGVO)',

    // Impressum
    'legal.editor.title': '1. Herausgeber der Website',
    'legal.editor.desc': 'Verein Transmission Circulaire nach dem französischen Gesetz von 1901.\nSitz: Rueil-Malmaison (92500), Frankreich.\nRNA-Nummer: W922023435.\nKontakt: transmission.circulaire@gmail.com',

    'legal.director.title': '2. Verantw. für den Inhalt',
    'legal.director.desc': 'Die Co-Präsidentinnen des Vereins: Éloïne Ramon-Burgada und Meltem Etcheberry.',

    'legal.host.title': '3. Hosting & technische Infrastruktur',
    'legal.host.desc': '• Webhosting & CDN: Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA (https://www.cloudflare.com).\n• Datenbank & Authentifizierung: Supabase Inc., 970 Toa Payoh North #07-04, Singapur 318992 (Serverstandort Europäische Union - AWS Frankfurt).',

    'legal.ip.title': '4. Urheberrecht & geistiges Eigentum',
    'legal.ip.desc': 'Alle Inhalte dieser Website (Texte, Routenbeschreibungen, Fotos, Logos und vorgestellte Bücher) sind urheberrechtlich geschützt.\nOhne vorherige schriftliche Zustimmung ist jede Vervielfältigung oder Verbreitung strengstens untersagt.',

    'legal.credits.title': '5. Bild- & Kartennachweise',
    'legal.credits.desc': 'Die interaktive Routenkarte basiert auf der Open-Source-Bibliothek Leaflet. Kartenkacheln werden von Esri bereitgestellt (ArcGIS World Light Gray Canvas — Tiles © Esri, DeLorme, NAVTEQ).\nFotos: Transmission Circulaire und Projektpartner.',

    'legal.liability.title': '6. Haftungsausschluss & externe Links',
    'legal.liability.desc': 'Der Verein übernimmt keine Gewähr für die Richtigkeit oder Verfügbarkeit der Inhalte. Für die Inhalte verlinkter externer Seiten (z.B. HelloAsso, LinkedIn) sind ausschließlich deren Betreiber verantwortlich.',

    // Datenschutz & DSGVO
    'privacy.dpo.title': '1. Verantwortlicher',
    'privacy.dpo.desc': 'Transmission Circulaire schützt Ihre Privatsphäre gemäß der Datenschutz-Grundverordnung (DSGVO - EU-Verordnung 2016/679).\nVerantwortlicher: Verein Transmission Circulaire — Kontakt: transmission.circulaire@gmail.com',

    'privacy.data.title': '2. Erhobene Daten & Zwecke',
    'privacy.data.desc': '• Kontodaten: E-Mail-Adresse und sicheres Passwort.\n• Profil: Name, Biografie und Bild (optional).\nDie Daten dienen ausschließlich der Bereitstellung Ihres Mitgliederbereichs. Es erfolgt keine Weitergabe zu Werbezwecken.',

    'privacy.partners.title': '3. Auftragsverarbeiter & Zahlungen',
    'privacy.partners.desc': '• Supabase: Verschlüsseltes Datenhosting in der Europäischen Union.\n• HelloAsso: Sichere Abwicklung von Mitgliedschaften, Spenden und Veranstaltungen.\nWichtig: Transmission Circulaire speichert keinerlei Bankdaten. Finanztransaktionen erfolgen direkt über HelloAsso (PCI-DSS, 3D-Secure).',

    'privacy.security.title': '4. Passwortsicherheit',
    'privacy.security.desc': 'Passwörter werden durch asymmetrische Verschlüsselungsprotokolle von Supabase geschützt. Die Kommunikation erfolgt durchgehend über HTTPS/TLS.',

    'privacy.retention.title': '5. Speicherdauer',
    'privacy.retention.desc': '• Kontodaten: Gespeichert solange das Konto aktiv ist. Bei Kontolöschung werden diese Daten sofort gelöscht.\n• Buchhaltungsbelege für Spenden: Gesetzliche Aufbewahrungsfrist von 10 Jahren.',

    'privacy.rights.title': '6. Ihre Rechte & Beschwerderecht (CNIL)',
    'privacy.rights.desc': 'Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten. Kontakt: transmission.circulaire@gmail.com.\nSie haben zudem das Recht auf Beschwerde bei der Datenschutzbehörde (CNIL — www.cnil.fr).',

    'privacy.cookies.title': '7. Technische Cookies',
    'privacy.cookies.desc': 'Diese Website verwendet ausschließlich technisch notwendige Sitzungscookies. Es werden keine Tracking- oder Werbecookies eingesetzt.',

    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Willkommen, ',
    'dashboard.role': 'Status: ',
    'dashboard.tools': 'Verfügbare Werkzeuge',
    'dashboard.profile': 'Mein Profil',
    'dashboard.profile.desc': 'Verwalten Sie Ihre persönlichen Informationen und Einstellungen.',
    'dashboard.edit': 'Bearbeiten →',
    'dashboard.books': 'Buchverwaltung',
    'dashboard.books.desc': 'Bücher hinzufügen, bearbeiten oder aus dem Katalog entfernen.',
    'dashboard.books.manage': 'Bücher verwalten →',
    'dashboard.roles': 'Rollenverwaltung',
    'dashboard.roles.desc': 'Benutzern Rollen (Admin, Schatzmeister) zuweisen.',
    'dashboard.roles.manage': 'Mitglieder verwalten →',
    'dashboard.logout': 'Abmelden',

    'profile.edit.title': 'Mein Profil bearbeiten',
    'profile.edit.name': 'Vollständiger Name',
    'profile.edit.description': 'Beschreibung / Bio',
    'profile.edit.avatar': 'Profilbild',
    'profile.edit.save': 'Änderungen speichern',
    'profile.edit.success': 'Profil erfolgreich aktualisiert.',
    'profile.edit.error': 'Fehler bei der Aktualisierung des Profils.',

    'hero.title': 'Zirkuläre Weitergabe',
    'hero.subtitle': 'Brücken zwischen den Generationen bauen, indem wir Kultur, Werte und Frieden teilen.',
    'hero.cta.discover': 'Unsere Aktionen entdecken',
    'hero.cta.support': 'Die Organisation unterstützen',

    'footer.description': 'Zirkuläre Weitergabe ist ein Verein, der sich der intergenerationellen Weitergabe und dem kulturellen Austausch widmet.',
    'footer.rights': 'Alle Rechte vorbehalten.',
  }
} as const;
