"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 sm:px-6 md:px-8 md:py-4">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden rounded-full border border-[#e8e4df] px-8 py-3 lg:flex">
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
                  <Link href="#sss" className="block px-4 py-2 text-sm text-foreground hover:bg-cream">
                    Sık Sorulan Sorular
                  </Link>
                  <Link href="#hakkimizda" className="block px-4 py-2 text-sm text-foreground hover:bg-cream">
                    Hakkımızda
                  </Link>
                  <Link href="#gizlilik" className="block px-4 py-2 text-sm text-foreground hover:bg-cream">
                    Gizlilik Politikası
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Right Side - CTA Buttons (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-violet text-white transition-opacity hover:opacity-90">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link
            href="#indir"
            className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            İndir
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Menüyü aç"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#e8e4df] bg-white md:hidden"
          >
            <nav className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
              <ul className="flex flex-col gap-1">
                {[
                  { href: "#nasil-calisir", label: "Nasıl Çalışır" },
                  { href: "#sinavlar", label: "Sınavlar" },
                  { href: "#iletisim", label: "İletişim" },
                  { href: "#sss", label: "Sık Sorulan Sorular" },
                  { href: "#hakkimizda", label: "Hakkımızda" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-3 border-t border-[#e8e4df] pt-3">
                  <Link
                    href="#indir"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-full bg-foreground py-3 text-center text-sm font-medium text-white"
                  >
                    İndir
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
