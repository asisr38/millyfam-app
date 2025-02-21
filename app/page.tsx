import Hero from '@/app/components/Hero'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'
import SocialLinks from '@/app/components/SocialLinks'
import WinShowcase from '@/app/components/WinShowcase'
import TeamSection from '@/app/components/TeamSection'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main>
        <div className="bg-background">
          <Hero />
        </div>
        <div className="bg-muted">
          <Pricing />
        </div>
        <div className="bg-background">
          <WinShowcase />
        </div>
        <div className="bg-muted">
          <TeamSection />
        </div>
        <div className="bg-background">
          <FAQ />
        </div>
        <div className="bg-muted">
          <Contact />
        </div>
        <div className="bg-background">
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}

