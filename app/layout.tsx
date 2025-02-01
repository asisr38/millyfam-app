import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/layout/Header";
import ErrorBoundary from "@/components/layout/ErrorBoundary";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://millyfam.com"), // Add this
  title: {
    template: "%s | MillyFam",
    default: "MillyFam - Financial Success Community",
  },
  description:
    "Join MillyFam's exclusive Discord community for crypto plays, sports betting tips, stock insights, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ErrorBoundary>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}
