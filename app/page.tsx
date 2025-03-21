import Hero from '@/app/components/Hero'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'
import SocialLinks from '@/app/components/SocialLinks'
import WinShowcase from '@/app/components/WinShowcase'
import TeamSection from '@/app/components/TeamSection'
import AnimatedBackground from '@/app/components/AnimatedBackground'
import { Metadata } from 'next'

// Add export for additional page-specific metadata
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://millyfam.com/',
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full">
      <article className="w-full">
        <section 
          className="bg-background w-full relative"
          aria-label="Welcome to MillyFam"
        >
          <AnimatedBackground />
          <Hero />
        </section>
        <section 
          className="bg-muted/40 dark:bg-muted/20 w-full" 
          id="pricing"
          aria-label="Membership pricing options"
        >
          <Pricing />
        </section>
        <section 
          className="bg-background w-full" 
          id="winshowcase"
          aria-label="Success showcase"
        >
          <WinShowcase />
        </section>
        <section 
          className="bg-muted/30 dark:bg-muted/10 w-full" 
          id="team"
          aria-label="Our team"
        >
          <TeamSection />
        </section>
        <section 
          className="bg-background w-full" 
          id="faq"
          aria-label="Frequently asked questions"
        >
          <FAQ />
        </section>
        <section 
          className="bg-muted/30 dark:bg-muted/10 w-full" 
          id="contact"
          aria-label="Contact us"
        >
          <Contact />
        </section>
        <section 
          className="bg-background w-full"
          aria-label="Connect with us on social media"
        >
          <SocialLinks />
        </section>
      </article>
    </div>
  )
}

