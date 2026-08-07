import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { getDbConfig } from '../src/lib/dbConfig';
import { SECTORS } from '../src/lib/sectors';
import { SECTOR_DETAILS } from '../src/lib/sectorDetails';
import { GENERAL_PROJECTS, FABRICATION_PROJECTS } from '../src/lib/projects';
import { BRANDS } from '../src/lib/brands';
import { BRANCHES } from '../src/lib/branches';

const adapter = new PrismaMariaDb(getDbConfig());
const db = new PrismaClient({ adapter });

/* Good-faith Arabic translation pass — no official Arabic copy exists for
   this content yet, so these are machine-quality translations meant to
   ship the bilingual CMS now and be refined by a native reviewer later. */
const SECTOR_NAME_AR: Record<string, string> = {
  restaurants: 'المطاعم',
  cafes: 'المقاهي',
  hotels: 'الفنادق',
  resorts: 'المنتجعات',
  'villas-and-palaces': 'الفلل والقصور',
  hospitals: 'المستشفيات',
  bakeries: 'المخابز',
  laundries: 'المغاسل',
  catering: 'التموين',
  supermarkets: 'السوبر ماركت',
  'cloud-kitchens': 'المطابخ السحابية',
  'central-kitchens': 'المطابخ المركزية',
};

const SECTOR_DESC_AR: Record<string, string> = {
  restaurants: 'مطابخ عرض كاملة، خطوط تحضير وتصنيع من الفولاذ المقاوم للصدأ.',
  cafes: 'منصات إسبريسو، عروض معجنات ومساحات تحضير مدمجة.',
  hotels: 'مطابخ الإنتاج الرئيسية، الولائم، خدمة الغرف والمطاعم الفرعية.',
  resorts: 'مطابخ متعددة المنافذ، بارات المسبح وإنتاج مركزي.',
  'villas-and-palaces': 'مطابخ خاصة فاخرة للفلل والقصور والمساكن الملكية.',
  hospitals: 'إنتاج وجبات المرضى المتوافق مع HACCP مع فصل خطوط الحمية.',
  bakeries: 'أفران أرضية، خلاطات عجين، أجهزة تخمير ورفوف تبريد.',
  laundries: 'غسالات، مجففات دوارة، مكاوي مسطحة وخطوط طي.',
  catering: 'مطابخ إنتاج مركزية مزودة بمبردات صدمية وتغليف.',
  supermarkets: 'ثلاجات عرض، غرف تبريد، وتحضير اللحوم.',
  'cloud-kitchens': 'وحدات موحدة، تخزين بارد مشترك ومناطق تجهيز للتوصيل.',
  'central-kitchens': 'إنتاج بكميات كبيرة، تبريد سريع ولوجستيات توزيع.',
};

async function seedSectors() {
  for (let i = 0; i < SECTORS.length; i++) {
    const s = SECTORS[i];
    const detail = SECTOR_DETAILS[s.slug];
    await db.sector.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        slug: s.slug,
        name: s.name,
        nameAr: SECTOR_NAME_AR[s.slug] ?? s.name,
        desc: s.desc,
        descAr: SECTOR_DESC_AR[s.slug] ?? s.desc,
        photo: s.photo,
        h1: detail?.h1 ?? null,
        subtitle: detail?.subtitle ?? null,
        delivers: detail?.delivers ?? undefined,
        caseTitle: detail?.caseTitle ?? null,
        caseSub: detail?.caseSub ?? null,
        caseHighlights: detail?.caseHighlights ?? undefined,
        caseStats: detail?.caseStats ?? undefined,
        ctaTitle: detail?.ctaTitle ?? null,
        ctaSubtitle: detail?.ctaSubtitle ?? null,
        order: i,
      },
    });
  }
  console.log(`Seeded ${SECTORS.length} sectors`);
}

async function seedProjects() {
  let order = 0;
  for (const p of GENERAL_PROJECTS) {
    await db.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        name: p.name,
        category: p.category,
        location: p.location,
        photo: p.photo,
        description: p.description,
        scope: 'Equipment Supply & Installation',
        isFabrication: false,
        order: order++,
      },
    });
  }
  for (const p of FABRICATION_PROJECTS) {
    await db.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        name: p.name,
        category: p.category,
        location: p.location,
        photo: p.photo,
        description: p.description,
        scope: 'Custom Stainless Fabrication',
        isFabrication: true,
        order: order++,
      },
    });
  }
  console.log(`Seeded ${GENERAL_PROJECTS.length + FABRICATION_PROJECTS.length} projects`);
}

