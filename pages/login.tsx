export default function Login() {
    return (
      <div className="login-page min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input className="block w-full p-2 border rounded mb-4" type="text" placeholder="Email" />
          <input className="block w-full p-2 border rounded mb-4" type="password" placeholder="Password" />
          <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        </div>
      </div>
    );
  }
  