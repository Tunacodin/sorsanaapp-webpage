"use client";

import { motion } from "framer-motion";
import { fadeUpScale, fadeUp, staggerContainer } from "@/lib/animations";

const leftFeatures = [
  {
    title: "Sınırsız Kaynak",
    description: "Binlerce soru, çözüm ve kaynak ile sınav hazırlığınızı güçlendirin.",
  },
  {
    title: "Geniş Ders Kütüphanesi",
    description: "Matematik, Fizik, Biyoloji ve daha fazlası için kategorize edilmiş içerikler.",
  },
  {
    title: "Esnek Çalışma",
    description: "7/24 erişim ile kendi hızınızda, istediğiniz yerden çalışın.",
  },
];

const rightFeatures = [
  {
    title: "50+ Uzman Eğitimci",
    description: "Platformdaki deneyimli eğitimciler sorularınıza detaylı çözümler sunar.",
  },
  {
    title: "Başarı Sertifikaları",
    description: "Gelişiminizi belgeleyen rozetler ve sertifikalar ile motivasyonunuzu artırın.",
  },
  {
    title: "7/24 Destek",
    description: "Sorularınız ve sorunlarınız için her an yanınızda olan destek ekibi.",
  },
];

export default function About() {
  return (
    <section id="nasil-calisir" className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[#fce4ec]/40 blur-[120px] md:h-[600px] md:w-[600px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ede9fe]/30 blur-[120px] md:h-[500px] md:w-[500px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/4 rounded-full bg-[#e8f5e9]/40 blur-[120px] md:h-[600px] md:w-[600px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="mx-auto max-w-[700px] text-center font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[56px]"
        >
          Sürekli İlerleme, Sınırsız Potansiyel
        </motion.h2>

        {/* Features around circle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-20 md:grid-cols-[1fr_auto_1fr]"
        >
          {/* Left Features */}
          <div className="flex flex-col gap-8 md:gap-16">
            {leftFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="text-left md:text-right">
                  <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-secondary md:mt-2">
                    {feature.description}
                  </p>
                </div>
                {/* Dot connector */}
                <div className="hidden shrink-0 md:block">
                  <div className="h-3 w-3 rounded-full border-2 border-foreground/20 bg-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Circle Image */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto flex items-center justify-center"
          >
            {/* Dashed circle border */}
            <div className="absolute h-[280px] w-[280px] rounded-full border-2 border-dashed border-foreground/10 sm:h-[340px] sm:w-[340px] md:h-[420px] md:w-[420px]" />
            {/* Image */}
            <div className="h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px]">
              <motion.img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=500&fit=crop&crop=face"
                alt="Sorsana Eğitim"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-8 md:gap-16">
            {rightFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="flex items-center gap-4 md:gap-6"
              >
                {/* Dot connector */}
                <div className="hidden shrink-0 md:block">
                  <div className="h-3 w-3 rounded-full border-2 border-foreground/20 bg-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-secondary md:mt-2">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
