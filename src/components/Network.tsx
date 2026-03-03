"use client";

import { motion } from "framer-motion";
import { fadeUpScale, fadeUp } from "@/lib/animations";

const people = [
  { id: 0, img: "photo-1472099645785-5658abf4ff4e", x: 20, y: 28, s: 48 },
  { id: 1, img: "photo-1507003211169-0a1dd7228f2d", x: 33, y: 44, s: 44 },
  { id: 2, img: "photo-1539571696357-5a69c17a67c6", x: 17, y: 56, s: 46 },
  { id: 3, img: "photo-1494790108377-be9c29b29330", x: 55, y: 35, s: 50 },
  { id: 4, img: "photo-1534528741775-53994a69daeb", x: 47, y: 52, s: 36 },
  { id: 5, img: "photo-1506794778202-cad84cf45f1d", x: 65, y: 48, s: 48 },
  { id: 6, img: "photo-1517841905240-472988babdf9", x: 50, y: 65, s: 44 },
  { id: 7, img: "photo-1438761681033-6461ffad8d80", x: 73, y: 28, s: 42 },
  { id: 8, img: "photo-1544005313-94ddf0286df2", x: 30, y: 76, s: 46 },
  { id: 9, img: "photo-1552374196-c4e7ffc6e126", x: 78, y: 55, s: 46 },
  { id: 10, img: "photo-1500648767791-00dcc994a43e", x: 87, y: 70, s: 44 },
];

const lines: [number, number][] = [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 4],
  [3, 4],
  [3, 5],
  [3, 7],
  [4, 6],
  [5, 7],
  [5, 9],
  [6, 8],
  [7, 9],
  [9, 10],
];

export default function Network() {
  return (
    <section className="px-8 py-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpScale}
          className="mx-auto max-w-[700px] text-center font-heading text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-foreground"
        >
          Türkiye&apos;nin Dört Bir Yanından
          <br />
          Öğrenciler Bir Arada
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[600px] text-center text-base leading-7 text-text-secondary"
        >
          Sorsana ile binlerce öğrenci birbirine bağlanıyor, birlikte öğreniyor
          ve sınav hedeflerine birlikte ulaşıyor
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-8 flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f5d98a] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-[#ecc85e]"
          >
            Hemen Katıl
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mt-12 aspect-[2/1]"
        >
          {/* World Map Image Background */}
          <img
            src="/earth.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />

          {/* Connecting Lines SVG Overlay */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {lines.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={people[a].x}
                y1={people[a].y}
                x2={people[b].x}
                y2={people[b].y}
                stroke="#d1d5db"
                strokeWidth="0.15"
              />
            ))}
          </svg>

          {/* Avatar Circles */}
          {people.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + i * 0.08,
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${person.x}%`,
                top: `${person.y}%`,
                width: person.s,
                height: person.s,
              }}
            >
              <img
                src={`https://images.unsplash.com/${person.img}?w=100&h=100&fit=crop&crop=face`}
                alt=""
                className="h-full w-full rounded-full border-2 border-white object-cover shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
