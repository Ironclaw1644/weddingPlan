// Central business info (NAP), navigation, and social links.
// Single source of truth — reused by the layout, header, footer, and JSON-LD.

export const site = {
  name: 'Forrester Fields',
  // Repositioned brand: planner/coordinator, NOT a venue.
  legalName: 'Forrester Fields — Wedding & Event Planning',
  tagline: 'Wedding & Event Planning and Coordination',
  email: 'forresterfields25@gmail.com',
  url: 'https://forresterfields.com',

  // Service-area business (Loganville home base; no public street address).
  baseCity: 'Loganville',
  state: 'GA',
  region: 'Georgia',
  areaServed: [
    'Loganville, GA',
    'Walton County, GA',
    'Monroe, GA',
    'Snellville, GA',
    'Grayson, GA',
    'Conyers, GA',
    'Covington, GA',
    'East metro Atlanta, GA',
  ],

  priceRange: '$$',

  social: {
    facebook: 'https://www.facebook.com/527402967124747',
    instagram: 'https://www.instagram.com/forresterfields/',
  },
  instagramHandle: 'forresterfields',
} as const;

// Primary navigation (Phase 1). Location pages are linked from the footer/areas-served block.
export const nav: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];
