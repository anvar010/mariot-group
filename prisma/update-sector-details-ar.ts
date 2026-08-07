import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { getDbConfig } from '../src/lib/dbConfig';
import { SECTOR_DETAILS_AR } from '../src/lib/sectorDetailsAr';

const adapter = new PrismaMariaDb(getDbConfig());
const db = new PrismaClient({ adapter });

async function main() {
  const slugs = Object.keys(SECTOR_DETAILS_AR);
  for (const slug of slugs) {
    const detail = SECTOR_DETAILS_AR[slug];
    await db.sector.update({
      where: { slug },
      data: {
        h1Ar: detail.h1,
        subtitleAr: detail.subtitle,
        deliversAr: detail.delivers,
        caseTitleAr: detail.caseTitle,
        caseSubAr: detail.caseSub,
        caseHighlightsAr: detail.caseHighlights,
        caseStatsAr: detail.caseStats,
        ctaTitleAr: detail.ctaTitle,
        ctaSubtitleAr: detail.ctaSubtitle,
      },
    });
  }
  console.log(`Updated Arabic detail content for ${slugs.length} sectors`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
