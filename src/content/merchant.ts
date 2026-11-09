import type { Locale } from './pages'
type Guide = { packingTitle: string; packingLead: string; packingPoints: string[]; packingAlt: string; packingCaption: string; catalogueAlt: string; catalogueCaption: string; prepareTitle: string; prepareLead: string; checklist: { title: string; text: string }[]; faqTitle: string; faqs: { q: string; a: string }[] }
export const merchantGuide: Record<Locale, Guide> = {
  fr: {
    catalogueAlt: 'Image générée par IA : une commerçante photographie un textile pour préparer son catalogue.', catalogueCaption: 'Scène fictive · Préparer les photos de son catalogue.',
    packingTitle: 'La commande se prépare dans votre boutique.', packingLead: 'SEQUO Vendor vous aide à organiser les étapes. Votre équipe garde la main sur les produits et sur leur préparation avant la prise en charge du colis.',
    packingPoints: ['Consultez les articles, les quantités et les options de la commande reçue.', 'Confirmez la préparation et protégez les produits avec un emballage adapté.', 'Signalez le colis prêt et retrouvez les étapes enregistrées jusqu’à sa remise.'],
    packingAlt: 'Image générée par IA : un commerçant protège un bol avec du papier kraft avant de le mettre en colis.', packingCaption: 'Scène fictive · Emballer une commande avec soin.',
    prepareTitle: 'Avant de nous présenter votre boutique.', prepareLead: 'Quelques informations concrètes permettent à l’équipe de comprendre votre activité et de discuter des possibilités de partenariat dans votre zone.',
    checklist: [
      { title: 'Votre commerce et votre localisation.', text: 'Indiquez le nom de la boutique, son activité, son quartier et la personne à contacter.' },
      { title: 'Les produits que vous souhaitez proposer.', text: 'Préparez des informations claires : photos adaptées, description, prix, quantités et options utiles au choix du client.' },
      { title: 'Votre organisation au quotidien.', text: 'Expliquez qui suivra les commandes, vos disponibilités et la façon dont vous préparez les colis.' },
      { title: 'Vos questions sur le partenariat.', text: 'Échangez avec SEQUO sur les conditions d’accès, les frais applicables, les zones ouvertes et les modalités de règlement avant de vous engager.' },
    ],
    faqTitle: 'Vos questions de commerçant.', faqs: [
      { q: 'Dois-je déjà avoir une boutique en ligne ?', a: 'Présentez votre commerce et vos produits à l’équipe, même si vous ne disposez pas encore d’une vitrine en ligne. Les possibilités d’accès et l’accompagnement à la mise en place sont à confirmer avec SEQUO.' },
      { q: 'Que puis-je renseigner dans mon catalogue ?', a: 'Les fiches produits regroupent les photos, les descriptions, les prix et les options proposées. Les informations et médias doivent respecter les règles du catalogue. Une fiche claire aide le client à choisir ; elle ne remplace pas la disponibilité réelle de vos produits.' },
      { q: 'Tous mes produits doivent-ils être négociables ?', a: 'Non. Les propositions de prix concernent uniquement les produits pour lesquels la négociation est autorisée. Le catalogue et les échanges restent rattachés à votre commerce.' },
      { q: 'Quels sont les frais et les conditions de règlement ?', a: 'Demandez à l’équipe les conditions applicables à votre activité. Les montants enregistrés dans l’espace commerçant ne constituent pas à eux seuls un versement. Aucun tarif universel ni calendrier de paiement n’est annoncé sur cette page.' },
    ],
  },
  en: {
    catalogueAlt: 'AI-generated image: a shopkeeper photographs a textile to prepare her product catalogue.', catalogueCaption: 'Fictional scene · Preparing catalogue photography.',
    packingTitle: 'Preparation happens in your shop.', packingLead: 'SEQUO Vendor helps you organise the steps. Your team stays responsible for the products and their preparation before the parcel is collected.',
    packingPoints: ['Review the items, quantities and options in the incoming order.', 'Confirm preparation and protect the products with suitable packaging.', 'Mark the parcel ready and follow the recorded steps through to handover.'],
    packingAlt: 'AI-generated image: a shopkeeper protects a ceramic bowl with kraft paper before packing it.', packingCaption: 'Fictional scene · Packing an order with care.',
    prepareTitle: 'Before introducing your shop.', prepareLead: 'A few practical details help the team understand your business and discuss partnership opportunities in your area.',
    checklist: [
      { title: 'Your shop and its location.', text: 'Share the shop name, its activity, neighbourhood and the person to contact.' },
      { title: 'The products you want to offer.', text: 'Prepare clear information: suitable photos, descriptions, prices, quantities and options that help customers choose.' },
      { title: 'Your everyday organisation.', text: 'Explain who will follow incoming orders, your availability and how you prepare parcels.' },
      { title: 'Your partnership questions.', text: 'Discuss access requirements, applicable fees, open service areas and settlement arrangements with SEQUO before committing.' },
    ],
    faqTitle: 'Questions from shopkeepers.', faqs: [
      { q: 'Do I already need an online shop?', a: 'Introduce your shop and products to the team, even if you do not yet have an online storefront. Access opportunities and setup support should be confirmed with SEQUO.' },
      { q: 'What information can I add to my catalogue?', a: 'Product listings bring together photos, descriptions, prices and available options. Information and media must follow catalogue rules. Clear listings help customers choose; they do not replace the actual availability of your products.' },
      { q: 'Does every product have to allow bargaining?', a: 'No. Price offers apply only to products where bargaining is allowed. The catalogue and exchanges remain linked to your shop.' },
      { q: 'What are the fees and settlement terms?', a: 'Ask the team for the terms that apply to your business. Amounts recorded in the merchant workspace do not by themselves mean a transfer has taken place. This page does not announce a universal tariff or payment schedule.' },
    ],
  },
}
