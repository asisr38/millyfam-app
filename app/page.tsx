import Hero from "@/components/features/home/Hero";
import CountdownTimer from "@/components/features/home/CountdownTimer";
import Pricing from "@/components/features/home/Pricing";
import FAQ from "@/components/features/home/FAQ";
import Contact from "@/components/features/home/Contact";
import SocialLinks from "@/components/features/home/SocialLinks";
import WinShowcase from "@/components/features/home/WinShowcase";
import TeamSection from "@/components/features/home/TeamSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main>
        <Hero />
        <CountdownTimer />
        <Pricing />
        <WinShowcase />
        <TeamSection />
        <FAQ />
        <Contact />
        <SocialLinks />
      </main>
    </div>
  );
}
