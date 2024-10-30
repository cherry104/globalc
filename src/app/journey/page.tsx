import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { PatientJourney } from "@/sections/PatientJourney";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Journey() {
  return (
    <>
      <Header />
      <PatientJourney />
      <CallToAction />
      <Footer />
    </>
  );
}
