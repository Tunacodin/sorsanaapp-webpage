"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  fadeUpScale,
  slideFromLeft,
  scaleReveal,
  staggerContainer,
} from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Soru Gönder",
    description:
      "Fotoğraf veya metin olarak sorunuzu gönderin. OCR teknolojisi ile fotoğraftan metin tanıma özelliği sayesinde sorularınız anında dijitalleşir.",
  },
  {
    number: "02",
    title: "AI Eşleştirme",
    description:
      "Yapay zeka destekli akıllı eşleştirme sistemi sorunuzu analiz eder ve en uygun uzman çözücüye yönlendirir.",
  },
  {
    number: "03",
    title: "Çözüm Al",
    description:
      "Detaylı, adım adım açıklamalar ile sorunuzun çözümünü alın. Uzman onaylı yanıtlar ile kaliteden emin olun.",
  },
  {
    number: "04",
    title: "Pekiştir ve Paylaş",
    description:
      "Beğeni, yorum ve kaydetme özellikleri ile çözümleri sosyal olarak paylaşın ve bilginizi pekiştirin.",
  },
  {
    number: "05",
    title: "Rozet ve Lig Kazan",
    description:
      "Başarı rozetleri kazanın, lig sisteminde yükselin ve liderlik tablosunda yerinizi alın.",
  },
  {
    number: "06",
    title: "Hedefine Ulaş",
    description:
      "Haftalık ve aylık hedefler belirleyin, detaylı analizler ile gelişiminizi takip edin ve başarı sertifikanızı alın.",
  },
];

export default function Roadmap() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sinavlar" className="overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpScale}
              className="font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[48px]"
            >
              Başarıya giden yol haritası
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[500px] text-sm leading-7 text-text-secondary sm:text-base md:mt-6"
            >
              Sorsana ile sınav hazırlığında ilk adımı at. Yapılandırılmış
              öğrenme sürecimiz ile hedeflerine ulaş.
            </motion.p>

            {/* Accordion */}
            <motion.div variants={fadeUp} className="mt-12">
              <div className="h-[3px] rounded-full bg-green" />

              {steps.map((step, index) => (
                <div key={step.number} className="border-b border-[#e8e4df]">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex w-full items-center justify-between py-5"
                  >
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {step.number}: {step.title}
                    </h3>
                    <span className="flex h-6 w-6 items-center justify-center text-green">
                      {openIndex === index ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M10 4L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-base leading-7 text-text-secondary">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleReveal}
            className="hidden items-start justify-end md:flex md:pt-20"
          >
            <div className="h-[600px] w-full max-w-[480px] overflow-hidden rounded-3xl">
              <motion.img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=700&fit=crop"
                alt="Sınava hazırlanan öğrenci"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
