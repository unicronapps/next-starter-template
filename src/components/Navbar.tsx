"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/latest-jobs", label: "Latest Jobs" },
  { href: "/result", label: "Results" },
  { href: "/admit-card", label: "Admit Card" },
  { href: "/answer-key", label: "Answer Key" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/admission", label: "Admission" },
];

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* ── Top header bar: Logo + tagline + search ── */}
      <div className="bg-[#1b1b1b]">
        <div className="max-w-6xl mx-auto px-3 py-2.5 flex items-center gap-3">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2">
            <div className="bg-[#f97316] text-white font-black text-sm sm:text-base px-3 py-2 leading-tight rounded-sm">
              <span className="block text-[10px] sm:text-xs font-semibold tracking-widest text-orange-100 uppercase">
                Sarkari
              </span>
              <span className="block text-lg sm:text-2xl font-black leading-none">
                ExamInfo
              </span>
              <span className="block text-[9px] text-orange-200 font-medium">.com</span>
            </div>
            <div className="hidden md:block">
              <p className="text-white font-bold text-sm leading-tight">SarkariExamInfo</p>
              <p className="text-gray-400 text-[11px]">India's Trusted Govt Job Portal</p>
            </div>
          </Link>

          {/* Tagline center */}
          <div className="hidden lg:block flex-1 text-center">
            <p className="text-[#f97316] font-bold text-base">
              सरकारी नौकरी · Sarkari Result · Admit Card 2026
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              SSC · UPSC · Railway · Banking · Police · Army · Teaching Jobs
            </p>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex flex-1 lg:flex-none lg:w-72 ml-auto">
            <input
              type="text"
              placeholder="Search Jobs, Results..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 min-w-0 text-sm px-3 py-2 bg-[#2a2a2a] border border-[#444] text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] rounded-l-sm"
            />
            <button
              type="submit"
              className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-4 py-2 text-sm shrink-0 rounded-r-sm"
            >
              Search
            </button>
          </form>

          {/* Hamburger */}
          <button
            className="md:hidden text-white shrink-0 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Nav bar ── */}
      <nav className="bg-[#f97316]">
        <div className="max-w-6xl mx-auto">
          {/* Desktop */}
          <ul className="hidden md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2.5 text-white font-bold text-sm hover:bg-[#ea6c0a] transition-colors uppercase tracking-wide whitespace-nowrap border-r border-[#ea6c0a] last:border-r-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile full-screen dropdown */}
          {mobileOpen && (
            <ul className="md:hidden bg-[#1b1b1b] border-t-2 border-[#f97316]">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-[#2a2a2a]">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3.5 text-white font-bold text-sm hover:bg-[#f97316] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* ── Mobile horizontal category scroll strip ── */}
      <div className="md:hidden bg-[#1b1b1b] border-t border-[#2a2a2a] overflow-x-auto scrollbar-none">
        <div className="flex whitespace-nowrap gap-0">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-block text-[11px] font-bold px-3 py-1.5 text-gray-300 hover:text-white hover:bg-[#f97316] border-r border-[#2a2a2a] shrink-0 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

    </header>
  );
}
