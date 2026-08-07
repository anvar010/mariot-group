import type { PhotoKey } from './images';

export type Project = {
  name: string;
  slug: string;
  category: string;
  location: string;
  photo: PhotoKey;
  description: string;
};

/**
 * General project case studies — shown on /projects, filterable by sector.
 * Shared with /projects/[slug] so a case-study page always matches what's
 * listed here.
 */
export const GENERAL_PROJECTS: Project[] = [
  {
    name: 'Luxury Resort Main Kitchen',
    slug: 'luxury-resort-main-kitchen',
    category: 'Resorts',
    location: 'Ras Al Khaimah',
    photo: 'resort',
    description:
      'Full production kitchen for a beachfront resort, sized for three outlets running simultaneous breakfast, banquet and à la carte service.',
  },
  {
    name: 'Fine-Dining Open Kitchen',
    slug: 'fine-dining-open-kitchen',
    category: 'Restaurants',
    location: 'Downtown Dubai',
    photo: 'chefPlating',
    description:
      'A show kitchen built for an open pass — precision cooking lines, low-noise ventilation and finishes chosen to be seen by diners, not just chefs.',
  },
  {
    name: 'Downtown Artisan Cafe',
    slug: 'downtown-artisan-cafe',
    category: 'Cafes',
    location: 'Dubai',
    photo: 'cafe',
    description:
      'Espresso bar, pastry display and a compact prep line fitted into a specialty coffee shop with limited back-of-house footprint.',
  },
  {
    name: 'General Hospital Diet Line',
    slug: 'general-hospital-diet-line',
    category: 'Hospitals',
    location: 'Abu Dhabi',
    photo: 'hospital',
    description:
      'High-volume diet kitchen equipped for tray-line service, built to hospital hygiene standards with full traceability across prep stations.',
  },
  {
    name: 'Royal Palace Banquet Prep',
    slug: 'royal-palace-banquet-prep',
    category: 'Villas & Palaces',
    location: 'Al Ain',
    photo: 'villaKitchen',
    description:
      'Private banquet prep kitchen sized for large-scale hospitality events, with discreet service access and premium finish equipment throughout.',
  },
  {
    name: 'Premium Cloud Kitchen Pods',
    slug: 'premium-cloud-kitchen-pods',
    category: 'Cloud Kitchens',
    location: 'Dubai Investment Park',
    photo: 'chefFlame',
    description:
      'Multi-brand delivery kitchen split into independent cooking pods, each equipped to run a separate virtual restaurant brand in parallel.',
  },
  {
    name: 'Boutique Hotel Banquet Kitchen',
    slug: 'boutique-hotel-banquet-kitchen',
    category: 'Hotels',
    location: 'Sharjah',
    photo: 'hotel',
    description:
      'Banquet and room-service kitchen for a boutique hotel, designed to flex between small private events and full-hotel conference catering.',
  },
  {
    name: 'Central Bakery Production Line',
    slug: 'central-bakery-production-line',
    category: 'Bakeries',
    location: 'Sharjah Industrial',
    photo: 'bakeryDisplay',
    description:
      'Wholesale bakery fit-out with proofing, deck ovens and cooling racks arranged for continuous overnight production runs.',
  },
  {
    name: 'Mega Supermarket Display',
    slug: 'mega-supermarket-display',
    category: 'Supermarkets',
    location: 'Abu Dhabi',
    photo: 'supermarket',
    description:
      'Refrigerated display and back-of-house cold storage for a large-format supermarket, specified for continuous cold-chain compliance.',
  },
];

/**
 * Fabrication case studies — shown on /fabrication. Same detail-page
 * template as general projects, just a different curated list.
 */
