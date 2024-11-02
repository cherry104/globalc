"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“I was nervous about traveling abroad for surgery, but GlobalCure made the entire experience seamless.”",
    name: "John Smith",
    title: "58 (USA) - Knee Replacement",
    avatarImg: avatar1,
  },
  {
    text: "“GlobalCure exceeded my expectations in every way.”",
    name: "Sarah Thompson",
    title: "43 (UK) - Hip Replacement",
    avatarImg: avatar3,
  },
  {
    text: "“I was impressed by the professionalism and efficiency of GlobalCure.”",
    name: "Mohammed Al-Bakri",
    title: "61 (UAE) - Cataract Surgery",
    avatarImg: avatar2,
  },
  {
    text: "“I found GlobalCure when I was searching for an affordable option for heart surgery.”",
    name: "Karen Douglas",
    title: "52 (USA) - Heart Bypass",
    avatarImg: avatar3,
  },
  {
    text: "“I never thought I'd travel for surgery, but GlobalCure made it an easy choice.”",
    name: "Robert Wilson",
    title: "66 (UK) - Knee Replacement",
    avatarImg: avatar2,
  },
  {
    text: "“The team at GlobalCure provided exceptional service throughout my journey.”",
    name: "Nadia Hassan",
    title: "39 (Saudi Arabia) - Cosmetic Surgery",
    avatarImg: avatar4,
  },
  {
    text: "“From the consultation to recovery, GlobalCure took care of every detail.”",
    name: "Thomas Murphy",
    title: "55 (Australia) - Hip Replacement",
    avatarImg: avatar3,
  },
  {
    text: "“The level of care I received in India through GlobalCure was extraordinary.”",
    name: "David Stewart",
    title: "62 (UK) - Heart Bypass",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">
          Patient Success Stories
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Discover how we've helped patients worldwide achieve a healthier,
          pain-free life.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before: border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale "
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
