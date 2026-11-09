import type { Locale } from './pages'
export const experience = {
  fr: {
    status: 'Lancement public en préparation', statusText: 'Découvrez le parcours client et contactez SEQUO pour connaître les possibilités d’accès.', accessLink: 'Disponibilité et accès',
    title: 'Vos premiers pas,', emphasis: 'avec SEQUO.', lead: 'Le lancement public se prépare. Cette page vous indique ce qui est disponible, ce qui arrive et comment poser vos questions à l’équipe.',
    accessTitle: 'Où en sommes-nous ?', accessCards: [
      { icon: 'bag', title: 'L’application client', text: 'Les liens officiels de téléchargement ne sont pas encore publiés. Vous pouvez déjà découvrir le parcours et les écrans de démonstration sur ce site.' },
      { icon: 'pin', title: 'Les points relais', text: 'Ils ne sont pas encore disponibles pour le retrait. Les adresses, horaires et indications seront publiés sur la page Retirer un colis à leur ouverture.' },
      { icon: 'person', title: 'Les premiers échanges', text: 'L’équipe est joignable par email et WhatsApp pour les questions d’accès, de zone et de partenariat. Un message ne constitue pas une inscription ni une commande.' },
    ],
    nextTitle: 'Une question avant de commencer ?', nextText: 'Indiquez votre ville ou quartier et ce que vous souhaitez faire avec SEQUO. Évitez les codes personnels, pièces d’identité et informations de paiement dans votre premier message.', email: 'Écrire par email', whatsapp: 'Parler sur WhatsApp', whatsappNote: 'Ouvre WhatsApp, un service externe. Vous choisissez si vous envoyez le message.', noStore: 'Les liens de téléchargement seront ajoutés ici lorsqu’ils seront disponibles.',
    walkthroughTitle: 'Du produit à la réception.', walkthroughLead: 'Un aperçu guidé du parcours dans l’application client. Les captures sont réelles et utilisent des données de démonstration ; elles n’annoncent pas l’ouverture du service.',
    guideSteps: [
      { title: 'Découvrez les produits.', text: 'Parcourez les commerces, consultez les fiches et choisissez les articles et options qui vous intéressent.', screen: 'customer-home', caption: 'SEQUO · Découvrir le catalogue' },
      { title: 'Vérifiez votre panier.', text: 'Relisez les articles, les quantités et les montants proposés avant de poursuivre.', screen: 'customer-basket', caption: 'SEQUO · Vérifier son panier' },
      { title: 'Choisissez la réception proposée.', text: 'Consultez les destinations et les frais proposés pour votre panier. Le retrait en relais sera proposé lorsque des points seront ouverts et éligibles.', screen: 'customer-delivery', caption: 'SEQUO · Choisir la réception' },
    ],
    relayStatus: 'Bientôt disponibles', relayTitle: 'Les points relais arrivent.', relayText: 'Aucun point relais n’est encore disponible pour le retrait. Les adresses, horaires et indications d’accès apparaîtront ici à l’ouverture des premiers points.', relayAction: 'Poser une question sur le retrait',
    contactPrivacy: 'En préparant un email ou en ouvrant WhatsApp, vous choisissez de poursuivre dans un service externe. Consultez notre notice de confidentialité.', privacyLink: 'Confidentialité', termsLink: 'Conditions du site',
  },
  en: {
    status: 'Public launch in preparation', statusText: 'Explore the customer journey and contact SEQUO to ask about access.', accessLink: 'Availability and access',
    title: 'Your first steps,', emphasis: 'with SEQUO.', lead: 'The public launch is being prepared. Find what is available, what is coming and how to ask the team your questions.',
    accessTitle: 'Where are we today?', accessCards: [
      { icon: 'bag', title: 'The customer app', text: 'Official download links have not been published yet. You can already explore the journey and demonstration screens on this website.' },
      { icon: 'pin', title: 'Relay points', text: 'Parcel collection is not available yet. Addresses, opening hours and directions will be published on the Collect a parcel page when the points open.' },
      { icon: 'person', title: 'Getting in touch', text: 'The team is available by email and WhatsApp for access, service-area and partnership questions. Sending a message does not register an account or place an order.' },
    ],
    nextTitle: 'A question before getting started?', nextText: 'Tell us your town or neighbourhood and what you would like to do with SEQUO. Leave personal codes, identity documents and payment information out of your first message.', email: 'Write by email', whatsapp: 'Talk on WhatsApp', whatsappNote: 'Opens WhatsApp, an external service. You choose whether to send the message.', noStore: 'Download links will be added here when they become available.',
    walkthroughTitle: 'From product to handover.', walkthroughLead: 'A guided look at the customer app. These are real captures with demonstration data; they do not announce that the service is open.',
    guideSteps: [
      { title: 'Discover products.', text: 'Browse shops, read product details and choose the items and options that interest you.', screen: 'customer-home', caption: 'SEQUO · Discovering the catalogue' },
      { title: 'Review your basket.', text: 'Check the items, quantities and proposed amounts before continuing.', screen: 'customer-basket', caption: 'SEQUO · Reviewing the basket' },
      { title: 'Choose an offered reception option.', text: 'Review the destinations and fees offered for your basket. Relay collection will be offered when eligible points are open.', screen: 'customer-delivery', caption: 'SEQUO · Choosing reception' },
    ],
    relayStatus: 'Coming soon', relayTitle: 'Relay points are on the way.', relayText: 'No relay point is available for collection yet. Addresses, opening hours and directions will appear here when the first points open.', relayAction: 'Ask about parcel collection',
    contactPrivacy: 'Preparing an email or opening WhatsApp takes you to an external service, where you choose whether to continue. Read our privacy notice.', privacyLink: 'Privacy', termsLink: 'Website terms',
  },
} satisfies Record<Locale, unknown>
