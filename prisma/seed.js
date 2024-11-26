const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
  });

  const movie = await prisma.movie.create({
    data: {
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
    },
  });

  await prisma.watchlist.create({
    data: {
      userId: user.id,
      movieId: movie.id,
    },
  });
}

main()
  .then(() => console.log('Database seeded successfully!'))
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());
