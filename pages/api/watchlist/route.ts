import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    const watchlist = await prisma.watchlist.findMany({
      include: { User: true, Movie: true },
    });
    res.status(200).json(watchlist);
  } catch (error) {
    console.error('Error fetching watchlist:', error);
    res.status(500).json({ error: 'Failed to fetch watchlist' });
  }
}
