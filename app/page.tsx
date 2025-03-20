import Hero from '@/app/components/Hero'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'
import SocialLinks from '@/app/components/SocialLinks'
import WinShowcase from '@/app/components/WinShowcase'
import TeamSection from '@/app/components/TeamSection'
import AnimatedBackground from '@/app/components/AnimatedBackground'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full">
      <main className="w-full">
        <div className="bg-background w-full relative">
          <AnimatedBackground />
          <Hero />
        </div>
        <div className="bg-muted/40 dark:bg-muted/20 w-full">
          <Pricing />
        </div>
        <div className="bg-background w-full">
          <WinShowcase />
        </div>
        <div className="bg-muted/30 dark:bg-muted/10 w-full">
          <TeamSection />
        </div>
        <div className="bg-background w-full">
          <FAQ />
        </div>
        <div className="bg-muted/30 dark:bg-muted/10 w-full">
          <Contact />
        </div>
        <div className="bg-background w-full">
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}

