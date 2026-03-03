import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Paths from "@/components/Paths";
import Roadmap from "@/components/Roadmap";
import Network from "@/components/Network";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Paths />
        <Roadmap />
        <Network />
        <Testimonials />
        <Resources />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
