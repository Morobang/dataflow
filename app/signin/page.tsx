"use client";
import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="auth-container w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <div className="auth-header mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-zinc-600 dark:text-zinc-300">Continue your data project journey</p>
        </div>
        <div className="social-auth flex flex-col gap-3 mb-4">
          <button className="social-btn google flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 rounded px-4 py-2 font-semibold hover:bg-blue-50 dark:hover:bg-zinc-800">
            <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button className="social-btn github flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 rounded px-4 py-2 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>
        <div className="divider flex items-center my-4">
          <hr className="flex-1 border-zinc-200 dark:border-zinc-700" />
          <span className="mx-2 text-xs text-zinc-500">or sign in with email</span>
          <hr className="flex-1 border-zinc-200 dark:border-zinc-700" />
        </div>
        <form className="auth-form" id="signin-form">
          <div className="form-group mb-4">
            <label htmlFor="loginEmail" className="block text-sm font-medium mb-1">Email</label>
            <input type="email" id="loginEmail" name="email" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
          </div>
          <div className="form-group mb-4">
            <div className="password-header flex justify-between items-center">
              <label htmlFor="loginPassword" className="block text-sm font-medium">Password</label>
              <a href="/forgot-password" className="forgot-link text-xs text-blue-600 underline">Forgot password?</a>
            </div>
            <input type="password" id="loginPassword" name="password" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
          </div>
          <div className="form-group checkbox-group mb-4">
            <label className="checkbox flex items-center gap-2">
              <input type="checkbox" id="remember" name="remember" className="accent-blue-600" />
              <span>Remember me for 30 days</span>
            </label>
          </div>
          <button type="submit" className="auth-submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">Sign In</button>
        </form>
        <div className="auth-footer mt-6 text-center text-sm text-zinc-500">
          <p>Don't have an account? <a href="/signup" className="underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}