const CAPABILITIES = [
  { title: 'Work Tables', titleAr: 'طاولات العمل', desc: 'Solid-top, undershelf and drawer configurations.', descAr: 'أسطح مصمتة، أرفف سفلية وتكوينات أدراج.' },
  { title: 'Sinks & Wash Units', titleAr: 'الأحواض ووحدات الغسيل', desc: 'Single to quadruple bowl, with drainer wings.', descAr: 'من حوض واحد إلى أربعة أحواض مع أجنحة تصريف.' },
  { title: 'Shelves & Racks', titleAr: 'الأرفف والرفوف', desc: 'Wall-mounted, mobile and cold-room shelving.', descAr: 'أرفف حائطية، متحركة وأرفف غرف التبريد.' },
  { title: 'Exhaust Hoods', titleAr: 'مراوح الشفط', desc: 'Island and wall canopies with baffle filtration.', descAr: 'مظلات جزيرة وحائطية مع فلترة حاجزة.' },
  { title: 'Trolleys & Carts', titleAr: 'العربات', desc: 'Service, tray-clearing and ingredient transport.', descAr: 'عربات خدمة، تنظيف الصواني ونقل المكونات.' },
  { title: 'Counters & Buffets', titleAr: 'الكاونترات والبوفيهات', desc: 'Hot, cold and neutral service counters.', descAr: 'كاونترات خدمة ساخنة وباردة ومحايدة.' },
  { title: 'Cabinets', titleAr: 'الخزائن', desc: 'Enclosed storage, pass-through and heated units.', descAr: 'وحدات تخزين مغلقة، تمرير ووحدات تسخين.' },
  { title: 'Bespoke Units', titleAr: 'وحدات مخصصة', desc: 'Anything the layout demands, drawn to measure.', descAr: 'أي شيء يتطلبه التخطيط، مصمم حسب القياس.' },
];

const PROCESS = [
  { step: 'Site Survey', stepAr: 'مسح الموقع', desc: 'We measure the room, the doors and the services before drawing anything.', descAr: 'نقيس الغرفة والأبواب والخدمات قبل رسم أي شيء.' },
  { step: 'Shop Drawings', stepAr: 'رسومات التصنيع', desc: 'Dimensioned drawings for your approval — no surprises on delivery day.', descAr: 'رسومات مقاسة لموافقتك — بلا مفاجآت يوم التسليم.' },
  { step: 'Cut & Weld', stepAr: 'القص واللحام', desc: 'Grade 304 and 430 sheet cut, folded and precision-welded in-house.', descAr: 'قص وطي ولحام دقيق للصفائح درجة 304 و430 داخل المصنع.' },
  { step: 'Finish & Polish', stepAr: 'التشطيب والتلميع', desc: 'Seams ground back, edges dressed, surfaces polished to hospitality standard.', descAr: 'طحن اللحامات، تشطيب الحواف وتلميع الأسطح وفق معايير الضيافة.' },
  { step: 'Install', stepAr: 'التركيب', desc: 'Delivered and levelled in place by our own installation team.', descAr: 'يُسلَّم ويُركَّب في مكانه بواسطة فريق التركيب الخاص بنا.' },
];

async function seedFabrication() {
  const existingCap = await db.fabricationCapability.count();
  if (existingCap === 0) {
    for (let i = 0; i < CAPABILITIES.length; i++) {
      await db.fabricationCapability.create({ data: { ...CAPABILITIES[i], order: i } });
    }
  }
  const existingStep = await db.fabricationProcessStep.count();
  if (existingStep === 0) {
    for (let i = 0; i < PROCESS.length; i++) {
      await db.fabricationProcessStep.create({ data: { ...PROCESS[i], order: i } });
    }
  }
  console.log(`Seeded ${CAPABILITIES.length} fabrication capabilities and ${PROCESS.length} process steps`);
}

async function seedBrands() {
  for (let i = 0; i < BRANDS.length; i++) {
    const b = BRANDS[i];
    await db.brand.upsert({
      where: { slug: b.slug },
      update: {},
      create: { slug: b.slug, name: b.name, file: b.file, categories: b.categories, order: i },
    });
  }
  console.log(`Seeded ${BRANDS.length} brands`);
}

async function seedBranches() {
  for (let i = 0; i < BRANCHES.length; i++) {
    const b = BRANCHES[i];
    await db.branch.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        slug: b.slug,
        name: b.name,
        location: b.location,
        emirate: b.emirate,
        email: b.email,
        phone: b.phone,
        whatsapp: b.whatsapp,
        role: b.role,
        mapUrl: b.mapUrl,
        mapEmbed: b.mapEmbed,
        order: i,
      },
    });
  }
  console.log(`Seeded ${BRANCHES.length} branches`);
}

async function main() {
  await seedSectors();
  await seedProjects();
  await seedFabrication();
  await seedBrands();
  await seedBranches();
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
