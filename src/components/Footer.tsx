"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const footerLinks = {
  Şirket: [
    { label: "Ana Sayfa", href: "#" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "Sınavlar", href: "#sinavlar" },
    { label: "Blog", href: "#" },
    { label: "İletişim", href: "#iletisim" },
  ],
  Kaynaklar: [
    { label: "Ders Detayları", href: "#" },
    { label: "Blog Yazıları", href: "#" },
    { label: "Stil Rehberi", href: "#" },
    { label: "Lisanslar", href: "#" },
    { label: "Değişiklikler", href: "#" },
  ],
  İletişim: [
    { label: "(90) 555 123 45 67", href: "tel:+905551234567" },
    { label: "info@sorsana.com", href: "mailto:info@sorsana.com" },
    { label: "İstanbul, Türkiye", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-foreground/8 bg-white px-8 pt-16 pb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-[1280px]"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <rect x="2" y="2" width="10" height="10" rx="2" fill="#6d28d9" />
                <rect x="16" y="2" width="10" height="10" rx="2" fill="#6d28d9" opacity="0.4" />
                <rect x="2" y="16" width="10" height="10" rx="2" fill="#6d28d9" opacity="0.4" />
                <rect x="16" y="16" width="10" height="10" rx="2" fill="#6d28d9" />
              </svg>
              <span className="font-heading text-xl font-bold italic text-foreground">
                Sorsana
              </span>
            </Link>
            <p className="mt-4 max-w-[280px] text-sm leading-6 text-text-secondary">
              Dünya genelinde öğrencileri kaliteli eğitim ve geleceğin
              becerileriyle güçlendiriyoruz.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="12" cy="4" r="0.8" fill="currentColor" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M11 1H13L8.5 6.5L14 13H9.5L6.5 9L3 13H1L5.8 7.2L0.5 1H5L7.7 4.6L11 1ZM10.3 11.7L12 1.3H11L2 11.7H3.7L6.2 8.3L7.1 9.5L10.3 11.7Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-foreground hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M3.5 5V12H1V5H3.5ZM2.25 1C3.05 1 3.7 1.65 3.7 2.45C3.7 3.25 3.05 3.9 2.25 3.9C1.45 3.9 0.8 3.25 0.8 2.45C0.8 1.65 1.45 1 2.25 1ZM5.5 5H8V6.1C8.4 5.4 9.3 4.8 10.6 4.8C13 4.8 13.5 6.4 13.5 8.4V12H11V8.9C11 8 11 6.8 9.7 6.8C8.4 6.8 8.2 7.8 8.2 8.8V12H5.5V5Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={fadeUp}>
              <h4 className="font-heading text-base font-bold text-foreground">
                {title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          variants={fadeUp}
          className="mt-14 border-t border-foreground/8 pt-6"
        >
          <p className="text-center text-sm text-text-secondary">
            &copy; 2025 Sorsana. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
