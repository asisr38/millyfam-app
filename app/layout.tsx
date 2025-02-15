import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MillyFam - Exclusive Wealth Building Community",
  description:
    "Join MillyFam for exclusive access to wealth-building strategies, sports betting insights, and a tight-knit community focused on financial success.",
  openGraph: {
    title: "MillyFam - Exclusive Wealth Building Community",
    description: "Join MillyFam for exclusive access to wealth-building strategies and a tight-knit community focused on financial success.",
    url: "https://millyfam.com",
    siteName: "MillyFam",
    images: [
      {
        url: "/logo/Logo-2.png",
        width: 1200,
        height: 1200,
        alt: "MillyFam Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MillyFam",
    description: "Join MillyFam for exclusive access to wealth-building strategies and a tight-knit community focused on financial success.",
    images: ["/logo/Logo-2.png"],
    creator: "@MillyFam7"
  },
  icons: {
    icon: "/logo/Logo-2.png",
    shortcut: "/logo/Logo-2.png",
    apple: "/logo/Logo-2.png",
  }
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
