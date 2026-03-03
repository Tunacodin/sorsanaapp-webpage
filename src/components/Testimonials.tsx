"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpScale, fadeUp } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Sorsana sayesinde sınav hazırlığımda çok daha verimli çalışıyorum. Hem sorularıma hızlı yanıt alıyorum hem de diğer öğrencilerin sorularını yanıtlayarak bilgimi pekiştiriyorum.",
    name: "Ayşe Yılmaz",
    role: "TYT/AYT Öğrencisi",
    title: "Sorsana ile Sınav Hazırlığı",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop&crop=face",
  },
  {
    quote:
      "Rozet ve lig sistemi benim için büyük motivasyon kaynağı oldu. Her gün uygulamaya girip soru çözmek için can atıyorum. Sınavlara hazırlanmak hiç bu kadar eğlenceli olmamıştı.",
    name: "Mehmet Demir",
    role: "KPSS Adayı",
    title: "Oyunlaştırılmış Öğrenme",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
  },
  {
    quote:
      "Sorsana'daki topluluk gerçekten çok yardımsever. Herkes birbirine destek oluyor ve bu ortamda öğrenmek çok daha kolay. Artık soru çözerken yalnız hissetmiyorum.",
    name: "Can Yıldız",
    role: "MSÜ Adayı",
    title: "Topluluk Desteği",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop&crop=face",
  },
  {
    quote:
      "Günlük görevler ve rozetler sayesinde düzenli çalışma alışkanlığı kazandım. Detaylı analizler ile hangi konularda eksik olduğumu görüp ona göre çalışıyorum.",
    name: "Burak Kaya",
    role: "YKS Öğrencisi",
    title: "Kişisel Gelişim Takibi",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop&crop=face",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill={i <= count ? "#6d28d9" : "#e5e7eb"}
        >
          <path d="M9 1L11.5 6.1L17 6.9L13 10.8L13.9 16.3L9 13.7L4.1 16.3L5 10.8L1 6.9L6.5 6.1L9 1Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState(0);

  const activeTestimonial = active !== null ? testimonials[active] : null;

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
          1000+ öğrenci Sorsana&apos;ya güveniyor
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-4 max-w-[600px] text-center text-sm leading-7 text-text-secondary sm:text-base md:mt-6"
        >
          Eğitim fırsatları ve işbirlikçi platformlar sunarak büyümeyi
          destekliyor, potansiyeli ortaya çıkarıyoruz.
        </motion.p>

        {/* Mobile Testimonial Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-10 md:hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileActive}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[mobileActive].image}
                  alt={testimonials[mobileActive].name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-base font-bold text-foreground">
                    {testimonials[mobileActive].name}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonials[mobileActive].role}
                  </p>
                </div>
              </div>
              <Stars count={testimonials[mobileActive].rating} />
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {testimonials[mobileActive].title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                &ldquo;{testimonials[mobileActive].quote}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
          {/* Dots navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileActive(i)}
                className={`h-2.5 rounded-full transition-all ${
                  mobileActive === i ? "w-8 bg-violet" : "w-2.5 bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Desktop Testimonial Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative mt-16 hidden items-center justify-center gap-6 md:flex"
        >
          {/* Left large image */}
          <div
            className="shrink-0 cursor-pointer"
            onMouseEnter={() => setActive(0)}
            onMouseLeave={() => setActive(null)}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="h-[420px] w-[300px] overflow-hidden rounded-3xl"
            >
              <img
                src={testimonials[0].image}
                alt={testimonials[0].name}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Center - Review Card */}
          <div className="relative h-[420px] w-[380px] shrink-0">
            <AnimatePresence mode="wait">
              {activeTestimonial ? (
                <motion.div
                  key={activeTestimonial.name}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex h-full flex-col justify-center rounded-3xl border border-foreground/10 p-10"
                >
                  <Stars count={activeTestimonial.rating} />
                  <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                    {activeTestimonial.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="font-heading text-base font-bold text-foreground">
                      {activeTestimonial.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col justify-center rounded-3xl border border-foreground/10 p-10"
                >
                  <Stars count={5} />
                  <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                    {testimonials[0].title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </p>
                  <div className="mt-6">
                    <p className="font-heading text-base font-bold text-foreground">
                      {testimonials[0].name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {testimonials[0].role}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right images column */}
          <div className="flex shrink-0 gap-4">
            {testimonials.slice(1).map((t, i) => (
              <div
                key={t.name}
                className="cursor-pointer"
                onMouseEnter={() => setActive(i + 1)}
                onMouseLeave={() => setActive(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-[420px] w-[140px] overflow-hidden rounded-3xl"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
