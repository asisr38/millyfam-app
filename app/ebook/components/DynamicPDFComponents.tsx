"use client";

import dynamic from 'next/dynamic';

// Only import directly in the client component
import { TradingEbookSyllabusPDF } from './TradingEbookSyllabusPDF';

// Import PDFDownloadLink dynamically with no SSR
export const PDFDownloadLinkClient = dynamic(
  () => import('./PDFDownloadLinkWrapper'),
  { ssr: false }
);

// Re-export TradingEbookSyllabusPDF
export { TradingEbookSyllabusPDF }; 