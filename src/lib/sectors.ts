import type { PhotoKey } from './images';

export type Sector = {
  name: string;
  slug: string;
  desc: string;
  photo: PhotoKey;
};

/**
 * Single source of truth for the twelve segments Mariot serves. Five pages list
 * these; keeping the photo pairing here stops the same sector showing a
 * different picture depending on where you landed.
 */
export const SECTORS: Sector[] = [
  {
    name: 'Restaurants',
    slug: 'restaurants',
    desc: 'Full show kitchens, prep lines and stainless fabrication.',
    photo: 'restaurantDark',
  },
  {
    name: 'Cafés',
    slug: 'cafes',
    desc: 'Espresso platforms, pastry displays and compact prep areas.',
    photo: 'cafe',
  },
  {
    name: 'Hotels',
    slug: 'hotels',
    desc: 'Main production, banquet, room service and outlet kitchens.',
    photo: 'hotel',
  },
  {
    name: 'Resorts',
    slug: 'resorts',
    desc: 'Multi-outlet kitchens, pool bars and central production.',
    photo: 'resort',
  },
  {
    name: 'Villas & Palaces',
    slug: 'villas-and-palaces',
    desc: 'Luxury private kitchens for villas, palaces and royal residences.',
    photo: 'villaKitchen',
  },
  {
    name: 'Hospitals',
    slug: 'hospitals',
    desc: 'HACCP-compliant patient meal production with diet-line separation.',
    photo: 'hospital',
  },
  {
    name: 'Bakeries',
    slug: 'bakeries',
    desc: 'Deck ovens, dough mixers, proofers and cooling racks.',
    photo: 'bakeryDisplay',
  },
  {
    name: 'Laundries',
    slug: 'laundries',
    desc: 'Washers, tumble dryers, flatwork ironers and folding lines.',
    photo: 'laundry',
  },
  {
    name: 'Catering',
    slug: 'catering',
    desc: 'Central production kitchens with blast chillers and packaging.',
    photo: 'catering',
  },
  {
    name: 'Supermarkets',
    slug: 'supermarkets',
    desc: 'Refrigerated display cases, walk-in cold rooms, meat prep.',
    photo: 'supermarket',
  },
  {
    name: 'Cloud Kitchens',
    slug: 'cloud-kitchens',
    desc: 'Standardized pods, shared cold storage and delivery staging.',
    photo: 'chefFlame',
  },
  {
    name: 'Central Kitchens',
    slug: 'central-kitchens',
    desc: 'High-volume production, cook-chill and distribution logistics.',
    photo: 'chefPlating',
  },
];

export const SECTOR_NAMES = SECTORS.map((sector) => sector.name);
