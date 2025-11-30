"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else setMessage("Check your email for a confirmation link.");
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else setMessage("Signed in successfully!");
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up / Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <div className="flex gap-2 mb-2">
        <button
          onClick={handleSignUp}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {message && <div className="text-green-600 mb-2">{message}</div>}
    </div>
  );
}
