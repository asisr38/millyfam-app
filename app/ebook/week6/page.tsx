"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week6Page() {
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
              Week 6: Trading Strategies for Small Caps
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 6, you&apos;ll understand small cap stock characteristics, specific trading strategies, risk management techniques, and how to identify potential opportunities in the small cap market.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Small Cap Stock Characteristics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Features</h4>
                    <p className="mb-2">Key characteristics of small cap stocks.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>High volatility</li>
                        <li>Lower liquidity</li>
                        <li>Less analyst coverage</li>
                        <li>Growth potential</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Market cap: $300M - $2B</p>
                      <p className="text-sm">Higher risk/reward ratio</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Price Movement</h4>
                    <p className="mb-2">Understanding small cap price action.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Larger % moves</li>
                        <li>Gap potential</li>
                        <li>News sensitivity</li>
                        <li>Sector correlation</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Daily moves: 5-20%</p>
                      <p className="text-sm">Higher spreads</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Volume Patterns</h4>
                    <p className="mb-2">Volume analysis in small caps.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Aspects:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Volume spikes</li>
                        <li>Relative volume</li>
                        <li>Pre-market activity</li>
                        <li>Institutional buying</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Average volume: 100K-5M</p>
                      <p className="text-sm">Volume/price correlation</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Trading Strategies</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Strategy</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Setup</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Risk Management</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Momentum Trading</td>
                      <td className="px-6 py-4">High volume breakout with news catalyst</td>
                      <td className="px-6 py-4">Stop loss below breakout level</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Gap Trading</td>
                      <td className="px-6 py-4">Pre-market gapper with strong catalyst</td>
                      <td className="px-6 py-4">Use pre-market high/low as reference</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Pullback Trading</td>
                      <td className="px-6 py-4">Retracement to key support level</td>
                      <td className="px-6 py-4">Stop below support with 2:1 reward ratio</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">News Trading</td>
                      <td className="px-6 py-4">Significant news with volume surge</td>
                      <td className="px-6 py-4">Tight stops with quick profit taking</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Risk Management</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Position Sizing</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Risk per Trade</p>
                        <p className="text-sm">1-2% of account per trade</p>
                      </div>
                      <div>
                        <p className="font-semibold">Share Size</p>
                        <p className="text-sm">Based on volatility and spread</p>
                      </div>
                      <div>
                        <p className="font-semibold">Scaling</p>
                        <p className="text-sm">Start small, add on confirmation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Stop Loss Strategies</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Technical Stops</p>
                        <p className="text-sm">Based on support/resistance levels</p>
                      </div>
                      <div>
                        <p className="font-semibold">Volatility Stops</p>
                        <p className="text-sm">Using ATR or price swings</p>
                      </div>
                      <div>
                        <p className="font-semibold">Time Stops</p>
                        <p className="text-sm">Exit if no movement in set time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Opportunity Identification</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Screening Criteria</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Technical Filters</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Volume {'>'}100K</li>
                          <li>Price {'>'} $1</li>
                          <li>Relative volume {'>'} 2</li>
                          <li>New 52-week highs/lows</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Fundamental Filters</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Market cap range</li>
                          <li>Sector momentum</li>
                          <li>News catalysts</li>
                          <li>Earnings dates</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Watchlist Building</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Daily Process</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Pre-market scanning</li>
                          <li>News analysis</li>
                          <li>Volume analysis</li>
                          <li>Pattern identification</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Prioritization</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Highest volume</li>
                          <li>Strongest catalysts</li>
                          <li>Best chart patterns</li>
                          <li>Risk/reward ratio</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 6 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Strategy Development:</span>
                    <p className="mt-1">Create a small cap trading plan with specific entry/exit criteria.</p>
                  </li>
                  <li>
                    <span className="font-bold">Scanner Setup:</span>
                    <p className="mt-1">Build and test a small cap stock scanner using the provided criteria.</p>
                  </li>
                  <li>
                    <span className="font-bold">Risk Analysis:</span>
                    <p className="mt-1">Practice position sizing and stop loss placement on historical small cap trades.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week7">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 7: Trading Strategies for Mid Caps →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week5">
                <Button variant="outline">
                  ← Previous: Advanced Technical Analysis
                </Button>
              </Link>
              <Link href="/ebook/week7">
                <Button>
                  Next: Trading Strategies for Mid Caps →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 