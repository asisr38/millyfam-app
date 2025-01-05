'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import logo from '@/public/MF-Logo1.png'
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 bg-black border-b border-zinc-800">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Millyfam Logo" className="w-8 h-8 md:w-12 md:h-12" />
              <span className="text-xl md:text-2xl font-bold text-white">Millyfam</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link href="#pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="#testimonials" className="text-zinc-300 hover:text-white">Testimonials</Link>
            <Link href="#faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="#contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black border-b border-zinc-800 md:hidden">
              <nav className="flex flex-col p-4">
                <Link href="#pricing" className="py-2 text-zinc-300 hover:text-white">Pricing</Link>
                <Link href="#testimonials" className="py-2 text-zinc-300 hover:text-white">Testimonials</Link>
                <Link href="#faq" className="py-2 text-zinc-300 hover:text-white">FAQ</Link>
                <Link href="#contact" className="py-2 text-zinc-300 hover:text-white">Contact</Link>
              </nav>
            </div>
          )}

          <Button className="hidden md:inline-flex bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
            <Link href="https://whop.com/milly-fam/">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

