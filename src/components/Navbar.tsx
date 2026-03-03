"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#6d28d9" />
            <text x="16" y="24" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="24" fill="white">S</text>
          </svg>
          <span className="font-heading text-xl font-bold text-foreground">
            Sorsana
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden rounded-full border border-[#e8e4df] px-8 py-3 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="#nasil-calisir"
                className="text-sm font-medium text-foreground transition-colors hover:text-violet"
              >
                Nasıl Çalışır
              </Link>
            </li>
            <li>
              <Link
                href="#sinavlar"
                className="text-sm font-medium text-foreground transition-colors hover:text-violet"
              >
                Sınavlar
              </Link>
            </li>
            <li>
              <Link
                href="#iletisim"
                className="text-sm font-medium text-foreground transition-colors hover:text-violet"
              >
                İletişim
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-violet"
              >
                Daha Fazla
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform ${moreOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-[#e8e4df] bg-white py-2 shadow-lg">
                  <Link
                    href="#sss"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-cream"
                  >
                    Sık Sorulan Sorular
                  </Link>
                  <Link
                    href="#hakkimizda"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-cream"
                  >
                    Hakkımızda
                  </Link>
                  <Link
                    href="#gizlilik"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-cream"
                  >
                    Gizlilik Politikası
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Right Side - CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-violet text-white transition-opacity hover:opacity-90">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Link
            href="#indir"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            İndir
          </Link>
        </div>
      </div>
    </header>
  );
}
