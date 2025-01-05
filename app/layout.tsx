import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'Millyfam - Exclusive Wealth-Building Community',
  description: 'Join Millyfam and start building wealth now. Exclusive access to a tight-knit community focused on financial success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.className} ${montserrat.className}`}>
      <body>{children}</body>
    </html>
  )
}

