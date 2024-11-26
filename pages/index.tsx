import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Movie Watchlist App</h1>
      <p>Login or view your watchlist below:</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {/* Link to Login */}
        <Link href="/login">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>

        {/* Link to Watchlist */}
        <Link href="/watchlist">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go to Watchlist
          </button>
        </Link>
      </div>
    </div>
  );
}
