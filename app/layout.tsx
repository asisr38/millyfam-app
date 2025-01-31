import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MillyFam - Financial Success Community",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
