"use client"

import { useMemo, useEffect, useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const TYPEWRITER_TEXTS = [
  "build wealth 💰",
  "secure the bag 🏦",
  "invest wisely 📈",
  "create financial freedom 🚀",
  "level up our lives 🔥",
];

const FINANCE_ICONS = [
  "bitcoin",
  "ethereum",
  "binance",
  "coinbase",
  "mastercard",
  "visa",
  "paypal",
  "stripe",
  "cashapp",
  "venmo",
  "chase",
  "americanexpress",
  "robinhood",
  "xrp",
  "litecoin",
  "dogecoin",
  "monero",
  "tether",
  "discord",
  "tradingview",
 ];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const financeIcons = useMemo(() => FINANCE_ICONS, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] flex items-center justify-center py-12 md:py-24 lg:py-32 text-foreground"
    >
      {/* Icon Cloud Background */}
      {isMounted && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-full h-[50vh] md:h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-[90vw] md:max-w-full aspect-square md:aspect-auto">
              <IconCloud iconSlugs={financeIcons} />
            </div>
          </div>
        </div>
      )}

      <div className="container px-2 sm:px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[35px] font-bold tracking-tighter sm:text-[40px] md:text-[45px] lg:text-[50px] mb-4">
              Join the <span className="text-[#27AE60]">MILLYFAM</span>
            </h1>
            <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal p-4 pt-2">
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
            <p className="mx-auto max-w-[700px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-muted-foreground">
              Exclusive access to a tight-knit community focused on
              wealth-building, ongoing content, and networking with like-minded
              individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
