import { Button } from "@/components/ui/button"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Join the Millyfam
            </h1>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#D4AF37]">
              Start Building Wealth Now
            </h2>
            <p className="mx-auto max-w-[700px] text-zinc-200 text-sm sm:text-base md:text-lg lg:text-xl">
              Exclusive access to a tight-knit community focused on wealth-building, ongoing content, and networking with like-minded individuals.
            </p>
          </div>
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded text-sm sm:text-base md:text-lg">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}

