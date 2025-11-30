
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataFlow",
  description: "The complete project companion for data professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black`}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur text-white shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Brand */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-green-400 to-blue-700 bg-clip-text text-transparent">DataFlow</span>
            </a>
            {/* Main Navigation */}
            <div className="hidden md:flex gap-8 text-base font-medium items-center">
              <a href="#features" className="nav-link hover:text-blue-400 transition">Features</a>
              <div className="relative group">
                <a href="#templates" className="nav-link flex items-center gap-1 hover:text-blue-400 transition">
                  Templates <span className="dropdown-arrow">⌄</span>
                </a>
                <div className="dropdown-menu absolute left-0 top-full mt-2 w-56 bg-white dark:bg-zinc-900 text-black dark:text-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <a href="/templates/data-analysis" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-zinc-800">Data Analysis</a>
                  <a href="/templates/ml-projects" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-zinc-800">Machine Learning</a>
                  <a href="/templates/data-engineering" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-zinc-800">Data Engineering</a>
                  <a href="/templates/bi-dashboards" className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-zinc-800">BI Dashboards</a>
                  <a href="/templates/all-templates" className="block px-4 py-2 font-semibold text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-zinc-800">View All Templates →</a>
                </div>
              </div>
              <a href="#pricing" className="nav-link hover:text-blue-400 transition">Pricing</a>
              <a href="/blog" className="nav-link hover:text-blue-400 transition">Blog</a>
              <a href="/help" className="nav-link hover:text-blue-400 transition">Help</a>
            </div>
            {/* Auth Buttons */}
            <div className="hidden md:flex gap-2 items-center">
              <a href="/login" className="nav-secondary px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">Sign In</a>
              <a href="/signup" className="nav-primary bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-blue-700 transition">Get Started Free</a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col gap-1 w-8 h-8 justify-center items-center group" aria-label="Open navigation">
              <span className="block w-8 h-1 bg-white rounded transition-all group-hover:translate-y-1"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded transition-all group-hover:-translate-y-1"></span>
            </button>
          </div>
        </nav>
        {/* Main content */}
        <main className="min-h-[80vh] w-full px-6 pt-8 pb-16">{children}</main>
        {/* Footer */}
        <footer className="w-full bg-black text-white py-12 mt-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-green-300 to-blue-600 bg-clip-text text-transparent">DataFlow</span>
                </div>
              <p className="text-zinc-400">The complete project companion for data professionals. Ship better projects, build in-demand skills.</p>
              <div className="footer-newsletter mt-4">
                <h4 className="font-semibold mb-2">Stay Updated</h4>
                <form className="flex gap-2">
                  <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded border border-zinc-700 bg-black text-white" />
                  <button className="newsletter-btn bg-blue-600 text-white px-4 py-2 rounded font-semibold">Subscribe</button>
                </form>
                <p className="text-xs text-zinc-500 mt-1">Get data project tips and new templates</p>
              </div>
            </div>
            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="text-zinc-400 text-sm flex flex-col gap-1">
                <li><a href="/features" className="hover:text-blue-400">Features</a></li>
                <li><a href="/templates" className="hover:text-blue-400">Templates</a></li>
                <li><a href="/pricing" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="/changelog" className="hover:text-blue-400">Changelog</a></li>
                <li><a href="/integrations" className="hover:text-blue-400">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Solutions</h4>
              <ul className="text-zinc-400 text-sm flex flex-col gap-1">
                <li><a href="/solutions/individuals" className="hover:text-blue-400">For Individuals</a></li>
                <li><a href="/solutions/teams" className="hover:text-blue-400">For Teams</a></li>
                <li><a href="/solutions/education" className="hover:text-blue-400">For Education</a></li>
                <li><a href="/solutions/enterprise" className="hover:text-blue-400">For Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="text-zinc-400 text-sm flex flex-col gap-1">
                <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
                <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="/tutorials" className="hover:text-blue-400">Tutorials</a></li>
                <li><a href="/community" className="hover:text-blue-400">Community</a></li>
                <li><a href="/webinars" className="hover:text-blue-400">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="text-zinc-400 text-sm flex flex-col gap-1">
                <li><a href="/about" className="hover:text-blue-400">About</a></li>
                <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="/press" className="hover:text-blue-400">Press</a></li>
                <li><a href="/legal" className="hover:text-blue-400">Legal</a></li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-800 pt-6">
            <div className="text-zinc-400 text-sm">&copy; 2024 DataFlow. All rights reserved.</div>
            <div className="flex gap-4 text-xs text-zinc-400">
              <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
              <a href="/cookies" className="hover:text-blue-400">Cookie Policy</a>
              <a href="/security" className="hover:text-blue-400">Security</a>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" /></svg></a>
              <a href="#" aria-label="GitHub" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg></a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-400"><svg width="24" height="24" fill="currentColor"><rect x="4" y="8" width="16" height="8" rx="2" /></svg></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
