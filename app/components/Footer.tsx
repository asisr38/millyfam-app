import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-background border-t border-border">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">About Us</Link>
              <Link href="/#pricing" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link href="/#winshowcase" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">Wins</Link>
              <Link href="/#team" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">Team</Link>
              <Link href="/#faq" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">FAQ</Link>
              <Link href="/#contact" className="text-[16px] md:text-[18px] text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-[16px] md:text-[18px] text-muted-foreground">
              <li>Crypto Plays</li>
              <li>Sports Betting</li>
              <li>Stock Market Insights</li>
              <li>Financial Consulting</li>
              <li>Real Estate Advice</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-foreground mb-4">Connect With Us</h3>
            <p className="text-[16px] md:text-[18px] text-muted-foreground mb-4">Join our Discord community for exclusive updates and insights.</p>
            <Link 
              href="https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded text-[16px] md:text-[18px]"
            >
              Join Now
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-[14px] md:text-[16px] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Millyfam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
  
  