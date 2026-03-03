"use client";

import { motion } from "framer-motion";
import { fadeUpScale, fadeUp, staggerContainer } from "@/lib/animations";

const plans = [
  {
    name: "Başlangıç",
    description: "Sınav hazırlığına yeni başlayanlar için temel araçlar",
    price: "₺99",
    popular: false,
    features: [
      "Temel soru bankasına erişim",
      "Haftalık canlı soru çözüm seansları",
      "Standart destek hizmeti",
      "Gelecek güncellemelerden indirim",
    ],
  },
  {
    name: "Pro",
    description:
      "Sınav hazırlığını hızlandırmak isteyen öğrenciler için kapsamlı paket",
    price: "₺199",
    popular: true,
    features: [
      "Tüm soru bankalarına sınırsız erişim",
      "Haftalık canlı Soru-Cevap oturumları",
      "Sınırsız destek hizmeti",
      "AI destekli kişiselleştirilmiş çalışma planı",
      "Tüm ders materyalleri ve güncellemeler",
      "Rozet ve lig sistemi erişimi",
    ],
  },
  {
    name: "Premium",
    description: "Hedefine en kısa sürede ulaşmak isteyen öğrenciler için",
    price: "₺349",
    popular: false,
    features: [
      "Tüm içeriklere özel erişim",
      "Uzman eğitimcilerle birebir Soru-Cevap",
      "Öncelikli destek ile hızlı yanıt",
      "Gelecek tüm kaynaklarda özel indirim",
      "Detaylı performans analizi ve raporlama",
      "VIP destek hizmeti",
      "Sınırsız OCR soru tanıma",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <circle cx="10" cy="10" r="9" stroke="#7c3aed" strokeWidth="1.5" />
      <path
        d="M6.5 10L9 12.5L13.5 7.5"
        stroke="#7c3aed"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="mx-auto max-w-[800px] text-center font-heading text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground"
        >
          Sana Uygun Planı Seç
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[600px] text-center text-base leading-7 text-text-secondary"
        >
          Öğrenme yolculuğunu hızlandıracak en uygun paketi seç
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-[#0f0f1a] p-8"
            >
              {/* Top gradient glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-[120px] bg-gradient-to-b from-violet-500/10 to-transparent" />
              </div>

              {/* Plan header */}
              <div className="relative">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      En Popüler
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="relative mt-8">
                <span className="font-heading text-[56px] font-bold leading-none text-white">
                  {plan.price}
                </span>
                <span className="ml-1 text-base text-white/40">/ay</span>
              </div>

              {/* CTA Button */}
              <div className="relative mt-8">
                {plan.popular ? (
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
                  >
                    Hemen Başla
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Hemen Başla
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Features List */}
              <ul className="relative mt-8 flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <CheckIcon />
                    <span className="leading-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