export const FABRICATION_PROJECTS: Project[] = [
  {
    name: 'Custom Stainless Prep Line',
    slug: 'custom-stainless-prep-line',
    category: 'Restaurants',
    location: 'Dubai Marina',
    photo: 'welding',
    description:
      'Bespoke Grade 304 stainless prep line, welded and finished in-house to fit an irregular kitchen footprint down to the millimetre.',
  },
  {
    name: 'Bespoke Barista Counter',
    slug: 'bespoke-barista-counter',
    category: 'Cafes',
    location: 'Jumeirah',
    photo: 'cafeCounter',
    description:
      'Custom-fabricated barista counter integrating espresso equipment, under-counter refrigeration and display shelving as one welded unit.',
  },
  {
    name: 'Heavy-Duty Wash-Up Station',
    slug: 'heavy-duty-wash-up-station',
    category: 'Hotels',
    location: 'Deira, Dubai',
    photo: 'restaurantSteel',
    description:
      'High-throughput warewashing station fabricated for a hotel banquet kitchen, built to survive continuous multi-shift use.',
  },
  {
    name: 'Central Production Hood Systems',
    slug: 'central-production-hood-systems',
    category: 'Resorts',
    location: 'Fujairah',
    photo: 'chefFlame',
    description:
      'Custom extraction hood systems engineered and fabricated for a resort central kitchen running multiple heavy-cooking lines.',
  },
  {
    name: 'Luxury Palace Kitchen Fit-Out',
    slug: 'luxury-palace-kitchen-fit-out',
    category: 'Villas & Palaces',
    location: 'Abu Dhabi',
    photo: 'villaKitchen',
    description:
      'Full custom stainless fit-out for a private palace kitchen, every unit fabricated to match the space rather than adapted from stock sizes.',
  },
  {
    name: 'Diet-Line Conveyor System',
    slug: 'diet-line-conveyor-system',
    category: 'Hospitals',
    location: 'Sharjah',
    photo: 'hospital',
    description:
      'Custom-built tray conveyor system fabricated for a hospital diet kitchen, integrated with existing service lifts and tray return.',
  },
  {
    name: 'Proofing & Cooling Rack Sets',
    slug: 'proofing-and-cooling-rack-sets',
    category: 'Bakeries',
    location: 'Al Quoz',
    photo: 'bread',
    description:
      'Mobile stainless proofing and cooling rack sets fabricated to exact oven-batch dimensions for a wholesale bakery.',
  },
  {
    name: 'Industrial Folding Line Tables',
    slug: 'industrial-folding-line-tables',
    category: 'Laundries',
    location: 'Sharjah Industrial',
    photo: 'laundry',
    description:
      'Heavy-gauge stainless folding and sorting tables fabricated for a commercial laundry, built around the existing production flow.',
  },
  {
    name: 'Banquet Buffet Counters',
    slug: 'banquet-buffet-counters',
    category: 'Catering',
    location: 'Abu Dhabi',
    photo: 'catering',
    description:
      'Modular hot-and-cold buffet counters fabricated for a catering company, designed to break down flat for event-to-event transport.',
  },
];

export type ProjectDetail = Project & { scope: string };

export const ALL_PROJECTS: ProjectDetail[] = [
  ...GENERAL_PROJECTS.map((p) => ({ ...p, scope: 'Equipment Supply & Installation' })),
  ...FABRICATION_PROJECTS.map((p) => ({ ...p, scope: 'Custom Stainless Fabrication' })),
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug);
}

/** Typical scope of work per sector — reused across every project filed
 *  under that sector so the detail page always has something concrete to
 *  say about what a delivery in that space actually involves. */
export const CATEGORY_HIGHLIGHTS: Record<string, string[]> = {
  Restaurants: [
    'Full cooking line sized to the menu — grills, fryers, ranges and combi ovens',
    'Ventilation and extraction engineered for the kitchen’s heat load',
    'Cold storage and prep stations positioned for service flow',
    'Stainless fabrication for any non-standard counters or hoods',
  ],
  Cafes: [
    'Espresso platform and grinder setup matched to expected volume',
    'Pastry and cold-drink display units',
    'Compact under-counter refrigeration for a small footprint',
    'Barista counter layout planned for a single-operator workflow',
  ],
  Hotels: [
    'Main production kitchen sized for multi-outlet, multi-shift service',
    'Banquet and room-service lines that can run independently',
    'Warewashing sized for peak conference-day volume',
    'Equipment specified to hospitality-grade duty cycles',
  ],
  Resorts: [
    'Central production kitchen feeding several F&B outlets',
    'Pool bar and outdoor service equipment rated for the climate',
    'Banquet capacity for large-scale hospitality events',
    'Cold storage sized for multi-day provisioning',
  ],
  'Villas & Palaces': [
    'Premium-finish equipment selected for a private residence',
    'Discreet service access and low-noise ventilation',
    'Banquet-scale prep capacity for large private events',
    'Custom cabinetry and fabrication to match interior design',
  ],
  Hospitals: [
    'HACCP-compliant layout with diet-line separation',
    'Tray-line service equipment for high-volume patient meals',
    'Full traceability across every prep station',
    'Finishes specified to hospital hygiene standards',
  ],
  Bakeries: [
    'Deck and rack ovens sized for daily production volume',
    'Dough mixers, proofers and cooling racks on one production line',
    'Continuous overnight production flow',
    'Display cases for any retail-facing counter',
  ],
  Laundries: [
    'Washers and tumble dryers sized for commercial throughput',
    'Flatwork ironers and folding lines matched to linen type',
    'Layout planned around a single continuous production flow',
    'Heavy-duty units built for multi-shift operation',
  ],
  Catering: [
    'Central production kitchen with blast chillers',
    'Packaging and dispatch staging for event-day logistics',
    'Modular buffet counters that break down for transport',
    'Cook-chill capacity for large-batch production',
  ],
  Supermarkets: [
    'Refrigerated display cases across produce, meat and dairy',
    'Walk-in cold rooms sized to stock-turn requirements',
    'Meat and fish prep rooms to food-safety standard',
    'Continuous cold-chain compliance from delivery to shelf',
  ],
  'Cloud Kitchens': [
    'Independent cooking pods for multiple virtual brands',
    'Shared cold storage sized for parallel production',
    'Delivery staging and packing area separated from cooking',
    'Layout optimised for order throughput, not dine-in service',
  ],
  'Central Kitchens': [
    'High-volume production lines for centralised output',
    'Cook-chill and blast-freezing capacity',
    'Distribution and dispatch logistics built into the layout',
    'Equipment specified for continuous, multi-shift operation',
  ],
};
