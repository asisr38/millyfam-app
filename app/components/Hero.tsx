import { Typewriter } from "@/components/ui/typewriter";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] flex items-center justify-center py-12 md:py-24 lg:py-32 bg-black text-white overflow-hidden"
    >
      <AnimatedBackground />
      <div className="container px-4 md:px- relative z-10">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[35px] font-bold tracking-tighter sm:text-[40px] md:text-[45px] lg:text-[50px] mb-4">
              Join the <span className="text-[#27AE60]">MILLYFAM</span>
            </h1>
            <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden p-4 pt-2">
              <p className="whitespace-pre-wrap">
                <span>{"We're here to "}</span>
                <Typewriter
                  text={[
                    "build wealth 💰",
                    "secure the bag 🏦",
                    "invest wisely 📈",
                    "create financial freedom 🚀",
                    "level up our lives 🔥",
                  ]}
                  speed={70}
                  className="text-yellow-500"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                />
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-zinc-200">
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
