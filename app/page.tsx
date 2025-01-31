import Hero from '@/app/components/Hero'
import Pricing from '@/app/components/Pricing'
import FAQ from '@/app/components/FAQ'
import Contact from '@/app/components/Contact'
import SocialLinks from '@/app/components/SocialLinks'
import WinShowcase from '@/app/components/WinShowcase'
import TeamSection from '@/app/components/TeamSection'

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

