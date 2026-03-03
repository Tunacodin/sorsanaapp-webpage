"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpScale, staggerContainer, fadeUp } from "@/lib/animations";

const faqs = [
  {
    question: "Sorsana'yı kullanmaya başlamak için neye ihtiyacım var?",
    answer:
      "Sadece merakınız ve öğrenme isteğiniz yeterli! Herhangi bir ön bilgiye veya materyale ihtiyacınız yok. Sizi en başından yönlendireceğiz, ister sıfırdan başlıyor olun ister temel bir bilginiz olsun.",
  },
  {
    question: "Kendi hızımda çalışabilir miyim?",
    answer:
      "Evet! Sorsana tamamen esnek bir öğrenme deneyimi sunar. İstediğiniz zaman, istediğiniz yerden, kendi hızınızda çalışabilirsiniz.",
  },
  {
    question: "Sorularıma ne kadar hızlı cevap alırım?",
    answer:
      "Yapay zeka destekli eşleştirme sistemimiz sayesinde sorularınız anında doğru uzmanlara yönlendirilir. Ortalama yanıt süresi dakikalar içindedir.",
  },
  {
    question: "Gelişimimi nasıl takip edebilirim?",
    answer:
      "Detaylı profil istatistikleri, haftalık ve aylık hedefler, başarı rozetleri ve lig sistemi ile gelişiminizi her adımda takip edebilirsiniz.",
  },
  {
    question: "Ekstra yardıma ihtiyacım olursa ne yapmalıyım?",
    answer:
      "Sorsana topluluğu her zaman yanınızda! Ayrıca destek ekibimize iletişim sayfamızdan ulaşabilirsiniz. Sorularınızı fotoğraf veya metin olarak gönderebilirsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" className="relative overflow-hidden px-4 py-16 sm:px-6 md:px-8 md:py-20">
      {/* Decorative stars */}
      {[
        "top-16 left-[15%] h-10 w-10 text-violet-light/40",
        "top-28 right-[20%] h-6 w-6 text-yellow/50",
        "top-[40%] left-[8%] h-5 w-5 text-green/30",
        "top-[35%] right-[10%] h-8 w-8 text-violet-light/30",
        "bottom-[30%] left-[12%] h-4 w-4 text-blue/30",
        "bottom-[25%] right-[15%] h-7 w-7 text-yellow/40",
        "bottom-16 left-[45%] h-10 w-10 text-violet-light/30",
      ].map((cls, i) => (
        <motion.svg
          key={i}
          className={`absolute ${cls}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 + i * 0.1,
            duration: 0.6,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </motion.svg>
      ))}

      <div className="mx-auto max-w-[800px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="text-center font-heading text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl md:text-[56px]"
        >
          Sıkça Sorulan Sorular
        </motion.h2>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-14"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeUp} className="border-b border-[#e8e4df]">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between py-6"
              >
                <h3 className="text-left font-heading text-lg font-bold text-foreground">
                  {faq.question}
                </h3>
                <span className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center text-text-secondary">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 3L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.div>
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
                    <p className="pb-6 text-base leading-7 text-text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
