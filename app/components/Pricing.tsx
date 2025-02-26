"use client"

import { PricingContainer } from "@/components/ui/pricing-container"

export default function Pricing() {
  const plans = [
    {
      name: "Millyfam Essentials",
      monthlyPrice: 19.99,
      features: [
        "Discord community access",
        "Daily sports/crypto insights",
        "Beginner onboarding guides",
        "Basic trading strategies",
        "7-day free trial"
      ],
      accent: "bg-[#27AE60]/60",
      link: "https://whop.com/checkout/plan_VNALXsiUGHOyE?d2c=true"
    },
    {
      name: "Millyfam Pro",
      monthlyPrice: 39.99,
      features: [
        "Everything in Essentials +",
        "Exclusive Trading Trends channel",
        "Daily live classes (7PM EST)",
        "Advanced wealth-building",
        "7-day free trial"
      ],
      isPopular: true,
      accent: "bg-primary/60",
      link: "https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true"
    },
    {
      name: "Millyfam Elite",
      price: 89.99,
      billingPeriod: "3 months",
      features: [
        "Everything in Pro +",
        "Premium tools/resources",
        "Priority support",
        "Success optimization toolkit",
        "3-month subscription (Best Value)"
      ],
      accent: "bg-[#9333EA]/60",
      link: "https://whop.com/checkout/plan_9ZfXpKcRrvqv1?d2c=true"
    }
  ]

  return (
    <section id="pricing" className="w-full flex items-center justify-center ">
      <PricingContainer
        title="Membership Plans"
        plans={plans}
      />
    </section>
  )
}
