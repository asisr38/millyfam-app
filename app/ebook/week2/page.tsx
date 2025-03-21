"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week2Page() {
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
              Week 2: Setting Up for Trading
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 2, you&apos;ll understand how to choose a broker, set up a trading account, understand different account types, and learn about essential trading tools and platforms.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Choosing a Broker</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Traditional Brokers</h4>
                    <p className="mb-2">Full-service brokers offering comprehensive investment services.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Features:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Personal advisors</li>
                        <li>Research tools</li>
                        <li>Higher fees</li>
                        <li>Educational resources</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Examples:</p>
                      <p className="text-sm text-muted-foreground">Charles Schwab, Fidelity, TD Ameritrade</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Online Brokers</h4>
                    <p className="mb-2">Self-directed trading platforms with competitive fees.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Features:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Lower fees</li>
                        <li>Mobile trading</li>
                        <li>Basic research tools</li>
                        <li>No personal advisors</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Examples:</p>
                      <p className="text-sm text-muted-foreground">E*TRADE, Webull, Interactive Brokers</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Commission-Free</h4>
                    <p className="mb-2">Modern platforms focusing on accessibility and zero commissions.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Features:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>No commissions</li>
                        <li>User-friendly interface</li>
                        <li>Limited features</li>
                        <li>Basic research tools</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="font-semibold">Examples:</p>
                      <p className="text-sm text-muted-foreground">Robinhood, Public</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Account Types</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Account Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Cash Account</td>
                      <td className="px-6 py-4">Trade with available cash balance only. No margin or short selling.</td>
                      <td className="px-6 py-4">Beginners, conservative traders</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Margin Account</td>
                      <td className="px-6 py-4">Borrow money from broker to trade. Enables short selling.</td>
                      <td className="px-6 py-4">Experienced traders</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">IRA</td>
                      <td className="px-6 py-4">Tax-advantaged retirement account with trading capabilities.</td>
                      <td className="px-6 py-4">Long-term investors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Trading Platforms</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Desktop Platforms</h4>
                    <p className="mb-4">Professional-grade software with advanced features.</p>
                    <div className="space-y-2">
                      <p className="font-semibold">Key Features:</p>
                      <ul className="list-disc pl-5">
                        <li>Advanced charting</li>
                        <li>Multiple monitors support</li>
                        <li>Complex order types</li>
                        <li>Real-time data</li>
                      </ul>
                      <p className="mt-4 text-sm italic">Examples: ThinkOrSwim, TradeStation</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Mobile Apps</h4>
                    <p className="mb-4">On-the-go trading with essential features.</p>
                    <div className="space-y-2">
                      <p className="font-semibold">Key Features:</p>
                      <ul className="list-disc pl-5">
                        <li>Basic charting</li>
                        <li>Quick order entry</li>
                        <li>Price alerts</li>
                        <li>Portfolio monitoring</li>
                      </ul>
                      <p className="mt-4 text-sm italic">Examples: Robinhood, Webull Mobile</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Essential Trading Tools</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Research Tools</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Stock Screeners</p>
                        <p className="text-sm">Filter stocks based on specific criteria (price, volume, sector).</p>
                      </div>
                      <div>
                        <p className="font-semibold">News Feeds</p>
                        <p className="text-sm">Real-time market news and company updates.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Financial Statements</p>
                        <p className="text-sm">Company balance sheets, income statements, cash flow.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Analysis Tools</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Technical Indicators</p>
                        <p className="text-sm">Moving averages, RSI, MACD for price analysis.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Chart Patterns</p>
                        <p className="text-sm">Tools for identifying trading patterns and trends.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Calculator</p>
                        <p className="text-sm">Calculate position sizes and potential risks/rewards.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 2 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Broker Comparison:</span>
                    <p className="mt-1">Research and compare three different brokers, focusing on fees, features, and user reviews.</p>
                  </li>
                  <li>
                    <span className="font-bold">Platform Setup:</span>
                    <p className="mt-1">Download and set up a practice account on a trading platform of your choice.</p>
                  </li>
                  <li>
                    <span className="font-bold">Tool Exploration:</span>
                    <p className="mt-1">Practice using basic features of your chosen platform: placing orders, reading charts, and using the stock screener.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 flex justify-between">
                <Link href="/ebook/week1">
                  <Button variant="outline">
                    ← Previous: Introduction to Stock Market Basics
                  </Button>
                </Link>
                <Link href="/ebook/week3">
                  <Button>
                    Next: Fundamental Analysis →
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