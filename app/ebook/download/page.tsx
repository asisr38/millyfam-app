"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { TradingEbookSyllabusPDF } from "@/app/ebook/components/TradingEbookSyllabusPDF";
import EbookLayout from "../components/EbookLayout";

export default function DownloadPage() {
  return (
    <EbookLayout title="Download Ebook">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Download Trading Fundamentals Ebook
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Get your complete copy of &quot;Trading Fundamentals: A Visual Journey from Beginner to Expert&quot;
        </p>
        
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <PDFDownloadLink 
            document={<TradingEbookSyllabusPDF />}
            fileName="trading-fundamentals-ebook.pdf"
            className="w-full max-w-xs"
          >
            {({ loading }) => (
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90" 
                disabled={loading}
              >
                {loading ? "Generating PDF..." : "Download PDF Now"}
              </Button>
            )}
          </PDFDownloadLink>
          
          <p className="text-sm text-muted-foreground mt-2">
            PDF format, optimized for both screen reading and printing
          </p>
          
          <div className="mt-8">
            <Link href="/ebook" className="text-blue-600 hover:underline dark:text-blue-400">
              ← Back to Ebook Home
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">What&apos;s Inside The Ebook</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>7 comprehensive sections covering all aspects of trading</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>Over 100 visual illustrations, charts, and diagrams</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>Practical exercises at the end of each chapter</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>Printable templates for trading journals and checklists</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>Visual glossary of chart patterns and indicators</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">✓</span> 
            <span>Ready-to-use trading plan frameworks</span>
          </li>
        </ul>
      </div>
    </EbookLayout>
  );
} 