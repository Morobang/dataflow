'use client';
import { supabase } from '@/lib/supabaseClient';

export default function AuthPage() {
  // Add login/signup logic here using supabase.auth
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Login or Sign Up</h1>
      {/* Form goes here */}
      <form className="space-y-4 w-80">
        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
