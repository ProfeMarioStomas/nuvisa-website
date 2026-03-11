import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";
import CtaBanner from "@/components/CtaBanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Menu />
      <WhyUs />
      <Contact />
      <CtaBanner />
      <Footer />
    </>
  );
}
