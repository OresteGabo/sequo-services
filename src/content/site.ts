/** Public contact details confirmed by the owner on 2026-11-09. */
export const publicContact = {
  email: 'contact@sequoservice.com',
  whatsappNumber: '+33 7 80 43 46 90',
  name: 'SEQUO',
  launchLocation: 'Lomé, Togo',
} as const
export const whatsappUrl = 'https://wa.me/' + publicContact.whatsappNumber.replace(/\D/g, '')
