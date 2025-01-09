import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center py-12 md:py-24 lg:py-32 bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[35px] font-bold tracking-tighter sm:text-[40px] md:text-[45px] lg:text-[50px] mb-4">
              Join the <span className="text-[#27AE60]">MILLYFAM</span>
            </h1>
            <h2 className="text-[28px] font-bold tracking-tighter sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#D4AF37] mb-6">
              Start Building Wealth Now
            </h2>
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
