import React, { useState } from "react";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Call the parent callback or redirect as needed
    if (onLogin) onLogin({ email });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-4">
      <div className="w-full max-w-xs rounded-2xl bg-yellow-50 shadow-lg p-7">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.svg" alt="News App Logo" className="w-9 h-9 mr-2" />
          <span className="text-xl font-extrabold text-gray-900">Z News</span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            className="rounded-xl px-4 py-2 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            className="rounded-xl px-4 py-2 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className="text-xs text-red-600 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl py-2 transition"
          >
            Sign In
          </button>
        </form>
        <div className="mt-5 flex justify-between text-xs">
          <button className="text-blue-600 underline">Forgot password?</button>
          <button className="text-gray-600">Create account</button>
        </div>
      </div>
      <p className="mt-6 text-gray-400 text-xs">© 2025 Z News</p>
    </div>
  );
}
