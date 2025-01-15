import { Card } from "@/components/ui/card"

export default function About() {
  const services = [
    {
      title: "Crypto Plays",
      description: "Stay ahead in the fast-paced world of cryptocurrency with timely insights and strategies."
    },
    {
      title: "Sports Betting",
      description: "Access expert picks and tips to make informed decisions."
    },
    {
      title: "Stock Market Insights",
      description: "Navigate the stock market confidently with curated advice."
    },
    {
      title: "Financial Consulting",
      description: "Receive guidance to optimize your financial decisions."
    },
    {
      title: "Real Estate Opportunities",
      description: "Learn about real estate ventures to diversify your investments."
    },
    {
      title: "Money-Making Tips & Tricks",
      description: "Discover creative ways to grow your income."
    }
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Welcome to Millyfam</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
            A vibrant, value-driven community designed to empower individuals on their journey to financial success. Our mission is simple: to provide our members with the tools, insights, and opportunities they need to achieve their goals and create generational wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-zinc-900 border-zinc-800 hover:border-[#D4AF37] transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-300">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-8 text-lg md:text-xl text-zinc-300">
          <p>
            Millyfam operates as a monthly subscription-based Discord platform, bringing together like-minded individuals who are passionate about success and personal growth. Our experienced team of managers, cappers, and consultants is dedicated to providing top-notch support and value to every member.
          </p>
          
          <p>
            We&apos;re more than just a community&mdash;we&apos;re a family. By joining Millyfam, you&apos;re not only gaining access to expert resources but also becoming part of a supportive network that shares your ambition and drive.
          </p>
          
          <p>
            Whether you&apos;re just starting your financial journey or looking to take it to the next level, Millyfam is here to guide and inspire you every step of the way. Let&apos;s build success together.
          </p>
        </div>
      </div>
    </section>
  )
} 