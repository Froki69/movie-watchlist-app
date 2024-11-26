'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [watchlist, setWatchlist] = useState([]);
  const [error, setError] = useState(null);

  async function fetchWatchlist() {
    try {
      const response = await fetch('/api/watchlist');
      if (!response.ok) {
        throw new Error('Failed to fetch watchlist');
      }
      const data = await response.json();
      setWatchlist(data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchWatchlist();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!watchlist.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {watchlist.map((item) => (
        <li key={item.id}>
          Movie: {item.Movie?.title || 'Unknown'}, Added by User: {item.User?.name || 'Unknown'}
        </li>
      ))}
    </ul>
  );
}
