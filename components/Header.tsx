import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import logo from '@/public/MF-Logo1.png'

export default function Header() {
  return (
    <header className="w-full py-4 bg-black border-b border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Millyfam Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-white">Millyfam</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
            <Link href="#testimonials" className="text-zinc-300 hover:text-white">Testimonials</Link>
            <Link href="#faq" className="text-zinc-300 hover:text-white">FAQ</Link>
            <Link href="#contact" className="text-zinc-300 hover:text-white">Contact</Link>
          </nav>
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}

