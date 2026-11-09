export type Locale = 'fr' | 'en'
export type Page = 'home' | 'app' | 'merchants' | 'riders' | 'relays' | 'about' | 'help' | 'contact'
export type ProductPage = 'app' | 'merchants' | 'riders' | 'relays'

export const paths: Record<Locale, Record<Page, string>> = {
  fr: { home: '/', app: '/application', merchants: '/commercants', riders: '/livreurs', relays: '/points-relais', about: '/a-propos', help: '/aide', contact: '/contact' },
  en: { home: '/en', app: '/en/app', merchants: '/en/merchants', riders: '/en/riders', relays: '/en/relay-points', about: '/en/about', help: '/en/help', contact: '/en/contact' },
}
export const pageIds = Object.keys(paths.fr) as Page[]
export const locales: Locale[] = ['fr', 'en']
export function resolvePath(path: string) {
  const clean = path.replace(/\/$/, '') || '/'
  for (const locale of locales) {
    for (const page of pageIds) {
      if (paths[locale][page] === clean) return { locale, page, found: true }
    }
  }
  return { locale: clean.startsWith('/en') ? 'en' as const : 'fr' as const, page: 'home' as Page, found: false }
}

type Feature = { icon: string; title: string; text: string }
type Product = {
  name: string; product: string; icon: string; title: string; emphasis: string; lead: string
  action: string; subject: string; intro: string; detail: string
  features: Feature[]; steps: { title: string; text: string }[]
  screens: { id: string; label: string; caption: string; framed?: boolean }[]
  question: string; answer: string; next: string
}
type Copy = {
  nav: Record<Page, string>; partners: string; menu: string; close: string; skip: string; mainNav: string; footerNav: string
  language: string; localeName: string; otherLanguage: string; homeLabel: string
  home: { title: string; emphasis: string; lead: string; action: string; secondary: string; imageAlt: string; imageCaption: string; handoff: string; handoffSmall: string; strip: string; stripStrong: string; appTitle: string; appEmphasis: string; appText: string; appAction: string; rolesTitle: string; rolesEmphasis: string; rolesText: string; howTitle: string; steps: { title: string; text: string }[] }
  products: Record<ProductPage, Product>
  common: { discover: string; how: string; inside: string; enlarge: string; closeImage: string; nextScreen: string; previousScreen: string; appScreens: string; frenchScreen: string; viewHelp: string; explore: string; contactTitle: string; contactEmphasis: string; contactText: string; contactAction: string; footerLine: string; footerSub: string; top: string; screenshotAlt: string; related: string }
  about: { title: string; emphasis: string; lead: string; storyTitle: string; story: string[]; values: Feature[]; placeTitle: string; placeText: string; rolesTitle: string }
  help: { title: string; emphasis: string; lead: string; search: string; searchPlaceholder: string; all: string; noResults: string; reset: string; ask: string; faqs: { id: string; category: string; q: string; a: string }[] }
  contact: { title: string; emphasis: string; lead: string; emailLabel: string; name: string; namePlaceholder: string; topic: string; message: string; messagePlaceholder: string; action: string; note: string; direct: string; topics: string[]; draftGreeting: string }
  notFound: { title: string; text: string; action: string }
}

