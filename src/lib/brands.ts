export type Brand = {
  name: string;
  slug: string;
  file: string;
  /** Equipment categories this brand supplies — sourced from the live brand
   *  directory. Not every brand has categories tagged there yet. */
  categories: string[];
};

/** Where a brand logo click sends the shopper — the mariotstore.com catalogue
 *  filtered to that brand, not an internal page. */
export function shopUrl(slug: string): string {
  return `https://uae.mariotstore.com/en/shop?brand=${slug}`;
}

/** Curated brands store a bare filename living under /public/brands; brands
 *  added from the admin dashboard store a full uploaded path (/uploads/…).
 *  This resolves either into a usable <Image src>. */
export function brandLogoSrc(file: string): string {
  return file.startsWith('/') ? file : `/brands/${file}`;
}

/**
 * The manufacturers Mariot represents. Shared by the homepage marquee, the
 * /brands directory and each /brands/[slug] page so all three can never fall
 * out of step; the logo files live in /public/brands.
 */
export const BRANDS: Brand[] = [
  { name: '3MF', slug: '3mf', file: '3mf.webp', categories: ['Refrigeration-line', 'Snack Maker'] },
  { name: 'Ailipu', slug: 'ailipu', file: 'ailipu-1.webp', categories: ['Cooking'] },
  { name: 'Alto-Shaam', slug: 'alto-shaam', file: 'Alto-Shaam.webp', categories: ['Cooking'] },
  { name: 'Anfim', slug: 'anfim', file: 'anfilm.webp', categories: ['Coffee & Bar'] },
  { name: 'APW Wyott', slug: 'apw-wyott', file: 'apwwyott.webp', categories: ['Bakery', 'Snack Maker'] },
  { name: 'Asaki', slug: 'asaki', file: 'asaki-logo.webp', categories: ['Coffee & Bar', 'Food Processing'] },
  { name: 'Battistella', slug: 'battistella', file: 'BATTISTELLA-1.webp', categories: ['Super Market'] },
  { name: 'Berjaya', slug: 'berjaya', file: 'Berjaya-Logo.webp', categories: ['Super Market'] },
  { name: 'Bilait', slug: 'bilait', file: 'BILAIT-Logo.webp', categories: ['Snack Maker'] },
  { name: 'Bimatic', slug: 'bimatic', file: 'bimatic.webp', categories: ['Cooking'] },
  { name: 'Blendtec', slug: 'blendtec', file: 'Blendec-logo.webp', categories: ['Coffee & Bar'] },
  { name: 'Brema', slug: 'brema', file: 'brema.webp', categories: ['Refrigeration-line'] },
  { name: 'Bunn', slug: 'bunn', file: 'bunn.webp', categories: ['Coffee & Bar'] },
  { name: 'Camry', slug: 'camry', file: 'camry.webp', categories: ['Super Market'] },
  { name: 'Capinox', slug: 'capinox', file: 'capinox.webp', categories: ['Bakery', 'Food Processing'] },
  { name: 'Cofrimell', slug: 'cofrimell', file: 'cofrimell.webp', categories: ['Coffee & Bar'] },
  { name: 'Desmon', slug: 'desmon', file: 'desmon.webp', categories: ['Refrigeration-line'] },
  { name: 'Easyline', slug: 'easyline', file: 'easyline.webp', categories: ['Cooking', 'Coffee & Bar', 'Food Processing', 'Dry Store'] },
  { name: 'Electrolux', slug: 'electrolux', file: 'electrolux.webp', categories: [] },
  { name: 'Empero', slug: 'empero', file: 'empero.webp', categories: ['Cooking', 'Refrigeration-line', 'Coffee & Bar', 'Bakery', 'Food Processing', 'Snack Maker', 'Dish Washer', 'Dry Store'] },
  { name: 'Fagor', slug: 'fagor', file: 'FagorProfesional.webp', categories: ['Dish Washer'] },
  { name: 'Ace Filters', slug: 'ace-filters', file: 'Falater.webp', categories: [] },
  { name: 'Fimar', slug: 'fimar', file: 'fimar.webp', categories: ['Cooking', 'Coffee & Bar', 'Food Processing'] },
  { name: 'Frymaster', slug: 'frymaster', file: 'FRYMASTER.webp', categories: ['Cooking'] },
  { name: 'Gelmatic', slug: 'gelmatic', file: 'gelmatic.webp', categories: ['Refrigeration-line'] },
  { name: 'GGF', slug: 'ggf', file: 'ggf-logo.webp', categories: ['Cooking', 'Bakery'] },
  { name: 'GHS', slug: 'ghs', file: 'ghs.webp', categories: ['Coffee & Bar'] },
  { name: 'Grindmaster', slug: 'grindmaster', file: 'grindmaster.webp', categories: ['Coffee & Bar'] },
  { name: 'Hatco', slug: 'hatco', file: 'hacto.webp', categories: ['Cooking'] },
  { name: 'Hamilton Beach', slug: 'hamilton-beach', file: 'hamilton-logo.webp', categories: ['Cooking', 'Coffee & Bar', 'Bakery'] },
  { name: 'Henny Penny', slug: 'henny-penny', file: 'hennypenny.webp', categories: ['Cooking'] },
  { name: 'Hoonved', slug: 'hoonved', file: 'hoonved.webp', categories: ['Dish Washer'] },
  { name: 'Hoshizaki', slug: 'hoshizaki', file: 'hoshizaki.webp', categories: ['Refrigeration-line'] },
  { name: 'Imesa', slug: 'imesa', file: 'imesa.webp', categories: ['Dish Washer'] },
  { name: 'Imperial', slug: 'imperial', file: 'IMPERIAL.webp', categories: [] },
  { name: 'Infrico', slug: 'infrico', file: 'inofrigo.webp', categories: ['Refrigeration-line', 'Bakery'] },
  { name: 'Josper', slug: 'josper', file: 'josper.webp', categories: ['Cooking'] },
  { name: 'KitchenAid', slug: 'kitchenaid', file: 'Kitchen-Aid.webp', categories: ['Bakery'] },
  { name: 'La Marzocco', slug: 'la-marzocco', file: 'La-Marzocco.webp', categories: ['Coffee & Bar'] },
  { name: 'La Minerva', slug: 'la-minerva', file: 'LA-MINERVA.webp', categories: ['Food Processing'] },
  { name: 'La Cimbali', slug: 'la-cimbali', file: 'lacimbali.webp', categories: ['Coffee & Bar'] },
  { name: 'Miska', slug: 'miska', file: 'Logo-MiskaFoodTechnology1.webp', categories: ['Food Processing'] },
  { name: 'Longoni', slug: 'longoni', file: 'Longoni-Brand.webp', categories: ['Bakery'] },
  { name: 'Mac.Pan', slug: 'mac-pan', file: 'macpac.webp', categories: ['Bakery'] },
  { name: 'Mahlkonig', slug: 'mahlkonig', file: 'MAHLKONIG-vector-logo.webp', categories: ['Coffee & Bar'] },
  { name: 'Mariot', slug: 'mariot', file: 'mariot.webp', categories: ['Refrigeration-line', 'Coffee & Bar', 'Food Processing', 'Snack Maker', 'Super Market', 'Dry Store'] },
  { name: 'MBM', slug: 'mbm', file: 'mbm-logo.webp', categories: ['Cooking', 'Bakery', 'Dish Washer'] },
  { name: 'Menumaster', slug: 'menumaster', file: 'menumaster.webp', categories: ['Cooking', 'Bakery'] },
  { name: 'Merrychef', slug: 'merrychef', file: 'merrychef.webp', categories: [] },
  { name: 'Middleby Marshall', slug: 'middleby-marshall', file: 'middleby-marshall-logo.webp', categories: ['Cooking'] },
  { name: 'MKE-Matic', slug: 'mke-matic', file: 'mke-logo.webp', categories: ['Refrigeration-line', 'Coffee & Bar'] },
  { name: 'Moel', slug: 'moel', file: 'moel.webp', categories: ['Dry Store'] },
  { name: 'Monolith', slug: 'monolith', file: 'monolith.webp', categories: [] },
  { name: 'Mussana', slug: 'mussana', file: 'mussana.webp', categories: [] },
  { name: 'Nuova Simonelli', slug: 'nuova-simonelli', file: 'simonelli.webp', categories: ['Coffee & Bar'] },
  { name: 'Omega', slug: 'omega', file: 'Omega.webp', categories: ['Food Processing'] },
  { name: 'Oztiryakiler', slug: 'oztiryakiler', file: 'oztriyakiler.webp', categories: ['Cooking', 'Dish Washer'] },
  { name: 'Pastaline', slug: 'pastaline', file: 'pastaline.webp', categories: ['Bakery'] },
  { name: 'Pitco', slug: 'pitco', file: 'pitco.webp', categories: ['Cooking'] },
  { name: 'POSLIX', slug: 'poslix', file: 'poslix.webp', categories: ['Super Market'] },
  { name: 'Prince Castle', slug: 'prince-castle', file: 'prince-casle.webp', categories: [] },
  { name: 'Rancilio', slug: 'rancilio', file: 'Rancilio-logo-1.webp', categories: [] },
  { name: 'Rational', slug: 'rational', file: 'rational.webp', categories: ['Cooking'] },
  { name: 'Red Fox', slug: 'red-fox', file: 'redfox.webp', categories: ['Cooking', 'Bakery'] },
  { name: 'Robot Coupe', slug: 'robot-coupe', file: 'robotcoupe.webp', categories: ['Coffee & Bar', 'Bakery', 'Food Processing'] },
  { name: 'Roller Grill', slug: 'roller-grill', file: 'roller-grill.webp', categories: ['Cooking', 'Refrigeration-line', 'Bakery', 'Snack Maker'] },
  { name: 'Rotondi Group', slug: 'rotondi-group', file: 'Rotondi-Group.webp', categories: [] },
  { name: 'SAB', slug: 'sab', file: 'sab.webp', categories: ['Coffee & Bar'] },
  { name: 'Salva', slug: 'salva', file: 'salva.webp', categories: ['Cooking'] },
  { name: 'Samixir', slug: 'samixir', file: 'samixir.webp', categories: ['Cooking', 'Coffee & Bar'] },
  { name: 'Santos', slug: 'santos', file: 'santos.webp', categories: ['Coffee & Bar', 'Food Processing'] },
  { name: 'SAP', slug: 'sap', file: 'sap-bone-saw-machine-in-dubai.webp', categories: ['Food Processing'] },
  { name: 'Scotsman', slug: 'scotsman', file: 'Logo-1.webp', categories: [] },
  { name: 'Server', slug: 'server', file: 'server.webp', categories: ['Cooking'] },
  { name: 'Sheffield', slug: 'sheffield', file: 'Sheffiel.webp', categories: ['Snack Maker'] },
  { name: 'Snooker', slug: 'snooker', file: 'snooker-1.webp', categories: ['Refrigeration-line'] },
  { name: 'Sofinor', slug: 'sofinor', file: 'sofinor.webp', categories: ['Food Processing', 'Dry Store'] },
  { name: 'Southbend', slug: 'southbend', file: 'southbend.webp', categories: ['Cooking'] },
  { name: 'Spaceman', slug: 'spaceman', file: '20210329_Spaceman-Logo_Black.webp', categories: [] },
  { name: 'Speed Queen', slug: 'speed-queen', file: 'Speed-Queen.webp', categories: [] },
  { name: 'Star', slug: 'star', file: 'star.webp', categories: ['Cooking', 'Coffee & Bar', 'Snack Maker'] },
  { name: 'Stilco', slug: 'stilco', file: 'stilco1.webp', categories: ['Cooking', 'Refrigeration-line', 'Bakery', 'Snack Maker'] },
  { name: 'Technocooler', slug: 'technocooler', file: 'technocooler.webp', categories: ['Refrigeration-line', 'Bakery'] },
  { name: 'Tecnodom', slug: 'tecnodom', file: 'tecnodom.webp', categories: ['Refrigeration-line', 'Bakery', 'Super Market'] },
  { name: 'Toastmaster', slug: 'toastmaster', file: 'Toastmaster.webp', categories: [] },
  { name: 'TurboChef', slug: 'turbochef', file: 'turbo-chef.webp', categories: ['Cooking'] },
  { name: 'Ubermilk', slug: 'ubermilk', file: 'uebermilk_logo_small.webp', categories: [] },
  { name: 'Union', slug: 'union', file: 'Union.webp', categories: [] },
  { name: 'Unox', slug: 'unox', file: 'unox.webp', categories: ['Cooking', 'Bakery'] },
  { name: 'Venarro', slug: 'venarro', file: 'venarro.webp', categories: ['Bakery'] },
  { name: 'Venix', slug: 'venix', file: 'venix.webp', categories: ['Cooking', 'Bakery'] },
  { name: 'Vitamix', slug: 'vitamix', file: 'vitamix.webp', categories: ['Coffee & Bar'] },
  { name: 'VITO', slug: 'vito', file: 'VITO-OIL-FILTER-SYSTEM.webp', categories: ['Cooking'] },
  { name: 'Vulcan', slug: 'vulcan', file: 'VULCAN-BRAND.webp', categories: ['Cooking'] },
  { name: 'Waring', slug: 'waring', file: 'warning.webp', categories: ['Cooking', 'Coffee & Bar', 'Food Processing'] },
  { name: 'Zemic Europe', slug: 'zemic-europe', file: 'Zemic-Europe.webp', categories: ['Coffee & Bar'] },
  { name: 'Zmatik', slug: 'zmatik', file: 'zmatik-1.webp', categories: ['Dry Store'] },
  { name: 'Zumex', slug: 'zumex', file: 'Zumex.webp', categories: ['Coffee & Bar'] },
];
