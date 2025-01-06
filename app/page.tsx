import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SocialLinks from '@/components/SocialLinks'
import WinShowcase from '@/components/WinShowcase'
import TeamSection from '@/components/TeamSection'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Testimonials />
        <WinShowcase />
        <TeamSection /> 
        <FAQ />
        <Contact />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  )
}

