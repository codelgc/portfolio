"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        <div className="text-sm font-medium text-[#1A1A1A]">• USAMA</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#1A1A1A] text-white px-4 py-2 flex items-center gap-2 text-sm font-medium hover:bg-[#2A2A2A] transition-colors"
        >
          <span>MENU</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

