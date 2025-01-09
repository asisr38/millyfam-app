export default function Footer() {
    return (
      <footer id="footer" className="w-full py-4 md:py-6 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-center text-[14px] text-zinc-400">
              © 2024 Millyfam. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <a href="#" className="text-[14px] text-zinc-400 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:underline">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    )
  }
  
  