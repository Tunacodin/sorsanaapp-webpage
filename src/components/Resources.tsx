"use client";

import { motion } from "framer-motion";
import {
  fadeUpScale,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

const featured = {
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=500&fit=crop",
  date: "1 Aralık 2025",
  readTime: "5 dk okuma",
  title: "Online Derslerde Motivasyonunuzu Nasıl Yüksek Tutarsınız?",
  description:
    "Online öğrenme deneyiminizi en üst düzeye çıkarmak ve eğitim hedeflerinize ulaşmak için kanıtlanmış teknikleri keşfedin.",
};

const sideArticles = [
  {
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    title: "Online Derslerde Motivasyonunuzu Nasıl Yüksek Tutarsınız?",
    description:
      "Online öğrenme deneyiminizi en üst düzeye çıkarmak için kanıtlanmış teknikler.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    title: "Kodlama Kariyer Yolunuzu Nasıl Dönüştürebilir?",
    description:
      "Online öğrenme deneyiminizi en üst düzeye çıkarmak için kanıtlanmış teknikler.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=300&h=200&fit=crop",
    title: "Her Öğrencinin Bilmesi Gereken AI Becerileri",
    description:
      "Online öğrenme deneyiminizi en üst düzeye çıkarmak için kanıtlanmış teknikler.",
  },
];

export default function Resources() {
  return (
    <section className="overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="mx-auto max-w-[800px] text-center font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[56px]"
        >
          En Son Etkinlik ve Haberler
        </motion.h2>

        {/* Grid: Featured + Side articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:mt-16 md:grid-cols-2"
        >
          {/* Featured Article - Left */}
          <motion.a
            href="#"
            variants={fadeUp}
            className="group rounded-3xl border border-foreground/8 p-5"
          >
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[280px] md:h-[320px]"
              />
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="2" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 5H13" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 1V3M10 1V3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M7 4V7.5L9.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {featured.readTime}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {featured.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-white">
                Devamını Oku
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet text-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* Side Articles - Right */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <motion.a
                key={article.title}
                href="#"
                variants={fadeUp}
                className="group flex gap-4 rounded-xl border border-foreground/8 p-3 sm:gap-5 sm:rounded-2xl sm:p-4"
              >
                <div className="h-[100px] w-[120px] shrink-0 overflow-hidden rounded-lg sm:h-[130px] sm:w-[180px] sm:rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {article.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
