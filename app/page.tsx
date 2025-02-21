import Hero from '@/app/components/Hero'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'
import SocialLinks from '@/app/components/SocialLinks'
import WinShowcase from '@/app/components/WinShowcase'
import TeamSection from '@/app/components/TeamSection'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-full">
      <main className="w-full">
        <div className="bg-background w-full">
          <Hero />
        </div>
        <div className="bg-muted w-full">
          <Pricing />
        </div>
        <div className="bg-background w-full">
          <WinShowcase />
        </div>
        <div className="bg-muted w-full">
          <TeamSection />
        </div>
        <div className="bg-background w-full">
          <FAQ />
        </div>
        <div className="bg-muted w-full">
          <Contact />
        </div>
        <div className="bg-background w-full">
          <SocialLinks />
        </div>
      </main>
    </div>
  )
}

