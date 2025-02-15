"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import DisclaimerDialog from "./DisclaimerDialog"

export default function Pricing() {
  const features = [
    "Exclusive Discord access",
    "Wealth-building strategies",
    "Networking opportunities",
    "Ongoing support",
    "Sports betting strategies",
    "Real-time updates",
    "Expert insights",
    "Community support"
  ]

  return (
    <section id="pricing" className="w-full py-8 md:py-12 lg:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mx-auto max-w-sm space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-tighter">
            Pricing
          </h2>
          <p className="text-sm md:text-base text-zinc-200">
            Join our exclusive community today
          </p>
        </div>
        <div className="mx-auto mt-6 md:mt-8 max-w-[90%] md:max-w-md">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader className="space-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
                <h3 className="text-xl md:text-2xl font-bold">Premium Plan</h3>
                <p className="text-xl md:text-2xl font-bold text-[#D4AF37]">$39.99</p>
              </div>
              <p className="text-sm text-zinc-300">
                Get access to our exclusive community and start your journey to financial freedom
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button
                className="w-full bg-[#D4AF37] hover:scale-105 transition-all duration-300 text-black hover:bg-[#C4A030] font-bold py-4 md:py-6 px-8 rounded-xl text-[18px] md:text-[22px]"
                asChild
              >
                <Link href="https://whop.com/milly-fam/">Subscribe Now</Link>
              </Button>

              <ul className="space-y-3 text-sm md:text-base">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-[#27AE60]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <div className="mt-4 text-center">
            <DisclaimerDialog />
          </div>
        </div>
      </div>
    </section>
  )
}
