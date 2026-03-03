"use client";

import { motion } from "framer-motion";
import {
  fadeUpScale,
  fadeUp,
  staggerContainerSlow,
  blurFadeIn,
  clipRevealUp,
} from "@/lib/animations";

const features = [
  {
    title: "Akıllı Soru-Cevap",
    description:
      "Yapay zeka destekli eşleştirme sistemi sorularınızı en uygun uzmanlara yönlendirir. Gelişmiş OCR teknolojisi ile fotoğrafını çektiğiniz soruları anında tanır ve benzer örneklerle eşleştirir.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop",
  },
  {
    title: "Sosyal Etkileşim",
    description:
      "Beğeni, yorum ve kaydetme özellikleriyle etkileşimde bulunun. Sosyal öğrenme özelliklerimiz ile diğer öğrencilerle birlikte öğrenme deneyimini yaşayın, çözüm adımlarını birlikte keşfedin.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop",
  },
  {
    title: "Rozet ve Lig Sistemi",
    description:
      "Platformdaki aktif katılımınızla lider tablosunda yükselin ve özel rozetler kazanın. Haftalık ve aylık hedefler belirleyerek motivasyonunuzu yüksek tutun, başarı sertifikaları ile gelişiminizi görün.",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=350&fit=crop",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="mx-auto max-w-[900px] text-center font-heading text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground"
        >
          Sınav hazırlığını hızlandır ve kalıcı öğrenmeyi garantile
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainerSlow}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className={index === 1 ? "md:mt-16" : ""}
            >
              {/* Star decoration */}
              <div className="relative">
                {(index === 0 || index === 2) && (
                  <motion.svg
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
                    className={`absolute ${index === 0 ? "-left-8 -top-4" : "-right-4 top-8"} h-8 w-8 text-violet-light`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                  </motion.svg>
                )}

                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                  className="mt-2 h-[3px] w-full origin-left rounded-full bg-blue"
                />
              </div>

              {/* Description */}
              <motion.p
                variants={blurFadeIn}
                className="mt-4 text-base leading-7 text-text-secondary"
              >
                {feature.description}
              </motion.p>

              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={clipRevealUp}
                className="mt-6 overflow-hidden rounded-2xl"
              >
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[250px] w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
