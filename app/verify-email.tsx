"use client";
import React from "react";

export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="auth-container w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <div className="auth-header mb-6 text-center">
          <div className="verification-icon text-3xl mb-2">✉️</div>
          <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
          <p className="text-zinc-600 dark:text-zinc-300">We've sent a verification link to <strong>user@example.com</strong></p>
        </div>
        <div className="verification-actions flex flex-col items-center gap-2 mb-4">
          <button className="auth-submit-btn secondary w-full bg-zinc-200 dark:bg-zinc-800 text-blue-700 dark:text-blue-300 font-bold py-2 rounded transition" id="resend-email">
            Resend Verification Email
          </button>
          <p className="resend-timer text-xs text-zinc-500">Resend available in <span id="countdown">60</span>s</p>
        </div>
        <div className="auth-footer mt-6 text-center text-sm text-zinc-500">
          <p>Wrong email? <a href="/signup" className="underline">Sign up with different email</a></p>
        </div>
      </div>
    </div>
  );
}
