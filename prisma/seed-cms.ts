import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { getDbConfig } from '../src/lib/dbConfig';
import { seedAll } from '../src/lib/seed';

const adapter = new PrismaMariaDb(getDbConfig());
const db = new PrismaClient({ adapter });

seedAll(db)
  .then((summary) => console.log('Seed complete:', summary))
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
