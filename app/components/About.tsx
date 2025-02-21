"use client"

import { BentoGrid } from "@/components/ui/bento-grid"

export default function About() {
  const services = [
    {
      title: "Crypto & Sports Betting",
      description: "Access expert insights and strategies for cryptocurrency trading and sports betting. Get real-time analysis and proven strategies to maximize your potential returns.",
      className: "bg-muted/50 dark:bg-muted/10"
    },
    {
      title: "Stock Market",
      description: "Navigate the stock market with confidence using our curated insights and expert analysis for better trading decisions.",
      className: "bg-background"
    },
    {
      title: "Financial Planning",
      description: "Get personalized guidance on building and managing your investment portfolio for long-term success.",
      className: "bg-muted/50 dark:bg-muted/10"
    },
    {
      title: "Real Estate",
      description: "Discover lucrative opportunities in real estate investment and learn effective property management strategies.",
      className: "bg-background"
    },
    {
      title: "Wealth Building",
      description: "Master proven strategies for creating and growing sustainable long-term wealth through diverse investments.",
      className: "bg-muted/50 dark:bg-muted/10"
    },
    {
      title: "Community & Network",
      description: "Join our thriving community of ambitious individuals. Share experiences, learn from successful members, and build valuable connections.",
      className: "bg-background"
    },
    {
      title: "Education",
      description: "Access comprehensive learning resources, expert workshops, and ongoing training to enhance your skills.",
      className: "bg-muted/50 dark:bg-muted/10"
    },
    {
      title: "Support",
      description: "Get 24/7 dedicated support from our experienced team of financial advisors and community managers.",
      className: "bg-background"
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