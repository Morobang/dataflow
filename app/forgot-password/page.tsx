"use client";
import React from "react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="auth-container w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <div className="auth-header mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
          <p className="text-zinc-600 dark:text-zinc-300">Enter your email and we'll send you a reset link</p>
        </div>
        <form className="auth-form" id="forgot-password-form">
          <div className="form-group mb-4">
            <label htmlFor="resetEmail" className="block text-sm font-medium mb-1">Email Address</label>
            <input type="email" id="resetEmail" name="email" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
          </div>
          <button type="submit" className="auth-submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">Send Reset Link</button>
        </form>
        <div className="auth-footer mt-6 text-center text-sm text-zinc-500">
          <p><a href="/signin" className="underline">← Back to sign in</a></p>
        </div>
      </div>
    </div>
  );
}
