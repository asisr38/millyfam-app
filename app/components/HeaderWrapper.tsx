"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";

export default function HeaderWrapper({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const pathname = usePathname();
  const isEbookRoute = pathname?.startsWith('/ebook');
  
  return (
    <>
      {/* Only render Header for non-ebook routes */}
      {!isEbookRoute && <Header />}
      
      {/* Add top margin to content when header is present to prevent overlap */}
      <main className={`flex-1 w-full ${!isEbookRoute ? 'mt-20 md:mt-24' : ''}`}>
        {children}
      </main>
    </>
  );
} 