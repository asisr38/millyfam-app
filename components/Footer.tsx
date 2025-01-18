import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black border-t border-zinc-800">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">About Us</Link>
              <Link href="/#pricing" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">Pricing</Link>
              <Link href="/#winshowcase" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">Wins</Link>
              <Link href="/#team" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">Team</Link>
              <Link href="/#faq" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">FAQ</Link>
              <Link href="/#contact" className="text-[16px] md:text-[18px] text-zinc-300 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-[16px] md:text-[18px] text-zinc-300">
              <li>Crypto Plays</li>
              <li>Sports Betting</li>
              <li>Stock Market Insights</li>
              <li>Financial Consulting</li>
              <li>Real Estate Advice</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4">Connect With Us</h3>
            <p className="text-[16px] md:text-[18px] text-zinc-300 mb-4">Join our Discord community for exclusive updates and insights.</p>
            <Link 
              href="https://whop.com/milly-fam/" 
              className="inline-block bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded text-[16px] md:text-[18px]"
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-[14px] md:text-[16px] text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Millyfam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  
  