export const copy: Record<Locale, Copy> = {
  fr: {
    nav: { home: 'Accueil', app: "L’application", merchants: 'Commerçants', riders: 'Livreurs', relays: 'Points relais', about: 'À propos', help: 'Aide', contact: 'Contact' },
    partners: 'Nos partenaires', menu: 'Menu', close: 'Fermer', skip: 'Aller au contenu', mainNav: 'Navigation principale', footerNav: 'Explorer SEQUO',
    language: 'Langue du site', localeName: 'Français', otherLanguage: 'English', homeLabel: 'SEQUO — accueil',
    home: {
      title: 'Tout près.', emphasis: 'Tout simplement.',
      lead: 'Vos commerçants. Vos achats. Votre livraison. SEQUO rapproche tout ce qui compte au quotidien.',
      action: 'Découvrir l’application', secondary: 'Rejoindre SEQUO',
      imageAlt: 'Illustration d’une commerçante remettant un colis à un livreur devant une boutique de quartier.',
      imageCaption: 'Une vision du quotidien avec SEQUO · Illustration', handoff: 'Du commerce à votre porte.', handoffSmall: 'Un lien à chaque étape.',
      strip: 'Un même lien.', stripStrong: 'Quatre façons d’avancer.',
      appTitle: 'Votre quotidien,', appEmphasis: 'en quelques gestes.',
      appText: 'Découvrez les produits, préparez votre panier et retrouvez les étapes de votre commande. Une application pour garder vos achats à portée de main.',
      appAction: 'Voir comment ça fonctionne', rolesTitle: 'Chacun son métier.', rolesEmphasis: 'Un parcours commun.',
      rolesText: 'Des outils adaptés à ceux qui achètent, préparent, transportent et remettent les colis.', howTitle: 'De votre choix à votre porte.',
      steps: [
        { title: 'Vous choisissez.', text: 'Les produits et les options proposés par les commerçants, réunis dans votre panier.' },
        { title: 'La commande avance.', text: 'Le commerçant prépare. Le livreur prend en charge. Vous retrouvez les étapes dans l’application.' },
        { title: 'Vous recevez.', text: 'À domicile ou dans un point relais proposé pour les articles de votre commande.' },
      ],
    },
    products: {
      app: {
        name: 'Clients', product: 'SEQUO', icon: 'bag', title: 'Vos commerces,', emphasis: 'dans votre poche.',
        lead: 'Découvrez les produits des commerçants et gardez le fil de vos achats, du panier à la réception.',
        action: 'Me renseigner sur l’accès', subject: 'Découvrir SEQUO — client', intro: 'Tout ce qui accompagne votre achat.',
        detail: 'Retrouvez les informations utiles au même endroit. Les choix proposés tiennent compte de votre panier et des services disponibles.',
        features: [
          { icon: 'bag', title: 'Un panier à votre façon.', text: 'Parcourez le catalogue, choisissez vos quantités et les options proposées pour chaque article.' },
          { icon: 'route', title: 'Des étapes à suivre.', text: 'Retrouvez vos commandes, leur préparation, leur prise en charge et leur remise.' },
          { icon: 'return', title: 'Un après-achat suivi.', text: 'Déposez une demande de retour pour un article éligible et consultez les instructions et son statut.' },
        ],
        steps: [
          { title: 'Explorez les produits.', text: 'Consultez les informations, les photos et les options des articles publiés.' },
          { title: 'Préparez votre commande.', text: 'Vérifiez le panier, les frais proposés et les destinations disponibles avant de poursuivre.' },
          { title: 'Gardez le fil.', text: 'Retrouvez la commande et les indications utiles jusqu’à sa remise.' },
        ],
        screens: [
          { id: 'customer-home', label: 'Découvrir', caption: 'SEQUO · L’accueil et le catalogue' },
          { id: 'customer-markets', label: 'Les commerces', caption: 'SEQUO · La découverte des commerces' },
        ],
        question: 'Puis-je déjà télécharger l’application ?', answer: 'Le lancement public est en préparation. Contactez l’équipe pour connaître les possibilités d’accès et les zones ouvertes. Les liens officiels seront publiés lorsqu’ils seront disponibles.', next: 'Une question avant de commencer ?',
      },
      merchants: {
        name: 'Commerçants', product: 'SEQUO Vendor', icon: 'store', title: 'Votre boutique.', emphasis: 'Votre activité.',
        lead: 'Présentez vos produits et organisez les commandes à préparer, avec un espace consacré à votre commerce.',
        action: 'Présenter ma boutique', subject: 'Rejoindre SEQUO — commerçant', intro: 'De la vitrine à la préparation.',
        detail: 'SEQUO Vendor accompagne le travail du commerçant : publier les bons produits, répondre aux commandes et suivre ce qui a été préparé.',
        features: [
          { icon: 'store', title: 'Votre catalogue.', text: 'Renseignez vos produits, leurs photos, leurs options et les informations qui aident les clients à choisir.' },
          { icon: 'parcel', title: 'Vos commandes.', text: 'Consultez les commandes reçues, confirmez leur prise en charge et signalez les colis prêts.' },
          { icon: 'check', title: 'Votre visibilité.', text: 'Retrouvez l’activité, les retours et les états de règlement enregistrés pour votre boutique.' },
        ],
        steps: [
          { title: 'Parlons de votre commerce.', text: 'Présentez votre activité, vos produits et votre zone à l’équipe SEQUO.' },
          { title: 'Préparez votre vitrine.', text: 'Organisez le catalogue, les photos, les options et les informations de la boutique.' },
          { title: 'Organisez la préparation.', text: 'Utilisez votre espace pour suivre les commandes et les colis qui attendent leur prise en charge.' },
        ],
        screens: [
          { id: 'vendor-dashboard', label: 'Vue d’ensemble', caption: 'SEQUO Vendor · Le tableau de bord' },
          { id: 'vendor-orders', label: 'Commandes', caption: 'SEQUO Vendor · La préparation des commandes' },
        ],
        question: 'Quelles sont les conditions pour rejoindre SEQUO ?', answer: 'Les conditions de partenariat et les possibilités d’ouverture sont à confirmer avec l’équipe. Présentez votre boutique par email : l’activité, la localisation et les produits sont un bon point de départ.', next: 'Votre boutique a sa place dans la conversation.',
      },
      riders: {
        name: 'Livreurs', product: 'SEQUO Rider', icon: 'route', title: 'Chaque mission,', emphasis: 'étape par étape.',
        lead: 'Les informations utiles pour prendre en charge les colis, rejoindre la destination et confirmer leur remise.',
        action: 'Devenir livreur partenaire', subject: 'Rejoindre SEQUO — livreur', intro: 'Un espace pour avancer clairement.',
        detail: 'Retrouvez les missions qui vous sont attribuées et les étapes à confirmer, sans perdre le contexte du colis.',
        features: [
          { icon: 'route', title: 'Vos missions.', text: 'Consultez les missions attribuées, les informations de collecte et les destinations.' },
          { icon: 'shield', title: 'Des remises confirmées.', text: 'Enregistrez les étapes et les justificatifs demandés lors de la prise en charge et de la remise.' },
          { icon: 'info', title: 'Un historique utile.', text: 'Retrouvez les missions réalisées et signalez les problèmes rencontrés sur votre parcours.' },
        ],
        steps: [
          { title: 'Prenez connaissance de la mission.', text: 'Retrouvez le colis, les étapes et les informations de destination.' },
          { title: 'Confirmez la prise en charge.', text: 'Suivez les indications de la mission et renseignez les confirmations demandées.' },
          { title: 'Terminez la remise.', text: 'Confirmez la remise avec le justificatif requis, ou signalez un problème à traiter.' },
        ],
        screens: [
          { id: 'rider-missions', label: 'Missions', caption: 'SEQUO Rider · Les missions' },
          { id: 'rider-history', label: 'Historique', caption: 'SEQUO Rider · Les missions réalisées' },
        ],
        question: 'Comment devenir partenaire livreur ?', answer: 'Écrivez à SEQUO en indiquant votre zone et votre disponibilité. L’équipe vous renseignera sur les conditions, les documents attendus et les possibilités de participation.', next: 'Faisons connaissance avant la première mission.',
      },
      relays: {
        name: 'Points relais', product: 'SEQUO Hub', icon: 'parcel', title: 'Un point de proximité.', emphasis: 'Un lien en plus.',
        lead: 'Accueillez les colis éligibles et organisez les réceptions, les retraits et l’historique de votre point relais.',
        action: 'Proposer un point relais', subject: 'Rejoindre SEQUO — point relais', intro: 'Chaque colis, à sa place.',
        detail: 'SEQUO Hub réunit les informations du point relais et les actions du comptoir dans un espace consacré aux colis qui lui sont confiés.',
        features: [
          { icon: 'parcel', title: 'Une réception suivie.', text: 'Enregistrez la présence des colis et retrouvez les emplacements de rangement.' },
          { icon: 'shield', title: 'Un retrait vérifié.', text: 'Vérifiez le code personnel et l’identité avant de confirmer la remise au client.' },
          { icon: 'return', title: 'Un historique conservé.', text: 'Consultez les dépôts, les retraits et la réception des retours éligibles.' },
        ],
        steps: [
          { title: 'Présentez votre lieu.', text: 'Partagez votre localisation, vos horaires et les possibilités d’accueil des colis.' },
          { title: 'Organisez le comptoir.', text: 'Préparez les emplacements et les personnes qui assureront les réceptions et les retraits.' },
          { title: 'Accompagnez chaque remise.', text: 'Suivez les colis confiés au point et confirmez les étapes dans SEQUO Hub.' },
        ],
        screens: [
          { id: 'hub-dashboard', label: 'Le relais', caption: 'SEQUO Hub · La vue des colis', framed: true },
          { id: 'hub-history', label: 'L’historique', caption: 'SEQUO Hub · Les événements du relais', framed: true },
        ],
        question: 'Tous les produits peuvent-ils être retirés en relais ?', answer: 'Non. Les articles alimentaires, périssables et sensibles sont exclus du retrait en relais. Les points proposés dépendent des articles du panier et de leur disponibilité.', next: 'Vous avez un lieu pour créer du lien ?',
      },
    },
    common: { discover: 'Découvrir', how: 'Comment ça fonctionne', inside: 'Dans l’application', enlarge: 'Agrandir la capture', closeImage: 'Fermer la capture', nextScreen: 'Capture suivante', previousScreen: 'Capture précédente', appScreens: 'Écrans de l’application', frenchScreen: 'Interface en français', viewHelp: 'Consulter l’aide', explore: 'Explorer SEQUO', contactTitle: 'Le prochain lien,', contactEmphasis: 'c’est peut-être vous.', contactText: 'Une boutique, une envie de livrer, un lieu pour accueillir les colis ou une question sur l’application ? Parlons-en.', contactAction: 'Écrire à l’équipe', footerLine: 'Le commerce local.', footerSub: 'Les liens en plus.', top: 'En haut', screenshotAlt: 'Capture de l’application', related: 'À découvrir aussi' },
    about: {
      title: 'Des commerces.', emphasis: 'Et des liens.', lead: 'SEQUO rapproche les personnes qui achètent, préparent, transportent et remettent les commandes.',
      storyTitle: 'Un quotidien mieux coordonné.',
      story: ['Un achat local fait intervenir plusieurs personnes. Le client choisit, le commerçant prépare, le livreur prend en charge et, parfois, un point relais accueille le colis.', 'SEQUO réunit ces étapes dans des espaces adaptés à chaque rôle. Le fil conducteur reste le même : savoir où en est la commande et ce qu’il faut faire ensuite.'],
      values: [
        { icon: 'store', title: 'La proximité.', text: 'Mettre les produits et les personnes du commerce local au centre du parcours.' },
        { icon: 'route', title: 'La clarté.', text: 'Donner à chaque acteur les informations utiles à l’étape qui le concerne.' },
        { icon: 'shield', title: 'Le suivi.', text: 'Conserver les étapes et les confirmations pour mieux comprendre chaque remise.' },
      ],
      placeTitle: 'Pensé pour le commerce local à Lomé.', placeText: 'Le projet s’inscrit dans le quotidien des commerces au Togo. Pour connaître les zones et les possibilités d’accès ouvertes, échangez directement avec l’équipe.', rolesTitle: 'Quatre espaces, une même idée.',
    },
    help: {
      title: 'Une question ?', emphasis: 'Commençons ici.', lead: 'L’application, les commandes, les points relais et les possibilités d’accès : les réponses utiles, au même endroit.',
      search: 'Rechercher dans l’aide', searchPlaceholder: 'Commande, retrait, retour…', all: 'Tout', noResults: 'Aucune réponse ne correspond à votre recherche.', reset: 'Effacer la recherche', ask: 'Une autre question ? Écrivez-nous.',
      faqs: [
        { id: 'acces', category: 'L’application', q: 'Comment accéder aux applications ?', a: 'Le lancement public est en préparation. Contactez SEQUO pour connaître les possibilités d’accès et les zones ouvertes. Les liens officiels de téléchargement seront publiés lorsqu’ils seront disponibles.' },
        { id: 'commande', category: 'Les commandes', q: 'Où retrouver ma commande ?', a: 'L’espace Commandes de l’application permet de retrouver les achats et les statuts enregistrés : préparation, prise en charge et remise.' },
        { id: 'relais', category: 'Les points relais', q: 'Puis-je faire livrer tous les produits en point relais ?', a: 'Non. Le retrait en relais dépend du panier et des points disponibles. Les produits alimentaires, périssables et sensibles sont exclus de ce mode de réception.' },
        { id: 'retrait', category: 'Les points relais', q: 'Que faut-il pour retirer un colis ?', a: 'Munissez-vous du code personnel fourni pour le retrait et de la pièce d’identité demandée. Le point relais vérifie ces éléments avant de confirmer la remise.' },
        { id: 'negociation', category: 'Les commandes', q: 'Comment fonctionne la négociation ?', a: 'Certains commerçants autorisent les offres sur leurs produits. Les échanges et le prix accepté sont enregistrés dans l’application. Un prix accepté reste valable 24 heures pour le client et le produit concernés.' },
        { id: 'retours', category: 'Les commandes', q: 'Puis-je demander un retour ?', a: 'Pour une commande et des produits éligibles, une demande peut être déposée dans les 72 heures suivant la livraison. Retrouvez ensuite son statut et les instructions dans l’application. Un remboursement dépend de la réception et de la vérification du retour.' },
        { id: 'paiements', category: 'Les services', q: 'Les paiements mobiles sont-ils disponibles ?', a: 'Les connexions aux opérateurs de paiement sont en préparation. Les paiements, remboursements et versements électroniques ne sont pas encore ouverts au public.' },
        { id: 'offres', category: 'Les services', q: 'Y a-t-il des abonnements ou des récompenses de parrainage ?', a: 'Ces offres ne sont pas activées. Leurs conditions et leurs tarifs seront communiqués après validation par SEQUO.' },
        { id: 'partenaire', category: 'Les partenaires', q: 'Comment présenter mon activité à SEQUO ?', a: 'Utilisez la page Contact et choisissez votre activité : boutique, livraison ou point relais. Indiquez votre localisation et les informations utiles dans votre message.' },
      ],
    },
    contact: { title: 'Faisons', emphasis: 'connaissance.', lead: 'Parlez-nous de votre boutique, de votre activité ou de la façon dont vous aimeriez utiliser SEQUO.', emailLabel: 'Écrivez-nous directement', name: 'Votre nom', namePlaceholder: 'Comment vous appeler ?', topic: 'Vous nous contactez pour…', message: 'Votre message', messagePlaceholder: 'Votre activité, votre localisation, votre question…', action: 'Préparer mon email', note: 'Votre messagerie s’ouvrira avec le message préparé. Rien n’est envoyé ou enregistré par ce formulaire.', direct: 'Vous préférez écrire directement ?', topics: ['Une question sur l’application', 'Présenter ma boutique', 'Devenir livreur partenaire', 'Proposer un point relais', 'Une autre demande'], draftGreeting: 'Bonjour l’équipe SEQUO,' },
    notFound: { title: 'Cette page reste à trouver.', text: 'Le lien a peut-être changé. Retrouvez les espaces SEQUO depuis l’accueil.', action: 'Revenir à l’accueil' },
  },
  en: {
    nav: { home: 'Home', app: 'The app', merchants: 'Merchants', riders: 'Riders', relays: 'Relay points', about: 'About', help: 'Help', contact: 'Contact' },
    partners: 'Our partners', menu: 'Menu', close: 'Close', skip: 'Skip to content', mainNav: 'Main navigation', footerNav: 'Explore SEQUO',
    language: 'Website language', localeName: 'English', otherLanguage: 'Français', homeLabel: 'SEQUO — home',
    home: {
      title: 'Close to you.', emphasis: 'Simply connected.', lead: 'Your shops. Your purchases. Your delivery. SEQUO brings everyday shopping closer together.', action: 'Discover the app', secondary: 'Join SEQUO', imageAlt: 'Illustration of a shopkeeper handing a parcel to a rider outside a neighbourhood shop.', imageCaption: 'An everyday vision with SEQUO · Illustration', handoff: 'From the shop to your door.', handoffSmall: 'Connected at every step.', strip: 'One shared connection.', stripStrong: 'Four ways forward.', appTitle: 'Your everyday shopping,', appEmphasis: 'a few taps away.', appText: 'Explore products, prepare your basket and find the latest steps of your order. Keep your purchases within reach, in one app.', appAction: 'See how it works', rolesTitle: 'Different roles.', rolesEmphasis: 'One shared journey.', rolesText: 'Tools for the people who shop, prepare, carry and hand over parcels.', howTitle: 'From your choice to your door.',
      steps: [ { title: 'You choose.', text: 'Products and available options from merchants, brought together in your basket.' }, { title: 'The order moves forward.', text: 'The merchant prepares. The rider collects. You find the recorded steps in the app.' }, { title: 'You receive.', text: 'At your chosen address, or at a relay point offered for the items in your order.' } ],
    },
    products: {
      app: {
        name: 'Customers', product: 'SEQUO', icon: 'bag', title: 'Your local shops,', emphasis: 'in your pocket.', lead: 'Discover products from merchants and follow your purchases from basket to handover.', action: 'Ask about access', subject: 'Discover SEQUO — customer', intro: 'Everything around your purchase.', detail: 'Find the useful information in one place. Available choices depend on your basket and the services currently open.',
        features: [ { icon: 'bag', title: 'Your basket, your way.', text: 'Browse the catalogue, choose quantities and select the options offered for each item.' }, { icon: 'route', title: 'Steps you can follow.', text: 'Find your orders and their recorded preparation, collection and handover stages.' }, { icon: 'return', title: 'Support after the purchase.', text: 'Request a return for an eligible item, then find its instructions and status.' } ],
        steps: [ { title: 'Explore the products.', text: 'View information, photos and available options for published items.' }, { title: 'Prepare your order.', text: 'Review your basket, the proposed fees and available destinations before continuing.' }, { title: 'Stay up to date.', text: 'Find the order and the information you need through to its handover.' } ],
        screens: [ { id: 'customer-home', label: 'Discover', caption: 'SEQUO · Home and catalogue' }, { id: 'customer-markets', label: 'Shops', caption: 'SEQUO · Discovering shops' } ],
        question: 'Can I download the app yet?', answer: 'The public launch is being prepared. Contact the team to ask about access and open service areas. Official download links will be published when available.', next: 'A question before getting started?',
      },
      merchants: {
        name: 'Merchants', product: 'SEQUO Vendor', icon: 'store', title: 'Your shop.', emphasis: 'Your business.', lead: 'Present your products and organise incoming orders in a space dedicated to your shop.', action: 'Introduce my shop', subject: 'Join SEQUO — merchant', intro: 'From the shopfront to preparation.', detail: 'SEQUO Vendor supports the merchant’s day: publishing products, responding to orders and keeping track of preparation.',
        features: [ { icon: 'store', title: 'Your catalogue.', text: 'Add products, photos, options and the details that help customers choose.' }, { icon: 'parcel', title: 'Your orders.', text: 'Review incoming orders, confirm preparation and mark parcels as ready for collection.' }, { icon: 'check', title: 'Your overview.', text: 'Find the activity, returns and settlement records associated with your shop.' } ],
        steps: [ { title: 'Tell us about your shop.', text: 'Introduce your business, products and location to the SEQUO team.' }, { title: 'Prepare your shopfront.', text: 'Organise your catalogue, photos, options and shop information.' }, { title: 'Organise preparation.', text: 'Use your workspace to follow orders and parcels awaiting collection.' } ],
        screens: [ { id: 'vendor-dashboard', label: 'Overview', caption: 'SEQUO Vendor · Dashboard' }, { id: 'vendor-orders', label: 'Orders', caption: 'SEQUO Vendor · Order preparation' } ],
        question: 'What are the conditions for joining SEQUO?', answer: 'Partnership terms and opening opportunities should be confirmed with the team. Introduce your shop by email: its activity, location and products are a useful starting point.', next: 'Your shop belongs in the conversation.',
      },
      riders: {
        name: 'Riders', product: 'SEQUO Rider', icon: 'route', title: 'Every mission,', emphasis: 'step by step.', lead: 'The information you need to collect parcels, reach the destination and confirm a handover.', action: 'Become a rider partner', subject: 'Join SEQUO — rider', intro: 'A clear space for the way ahead.', detail: 'Find the missions assigned to you and the steps to confirm, without losing the context of the parcel.',
        features: [ { icon: 'route', title: 'Your missions.', text: 'View assigned missions, collection information and destinations.' }, { icon: 'shield', title: 'Confirmed handovers.', text: 'Record the required steps and proof when collecting and handing over parcels.' }, { icon: 'info', title: 'A useful history.', text: 'Find completed missions and report issues encountered along the way.' } ],
        steps: [ { title: 'Review the mission.', text: 'Find the parcel, its steps and the destination information.' }, { title: 'Confirm collection.', text: 'Follow the mission instructions and provide the confirmations requested.' }, { title: 'Complete the handover.', text: 'Confirm the handover with the required proof, or report an issue that needs attention.' } ],
        screens: [ { id: 'rider-missions', label: 'Missions', caption: 'SEQUO Rider · Missions' }, { id: 'rider-history', label: 'History', caption: 'SEQUO Rider · Completed missions' } ],
        question: 'How do I become a rider partner?', answer: 'Write to SEQUO with your location and availability. The team can explain the conditions, required documents and participation opportunities.', next: 'Let’s meet before the first mission.',
      },
      relays: {
        name: 'Relay points', product: 'SEQUO Hub', icon: 'parcel', title: 'A nearby collection point.', emphasis: 'One more connection.', lead: 'Welcome eligible parcels and organise receipts, collections and history at your relay point.', action: 'Propose a relay point', subject: 'Join SEQUO — relay point', intro: 'Every parcel in its place.', detail: 'SEQUO Hub brings relay-point information and counter actions together in a workspace for the parcels entrusted to it.',
        features: [ { icon: 'parcel', title: 'Recorded arrivals.', text: 'Record the parcels present at the relay and find their storage locations.' }, { icon: 'shield', title: 'Verified collection.', text: 'Check the personal code and identity before confirming a customer handover.' }, { icon: 'return', title: 'A retained history.', text: 'View deposits, collections and the receipt of eligible returns.' } ],
        steps: [ { title: 'Introduce your location.', text: 'Share your address, opening hours and capacity to welcome parcels.' }, { title: 'Organise the counter.', text: 'Prepare storage locations and the people who will handle receipts and collections.' }, { title: 'Follow every handover.', text: 'Track the parcels entrusted to the point and confirm each step in SEQUO Hub.' } ],
        screens: [ { id: 'hub-dashboard', label: 'The relay', caption: 'SEQUO Hub · Parcel overview', framed: true }, { id: 'hub-history', label: 'History', caption: 'SEQUO Hub · Relay events', framed: true } ],
        question: 'Can every product be collected at a relay?', answer: 'No. Food, perishable and sensitive items are excluded from relay collection. The points offered depend on the items in the basket and current availability.', next: 'Have a place that can bring people closer?',
      },
    },
    common: { discover: 'Discover', how: 'How it works', inside: 'Inside the app', enlarge: 'Enlarge screenshot', closeImage: 'Close screenshot', nextScreen: 'Next screenshot', previousScreen: 'Previous screenshot', appScreens: 'App screens', frenchScreen: 'French interface', viewHelp: 'Visit the help centre', explore: 'Explore SEQUO', contactTitle: 'The next connection', contactEmphasis: 'could be you.', contactText: 'A shop, an interest in delivery, a place to welcome parcels or a question about the app? Let’s talk.', contactAction: 'Write to the team', footerLine: 'Local commerce.', footerSub: 'More connected.', top: 'Back to top', screenshotAlt: 'App screenshot', related: 'Explore further' },
    about: { title: 'Local shops.', emphasis: 'Shared connections.', lead: 'SEQUO brings together the people who shop, prepare, carry and hand over orders.', storyTitle: 'A better-coordinated everyday.', story: ['A local purchase involves several people. A customer chooses, a merchant prepares, a rider collects and, sometimes, a relay point welcomes the parcel.', 'SEQUO connects these steps through workspaces designed for each role. The shared idea stays the same: knowing where an order stands and what comes next.'], values: [ { icon: 'store', title: 'Proximity.', text: 'Put the products and people of local commerce at the centre of the journey.' }, { icon: 'route', title: 'Clarity.', text: 'Give each person the information needed for their part of the process.' }, { icon: 'shield', title: 'Continuity.', text: 'Keep a record of the steps and confirmations behind each handover.' } ], placeTitle: 'Designed for local commerce in Lomé.', placeText: 'The project is rooted in the everyday life of shops in Togo. Contact the team to learn which areas and access opportunities are currently open.', rolesTitle: 'Four spaces, one shared idea.' },
    help: {
      title: 'A question?', emphasis: 'Start here.', lead: 'The app, orders, relay points and access: useful answers, in one place.', search: 'Search help', searchPlaceholder: 'Order, collection, return…', all: 'All', noResults: 'No answers match your search.', reset: 'Clear search', ask: 'Another question? Write to us.',
      faqs: [
        { id: 'acces', category: 'The app', q: 'How can I access the apps?', a: 'The public launch is being prepared. Contact SEQUO to ask about access and open service areas. Official download links will be published when available.' },
        { id: 'commande', category: 'Orders', q: 'Where can I find my order?', a: 'The Orders workspace in the app shows purchases and their recorded statuses, including preparation, collection and handover.' },
        { id: 'relais', category: 'Relay points', q: 'Can every product be delivered to a relay point?', a: 'No. Relay collection depends on the basket and available points. Food, perishable and sensitive goods are excluded from this collection method.' },
        { id: 'retrait', category: 'Relay points', q: 'What do I need to collect a parcel?', a: 'Bring the personal collection code and the identity document requested. The relay point checks these before confirming the handover.' },
        { id: 'negociation', category: 'Orders', q: 'How does bargaining work?', a: 'Some merchants allow offers on their products. Exchanges and the accepted price are recorded in the app. An accepted price remains valid for 24 hours for the customer and product concerned.' },
        { id: 'retours', category: 'Orders', q: 'Can I request a return?', a: 'For eligible orders and products, a request can be submitted within 72 hours after delivery. Find its status and instructions in the app. A refund depends on receipt and inspection of the return.' },
        { id: 'paiements', category: 'Services', q: 'Are mobile payments available?', a: 'Connections to payment operators are being prepared. Electronic payments, refunds and payouts are not yet open to the public.' },
        { id: 'offres', category: 'Services', q: 'Are subscriptions or referral rewards available?', a: 'These offers are not active. Terms and pricing will be announced after approval by SEQUO.' },
        { id: 'partenaire', category: 'Partners', q: 'How can I introduce my business to SEQUO?', a: 'Use the Contact page and choose your activity: shop, delivery or relay point. Include your location and relevant details in your message.' },
      ],
    },
    contact: { title: 'Let’s get', emphasis: 'to know each other.', lead: 'Tell us about your shop, your activity or how you would like to use SEQUO.', emailLabel: 'Write to us directly', name: 'Your name', namePlaceholder: 'What should we call you?', topic: 'You are contacting us about…', message: 'Your message', messagePlaceholder: 'Your activity, location or question…', action: 'Prepare my email', note: 'Your email app will open with the draft. This form does not send or store your message.', direct: 'Prefer to write directly?', topics: ['A question about the app', 'Introducing my shop', 'Becoming a rider partner', 'Proposing a relay point', 'Another enquiry'], draftGreeting: 'Hello SEQUO team,' },
    notFound: { title: 'We couldn’t find that page.', text: 'The link may have changed. Find the SEQUO workspaces from the home page.', action: 'Back to home' },
  },
}

export function pageMeta(locale: Locale, page: Page) {
  const text = copy[locale]
  if (page === 'home') return { title: locale === 'fr' ? 'SEQUO — Vos commerces, vos achats, votre livraison' : 'SEQUO — Your shops, your purchases, your delivery', description: text.home.lead }
  if (page in text.products) {
    const product = text.products[page as ProductPage]
    return { title: `${product.product} — ${text.nav[page]}`, description: product.lead }
  }
  const section = text[page as 'about' | 'help' | 'contact']
  return { title: `${text.nav[page]} — SEQUO`, description: section.lead }
}
