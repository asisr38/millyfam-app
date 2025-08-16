"use client"

import { useMemo, useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TYPEWRITER_TEXTS = [
  "build wealth 💰",
  "secure the bag 🏦",
  "invest wisely 📈",
  "create financial freedom 🚀",
  "level up our lives 🔥",
];

// IconCloud removed for a cleaner hero

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  // IconCloud removed

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] sm:min-h-[100vh] flex items-center justify-center py-8 md:py-16 lg:py-24 text-foreground overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Icon Cloud removed */}

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 
              id="hero-heading"
              className="text-[32px] font-bold tracking-tighter sm:text-[40px] md:text-[45px] lg:text-[50px] mb-2 md:mb-4"
            >
              Join the <span className="text-[#27AE60]">MILLYFAM</span>
            </h1>
            <div className="w-full h-full md:text-3xl lg:text-4xl sm:text-2xl text-xl flex flex-row items-start justify-start bg-background font-normal px-2 py-1 md:p-4 md:pt-2">
              <p className="whitespace-pre-wrap">
                <span>{"We're here to "}</span>
                {isMounted && (
                  <Typewriter
                    text={TYPEWRITER_TEXTS}
                    speed={70}
                    className="text-yellow-500"
                    waitTime={1500}
                    deleteSpeed={40}
                    cursorChar={"_"}
                  />
                )}
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-muted-foreground mt-2 sm:mt-4">
              Exclusive access to a tight-knit community focused on
              wealth-building, ongoing content, and networking with like-minded
              individuals.
            </p>

            {/* Added CTA Button for better mobile conversion */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
              <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-6 text-lg rounded-xl">
                <Link href="https://whop.com/checkout/plan_VNALXsiUGHOyE?d2c=true" target="_blank" rel="noopener noreferrer">
                  Join Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
