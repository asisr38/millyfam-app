import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-8 md:py-12 lg:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mx-auto max-w-sm space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
            Pricing
          </h2>
          <p className="text-sm md:text-base text-zinc-200">
            Join our exclusive community today
          </p>
        </div>
        <div className="mx-auto mt-6 md:mt-8 max-w-[90%] md:max-w-md space-y-4 rounded-xl border border-zinc-800 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
            <span className="text-xl md:text-2xl font-bold text-center md:text-left">
              Monthly Subscription
            </span>
            <span className="text-xl md:text-2xl font-bold text-[#D4AF37] text-center md:text-left">
              $39.99
            </span>
          </div>
          <ul className="space-y-3 text-sm md:text-base">
            {[
              "Exclusive Discord access",
              "Wealth-building strategies",
              "Networking opportunities",
              "Ongoing support",
            ].map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-[#27AE60]" />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="w-full bg-[#D4AF37]  hover:scale-105 transition-all duration-300  text-black hover:bg-[#C4A030] font-bold py-3 px-6 rounded"
            asChild
          >
            <Link href="https://whop.com/milly-fam/">Subscribe Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
