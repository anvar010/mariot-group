export type SectorCaseHighlight = { title: string; text: string };
export type SectorCaseStat = { value: string; label: string };

export type SectorDetail = {
  h1: string;
  subtitle: string;
  delivers: string[];
  caseTitle: string;
  caseSub: string;
  caseHighlights: SectorCaseHighlight[];
  caseStats: SectorCaseStat[];
  ctaTitle: string;
  ctaSubtitle: string;
};

/**
 * Per-sector detail content: headline, equipment list, a mini case study
 * with real stats, and a closing CTA. Keyed by the same slug used in
 * SECTORS (src/lib/sectors.ts) so /sectors/[slug] can look either up.
 */
export const SECTOR_DETAILS: Record<string, SectorDetail> = {
  "restaurants": {
    "h1": "Kitchens engineered for restaurants that never stop",
    "subtitle": "Show kitchens, prep lines, cold rooms and stainless fabrication tuned to your menu and volume.",
    "delivers": [
      "Cooking suites (ranges, ovens, grills, fryers)",
      "Refrigeration — chillers, freezers, walk-ins",
      "Prep lines, hot holding, salamanders",
      "Custom stainless tables, hoods and shelving",
      "Warewashing — dishwashers and pass-through",
      "HACCP-compliant workflow"
    ],
    "caseTitle": "Casual dining · 180 covers",
    "caseSub": "Dubai Marina · turnkey in 6 weeks",
    "caseHighlights": [
      {
        "title": "Design & BOQ",
        "text": "3D layout with dining, cooking, and pastry zones."
      },
      {
        "title": "Supply",
        "text": "Rational combi, Fimar ranges, Inofrigo refrigeration."
      },
      {
        "title": "Fabrication",
        "text": "12 custom stainless tables and 3 exhaust hoods."
      }
    ],
    "caseStats": [
      {
        "value": "6 wks",
        "label": "Total time"
      },
      {
        "value": "180",
        "label": "Covers"
      },
      {
        "value": "3",
        "label": "Zones"
      }
    ],
    "ctaTitle": "Building a restaurant kitchen?",
    "ctaSubtitle": "Send us your layout and we'll come back with a tailored proposal within 24 hours."
  },
  "cafes": {
    "h1": "Café kitchens that pour speed and consistency",
    "subtitle": "Espresso platforms, brewing stations, compact prep and pastry — engineered for morning peak throughput.",
    "delivers": [
      "Espresso machines (2, 3 or 4 group)",
      "Grinders, brewers, ice makers",
      "Under-counter refrigeration & pastry display",
      "Compact prep tables and wash stations",
      "Bar and back-bar stainless fabrication",
      "Compliant plumbing & electrical layout"
    ],
    "caseTitle": "Specialty café · 65 seats",
    "caseSub": "Jumeirah · from concept to opening in 5 weeks",
    "caseHighlights": [
      {
        "title": "Design",
        "text": "L-shaped bar layout maximizing barista flow."
      },
      {
        "title": "Equipment",
        "text": "La Marzocco Linea PB, Mahlkönig grinders."
      },
      {
        "title": "Fabrication",
        "text": "Custom stainless bar, sink station, display counter."
      }
    ],
    "caseStats": [
      {
        "value": "5 wks",
        "label": "Time"
      },
      {
        "value": "65",
        "label": "Seats"
      },
      {
        "value": "3-grp",
        "label": "Espresso"
      }
    ],
    "ctaTitle": "Opening a specialty café?",
    "ctaSubtitle": "We help you pick the right coffee platform and design a bar that flows."
  },
  "hotels": {
    "h1": "Multi-outlet hotel kitchens delivered on schedule",
    "subtitle": "Main production, banquet, room service and restaurant outlets — engineered as one integrated project.",
    "delivers": [
      "Main production with cook-chill",
      "Banquet and buffet lines",
      "In-room dining stations",
      "Multi-outlet restaurant kitchens",
      "Walk-in cold and freezer rooms",
      "Central warewashing with conveyor"
    ],
    "caseTitle": "5-star hotel · 400 keys",
    "caseSub": "Abu Dhabi · 4 outlets · 14 weeks",
    "caseHighlights": [
      {
        "title": "Integrated design",
        "text": "Master kitchen feeding 4 outlets and banquet halls."
      },
      {
        "title": "Global brands",
        "text": "Rational, Electrolux, Hobart, Inofrigo."
      },
      {
        "title": "Commissioning",
        "text": "Test cook, staff training, full documentation."
      }
    ],
    "caseStats": [
      {
        "value": "14 wks",
        "label": "Duration"
      },
      {
        "value": "4",
        "label": "Outlets"
      },
      {
        "value": "1,200",
        "label": "Meals/day"
      }
    ],
    "ctaTitle": "Planning a hotel kitchen?",
    "ctaSubtitle": "Talk to our hospitality team about an integrated multi-outlet plan."
  },
  "resorts": {
    "h1": "Resort kitchens — beach bars to central production",
    "subtitle": "From beach kitchens and pool bars to a central production hub feeding every outlet reliably.",
    "delivers": [
      "Central production kitchen",
      "Pool and beach outdoor kitchens",
      "Buffet and banquet lines",
      "Cold rooms & freezer zones",
      "Custom stainless fabrication",
      "Weatherproof outdoor equipment"
    ],
    "caseTitle": "Luxury resort · 250 keys",
    "caseSub": "Ras Al Khaimah · turnkey",
    "caseHighlights": [
      {
        "title": "Coverage",
        "text": "Central kitchen + 3 outdoor stations + 2 restaurants."
      },
      {
        "title": "Weatherproof",
        "text": "Outdoor equipment rated for coastal humidity."
      },
      {
        "title": "Custom",
        "text": "Sun-shaded stainless prep stations."
      }
    ],
    "caseStats": [
      {
        "value": "12 wks",
        "label": "Duration"
      },
      {
        "value": "5",
        "label": "Zones"
      },
      {
        "value": "250",
        "label": "Keys served"
      }
    ],
    "ctaTitle": "Equipping a resort?",
    "ctaSubtitle": "Book a discovery call to plan your resort kitchen across all outlets."
  },
  "villas-and-palaces": {
    "h1": "Private kitchens for villas, palaces & royal residences",
    "subtitle": "Luxurious yet fully professional kitchens for private homes — main and secondary kitchens, majlis service pantries, outdoor grill stations and staff quarters kitchens.",
    "delivers": [
      "Main show kitchen with premium built-in appliances",
      "Secondary chef's kitchen for full preparation",
      "Majlis & service pantry with hot/cold holding",
      "Outdoor grill / mandi / shawarma stations",
      "Staff quarters kitchen",
      "Custom stainless & wood-veneer millwork",
      "Absolute-discretion delivery & installation"
    ],
    "caseTitle": "Private palace · Emirates Hills",
    "caseSub": "Main + secondary + majlis + outdoor kitchens",
    "caseHighlights": [
      {
        "title": "Discretion",
        "text": "NDA-covered project, delivered outside working hours."
      },
      {
        "title": "Premium brands",
        "text": "Miele, Sub-Zero, Wolf, La Cornue, La Marzocco."
      },
      {
        "title": "Millwork",
        "text": "Custom stainless + hardwood veneer integration."
      }
    ],
    "caseStats": [
      {
        "value": "4",
        "label": "Kitchen zones"
      },
      {
        "value": "10",
        "label": "Weeks"
      },
      {
        "value": "NDA",
        "label": "Coverage"
      }
    ],
    "ctaTitle": "Equipping a private residence?",
    "ctaSubtitle": "We handle villa and palace projects with the discretion, quality and coordination they deserve."
  },
  "hospitals": {
    "h1": "HACCP-compliant hospital food service",
    "subtitle": "Patient meal production, diet-line separation, and cook-chill workflow that pass every audit.",
    "delivers": [
      "Diet-line cooking and portioning",
      "Cook-chill and blast chillers",
      "Patient meal trolleys (hot / cold)",
      "Staff cafeteria kitchen",
      "Stainless fabrication",
      "HACCP-compliant workflow"
    ],
    "caseTitle": "300-bed hospital · Sharjah",
    "caseSub": "Patient meals + staff cafeteria",
    "caseHighlights": [
      {
        "title": "Compliance",
        "text": "HACCP-zoned kitchen, negative-pressure diet room."
      },
      {
        "title": "Equipment",
        "text": "Rational iCombi, Inofrigo blast chillers."
      },
      {
        "title": "Trolleys",
        "text": "36 hot/cold meal distribution trolleys."
      }
    ],
    "caseStats": [
      {
        "value": "300",
        "label": "Beds"
      },
      {
        "value": "3",
        "label": "Diet lines"
      },
      {
        "value": "900",
        "label": "Meals/day"
      }
    ],
    "ctaTitle": "Equipping a healthcare kitchen?",
    "ctaSubtitle": "Our HACCP-experienced team will guide you through a compliant design."
  },
  "bakeries": {
    "h1": "Bakery kitchens for artisan and volume production",
    "subtitle": "Deck ovens, mixers, proofers and cooling systems for artisanal breads, pastries and viennoiserie.",
    "delivers": [
      "Deck and rotary ovens",
      "Spiral and planetary mixers",
      "Retarder-proofers",
      "Sheeters, dividers, moulders",
      "Cooling racks and packaging areas",
      "Refrigeration for dough and cream"
    ],
    "caseTitle": "Artisan bakery · Central production",
    "caseSub": "Dubai Industrial City · 800 kg dough/day",
    "caseHighlights": [
      {
        "title": "Ovens",
        "text": "2 rotary + 1 deck oven for varied product lines."
      },
      {
        "title": "Proofers",
        "text": "Programmed proofing for overnight fermentation."
      },
      {
        "title": "Cooling",
        "text": "Automatic cooling conveyor for baguettes."
      }
    ],
    "caseStats": [
      {
        "value": "800",
        "label": "kg/day"
      },
      {
        "value": "3",
        "label": "Ovens"
      },
      {
        "value": "24/7",
        "label": "Operation"
      }
    ],
    "ctaTitle": "Launching a bakery?",
    "ctaSubtitle": "We size the ovens, mixers and cold rooms to your daily production target."
  },
  "laundries": {
    "h1": "Industrial laundries for hotels and healthcare",
    "subtitle": "Continuous batch washers, tumble dryers, flatwork ironers and folding lines for volume laundry operations.",
    "delivers": [
      "Barrier washers 30–150 kg",
      "Tumble dryers 30–120 kg",
      "Flatwork ironers 2–3.5 m",
      "Folding and stacking lines",
      "Steam boilers and softening plants",
      "Soiled and clean linen zoning"
    ],
    "caseTitle": "Hotel group central laundry",
    "caseSub": "Dubai · 4 tonnes/day capacity",
    "caseHighlights": [
      {
        "title": "Wash line",
        "text": "2 × 100 kg barrier washers + 3 dryers."
      },
      {
        "title": "Ironers",
        "text": "3 m flatwork ironer with folder-stacker."
      },
      {
        "title": "Zoning",
        "text": "Strict soiled/clean separation per HACCP."
      }
    ],
    "caseStats": [
      {
        "value": "4 t",
        "label": "Per day"
      },
      {
        "value": "3",
        "label": "Ironer lines"
      },
      {
        "value": "24h",
        "label": "Turnaround"
      }
    ],
    "ctaTitle": "Planning a commercial laundry?",
    "ctaSubtitle": "Send us your daily volume and we'll size the full line."
  },
  "catering": {
    "h1": "Catering & central kitchens for high-volume production",
    "subtitle": "Cook, chill, package, transport — an end-to-end catering line for events and multi-site operations.",
    "delivers": [
      "Batch cookers and tilting pans",
      "Blast chillers and freezers",
      "Vacuum packaging",
      "Hot & cold transport trolleys",
      "Cook-chill regeneration",
      "Central dishwashing"
    ],
    "caseTitle": "Corporate catering · 3,000 meals/day",
    "caseSub": "Sharjah central kitchen",
    "caseHighlights": [
      {
        "title": "Cook line",
        "text": "4 tilting kettles + 2 pressure cookers."
      },
      {
        "title": "Chill",
        "text": "6 blast chillers + walk-in cold storage."
      },
      {
        "title": "Packaging",
        "text": "Automatic vacuum & sealing line."
      }
    ],
    "caseStats": [
      {
        "value": "3,000",
        "label": "Meals/day"
      },
      {
        "value": "6",
        "label": "Chillers"
      },
      {
        "value": "48h",
        "label": "Shelf life"
      }
    ],
    "ctaTitle": "Scaling a catering operation?",
    "ctaSubtitle": "Our team designs cook-chill kitchens engineered for volume."
  },
  "supermarkets": {
    "h1": "Supermarket refrigeration and food service",
    "subtitle": "Refrigerated display cases, walk-in cold rooms, meat prep and in-store production kitchens.",
    "delivers": [
      "Refrigerated display cases",
      "Multi-deck open chillers",
      "Walk-in cold and freezer rooms",
      "Meat and fish prep areas",
      "In-store bakery / deli counters",
      "Central refrigeration systems"
    ],
    "caseTitle": "Premium supermarket · 3,000 m²",
    "caseSub": "Abu Dhabi · full fit-out",
    "caseHighlights": [
      {
        "title": "Display",
        "text": "42 refrigerated cases across all categories."
      },
      {
        "title": "Storage",
        "text": "4 walk-in cold rooms + 2 freezers."
      },
      {
        "title": "Prep",
        "text": "Meat, fish, deli and bakery zones."
      }
    ],
    "caseStats": [
      {
        "value": "3,000",
        "label": "m²"
      },
      {
        "value": "42",
        "label": "Cases"
      },
      {
        "value": "6",
        "label": "Cold zones"
      }
    ],
    "ctaTitle": "Opening a supermarket?",
    "ctaSubtitle": "We design your refrigeration and in-store food service end-to-end."
  },
  "cloud-kitchens": {
    "h1": "Cloud kitchens engineered for delivery-only volume",
    "subtitle": "Compact, standardized pods with shared cold storage and delivery-optimized layouts.",
    "delivers": [
      "Standardized cooking pods",
      "Shared refrigeration",
      "Delivery packing station",
      "Ghost-kitchen exhaust systems",
      "Modular stainless fabrication",
      "Fast rollout across sites"
    ],
    "caseTitle": "Cloud kitchen operator · 8 pods",
    "caseSub": "Al Quoz · 6 brands in one facility",
    "caseHighlights": [
      {
        "title": "Modular pods",
        "text": "Standardized 20 m² cooking pods per brand."
      },
      {
        "title": "Shared cold",
        "text": "Central chill and freezer accessible to all pods."
      },
      {
        "title": "Rollout",
        "text": "Repeatable design for site 2 & 3 in 4 weeks each."
      }
    ],
    "caseStats": [
      {
        "value": "8",
        "label": "Pods"
      },
      {
        "value": "4 wks",
        "label": "Per site"
      },
      {
        "value": "6",
        "label": "Brands"
      }
    ],
    "ctaTitle": "Rolling out a cloud kitchen?",
    "ctaSubtitle": "Ask us for a repeatable pod design to scale across sites."
  },
  "central-kitchens": {
    "h1": "Central kitchens for multi-site operators",
    "subtitle": "Cook-chill production, distribution logistics and portioning for restaurant chains and F&B groups.",
    "delivers": [
      "Batch cooking suites",
      "Cook-chill process line",
      "Blast chillers & freezers",
      "Vacuum packing & sealing",
      "Cold storage and distribution",
      "Distribution trolleys"
    ],
    "caseTitle": "Restaurant chain central kitchen",
    "caseSub": "Feeding 24 outlets across the UAE",
    "caseHighlights": [
      {
        "title": "Volume",
        "text": "5 tonnes of prepared food per day."
      },
      {
        "title": "Cook-chill",
        "text": "48-hour cook-chill with vacuum sealing."
      },
      {
        "title": "Distribution",
        "text": "Refrigerated trucks feeding 24 outlets daily."
      }
    ],
    "caseStats": [
      {
        "value": "24",
        "label": "Outlets"
      },
      {
        "value": "5 t",
        "label": "Per day"
      },
      {
        "value": "48h",
        "label": "Shelf life"
      }
    ],
    "ctaTitle": "Building a central kitchen?",
    "ctaSubtitle": "We plan production capacity, cold chain, and delivery logistics."
  }
};
