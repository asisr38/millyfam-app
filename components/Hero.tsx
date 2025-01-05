import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Join the Millyfam and Start Building Wealth Now
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Exclusive access to a tight-knit community focused on wealth-building, ongoing content, and networking with like-minded individuals.
            </p>
          </div>
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}

