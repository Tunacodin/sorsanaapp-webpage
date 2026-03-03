"use client";

import { motion } from "framer-motion";
import {
  fadeUpScale,
  fadeUp,
  popIn,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="overflow-hidden px-4 pt-24 pb-0 sm:px-6 md:px-8 md:pt-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpScale}
          className="mx-auto max-w-[850px] text-center font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[1.05]"
        >
          Yapay zeka destekli{" "}
          <span className="text-violet">
            SORSANA
          </span>{" "}
          ile başarıya ulaşmanın keyfini çıkar
          <motion.span
            className="relative"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <svg
              className="absolute -right-6 -top-1 h-4 w-4 text-violet-light sm:-right-8 sm:-top-2 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
          </motion.span>
        </motion.h1>

        {/* Hero Image with Stats */}
        <div className="relative mt-8 md:mt-10">
          {/* Main Image */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px] md:h-[500px] md:rounded-3xl"
          >
            <motion.img
              src="/students.webp"
              alt="Öğrenciler birlikte çalışıyor"
              className="h-full w-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            />
          </motion.div>

          {/* 89% Stat Card - Top Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
            transition={{ delay: 0.8 }}
            className="absolute -top-4 left-2 rounded-xl border border-white/20 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm sm:-top-6 sm:left-4 sm:px-6 sm:py-4 md:-top-8 md:rounded-2xl md:px-8 md:py-6"
          >
            <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              89%
            </p>
            <p className="mt-1 text-xs text-text-secondary sm:text-sm">
              Öğrencilerin sınav
              <br />
              başarı oranı
            </p>
          </motion.div>

          {/* 3,000+ Stat Card - Bottom Right */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
            transition={{ delay: 1 }}
            className="absolute -bottom-4 right-2 rounded-xl bg-[#8bc7ad]/20 px-5 py-4 backdrop-blur-sm sm:-bottom-6 sm:right-4 sm:px-7 sm:py-6 md:right-8 md:rounded-2xl md:px-10 md:py-8"
          >
            <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              3,000+
            </p>
            <p className="mt-1 text-xs text-text-secondary sm:text-sm">
              Aktif öğrenci
              <br />
              ve çözüm sayısı
            </p>
          </motion.div>
        </div>

        {/* App Store & Play Store CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={popIn}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-12"
        >
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-foreground px-4 py-2.5 transition-opacity hover:opacity-90 sm:px-5 sm:py-3"
          >
            <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
              <path d="M16.52 12.68c-.03-2.86 2.34-4.24 2.45-4.31-1.33-1.95-3.41-2.22-4.15-2.25-1.77-.18-3.45 1.04-4.34 1.04-.9 0-2.28-1.01-3.74-.99-1.93.03-3.7 1.12-4.7 2.85-2 3.47-.51 8.61 1.44 11.43.96 1.38 2.1 2.93 3.6 2.88 1.44-.06 1.99-.93 3.73-.93s2.24.93 3.76.9c1.56-.03 2.54-1.41 3.49-2.8 1.1-1.6 1.55-3.15 1.58-3.23-.03-.01-3.03-1.16-3.06-4.61l-.06.02zM13.64 4.16c.79-.96 1.33-2.3 1.18-3.63-1.14.05-2.52.76-3.34 1.71-.73.85-1.37 2.2-1.2 3.5 1.28.1 2.58-.65 3.36-1.58z" />
            </svg>
            <div>
              <p className="text-[10px] leading-tight text-white/70">Download on the</p>
              <p className="text-sm font-semibold leading-tight text-white">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-foreground px-4 py-2.5 transition-opacity hover:opacity-90 sm:px-5 sm:py-3"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M0.35 0.76C0.13 1 0 1.36 0 1.82V20.18C0 20.64 0.13 21 0.35 21.24L0.42 21.31L10.92 10.81V10.69L0.42 0.19L0.35 0.76Z" fill="#4285F4" />
              <path d="M14.42 14.31L10.92 10.81V10.69L14.42 7.19L14.51 7.24L18.61 9.57C19.78 10.23 19.78 11.31 18.61 11.97L14.51 14.26L14.42 14.31Z" fill="#FBBC04" />
              <path d="M14.51 14.26L10.92 10.75L0.35 21.24C0.73 21.65 1.36 21.7 2.07 21.3L14.51 14.26Z" fill="#EA4335" />
              <path d="M14.51 7.24L2.07 0.2C1.36 -0.2 0.73 -0.15 0.35 0.26L10.92 10.75L14.51 7.24Z" fill="#34A853" />
            </svg>
            <div>
              <p className="text-[10px] leading-tight text-white/70">GET IT ON</p>
              <p className="text-sm font-semibold leading-tight text-white">Google Play</p>
            </div>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-[1fr_1.4fr_1fr]"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Avatars row */}
            <motion.div
              variants={fadeUp}
              className="flex gap-3 sm:gap-4"
            >
              <div className="flex-1 overflow-hidden rounded-xl bg-[#bfdbfe]/40 p-1 sm:rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Eğitimci"
                  className="h-full w-full rounded-lg object-cover sm:rounded-xl"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-xl bg-[#f9a8d4]/40 p-1 sm:rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                  alt="Eğitimci"
                  className="h-full w-full rounded-lg object-cover sm:rounded-xl"
                />
              </div>
            </motion.div>
            {/* Stats card */}
            <motion.div
              variants={fadeUp}
              className="flex flex-1 flex-col justify-end rounded-xl bg-[#fed7aa]/40 p-4 sm:rounded-2xl sm:p-6"
            >
              <div className="mb-2 flex -space-x-2 sm:mb-3">
                {[
                  "photo-1494790108377-be9c29b29330",
                  "photo-1507003211169-0a1dd7228f2d",
                  "photo-1539571696357-5a69c17a67c6",
                  "photo-1506794778202-cad84cf45f1d",
                ].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&crop=face`}
                    alt=""
                    className="h-6 w-6 rounded-full border-2 border-white object-cover sm:h-8 sm:w-8"
                  />
                ))}
              </div>
              <p className="font-heading text-2xl font-bold text-foreground sm:text-4xl">50+</p>
              <p className="mt-1 text-xs text-text-secondary sm:text-sm">Dünya geneli öğrenci</p>
              <div className="mt-3 hidden self-end rounded-full bg-white px-4 py-1.5 text-xs font-medium text-foreground shadow-sm sm:mt-4 sm:block">
                Search
              </div>
            </motion.div>
          </div>

          {/* Center - Large Image */}
          <motion.div
            variants={fadeUp}
            className="col-span-2 overflow-hidden rounded-xl sm:rounded-2xl md:col-span-1"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=700&fit=crop"
              alt="Öğrenciler"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Green stat card */}
            <motion.div
              variants={fadeUp}
              className="flex flex-1 flex-col justify-between rounded-xl bg-[#bbf7d0]/40 p-4 sm:rounded-2xl sm:p-6"
            >
              <div>
                <p className="font-heading text-2xl font-bold text-foreground sm:text-4xl">50+</p>
                <p className="mt-1 text-xs text-text-secondary sm:text-sm">Dünya geneli öğrenci</p>
              </div>
              <p className="mt-4 text-xs font-medium text-foreground sm:mt-6 sm:text-sm">Otomobil Mühendisliği</p>
            </motion.div>
            {/* Yellow tags card */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl bg-[#fef08a]/40 p-4 sm:rounded-2xl sm:p-6"
            >
              <p className="font-heading text-base font-bold text-foreground sm:text-lg">Kodlamayı Öğren</p>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {["Mutlu Öğrenciler", "AI Takip", "En İyi Mentorlar", "7/24 Erişim", "Öğrenme"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-2.5 py-1 text-[10px] font-medium text-foreground shadow-sm sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
