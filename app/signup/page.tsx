"use client";
import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="auth-container w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <div className="auth-header mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Create Your DataFlow Account</h1>
          <p className="text-zinc-600 dark:text-zinc-300">Start building better data projects today</p>
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
          <span className="mx-2 text-xs text-zinc-500">or continue with email</span>
          <hr className="flex-1 border-zinc-200 dark:border-zinc-700" />
        </div>
        <form className="auth-form" id="signup-form">
          <div className="form-row flex gap-4 mb-4">
            <div className="form-group flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
              <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            </div>
            <div className="form-group flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
              <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Work Email</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            <div className="input-note text-xs text-zinc-500 mt-1">We recommend using your work email</div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
            <div className="password-requirements text-xs text-zinc-500 mt-1 flex flex-col gap-1">
              <span>• 8+ characters</span>
              <span>• One uppercase letter</span>
              <span>• One number</span>
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required className="w-full px-3 py-2 border rounded bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" />
          </div>
          <div className="form-group mb-4">
            <label className="block text-sm font-medium mb-1">I'm primarily a:</label>
            <div className="role-selection flex flex-wrap gap-2">
              <label className="role-option cursor-pointer">
                <input type="radio" name="role" value="analyst" defaultChecked className="hidden" />
                <div className="role-card flex items-center gap-2 px-3 py-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                  <span className="role-icon">📊</span>
                  <span>Data Analyst</span>
                </div>
              </label>
              <label className="role-option cursor-pointer">
                <input type="radio" name="role" value="scientist" className="hidden" />
                <div className="role-card flex items-center gap-2 px-3 py-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                  <span className="role-icon">🔬</span>
                  <span>Data Scientist</span>
                </div>
              </label>
              <label className="role-option cursor-pointer">
                <input type="radio" name="role" value="engineer" className="hidden" />
                <div className="role-card flex items-center gap-2 px-3 py-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                  <span className="role-icon">⚙️</span>
                  <span>Data Engineer</span>
                </div>
              </label>
              <label className="role-option cursor-pointer">
                <input type="radio" name="role" value="student" className="hidden" />
                <div className="role-card flex items-center gap-2 px-3 py-2 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
                  <span className="role-icon">🎓</span>
                  <span>Student/Learner</span>
                </div>
              </label>
            </div>
          </div>
          <div className="form-group checkbox-group mb-2">
            <label className="checkbox flex items-center gap-2">
              <input type="checkbox" id="terms" name="terms" required className="accent-blue-600" />
              <span>I agree to the <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a></span>
            </label>
          </div>
          <div className="form-group checkbox-group mb-4">
            <label className="checkbox flex items-center gap-2">
              <input type="checkbox" id="newsletter" name="newsletter" defaultChecked className="accent-blue-600" />
              <span>Send me product updates and data project tips</span>
            </label>
          </div>
          <button type="submit" className="auth-submit-btn w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">Create Account</button>
        </form>
        <div className="auth-footer mt-6 text-center text-sm text-zinc-500">
          <p>Already have an account? <a href="/signin" className="underline">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}
