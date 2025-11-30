"use client";
import React from "react";

export default function PasswordResetSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="auth-container w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg success-card text-center">
        <div className="success-icon text-4xl mb-4">✅</div>
        <h1 className="text-2xl font-bold mb-2">Password Reset Successful!</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">Your password has been updated. You can now sign in with your new password.</p>
        <div className="success-actions flex flex-col gap-2">
          <a href="/signin" className="auth-submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">Sign In Now</a>
        </div>
      </div>
    </div>
  );
}
