"use client";
import React from "react";

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="error-message w-full bg-red-100 text-red-700 border border-red-300 rounded px-4 py-2 mb-2 text-sm">
      {message}
    </div>
  );
}

// Example usage for validation errors
export default function AuthErrorDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <ErrorMessage message="Please enter a valid email address" />
        <ErrorMessage message="Password must contain at least 8 characters, one uppercase letter, and one number" />
        <ErrorMessage message="Passwords do not match" />
        <ErrorMessage message="Invalid email or password. Please try again." />
        <ErrorMessage message="Network error. Please check your connection and try again." />
      </div>
    </div>
  );
}
