"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import Link from "next/link";
import EbookNavigation from "./EbookNavigation";
import { ReactNode } from "react";

interface EbookLayoutProps {
  children: ReactNode;
  backLink?: string;
  title?: string;
}

export default function EbookLayout({ children, backLink = "/ebook", title }: EbookLayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('ebookSidebarVisible');
    if (savedState !== null) {
      setIsSidebarVisible(savedState === 'true');
    }
  }, []);
  
  const toggleSidebar = () => {
    const newState = !isSidebarVisible;
    setIsSidebarVisible(newState);
    // Save state to localStorage
    localStorage.setItem('ebookSidebarVisible', String(newState));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center">
            <Link href={backLink}>
              <Button variant="outline" size="sm">
                ← Back to Contents
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSidebar}
              aria-label={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
              className="ml-2"
            >
              {isSidebarVisible ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
              <span className="ml-2 hidden sm:inline">{isSidebarVisible ? "Hide Menu" : "Show Menu"}</span>
            </Button>
          </div>
          {title && (
            <div className="text-md font-medium hidden sm:block">{title}</div>
          )}
          <Link href="/ebook/download">
            <Button variant="outline" size="sm">
              Download PDF
            </Button>
          </Link>
        </div>

        <div className={`grid grid-cols-1 ${isSidebarVisible ? 'md:grid-cols-[250px_1fr]' : ''} gap-8 transition-all duration-300`}>
          {isSidebarVisible && (
            <div className="hidden md:block">
              <EbookNavigation />
            </div>
          )}
          
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 