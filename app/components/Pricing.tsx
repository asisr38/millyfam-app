"use client"

import { PricingCard } from "@/components/pricing-card"
import DisclaimerDialog from "./DisclaimerDialog"

export default function Pricing() {
  const pricingFeatures = [
    {
      title: "Core Features",
      items: [
        "Exclusive Discord access",
        "Real-time market updates",
        "Community support",
        "Basic educational resources",
      ],
    },
    {
      title: "Investment Tools",
      items: [
        "Sports betting strategies",
        "Crypto trading insights",
        "Stock market analysis",
        "Real estate opportunities",
      ],
    },
    {
      title: "Premium Benefits",
      items: [
        "One-on-one consultations",
        "Priority support access",
        "Advanced trading signals",
        "Networking events",
      ],
    },
  ]

  return (
    <section id="pricing" className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-sm space-y-4 text-center mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-tighter text-foreground">
            Pricing
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Join our exclusive community today
          </p>
        </div>

        <PricingCard
          title="Premium Plan"
          description="Get access to our exclusive community and start your journey to financial freedom"
          price={39.99}
          features={pricingFeatures}
          buttonText="Subscribe Now"
          onButtonClick={() => window.location.href = 'https://whop.com/milly-fam/'}
        />

        <div className="mt-4 text-center">
          <DisclaimerDialog />
        </div>
      </div>
    </section>
  )
}
