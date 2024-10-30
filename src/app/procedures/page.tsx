import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProceduresNames } from "@/sections/ProcedureNames";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Procedures() {
  return (
    <>
      <Header />
      <ProceduresNames />
      <CallToAction />
      <Footer />
    </>
  );
}
