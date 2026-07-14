/**
 * Centralized constant definitions for the AETHEL web application.
 * Extracting these prevents unnecessary object recreation during React renders
 * and keeps the component files clean and focused on presentation logic.
 */

export const MATERIALS_DATA = [
  {
    id: '01',
    name: 'Italian Calfskin',
    desc: 'Sourced from legendary Tuscan tanneries, offering an exceptionally tight grain and a supple, buttery finish that develops a profound patina over decades of wear.',
    image: '/images/italian_calfskin.png'
  },
  {
    id: '02',
    name: 'Exotic Carbon Fiber',
    desc: 'A proprietary integration of aerospace-grade carbon fiber within the shank and heel counter, providing near-weightless structural integrity and striking visual contrast.',
    image: '/images/carbon_fiber.png'
  },
  {
    id: '03',
    name: 'Hand-Welted Soles',
    desc: 'Each oak-bark tanned leather sole is channeled and hand-welted by a master artisan, requiring over 12 hours of meticulous stitching for unparalleled durability and water resistance.',
    image: '/images/hand_welted.png'
  }
];

export const NAV_LINKS = [
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'Collection', href: '#collection' },
  { label: 'Heritage', href: '#heritage' }
];

export const FOOTER_LINKS_PRIMARY = [
  { label: 'Shipping', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'Contact', href: '#' }
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Journal', href: '#' }
];
