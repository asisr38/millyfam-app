import { Button } from "@/components/ui/button"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center py-8 md:py-12 lg:py-24 xl:py-32 bg-black text-white overflow-hidden">
      <AnimatedBackground />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
              Join the Millyfam and Start Building Wealth Now
            </h1>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-zinc-200">
              Exclusive access to a tight-knit community focused on wealth-building, ongoing content, and networking with like-minded individuals.
            </p>
          </div>
          <Button className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}

