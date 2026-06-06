import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorsana: Sorun varsa, Sorsana.",
  description:
    "YKS'ye hazırlanan binlerce öğrencinin birbirine yardım ettiği, yapay zeka ile takıldığı yerden geçtiği, motivasyonunu sosyal bir alanda tazelediği uygulama. Ücretsiz beta.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
