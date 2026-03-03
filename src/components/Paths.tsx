"use client";

import { motion } from "framer-motion";
import { fadeUpScale, staggerContainerSlow, rotateIn } from "@/lib/animations";

const paths = [
  {
    title: "Aradığın Her Şey Burada",
    description:
      "Matematik, Fizik, Biyoloji gibi farklı dersler için kategorize edilmiş sorular ve çözümler bulun. Gelişmiş arama sistemi ve akıllı filtreleme ile seviyenize uygun içeriklere kolayca ulaşın.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=700&fit=crop",
  },
  {
    title: "Sorulara Çözüm Bul",
    description:
      "Deneyimli kullanıcılar ve öğretmenler tarafından paylaşılan detaylı çözümlere ulaşın. Kredi sistemi ile kaliteli içerik paylaşımını teşvik eder, uzman onaylı çözümlerle doğru bilgiye erişirsiniz.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=700&fit=crop",
  },
  {
    title: "Kişisel Gelişim Yolculuğu",
    description:
      "Çözülen soru sayısı, başarı rozetleri ve lider tablosu ile gelişiminizi takip edin. Haftalık hedefler belirleyerek düzenli çalışma alışkanlığı kazanın, detaylı analizlerle eksiklerinizi görün.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=700&fit=crop",
  },
];

export default function Paths() {
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
          Aradığın her şey burada.
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainerSlow}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {paths.map((path) => (
            <motion.div
              key={path.title}
              variants={rotateIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative h-[480px] overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <motion.img
                src={path.image}
                alt={path.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {path.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
