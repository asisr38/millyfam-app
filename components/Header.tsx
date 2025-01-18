'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/logo/MF-Logo1.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('/#')) {
      // For same-page navigation links, add a small delay
      setTimeout(() => {
        setIsMenuOpen(false)
      }, 150)
    } else {
      // For external links or different pages, close immediately
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="w-full py-4 bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between md:justify-around">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <Image src={logo} alt="Millyfam" className="w-10 h-10" />
              <span className="text-[32px] md:text-[40px] font-bold text-white">MILLYFAM</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>About Us</Link>
            <Link href="/#pricing" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Pricing</Link>
            <Link href="/#winshowcase" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Wins</Link>
            <Link href="/#team" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Team</Link>
            <Link href="/#faq" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>FAQ</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded hidden sm:block text-[16px] md:text-[18px]">
              <Link href="https://whop.com/milly-fam/" onClick={handleLinkClick}>Join Now</Link>
            </Button>
            <button
              className="md:hidden text-white"
              onClick={handleMenuToggle}
              title="Toggle Menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-zinc-900">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/about" className="text-[16px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>About Us</Link>
            <Link href="/#pricing" className="text-[16px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Pricing</Link>
            <Link href="/#winshowcase" className="text-[16px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Wins</Link>
            <Link href="/#team" className="text-[16px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>Team</Link>
            <Link href="/#faq" className="text-[16px] text-zinc-300 hover:text-white" onClick={handleLinkClick}>FAQ</Link>
            <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded w-full text-[16px]">
              <Link href="https://whop.com/milly-fam/" onClick={handleLinkClick}>Join Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

