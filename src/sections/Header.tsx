import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import MetaPixel from "@/utils/meta/metaPixel";

export const Header = () => {
  return (
    <>
      <MetaPixel />
      <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
        <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
        <div className="container">
          <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
            <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
            <div>
              <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
                <LogoIcon className="h-8 w-8" />
              </div>
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-8 text-sm ">
                <a
                  href="/#"
                  className="text-white/70 hover:text-white transition"
                >
                  Home
                </a>
                <a
                  href="/procedures"
                  className="text-white/70 hover:text-white transition"
                >
                  Medical Procedures
                </a>
                <a
                  href="/journey"
                  className="text-white/70 hover:text-white transition"
                >
                  Patient Journey
                </a>
                <a
                  href="/about"
                  className="text-white/70 hover:text-white transition"
                >
                  About Us
                </a>
              </nav>
            </div>
            <div className="flex gap-4 items-center">
              <a href="https://tally.so/r/3l07Bv">
                <Button>Contact Us</Button>
              </a>
              <MenuIcon className="md:hidden" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
