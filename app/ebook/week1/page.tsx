"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week1Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/ebook">
            <Button variant="outline" size="sm">
              ← Back to Contents
            </Button>
          </Link>
          <Link href="/ebook/download">
            <Button variant="outline" size="sm">
              Download PDF
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <div className="hidden md:block">
            <EbookNavigation />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-8">
              Week 1: Introduction to Stock Market Basics
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 1, you&apos;ll understand the fundamentals of the stock market, different types of stocks, key market participants, essential terminology, and various trading styles.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. What is the Stock Market?</h2>
              <p>
                The stock market is a platform where buyers and sellers trade shares of publicly listed companies. It functions as a marketplace where companies raise capital by selling shares, and investors buy or sell those shares to make a profit or earn dividends.
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-6 border border-gray-300 dark:border-gray-700">
                <h4 className="text-lg font-bold mb-2">Example:</h4>
                <p className="mb-3">
                  Imagine Company XYZ wants to raise $1 million to expand its business. It decides to go public and issues 100,000 shares at $10 each. Investors buy these shares, and the company gets the $1 million it needs.
                </p>
                <p>
                  Once the shares are listed on an exchange (e.g., NYSE or NASDAQ), investors can trade them among themselves. If the company performs well, the stock price may rise, and investors can sell their shares at a profit.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Types of Stocks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Small Cap Stocks</h4>
                    <p className="mb-2">Companies with a market capitalization between $300 million and $2 billion.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Younger companies</li>
                        <li>High growth potential</li>
                        <li>Higher volatility</li>
                        <li>Less liquidity</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Example: Etsy (ETSY)</p>
                      <p className="text-sm text-muted-foreground">A growing e-commerce platform with high growth potential but more volatility.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Mid Cap Stocks</h4>
                    <p className="mb-2">Companies with a market capitalization between $2 billion and $10 billion.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Established businesses</li>
                        <li>Moderate growth potential</li>
                        <li>Balanced volatility</li>
                        <li>Decent liquidity</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Example: DocuSign (DOCU)</p>
                      <p className="text-sm text-muted-foreground">Established but still growing in the e-signature space with moderate stability.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Large Cap Stocks</h4>
                    <p className="mb-2">Companies with a market capitalization over $10 billion.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Well-established companies</li>
                        <li>Slower growth</li>
                        <li>Lower volatility</li>
                        <li>High liquidity</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Example: Apple (AAPL)</p>
                      <p className="text-sm text-muted-foreground">A tech giant with stable returns, dividends, and lower volatility.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Market Participants</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Retail Traders</h4>
                    <p>Individual investors who trade with their personal capital.</p>
                    <p className="mt-3 text-sm italic">Example: An individual buying 10 shares of Tesla (TSLA).</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Institutional Investors</h4>
                    <p>Large organizations like mutual funds, hedge funds, and pension funds that trade large volumes.</p>
                    <p className="mt-3 text-sm italic">Example: A hedge fund buying 1 million shares of Tesla.</p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Market Makers</h4>
                    <p>Firms that provide liquidity by buying and selling stocks, profiting from the bid-ask spread.</p>
                    <p className="mt-3 text-sm italic">Example: Ensuring there&apos;s always a buyer and seller for Tesla shares.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Key Trading Terminology</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Term</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Definition</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Bid</td>
                      <td className="px-6 py-4">The highest price a buyer is willing to pay for a stock.</td>
                      <td className="px-6 py-4">The bid for Tesla is $250.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Ask</td>
                      <td className="px-6 py-4">The lowest price a seller is willing to accept for a stock.</td>
                      <td className="px-6 py-4">The ask for Tesla is $251.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Spread</td>
                      <td className="px-6 py-4">The difference between the bid and ask prices.</td>
                      <td className="px-6 py-4">$251 - $250 = $1 spread.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Volume</td>
                      <td className="px-6 py-4">The number of shares traded in a period.</td>
                      <td className="px-6 py-4">Tesla has a daily volume of 20 million shares.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Market Cap</td>
                      <td className="px-6 py-4">The total value of a company&apos;s outstanding shares.</td>
                      <td className="px-6 py-4">1 billion shares at $250 each = $250 billion market cap.</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">P/E Ratio</td>
                      <td className="px-6 py-4">Price-to-Earnings ratio; shows how much investors pay for $1 of earnings.</td>
                      <td className="px-6 py-4">$250 stock price ÷ $5 EPS = 50 P/E ratio.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">EPS</td>
                      <td className="px-6 py-4">Earnings Per Share; a company&apos;s profit divided by outstanding shares.</td>
                      <td className="px-6 py-4">$5 billion profit ÷ 1 billion shares = $5 EPS.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Introduction to Trading Styles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Day Trading</h4>
                    <p className="mb-4">Buying and selling stocks within the same day to profit from short-term price movements.</p>
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <p className="font-semibold mb-1">Example:</p>
                      <p className="text-sm">Buying Tesla at $250 in the morning and selling it at $255 in the afternoon.</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1 text-sm">
                        <li>No overnight positions</li>
                        <li>Requires active monitoring</li>
                        <li>Quick decision making</li>
                        <li>Higher frequency of trades</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Swing Trading</h4>
                    <p className="mb-4">Holding stocks for several days or weeks to capture medium-term price movements.</p>
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <p className="font-semibold mb-1">Example:</p>
                      <p className="text-sm">Buying Tesla at $250 and selling it at $270 after two weeks.</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1 text-sm">
                        <li>Hold positions for days/weeks</li>
                        <li>Less time-intensive</li>
                        <li>Based on longer trends</li>
                        <li>Moderate frequency of trades</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Long-Term Investing</h4>
                    <p className="mb-4">Holding stocks for months or years to benefit from long-term growth and dividends.</p>
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
                      <p className="font-semibold mb-1">Example:</p>
                      <p className="text-sm">Buying Tesla at $100 in 2020 and holding it until 2023 when it reaches $250.</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1 text-sm">
                        <li>Hold positions for months/years</li>
                        <li>Minimal time commitment</li>
                        <li>Focus on fundamentals</li>
                        <li>Lower frequency of trades</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 1 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Market Structure:</span>
                    <p className="mt-1">Complete the interactive market structure quiz.</p>
                  </li>
                  <li>
                    <span className="font-bold">Trading Terms:</span>
                    <p className="mt-1">Create a comprehensive glossary of trading terminology.</p>
                  </li>
                  <li>
                    <span className="font-bold">Market Analysis:</span>
                    <p className="mt-1">Analyze different types of stocks and their characteristics.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 flex justify-between">
                <Link href="/ebook">
                  <Button variant="outline">
                    ← Back to Contents
                  </Button>
                </Link>
                <Link href="/ebook/week2">
                  <Button>
                    Next: Setting Up for Trading →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 