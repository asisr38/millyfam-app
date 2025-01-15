import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import SocialLinks from '@/components/SocialLinks'
import WinShowcase from '@/components/WinShowcase'
import TeamSection from '@/components/TeamSection'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        <Hero />
        <Pricing />
        <WinShowcase />
        <TeamSection /> 
        <FAQ />
        <Contact />
        <SocialLinks />
      </main>
    </div>
  )
}

