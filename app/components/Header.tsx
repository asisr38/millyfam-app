"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Users, DollarSign, Trophy, UserRound, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "@/public/logo/MF-Logo1.png";
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

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
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
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) return null;

  return (
    <header 
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick} aria-label="MillyFam Home">
            <Image src={logo} alt="MillyFam Logo" className="h-10 w-10 md:h-12 md:w-12" priority />
            <span className="text-xl md:text-2xl font-bold text-foreground">MillyFam</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavBar items={navItems} />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <ThemeToggle />
            {/* Join Button */}
            <Button asChild className="hidden md:block bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 rounded-xl text-lg">
              <Link href="https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true" target="_blank" rel="noopener noreferrer">Join Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button 
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
                  href="https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true" 
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
