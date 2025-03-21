import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
async function main() {
  const payments = Array.from({ length: 15 }).map(() => ({
    member_id: faker.number.int(),
    amount: faker.number.int({ min: 1000, max: 100000, multipleOf:1000 }),
    paid_at: faker.date.recent(),
  }));

  for (const payment of payments) {
    await prisma.payment.create({
      data: payment,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })