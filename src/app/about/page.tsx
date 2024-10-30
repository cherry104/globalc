import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { AboutFeatures } from "@/sections/AboutFeatures";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function About() {
  return (
    <>
      <Header />
      <AboutFeatures />
      <LogoTicker />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
