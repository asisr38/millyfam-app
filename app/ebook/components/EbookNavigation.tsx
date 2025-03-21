"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect, createContext, useContext, PropsWithChildren } from "react";
import { ChevronDown, ChevronUp, PanelLeftClose, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Create context for sidebar visibility
export const SidebarContext = createContext({
  isSidebarVisible: true,
  toggleSidebar: () => {},
});

// Provider component
export function SidebarProvider({ children }: PropsWithChildren) {
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
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook to use the sidebar context
export function useSidebar() {
  return useContext(SidebarContext);
}

// Toggle button component for the sidebar
export function SidebarToggle() {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  
  return (
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
  );
}

const ebookSections = [
  {
    id: 1,
    title: "Introduction to Stock Market Basics",
    link: "/ebook/week1"
  },
  {
    id: 2,
    title: "Setting Up for Trading",
    link: "/ebook/week2"
  },
  {
    id: 3,
    title: "Fundamental Analysis",
    link: "/ebook/week3"
  },
  {
    id: 4,
    title: "Technical Analysis Basics",
    link: "/ebook/week4"
  },
  {
    id: 5,
    title: "Advanced Technical Analysis",
    link: "/ebook/week5"
  },
  {
    id: 6,
    title: "Trading Strategies for Small Caps",
    link: "/ebook/week6"
  },
  {
    id: 7,
    title: "Trading Strategies for Mid Caps",
    link: "/ebook/week7"
  },
  {
    id: 8,
    title: "Trading Strategies for Large Caps",
    link: "/ebook/week8"
  },
  {
    id: 9,
    title: "Day Trading",
    link: "/ebook/week9"
  },
  {
    id: 10,
    title: "Swing Trading",
    link: "/ebook/week10"
  },
  {
    id: 11,
    title: "Long-Term Investing",
    link: "/ebook/week11"
  },
  {
    id: 12,
    title: "Advanced Topics and Final Project",
    link: "/ebook/week12"
  }
];

export default function EbookNavigation() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('ebookNavExpanded');
    if (savedState !== null) {
      setIsExpanded(savedState === 'true');
    }
  }, []);
  
  const toggleNavigation = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    // Save state to localStorage
    localStorage.setItem('ebookNavExpanded', String(newState));
  };
  
  // Find the current active section
  const activeSection = ebookSections.find(section => pathname === section.link);
  
  return (
    <div className="mb-8 bg-card border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Ebook Sections</div>
        <div className="flex items-center">
          {!isExpanded && activeSection && (
            <span className="text-sm mr-2 text-muted-foreground">
              {activeSection.id}. {activeSection.title}
            </span>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleNavigation}
            aria-label={isExpanded ? "Collapse sections" : "Expand sections"}
            className="h-8 w-8 p-0"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <>
          <nav className="space-y-1">
            {ebookSections.map((section) => (
              <Link 
                key={section.id} 
                href={section.link}
                className={cn(
                  "block py-2 px-3 rounded-md transition-colors hover:bg-muted",
                  pathname === section.link ? "bg-muted font-semibold" : ""
                )}
              >
                {section.id}. {section.title}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t">
            <Link 
              href="/ebook"
              className={cn(
                "block py-2 px-3 rounded-md transition-colors hover:bg-muted",
                pathname === "/ebook" ? "bg-muted font-semibold" : ""
              )}
            >
              Ebook Home
            </Link>
            <Link 
              href="/ebook/download"
              className={cn(
                "block py-2 px-3 rounded-md transition-colors hover:bg-muted",
                pathname === "/ebook/download" ? "bg-muted font-semibold" : ""
              )}
            >
              Download PDF
            </Link>
          </div>
        </>
      )}
    </div>
  );
} 