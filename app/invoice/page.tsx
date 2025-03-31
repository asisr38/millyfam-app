"use client";

import React, { useState, useEffect } from 'react';
import { usePDF } from 'react-to-pdf';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';

const InvoicePage = () => {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { theme } = useTheme();
  const { toPDF, targetRef } = usePDF({
    filename: 'millyfam-invoice.pdf',
    page: {
      margin: 8,
      format: 'letter',
    },
  });
  
  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Logo path - use a simple path for initial render to avoid hydration mismatch
  const logoPath = '/logo/MFBLACK.png';
  
  // Effect to handle the PDF logo path (only runs client-side)
  const [pdfLogoSrc, setPdfLogoSrc] = useState(logoPath);
  
  useEffect(() => {
    // Only update logo source after component is mounted (client-side only)
    if (mounted) {
      const fullLogoPath = theme === 'dark' ? '/logo/MFWHITE.png' : '/logo/MFBLACK.png';
      // For PDF generation, we'll use full URL
      setPdfLogoSrc(fullLogoPath);
      
      // Preload the image
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = fullLogoPath;
    }
  }, [mounted, theme]);
  
  // Calculate current date and due date (one week from now)
  const currentDate = new Date();
  const dueDate = new Date(currentDate);
  dueDate.setDate(dueDate.getDate() + 7);

  // Format dates
  const formattedCurrentDate = currentDate.toLocaleDateString();
  const formattedDueDate = dueDate.toLocaleDateString();

  // Function to ensure image is loaded before generating PDF
  const handleDownload = () => {
    if (imageLoaded) {
      toPDF();
    } else {
      // If image isn't loaded yet, wait a bit and try again
      setTimeout(() => {
        toPDF();
      }, 500);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Invoice</h1>
        
        <Button 
          onClick={handleDownload} 
          className="bg-[hsl(43,74%,60%)] hover:bg-[hsl(43,74%,50%)] text-black font-medium"
        >
          Download Invoice
        </Button>
        
        {/* Invoice container - optimized for PDF printing */}
        <div 
          ref={targetRef} 
          className="w-full max-w-3xl p-5 bg-white text-black border rounded-lg shadow-lg overflow-visible"
          style={{ maxWidth: "8.3in", pageBreakInside: "avoid" }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="h-12 w-32">
              {/* Using standard img tag instead of Next.js Image for better PDF compatibility */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={pdfLogoSrc}
                alt="Milly Fam Logo"
                className="h-full w-auto object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}ails                 onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">INVOICE</h2>
            </div>
          </div>
          
          <div className="flex justify-between mb-3 text-sm">
            <div>
              <h3 className="font-bold mb-1 text-[hsl(43,74%,60%)]">From:</h3>
              <p className="font-medium">Milly Fam LLC</p>
              <p>30 N Gould ST STE R</p>
              <p>Sheridan, Wyoming 82801</p>
            </div>
            
            <div className="text-right">
              <p><span className="font-bold text-[hsl(43,74%,60%)]">Invoice #:</span> INV-{currentDate.getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}</p>
              <p><span className="font-bold text-[hsl(43,74%,60%)]">Date:</span> {formattedCurrentDate}</p>
              <p><span className="font-bold text-[hsl(43,74%,60%)]">Due Date:</span> {formattedDueDate}</p>
            </div>
          </div>
          
          <hr className="my-3 border-[hsl(43,74%,60%)]" />
          
          <div className="mb-3 text-sm">
            <h3 className="font-bold mb-1 text-[hsl(43,74%,60%)]">Bill To:</h3>
            <p className="font-medium">Josh Barton</p>
            <p>14222 Madrigal Dr</p>
            <p>Woodbridge, VA 22193</p>
          </div>
          
          <hr className="my-3 border-[hsl(43,74%,60%)]" />
          
          <div className="overflow-x-visible mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[hsl(43,74%,60%)]">
                  <th className="text-left py-2 text-[hsl(43,74%,60%)]">Description</th>
                  <th className="text-right py-2 text-[hsl(43,74%,60%)]">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 font-medium">Private Education</td>
                  <td className="text-right py-2 font-medium">$35,000.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="border-t border-[hsl(43,74%,60%)] font-bold">
                  <td className="py-2 text-[hsl(43,74%,60%)]">Total</td>
                  <td className="text-right py-2 text-[hsl(43,74%,60%)]">$35,000.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <hr className="my-3 border-[hsl(43,74%,60%)]" />
          
          <div className="mb-4 text-sm">
            <h3 className="font-bold mb-1 text-[hsl(43,74%,60%)]">Payment Instructions:</h3>
            <p>Please contact us for payment instructions.</p>
          </div>
          
          <div className="text-center text-sm">
            <p>Thank you for your business!</p>
            <p className="font-bold">Milly Fam LLC</p>
            <div className="mt-2 pt-2 border-t border-[hsl(43,74%,60%)] text-xs text-gray-500">
              <p>Questions? Contact us at: info@millyfam.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage; 