"use client"

import { PricingContainer } from "@/components/ui/pricing-container"

export default function Pricing() {
  const plans = [
    {
      name: "Millyfam Essentials",
      monthlyPrice: 9.99,
      features: [
        "Discord community access",
        "Daily sports/crypto insights",
        "Beginner onboarding guides",
        "Basic trading strategies",
        "7-day free trial",
      ],
      accent: "bg-[#27AE60]/60",
      link: "https://whop.com/checkout/plan_vpWoem9qt1Ok4?d2c=true",
    },
    {
      name: "Millyfam Pro",
      monthlyPrice: 19.99,
      features: [
        "Everything in Essentials +",
        "Exclusive Trading Trends channel",
        "Daily live classes (7PM EST)",
        "Advanced wealth-building",
        "7-day free trial",
      ],
      isPopular: true,
      accent: "bg-primary/60",
      link: "https://whop.com/checkout/plan_VNALXsiUGHOyE?d2c=true",
    },
    {
      name: "Millyfam Elite",
      monthlyPrice: 39.99,
      features: [
        "Everything in Pro +",
        "Premium tools/resources",
        "Priority support",
        "Success optimization toolkit",
        "3-month subscription (Best Value)",
      ],
      accent: "bg-[#9333EA]/60",
      link: "https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true",
    }
  ]

  return (
    <section id="pricing" className="w-full bg-background">
      <div className="w-full flex items-center justify-center py-12 md:py-24">
        <div className="w-full max-w-[1400px] px-6 md:px-8">
          <PricingContainer
            title="Membership Plans"
            plans={plans}
          />
        </div>
      </div>
    </section>
  )
}
