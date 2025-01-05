import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-sm space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing</h2>
          <p className="text-zinc-200">Join our exclusive community today</p>
        </div>
        <div className="mx-auto mt-8 max-w-md space-y-4 rounded-lg border border-zinc-800 p-6">
          <div className="flex justify-between">
            <span className="text-2xl font-bold">Monthly Subscription</span>
            <span className="text-2xl font-bold text-[#D4AF37]">$39.99</span>
          </div>
          <ul className="space-y-2 text-sm">
            {["Exclusive Discord access", "Wealth-building strategies", "Networking opportunities", "Ongoing support"].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-[#27AE60]" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}

