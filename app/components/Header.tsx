"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Users, DollarSign, Trophy, UserRound, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logo from "@/public/logo/MF-Logo1.png";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { motion } from "framer-motion";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image src={logo} alt="MillyFam Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-foreground">MillyFam</span>
          </Link>

          {/* Desktop Navigation */}
          <NavBar items={navItems} />

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {/* Join Button */}
            <Button asChild className="hidden md:block bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 pb-4 rounded-xl text-lg">
              <Link href="https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true" target="_blank" rel="noopener noreferrer">Join Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden text-foreground"
              onClick={handleMenuToggle}
              title="Toggle Menu"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isMenuOpen ? 180 : 0,
                  scale: isMenuOpen ? 1.1 : 1
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <Menu size={28} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className="md:hidden bg-background border-t"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col space-y-3 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.url}
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground transition-all duration-200"
                onClick={handleLinkClick}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
          <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-3 rounded-lg text-lg">
            <Link href="https://whop.com/checkout/plan_50jVOC4QyHzvh?d2c=true" target="_blank" rel="noopener noreferrer">
              Join Now
            </Link>
          </Button>
        </nav>
      </motion.div>
    </header>
  );
}
