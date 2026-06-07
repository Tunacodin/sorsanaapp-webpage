import Image from "next/image";
import Link from "next/link";

/* ------------------ ICONS ------------------ */

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2l2.39 4.84 5.35.78-3.87 3.77.91 5.32L12 14.27 7.22 16.71l.91-5.32L4.26 7.62l5.35-.78L12 2z" />
    </svg>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Coin({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded-full ${className}`} style={{ background: "var(--coin)", color: "#5b3d00" }}>
      <span className="font-bold text-[12px]">¢</span>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <a href="#" aria-label="App Store'dan hemen indir" className="inline-flex items-center">
      <Image
        src="/store/appstore.png"
        alt="App Store'dan hemen indir"
        width={2500}
        height={814}
        className="h-14 w-auto"
        priority
      />
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a href="#" aria-label="Google Play'den hemen indir" className="inline-flex items-center">
      <Image
        src="/store/googleplay.png"
        alt="Google Play'den hemen indir"
        width={2500}
        height={814}
        className="h-14 w-auto"
        priority
      />
    </a>
  );
}

/* ------------------ HELPERS ------------------ */

function Phone({
  src,
  alt,
  tilt = 0,
  width = 260,
  className = "",
}: {
  src: string;
  alt: string;
  tilt?: number;
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={{
        width,
        aspectRatio: "9 / 19.5",
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <div className="phone-screen w-full h-full bg-white">
        <Image src={src} alt={alt} fill sizes={`${width}px`} className="object-contain" />
      </div>
    </div>
  );
}

function Tablet({
  src,
  alt,
  tilt = 0,
  width = 520,
  variant = "ios",
  className = "",
}: {
  src: string;
  alt: string;
  tilt?: number;
  width?: number;
  variant?: "ios" | "android";
  className?: string;
}) {
  return (
    <div
      className={`tablet-frame tablet-frame--${variant} ${className}`}
      style={{
        width,
        aspectRatio: "50 / 29",
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <div className="tablet-screen w-full h-full">
        <Image src={src} alt={alt} fill sizes={`${width}px`} className="object-cover" />
      </div>
    </div>
  );
}

function FeatureFloat({
  num,
  title,
  body,
  bg,
  ink,
  chip,
  tilt = 0,
  className = "",
}: {
  num: string;
  title: string;
  body: string;
  bg: string;
  ink: string;
  chip: string;
  tilt?: number;
  className?: string;
}) {
  return (
    <article
      className={`feature-card-reveal absolute rounded-2xl p-3.5 w-[210px] shadow-soft border border-[color:var(--rule)] z-30 ${className}`}
      style={{ background: bg, ["--tilt" as string]: `${tilt}deg` } as React.CSSProperties}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="font-mono text-[10px] inline-flex items-center px-1.5 py-0.5 rounded"
          style={{ background: chip, color: ink }}
        >
          {num}
        </span>
        <h3 className="text-[13px] font-bold leading-tight flex-1" style={{ color: ink }}>{title}</h3>
      </div>
      <p className="text-[11.5px] leading-snug text-[color:var(--ink-soft)]">{body}</p>
    </article>
  );
}

function StarRow({ rating = 4.8 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-[color:var(--coin)]">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-3.5 h-3.5" />
        ))}
      </div>
      <span className="text-[13px] font-semibold text-[color:var(--ink)]">{rating.toFixed(1)}</span>
    </div>
  );
}

/* ------------------ PAGE ------------------ */

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-[color:var(--rule)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="Sorsana"
              width={32}
              height={32}
              className="rounded-[8px]"
              priority
            />
            <span className="text-[20px] font-bold tracking-tight">Sorsana</span>
          </Link>
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden md:flex items-center gap-7 text-[14px] font-medium">
              <a href="#nasil" className="text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]">Nasıl çalışır</a>
              <a href="#topluluk" className="text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]">Topluluk</a>
              <a href="#sss" className="text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]">SSS</a>
            </div>
            <a href="#indir" className="btn-primary text-[13px] px-3.5 py-1 !rounded-lg">
              <span className="hidden md:inline">Hemen indir</span>
              <span className="md:hidden">İndir</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        {/* ───────────── HERO ───────────── */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 60% at 80% 10%, var(--violet-50) 0%, transparent 60%), radial-gradient(50% 60% at 0% 100%, var(--amber-50) 0%, transparent 55%)",
            }}
          />
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
            <div className="md:col-span-7 flex flex-col gap-5">
              <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight">
                Seninle aynı sınav <br className="hidden md:inline" /> sürecinden geçen <br className="hidden md:inline" /> <span className="coin-underline">insanlar burada.</span>
              </h1>
              <p className="text-[15px] md:text-[17px] leading-[1.55] text-[color:var(--ink-soft)] max-w-[560px]">
                Soru çöz, kredi kazan, kendi sorunu paylaş. Kendi başına çalışmak yerine <span className="font-semibold text-[color:var(--ink)]">ortak sınav atmosferini</span> yaşa.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <AppStoreBadge />
                <GooglePlayBadge />
                <a href="#nasil" className="btn-outline">Nasıl çalışır →</a>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[
                    { bg: "#dfe9f3", ink: "#2c3e5f", char: "E" },
                    { bg: "#e8e0d4", ink: "#5a4525", char: "M" },
                    { bg: "#e6e0ff", ink: "#4b2fd1", char: "S" },
                    { bg: "#fde2d5", ink: "#8a3a0e", char: "C" },
                  ].map((p) => (
                    <span
                      key={p.char}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[12px] font-semibold"
                      style={{ background: p.bg, color: p.ink }}
                    >
                      {p.char}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <StarRow />
                  <span className="text-[12px] text-[color:var(--ink-mute)]">5.000+ öğrenci aktif olarak çözüyor</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative flex justify-center pt-2 md:pt-0">
              <div
                className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full -z-0"
                style={{ background: "var(--lavender-100)", opacity: 0.6, top: "10%", right: "10%" }}
              />
              {/* Mobile composition — phone only */}
              <div className="relative md:hidden">
                <Phone src="/screens/01-feed.jpeg" alt="Sorsana feed ekranı" tilt={-3} width={200} />
                <div className="absolute -left-4 top-16 sticker tilt-l">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  5 dk içinde cevap
                </div>
                <div className="absolute -right-2 top-32 sticker tilt-r">
                  <Coin className="w-5 h-5" /> +10 kredi kazan
                </div>
              </div>
              {/* Desktop composition — phone + tablet + pen */}
              <div className="relative hidden md:block" style={{ width: 540, height: 420 }}>
                <div className="absolute left-0 bottom-0">
                  <Phone src="/screens/01-feed.jpeg" alt="Sorsana feed ekranı" tilt={4} width={170} />
                </div>
                <div className="absolute right-8 bottom-0">
                  <Tablet src="/tablet/canvas-tablet.png" alt="Sorsana tablet" tilt={3} width={340} variant="ios" />
                </div>
                <div className="absolute right-0 bottom-12 z-30" style={{ transform: "rotate(22deg)" }}>
                  <div className="apple-pencil" />
                </div>
                <div className="absolute -left-6 top-12 sticker tilt-l z-40">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  5 dk içinde cevap
                </div>
                <div className="absolute right-2 top-2 sticker tilt-r z-40">
                  <Coin className="w-5 h-5" /> +10 kredi kazan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── STAT STRIP ───────────── */}
        <section className="border-y border-[color:var(--rule)]" style={{ background: "var(--paper)" }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2 text-center">
            {[
              { n: "5.000+", l: "Aktif öğrenci" },
              { n: "50.000+", l: "Soru çözüldü" },
              { n: "~5dk", l: "Ortalama cevap süresi" },
              { n: "4.8/5", l: "Mağaza puanı" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="text-[26px] md:text-[32px] font-bold tracking-tight">{s.n}</span>
                <span className="text-[12px] md:text-[13px] text-[color:var(--ink-mute)] mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* float gap — card 01 */}
        <div className="hidden lg:block relative h-0 max-w-[1200px] mx-auto px-5 md:px-8 z-30 pointer-events-none">
          <FeatureFloat
            num="01"
            title="Soru çöz, kredi kazan"
            body="Başkasının sorusunu çözünce kredi senin. Krediyle kendi sorunu paylaş."
            bg="var(--violet-50)"
            ink="#5b21b6"
            chip="#ddd6fe"
            tilt={-7}
            className="-top-6 left-[8%]"
          />
        </div>

        {/* ───────────── POSITIONING — CEBİNDEKİ SINAV TOPLULUĞU ───────────── */}
        <section id="nasil" className="py-12 md:py-16 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
            <div className="md:col-span-7 flex flex-col gap-5">
              <span className="eyebrow">Pozisyon</span>
              <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-tight">
                İzole eğitim yerine, <span className="lavender-underline">topluluk ile birlikte hazırlan.</span>
              </h2>
              <p className="text-[15px] md:text-[17px] leading-[1.55] text-[color:var(--ink-soft)] max-w-[520px]">
                Aynı sınava hazırlanan binlerce öğrenci aynı akışta. Soruyorsun, cevaplıyorsun, paylaşıyorsun.
              </p>
            </div>

            <div className="md:col-span-5 relative flex justify-center min-h-[380px]">
              <div
                className="absolute w-[260px] h-[260px] rounded-full -z-0"
                style={{ background: "var(--lavender-100)", opacity: 0.55, top: "10%", right: "10%" }}
              />
              <div className="relative">
                <Phone src="/screens/01-feed.jpeg" alt="Sorsana feed ekranı — topluluk akışı" tilt={3} width={210} />

                <div className="absolute -left-14 top-8 sticker tilt-l z-30">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  3.847 öğrenci çevrimiçi
                </div>
                <div className="absolute -right-6 top-32 sticker tilt-r z-30">
                  <div className="flex -space-x-1.5">
                    {[
                      { bg: "#ddd6fe", ink: "#5b21b6", char: "E" },
                      { bg: "#bfdbfe", ink: "#1d4ed8", char: "M" },
                      { bg: "#fde68a", ink: "#92400e", char: "S" },
                    ].map((p) => (
                      <span key={p.char} className="w-5 h-5 rounded-full border border-white text-[10px] font-semibold flex items-center justify-center" style={{ background: p.bg, color: p.ink }}>
                        {p.char}
                      </span>
                    ))}
                  </div>
                  <span>aynı soruda</span>
                </div>
                <div className="absolute -left-10 bottom-10 sticker tilt-r z-30">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[color:var(--lavender-deep)]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M21 11.5a8.4 8.4 0 0 1-1 4 8.5 8.5 0 0 1-7.5 4.5 8.4 8.4 0 0 1-4-1L3 21l2-5.5a8.4 8.4 0 0 1-1-4 8.5 8.5 0 0 1 4.5-7.5 8.4 8.4 0 0 1 4-1h.5a8.5 8.5 0 0 1 8 8z" />
                  </svg>
                  <span>+24 cevap</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* float gap — card 02 */}
        <div className="hidden lg:block relative h-0 max-w-[1200px] mx-auto px-5 md:px-8 z-30 pointer-events-none">
          <FeatureFloat
            num="02"
            title="Farklı kaynaklardan sorular"
            body="Aynı sınava hazırlananların paylaştığı sorular akışında."
            bg="var(--blue-50)"
            ink="#1d4ed8"
            chip="#bfdbfe"
            tilt={6}
            className="-top-10 right-[12%]"
          />
        </div>

        {/* ───────────── PRIMARY MECHANIC: SORU PAYLAŞ + ÇÖZÜM AL + KREDİ ───────────── */}
        <section className="py-12 md:py-16 relative" style={{ background: "var(--paper)" }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
            <div className="md:col-span-5 relative flex justify-center order-1">
              <div
                className="absolute w-[220px] h-[220px] rounded-full -z-0"
                style={{ background: "var(--amber-50)", opacity: 0.85, top: "8%", right: "15%" }}
              />
              <div className="relative">
                <Phone src="/screens/05-ai-home.jpeg" alt="Sorsana — soru sor, çözüm al" tilt={-3} width={210} />
                <div className="absolute -right-12 top-16 sticker tilt-r">
                  <div className="flex -space-x-1.5">
                    {[
                      { bg: "#bbf7d0", ink: "#166534", char: "B" },
                      { bg: "#fde68a", ink: "#92400e", char: "T" },
                      { bg: "#fbcfe8", ink: "#9d174d", char: "A" },
                    ].map((p) => (
                      <span key={p.char} className="w-5 h-5 rounded-full border border-white text-[10px] font-semibold flex items-center justify-center" style={{ background: p.bg, color: p.ink }}>
                        {p.char}
                      </span>
                    ))}
                  </div>
                  <span>6 çözüm geldi</span>
                </div>
                <div className="absolute -left-4 top-44 sticker tilt-l">
                  <Coin className="w-5 h-5" /> +20 kredi
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-4 order-2">
              <span className="eyebrow">Soru paylaş · Çözüm al · Kredi kazan</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.15]">
                Sorunu paylaş, <span className="lavender-underline">çözümler akranlarından gelsin.</span>
              </h2>
              <p className="text-[15px] text-[color:var(--ink-soft)] max-w-xl">
                Takıldığın soruyu paylaş — topluluk çözer, sen kredi kazandığın sorularda başkalarına yardım edersin. Karşılıklı bir ekonomi.
              </p>
              <ul className="flex flex-col gap-2 pt-1 text-[14px]">
                {[
                  "Soruyu fotoğrafla veya yaz, kredi ekle, paylaş",
                  "Farklı kişilerden farklı çözüm yöntemleri",
                  "Başkasının sorusunu çözünce kredi senin",
                  "Doğru çözüm sahibine ek bonus kredi",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[color:var(--ink-soft)]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[color:var(--lavender-100)] text-[color:var(--lavender-deep)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* float gap — card 03 */}
        <div className="hidden lg:block relative h-0 max-w-[1200px] mx-auto px-5 md:px-8 z-30 pointer-events-none">
          <FeatureFloat
            num="03"
            title="AI ile adım adım çöz"
            body="Sorsana AI soruyu adım adım çözüp her adımı açıklar."
            bg="var(--orange-50)"
            ink="#9a3412"
            chip="#fed7aa"
            tilt={-4}
            className="top-[260px] left-[6%]"
          />
        </div>

        {/* ───────────── SORU ÇÖZÜM EKRANI (CANVAS) — CENTERED ───────────── */}
        <section className="py-12 md:py-16 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-10 items-center">
            <div className="text-center max-w-2xl flex flex-col gap-3">
              <span className="eyebrow mx-auto">Otobüste · Durakta · Kafede · Masa başında</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.15]">
                Dilediğin yerde soru çöz — <span className="lavender-underline">kalem-kağıt gerek yok.</span>
              </h2>
              <p className="text-[15px] text-[color:var(--ink-soft)]">
                Soru üstte sabit, altta kendi alanın. Üzerine çiz, formül yaz, daire al — çözüm profilinde biriker.
              </p>
            </div>
            <div className="relative flex justify-center items-end min-h-[380px] md:min-h-[420px]" style={{ width: "min(600px, 100%)" }}>
              <div
                className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full -z-0"
                style={{ background: "var(--blue-50)", top: "10%", left: "50%", transform: "translateX(-50%)" }}
              />
              <div className="relative flex items-end gap-2">
                <Phone src="/screens/09-solve.png" alt="Sorsana soru çözüm ekranı — telefon" tilt={-4} width={200} className="z-20 md:hidden" />
                <Phone src="/screens/09-solve.png" alt="Sorsana soru çözüm ekranı — telefon" tilt={-4} width={170} className="z-20 hidden md:block" />
                <div className="relative hidden md:block" style={{ transform: "translateY(-30px)" }}>
                  <Tablet src="/tablet/canvas-tablet.png" alt="Sorsana soru çözüm ekranı — tablet" tilt={3} width={400} variant="ios" />
                </div>
              </div>
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 z-30 sticker">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[color:var(--lavender-deep)]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                </svg>
                <span>Kalem yok, defter yok.</span>
              </div>
            </div>
          </div>
        </section>

        {/* float gap — card 06 */}
        <div className="hidden lg:block relative h-0 max-w-[1200px] mx-auto px-5 md:px-8 z-30 pointer-events-none">
          <FeatureFloat
            num="06"
            title="Profilinde biriktir"
            body="Çözdüğün, paylaştığın, kaydettiğin sorular profilinde — sınav öncesi tek arşiv."
            bg="var(--emerald-50)"
            ink="#065f46"
            chip="#a7f3d0"
            tilt={9}
            className="-top-6 right-[6%]"
          />
        </div>

        {/* ───────────── AI TUTOR SHOWCASE ───────────── */}
        <section className="py-12 md:py-16 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <span className="eyebrow">Ücretsiz krediler · 7/24 · Her ders</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.15]">
                Sorsana AI&apos;a sor, <span className="lavender-underline">adım adım anlatsın.</span>
              </h2>
              <p className="text-[15px] text-[color:var(--ink-soft)] max-w-xl">
                Ücretsiz kredilerle hem Sorsana AI hem topluluktan çözüm öğren.
              </p>
              <ul className="flex flex-col gap-2 pt-1 text-[14px]">
                {[
                  "Soruyu adım adım çözer, her adımı açıklar",
                  "Aynı soruyu bir akrandan da iste",
                  "Sorduğun her şey kayıtlı, sınav öncesi tekrar",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[color:var(--ink-soft)]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[color:var(--lavender-100)] text-[color:var(--lavender-deep)] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 relative flex justify-center">
              <div
                className="absolute w-[220px] h-[220px] rounded-full -z-0"
                style={{ background: "var(--violet-50)", opacity: 0.9, top: "10%", left: "20%" }}
              />
              <div className="relative">
                <Phone src="/screens/06-ai-solution.jpeg" alt="Sorsana AI çözüm" tilt={3} width={180} />
                <div className="absolute -left-6 -bottom-3 sticker tilt-l">
                  <span className="font-mono text-[11px] text-[color:var(--lavender-deep)]">PROMPT</span>
                  <span>Adım adım anlat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── MOTIVATION + PHONE ───────────── */}
        <section className="py-12 md:py-16 relative">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
            <div className="md:col-span-5 relative flex justify-center order-2 md:order-1 min-h-[360px]">
              <div
                className="absolute w-[220px] h-[220px] rounded-full -z-0"
                style={{ background: "var(--amber-50)", top: "8%", right: "0%" }}
              />
              <div className="relative">
                <Phone src="/screens/07-notifications.png" alt="Sorsana bildirim ekranı" tilt={-3} width={200} />

                {/* Floating ranks + badges — real PNGs from app */}
                <div className="absolute -right-10 -top-2 z-30" style={{ transform: "rotate(8deg)" }}>
                  <Image
                    src="/ranks/efsane.png"
                    alt="Efsane ligi"
                    width={68}
                    height={68}
                    className="drop-shadow-xl"
                  />
                </div>
                <div className="absolute -left-8 top-24 z-30" style={{ transform: "rotate(-10deg)" }}>
                  <Image
                    src="/badges/gece_baykusu_4.png"
                    alt="Gece Baykuşu rozeti"
                    width={64}
                    height={64}
                    className="drop-shadow-xl"
                  />
                </div>
                <div className="absolute -right-6 bottom-24 z-30" style={{ transform: "rotate(6deg)" }}>
                  <Image
                    src="/badges/soru_avcisi_4.png"
                    alt="Soru Avcısı rozeti"
                    width={62}
                    height={62}
                    className="drop-shadow-xl"
                  />
                </div>
                <div className="absolute -left-12 bottom-2 z-30" style={{ transform: "rotate(-6deg)" }}>
                  <Image
                    src="/ranks/hukumdar.png"
                    alt="Hükümdar ligi"
                    width={66}
                    height={66}
                    className="drop-shadow-xl"
                  />
                </div>

                <div className="absolute -right-3 top-56 z-40 sticker">
                  <Star className="w-3.5 h-3.5 text-[color:var(--coin)]" /> Bu hafta 1.
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col gap-4 order-1 md:order-2">
              <span className="eyebrow">Görevleri tamamla · Netlerini artır · Lig atla</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-[1.15]">
                Etkileşimde bulun, <span className="lavender-underline">sıralamanı yükselt, rozetler kazan.</span>
              </h2>
              <p className="text-[15px] text-[color:var(--ink-soft)] max-w-xl">
                Soru çöz, deneyimini paylaş, özgüven kazan.
              </p>

              {/* Rozet + Lig — yan yana iki grouped stack */}
              <div className="flex flex-wrap items-center gap-8 pt-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-4">
                    {[
                      "/badges/yardimsever_4.png",
                      "/badges/soru_avcisi_4.png",
                      "/badges/gece_baykusu_4.png",
                      "/badges/sampiyon_4.png",
                    ].map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={64}
                        height={64}
                        className="w-[52px] h-[52px] md:w-[56px] md:h-[56px] drop-shadow-md"
                        style={{ zIndex: 10 - i }}
                      />
                    ))}
                  </div>
                  <span className="text-[13px] md:text-[14px] font-semibold text-[color:var(--ink)]">
                    +20 rozet
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-3">
                    {[
                      "/ranks/cirak.png",
                      "/ranks/kasif.png",
                      "/ranks/uzman.png",
                      "/ranks/ustat.png",
                      "/ranks/hukumdar.png",
                      "/ranks/efsane.png",
                    ].map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={64}
                        height={64}
                        className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] drop-shadow-md"
                        style={{ zIndex: 10 - i }}
                      />
                    ))}
                  </div>
                  <span className="text-[13px] md:text-[14px] font-semibold text-[color:var(--ink)]">
                    6 lig
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── TESTIMONIALS ───────────── */}
        <section className="py-12 md:py-16 relative" style={{ background: "var(--paper)" }}>
          <FeatureFloat
            num="05"
            title="Görevleri tamamla, lig atla"
            body="Etkileşim XP'ye dönüşür. Haftalık lig + 20+ rozet kazan."
            bg="var(--amber-50)"
            ink="#92400e"
            chip="#fde68a"
            tilt={-8}
            className="hidden lg:block top-10 right-[6%]"
          />
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3 mb-8">
              <span className="eyebrow mx-auto">Öğrenciler diyor ki</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-tight">
                Aynı sürecten geçen <span className="lavender-underline">gerçek hikâyeler.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  avatar: ["#ddd6fe", "#5b21b6"],
                  body: "TYT mat 30 nette takılmıştım. Sorsana&apos;da hergün 5 soru çözerek 50 nete çıktım. AI&apos;a sormak hocaya gitmekten daha hızlıydı.",
                  name: "Elif Y.",
                  meta: "12. sınıf · İzmir",
                  rating: 5,
                },
                {
                  avatar: ["#fecdd3", "#9f1239"],
                  body: "AYT fizik beni bitiriyordu, ağlıyordum. Forum&apos;da paylaştım, 80 cevap geldi. Bir kanka VPÇ formülünü çizerek anlattı, kafam açıldı.",
                  name: "Mehmet A.",
                  meta: "Mezun · Ankara",
                  rating: 5,
                },
                {
                  avatar: ["#bfdbfe", "#1d4ed8"],
                  body: "Geçmiş çözümler özelliği bayıldım. Sınavdan 3 ay önce ne çözdüysem hepsi kayıtlıydı, son tekrarda zaman kaybetmedim.",
                  name: "Selin A.",
                  meta: "12. sınıf · Bursa",
                  rating: 5,
                },
                {
                  avatar: ["#fde68a", "#92400e"],
                  body: "Geçen sene panik olmuştum, bu sene Sorsana&apos;daki tecrübe paylaşımları bana yön verdi. Liderlik tablosu seni canlı tutuyor.",
                  name: "Can D.",
                  meta: "Mezun · İstanbul",
                  rating: 5,
                },
                {
                  avatar: ["#a7f3d0", "#065f46"],
                  body: "Dağınık grup mesajları okumaktan kurtuldum. Her soru kategoride, arıyorsam buluyorum.",
                  name: "Zeynep D.",
                  meta: "11. sınıf · Konya",
                  rating: 5,
                },
                {
                  avatar: ["#fed7aa", "#9a3412"],
                  body: "Kredi sistemi başta tuhaf geldi ama gerçekten asalakları engelliyor. Soran ödediği için soru kaliteli, çözen de ödülünü alıyor.",
                  name: "Burak K.",
                  meta: "12. sınıf · Adana",
                  rating: 4,
                },
              ].map((t, i) => (
                <article key={i} className="bg-white rounded-2xl p-5 border border-[color:var(--rule)] flex flex-col gap-3 shadow-soft">
                  <div className="flex items-center gap-1 text-[color:var(--coin)]">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.6] text-[color:var(--ink-soft)] flex-1" dangerouslySetInnerHTML={{ __html: `“${t.body}”` }} />
                  <footer className="flex items-center gap-3 mt-auto pt-3 border-t border-[color:var(--rule)]">
                    <span className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold" style={{ background: t.avatar[0], color: t.avatar[1] }}>
                      {t.name.charAt(0)}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[13px] font-semibold">{t.name}</span>
                      <span className="text-[11px] text-[color:var(--ink-mute)]">{t.meta}</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* float gap — card 04 */}
        <div className="hidden lg:block relative h-0 max-w-[1200px] mx-auto px-5 md:px-8 z-30 pointer-events-none">
          <FeatureFloat
            num="04"
            title="Fikir al, görüş paylaş"
            body="Topluluğun parçası ol, deneyimini aktar."
            bg="var(--rose-50)"
            ink="#9f1239"
            chip="#fecdd3"
            tilt={5}
            className="top-16 right-[4%]"
          />
        </div>

        {/* ───────────── COMMUNITY / AKRAN EKOSİSTEMİ ───────────── */}
        <section id="topluluk" className="py-12 md:py-16 relative" style={{ background: "var(--paper)" }}>
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-8">
              <span className="eyebrow mx-auto">Fikir al, görüş paylaş, topluluğun parçası ol</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-tight">
                Sınava dair ne varsa, <span className="lavender-underline">hepsi burada.</span>
              </h2>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {[
                  "Denemeler",
                  "Stres · kaygı",
                  "Meslek · üniversite",
                  "Sıralama hedefi",
                  "Ders taktiği",
                  "Soru kaynakları",
                ].map((tag) => (
                  <span key={tag} className="chip-soft">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  initial: "E",
                  name: "Elif",
                  meta: "12. sınıf · 2 sa önce",
                  title: "Hedefim 70 nete ulaşmak ama denemelerde 65'in üzerine çıkamıyorum, ne önerirsiniz?",
                  hearts: 142,
                  comments: 67,
                  credits: 10,
                  avatar: ["#ddd6fe", "#5b21b6"],
                },
                {
                  initial: "M",
                  name: "Mehmet",
                  meta: "Mezun · 4 sa önce",
                  title: "Paragrafa süre yetiştiremiyordum ama artık şöyle bir yöntem uyguluyorum:",
                  hearts: 318,
                  comments: 94,
                  credits: null,
                  avatar: ["#bfdbfe", "#1d4ed8"],
                },
                {
                  initial: "S",
                  name: "Selin",
                  meta: "12. sınıf · 1 gün önce",
                  title: "ABC Yayınevi deneme cevap anahtarı olan paylaşabilir mi?",
                  hearts: 56,
                  comments: 38,
                  credits: 5,
                  avatar: ["#fde68a", "#92400e"],
                },
                {
                  initial: "C",
                  name: "Can",
                  meta: "Mezun · 2 gün önce",
                  title: "3 yıldır sınava hazırlanıyorum ve bazı taktikler geliştirdim. Toplanın anlatıyorum.",
                  hearts: 612,
                  comments: 187,
                  credits: null,
                  avatar: ["#bbf7d0", "#166534"],
                },
              ].map((p) => (
                <article key={p.name} className="bg-white rounded-2xl p-5 border border-[color:var(--rule)] flex flex-col gap-3 shadow-soft">
                  <header className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold" style={{ background: p.avatar[0], color: p.avatar[1] }}>{p.initial}</span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[13px] font-semibold">{p.name}</span>
                      <span className="text-[11px] text-[color:var(--ink-mute)]">{p.meta}</span>
                    </div>
                    <button className="ml-auto text-[color:var(--ink-mute)]" aria-label="Menu" type="button">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                        <circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" />
                      </svg>
                    </button>
                  </header>
                  <h3 className="text-[15px] font-bold leading-snug flex-1">{p.title}</h3>
                  <footer className="flex items-center gap-3 text-[12px] text-[color:var(--ink-mute)] pt-2 mt-auto border-t border-[color:var(--rule)]">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 11c0 5.65-7 10-7 10z" />
                      </svg>
                      {p.hearts}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M21 11.5a8.4 8.4 0 0 1-1 4 8.5 8.5 0 0 1-7.5 4.5 8.4 8.4 0 0 1-4-1L3 21l2-5.5a8.4 8.4 0 0 1-1-4 8.5 8.5 0 0 1 4.5-7.5 8.4 8.4 0 0 1 4-1h.5a8.5 8.5 0 0 1 8 8z" />
                      </svg>
                      {p.comments}
                    </span>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M4 12v8l8-4 8 4v-8M4 12V4h16v8" />
                    </svg>
                    {p.credits && (
                      <span className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "var(--coin)", color: "#5b3d00" }}>
                        <span className="font-bold text-[11px]">¢</span>
                        <span className="font-semibold text-[11px]">{p.credits}</span>
                      </span>
                    )}
                    {!p.credits && (
                      <svg viewBox="0 0 24 24" className="ml-auto w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M5 3h14v18l-7-4-7 4V3z" />
                      </svg>
                    )}
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id="sss" className="py-12 md:py-16">
          <div className="max-w-[860px] mx-auto px-5 md:px-8">
            <div className="text-center flex flex-col gap-3 mb-8">
              <span className="eyebrow mx-auto">Sıkça sorulanlar</span>
              <h2 className="text-[26px] md:text-[36px] font-bold leading-tight">
                Aklındaki ne varsa, <span className="lavender-underline">cevabı burada.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  q: "Sorsana ücretsiz mi?",
                  a: "Şu an beta süresince tamamen ücretsiz. Hesap aç, soru çöz, AI'a sor — kredi kartı yok. İleride premium plan eklenebilir ama temel feed, AI sınırlı kullanım, topluluk her zaman ücretsiz kalacak.",
                },
                {
                  q: "AI nasıl çözüm sunuyor?",
                  a: "Soruyu adım adım çözüyor — her adımda kullandığı kuralı ve neden o kuralı seçtiğini açıklıyor. Sonuç + mantık birlikte gelir, sınavda aynı soruyla karşılaştığında nasıl yapacağını bilirsin.",
                },
                {
                  q: "Soru sormak için kredi gerekiyor, neden?",
                  a: "Asalak post engellemek için. Soru sormak küçük bir ödül koymanı gerektiriyor; çözen kişi o krediyi alıyor. Böylece kaliteli sorular yayılıyor, kimse boş atış yapmıyor.",
                },
                {
                  q: "Anonim paylaşım var mı?",
                  a: "Forum bölümünde 'isimsiz' olarak paylaşabilirsin — özellikle pişmanlık, korku, motivasyon konularında. Soru çözüm tarafında ise isim görünür çünkü güven gerek.",
                },
                {
                  q: "Telefonum yok, web'den girebilir miyim?",
                  a: "Şu an iOS + Android odaklı. Web sürümü 2026 sonrası planlı. Şimdilik mobile-first.",
                },
              ].map((f) => (
                <details key={f.q} className="group rounded-2xl border border-[color:var(--rule)] bg-white px-5 py-4 open:bg-[color:var(--paper)] transition-colors">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="text-[15px] md:text-[16px] font-bold">{f.q}</span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-[color:var(--lavender-deep)] bg-[color:var(--lavender-100)] shrink-0 group-open:rotate-45 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-[14px] leading-[1.65] text-[color:var(--ink-soft)] mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── FINAL CTA ───────────── */}
        <section id="indir" className="py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div
              className="rounded-[24px] p-8 md:p-12 text-center relative overflow-hidden"
              style={{
                background:
                  "radial-gradient(60% 80% at 20% 0%, var(--violet-50) 0%, transparent 60%), radial-gradient(50% 80% at 100% 100%, var(--amber-50) 0%, transparent 60%), var(--paper)",
                border: "1px solid var(--rule)",
              }}
            >
              <div className="flex flex-col items-center gap-4 max-w-[640px] mx-auto">
                <span className="chip">Ücretsiz beta · iOS + Android</span>
                <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-tight">
                  Seninle aynı sınav sürecinden geçen <br className="hidden md:inline" /> <span className="lavender-underline">binlerce öğrenci seni bekliyor.</span>
                </h2>
                <p className="text-[15px] md:text-[17px] text-[color:var(--ink-soft)] max-w-lg">
                  Ortak sınav atmosferine katıl.
                </p>
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <AppStoreBadge />
                  <GooglePlayBadge />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <StarRow />
                  <span className="text-[12px] text-[color:var(--ink-mute)]">Mağaza puanı · 5.000+ öğrenci</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--rule)] py-10" style={{ background: "var(--paper)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/app-icon.png"
                alt="Sorsana"
                width={32}
                height={32}
                className="rounded-[8px]"
              />
              <span className="text-[18px] font-bold">Sorsana</span>
            </div>
            <p className="text-[13px] text-[color:var(--ink-soft)] max-w-sm">
              YKS&apos;ye hazırlanan Türk öğrenciler için akran öğrenme + yapay zeka tutor + sosyal motivasyon platformu.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <p className="text-[12px] uppercase tracking-wider text-[color:var(--ink-mute)] font-mono mb-1">Ürün</p>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#nasil">Nasıl çalışır</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#topluluk">Topluluk</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#sss">SSS</a>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <p className="text-[12px] uppercase tracking-wider text-[color:var(--ink-mute)] font-mono mb-1">Yasal</p>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="/privacy.html">Gizlilik</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#">Kullanım Şartları</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#">İletişim</a>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2">
            <p className="text-[12px] uppercase tracking-wider text-[color:var(--ink-mute)] font-mono mb-1">Sosyal</p>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#">@sorsana — Instagram</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#">@sorsana — Twitter</a>
            <a className="text-[13px] hover:text-[color:var(--lavender-deep)]" href="#">@sorsana — TikTok</a>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8 pt-6 border-t border-[color:var(--rule)] text-[12px] text-[color:var(--ink-mute)] flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 Sorsana. Tüm hakları saklıdır.</span>
          <span>Ücretsiz beta — YKS odaklı.</span>
        </div>
      </footer>
    </>
  );
}
