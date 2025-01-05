export default function Footer() {
    return (
      <footer className="w-full py-6 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-zinc-400">
              © 2024 Millyfam. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <a href="#" className="text-sm text-zinc-400 hover:underline">
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
  
  