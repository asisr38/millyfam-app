"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Poppins } from "next/font/google";
import { Menu, X, Users, DollarSign, Trophy, UserRound, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
const LOGO_LIGHT = "/logo/MFBLACKSOLO.png";
const LOGO_DARK = "/logo/MFWHITESOLO.png";

const brandFont = Poppins({ subsets: ["latin"], weight: ["800"] });
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About Us", url: "/about", icon: Users },
  { name: "Pricing", url: "/#pricing", icon: DollarSign },
  { name: "Wins", url: "/#winshowcase", icon: Trophy },
  { name: "Team", url: "/#team", icon: UserRound },
  { name: "FAQ", url: "/#faq", icon: HelpCircle },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Ignore clicks on the menu toggle button itself to avoid double toggle
      if (menuButtonRef.current && menuButtonRef.current.contains(event.target as Node)) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  if (!mounted) return null;

  return (
    <header 
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between py-3 md:py-4 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick} aria-label="MillyFam Home">
            <Image src={theme === 'dark' ? LOGO_DARK : LOGO_LIGHT} alt="MillyFam Logo" width={140} height={48} className="h-12 w-auto md:h-14" priority />
            <span className={`${brandFont.className} hidden md:inline text-2xl md:text-3xl font-extrabold tracking-tight text-foreground`}>
              MillyFam
            </span>
          </Link>

          {/* Centered Brand (Mobile Only) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <Link href="/" aria-label="MillyFam Home" className="inline-block">
              <span className={`${brandFont.className} text-2xl font-extrabold tracking-tight text-foreground`}>
                MillyFam
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavBar items={navItems} />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <ThemeToggle />
            {/* Join Button */}
            <Button asChild className="hidden md:block bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded-xl text-lg">
              <Link href="https://whop.com/checkout/plan_vpWoem9qt1Ok4?d2c=true" target="_blank" rel="noopener noreferrer">Join Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button 
              ref={menuButtonRef}
              className="flex items-center justify-center md:hidden h-10 w-10 rounded-md text-foreground bg-muted/30 hover:bg-muted/50 transition-colors"
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden bg-background border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <nav className="flex flex-col space-y-4 p-5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="flex items-center gap-3 text-lg p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 active:bg-muted/50 transition-all duration-200"
                    onClick={handleLinkClick}
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-3 mt-2 rounded-lg text-lg">
                <Link 
                  href="https://whop.com/checkout/plan_vpWoem9qt1Ok4?d2c=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  Join Now
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
