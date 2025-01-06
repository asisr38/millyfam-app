'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/MF-Logo1.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Millyfam" className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">Millyfam</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="#testimonials" className="text-zinc-300 hover:text-white">Testimonials</Link>
            <Link href="#faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="#contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded hidden sm:block">
              Join Now
            </Button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-zinc-900">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="#pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="#testimonials" className="text-zinc-300 hover:text-white">Testimonials</Link>
            <Link href="#faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="#contact" className="text-zinc-300 hover:text-white">Contact</Link>
            <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded w-full">
              Join Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

