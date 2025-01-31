"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Users, DollarSign, Trophy, UserRound, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo/MF-Logo1.png";
import { NavBar } from "@/components/ui/tubelight-navbar";

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

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.substring(2);

      if (window.location.pathname === "/about") {
        window.location.href = href;
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 330 : 70;
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }

      setTimeout(() => setIsMenuOpen(false), 150);
    } else {
      setIsMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <Image src={logo} alt="MillyFam Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-white">MillyFam</span>
          </Link>

          {/* Desktop Navigation */}
          <NavBar items={navItems} />

          {/* Actions */}
          <div className="flex items-center space-x-4">
             {/* Join Button */}
            <Button asChild className="hidden md:block bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-2 px-4 pb-4 rounded-xl text-lg">
              <Link href="https://whop.com/milly-fam/">Join Now</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={handleMenuToggle} title="Toggle Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <nav className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.url}
                  className="flex items-center gap-3 text-lg text-zinc-300 hover:text-white transition-all duration-200"
                  onClick={handleLinkClick}
                >
                  <Icon size={20} />
                  {item.name}
                </Link>
              );
            })}
            <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-bold py-3 rounded-lg text-lg">
              <Link href="https://whop.com/milly-fam/" onClick={handleLinkClick}>
                Join Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
