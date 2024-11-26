import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="index-page min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Movie Watchlist App</h1>
      <p className="mt-4">Login or view your watchlist below:</p>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => navigateTo('/login')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Login
        </button>
        <button
          onClick={() => navigateTo('/watchlist')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go to Watchlist
        </button>
      </div>
    </div>
  );
}
