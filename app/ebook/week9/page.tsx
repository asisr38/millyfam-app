"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week9Page() {
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
              Week 9: Day Trading Techniques
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 9, you&apos;ll understand day trading fundamentals, intraday patterns, real-time analysis techniques, and how to develop effective day trading strategies.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Day Trading Fundamentals</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Time Management</h4>
                    <p className="mb-2">Essential timing aspects of day trading.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Pre-market prep</li>
                        <li>Market hours</li>
                        <li>Power hours</li>
                        <li>Session planning</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Morning: 9:30-11:30 AM</p>
                      <p className="text-sm">Close: 3:00-4:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Trade Management</h4>
                    <p className="mb-2">Core trade management principles.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Essentials:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Position sizing</li>
                        <li>Risk per trade</li>
                        <li>Stop placement</li>
                        <li>Profit targets</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Max risk: 1% per trade</p>
                      <p className="text-sm">Clear exit rules</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Analysis</h4>
                    <p className="mb-2">Real-time market analysis tools.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Tools:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Level 2 data</li>
                        <li>Time and sales</li>
                        <li>Heat maps</li>
                        <li>News feeds</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Real-time data</p>
                      <p className="text-sm">Multiple timeframes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Intraday Patterns</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pattern</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Characteristics</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Trading Approach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Opening Range</td>
                      <td className="px-6 py-4">First 30 minutes of trading</td>
                      <td className="px-6 py-4">Breakout or fade extremes</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">VWAP Reversals</td>
                      <td className="px-6 py-4">Price rejection at VWAP</td>
                      <td className="px-6 py-4">Mean reversion trades</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Momentum Moves</td>
                      <td className="px-6 py-4">Strong directional moves</td>
                      <td className="px-6 py-4">Trend following entries</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Consolidation Breaks</td>
                      <td className="px-6 py-4">Tight range followed by breakout</td>
                      <td className="px-6 py-4">Range breakout strategy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Real-Time Analysis</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Price Action</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Candlestick Analysis</p>
                        <p className="text-sm">Real-time pattern formation</p>
                      </div>
                      <div>
                        <p className="font-semibold">Support/Resistance</p>
                        <p className="text-sm">Dynamic level identification</p>
                      </div>
                      <div>
                        <p className="font-semibold">Volume Analysis</p>
                        <p className="text-sm">Volume confirmation signals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Market Internals</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Market Breadth</p>
                        <p className="text-sm">Advance/decline ratios</p>
                      </div>
                      <div>
                        <p className="font-semibold">Sector Performance</p>
                        <p className="text-sm">Relative strength analysis</p>
                      </div>
                      <div>
                        <p className="font-semibold">VIX Analysis</p>
                        <p className="text-sm">Volatility impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Day Trading Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Momentum Trading</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Entry Criteria</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Volume surge</li>
                          <li>Price breakout</li>
                          <li>News catalyst</li>
                          <li>Sector momentum</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Management</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Trailing stops</li>
                          <li>Partial profits</li>
                          <li>Volume fade exit</li>
                          <li>Time stops</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Mean Reversion</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Setup Conditions</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Overextended moves</li>
                          <li>Support/resistance</li>
                          <li>RSI extremes</li>
                          <li>VWAP deviation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Control</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Quick stops</li>
                          <li>Defined targets</li>
                          <li>Size management</li>
                          <li>Counter-trend rules</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 9 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Pattern Recognition:</span>
                    <p className="mt-1">Practice identifying intraday patterns using historical charts and real-time data.</p>
                  </li>
                  <li>
                    <span className="font-bold">Strategy Testing:</span>
                    <p className="mt-1">Paper trade momentum and mean reversion strategies during market hours.</p>
                  </li>
                  <li>
                    <span className="font-bold">Trading Journal:</span>
                    <p className="mt-1">Document trades with screenshots, setups, and lessons learned.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week10">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 10: Swing Trading Techniques →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week8">
                <Button variant="outline">
                  ← Previous: Trading Strategies for Large Caps
                </Button>
              </Link>
              <Link href="/ebook/week10">
                <Button>
                  Next: Swing Trading Techniques →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 