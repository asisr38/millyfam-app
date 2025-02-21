"use client"

import { BentoGrid } from "@/components/ui/bento-grid"

export default function About() {
  const services = [
    {
      title: "Crypto & Sports Betting",
      description: "Access expert insights and strategies for cryptocurrency trading and sports betting. Our experienced team provides real-time analysis and proven strategies to help you make informed decisions and maximize your potential returns.",
    },
    {
      title: "Stock Market",
      description: "Navigate the stock market with confidence using our curated insights and analysis.",
    },
    {
      title: "Financial Planning",
      description: "Get personalized guidance on building and managing your investment portfolio.",
    },
    {
      title: "Real Estate",
      description: "Discover opportunities in real estate investment and property management.",
    },
    {
      title: "Wealth Building",
      description: "Learn proven strategies for creating and growing long-term wealth.",
    },
    {
      title: "Community & Network",
      description: "Join our thriving community of ambitious individuals. Share experiences, learn from others' successes, and build valuable connections. Our platform facilitates networking opportunities and collaborative learning to accelerate your growth.",
    },
    {
      title: "Education",
      description: "Access our comprehensive learning resources and workshops.",
    },
    {
      title: "Support",
      description: "Get 24/7 support from our experienced team of financial advisors.",
    }
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Welcome to MillyFam</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A vibrant, value-driven community designed to empower individuals on their journey to financial success. Our mission is simple: to provide our members with the tools, insights, and opportunities they need to achieve their goals and create generational wealth.
          </p>
        </div>

        <div className="mb-16">
          <BentoGrid items={services} />
        </div>

        <div className="space-y-8 text-lg md:text-xl text-muted-foreground">
          <p>
            MillyFam operates as a monthly subscription-based Discord platform, bringing together like-minded individuals who are passionate about financial success and personal growth. Our experienced team of managers, consultants, and members is dedicated to providing top-notch support and value to every member.
          </p>
          
          <p>
            We&apos;re more than just a community&mdash;we&apos;re a family. By joining MillyFam, you&apos;re not only gaining access to expert resources but also becoming part of a supportive network that shares your ambition and drive.
          </p>
          
          <p>
            Whether you&apos;re just starting your financial journey or looking to take it to the next level, MillyFam is here to guide and inspire you every step of the way. Let&apos;s build success together.
          </p>
        </div>
      </div>
    </section>
  )
} 