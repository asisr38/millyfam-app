import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font loading
  preload: true,
  variable: '--font-montserrat', // Allow usage in CSS variables
});

export const metadata: Metadata = {
  metadataBase: new URL('https://millyfam.com'),
  title: "MillyFam - Exclusive Wealth Building Community",
  description:
    "Join MillyFam for exclusive access to wealth-building strategies, sports betting insights, and a tight-knit community focused on financial success.",
  keywords: "wealth building, financial community, investing, sports betting, financial freedom, passive income, millionaire mindset",
  authors: [{ name: "MillyFam Team" }],
  category: "Finance",
  robots: "index, follow",
  alternates: {
    canonical: "https://millyfam.com",
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="MillyFam" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${montserrat.className} antialiased w-full overflow-x-hidden`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
        
        {/* Structured data for better SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MillyFam",
              "url": "https://millyfam.com",
              "logo": "https://millyfam.com/logo/Logo-2.png",
              "description": "Exclusive wealth building community focused on financial success.",
              "sameAs": [
                "https://twitter.com/MillyFam7",
                "https://www.instagram.com/millyfam7",
                "https://discord.gg/millyfam"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
