"use client";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Loading Your DataFlow Workspace</h2>
          <div className="space-y-1 mt-2">
            <div className="text-green-600 font-semibold">✓ Authenticating</div>
            <div className="text-blue-600 font-semibold">Loading your projects</div>
            <div className="text-gray-400">Preparing your workspace</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <nav className="w-72 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 p-6 border-b">
            <img src="/logo-icon.svg" alt="DataFlow" className="h-8 w-8" />
            <span className="font-bold text-lg">DataFlow</span>
          </div>
          <div className="px-6 py-4 space-y-2">
            <a href="/app" className="flex items-center gap-2 text-blue-600 font-semibold">
              <span>📊</span> Dashboard
            </a>
            <a href="/app/projects" className="flex items-center gap-2 text-gray-700">
              <span>📁</span> My Projects <span className="ml-auto bg-blue-100 text-blue-600 rounded px-2">3</span>
            </a>
            <a href="/app/templates" className="flex items-center gap-2 text-gray-700">
              <span>🎨</span> Templates
            </a>
            <a href="/app/learning" className="flex items-center gap-2 text-gray-700">
              <span>🎯</span> Learning Path <span className="ml-auto bg-green-100 text-green-600 rounded px-2">65%</span>
            </a>
            <a href="/app/portfolio" className="flex items-center gap-2 text-gray-700">
              <span>💼</span> Portfolio
            </a>
            <a href="/app/community" className="flex items-center gap-2 text-gray-700">
              <span>👥</span> Community
            </a>
          </div>
          <div className="px-6 py-4 border-t">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">WORKSPACE</span>
              <button className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">+</button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-blue-50 rounded px-2 py-1">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">DA</div>
                <span>Data Analysis</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">ML</div>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t flex items-center gap-3">
          <img src="/avatar-placeholder.png" alt="User" className="h-10 w-10 rounded-full" />
          <div>
            <div className="font-semibold">Jane Doe</div>
            <div className="text-xs text-gray-500">Data Analyst</div>
          </div>
          <button className="ml-auto text-xl">⚙️</button>
        </div>
      </nav>
      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Jane! 👋</h1>
            <p className="text-gray-500">Here's your data project overview</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold flex items-center gap-2">
              <span>+</span> New Project
            </button>
            <button className="bg-gray-100 text-blue-600 px-4 py-2 rounded font-semibold flex items-center gap-2">
              <span>🎯</span> Quick Start
            </button>
          </div>
        </div>
        {/* DASHBOARD CONTENT PLACEHOLDER */}
        <div className="dashboard-content">
          {/* Stats, projects, learning, actions, activity feed will go here */}
          <div className="text-gray-400">Dashboard content coming soon...</div>
        </div>
      </main>
    </div>
  );
}
