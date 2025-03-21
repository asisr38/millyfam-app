"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week7Page() {
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
              Week 7: Trading Strategies for Mid Caps
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 7, you&apos;ll understand mid cap stock characteristics, institutional influence, sector-based trading strategies, and how to combine technical and fundamental analysis for mid cap trading.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Mid Cap Stock Characteristics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Features</h4>
                    <p className="mb-2">Key characteristics of mid cap stocks.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Moderate volatility</li>
                        <li>Good liquidity</li>
                        <li>Regular analyst coverage</li>
                        <li>Balanced growth/stability</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Market cap: $2B - $10B</p>
                      <p className="text-sm">Medium risk/reward ratio</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Price Movement</h4>
                    <p className="mb-2">Understanding mid cap price action.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Moderate % moves</li>
                        <li>Institutional influence</li>
                        <li>Sector correlation</li>
                        <li>Earnings impact</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Daily moves: 2-8%</p>
                      <p className="text-sm">Tighter spreads</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Volume Patterns</h4>
                    <p className="mb-2">Volume analysis in mid caps.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Aspects:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Consistent volume</li>
                        <li>Institutional blocks</li>
                        <li>Options influence</li>
                        <li>Dark pool activity</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Average volume: 500K-10M</p>
                      <p className="text-sm">Regular block trades</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Institutional Influence</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Factor</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Impact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Trading Consideration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Block Trading</td>
                      <td className="px-6 py-4">Large volume spikes and price moves</td>
                      <td className="px-6 py-4">Watch for accumulation/distribution</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Dark Pools</td>
                      <td className="px-6 py-4">Hidden institutional activity</td>
                      <td className="px-6 py-4">Monitor dark pool data and prints</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Options Flow</td>
                      <td className="px-6 py-4">Hedging and directional bets</td>
                      <td className="px-6 py-4">Track unusual options activity</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">ETF Inclusion</td>
                      <td className="px-6 py-4">Regular buying/selling pressure</td>
                      <td className="px-6 py-4">Know index rebalance dates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Sector-Based Trading</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Sector Analysis</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Sector Rotation</p>
                        <p className="text-sm">Track money flow between sectors</p>
                      </div>
                      <div>
                        <p className="font-semibold">Industry Leaders</p>
                        <p className="text-sm">Identify strongest stocks in sector</p>
                      </div>
                      <div>
                        <p className="font-semibold">Correlation</p>
                        <p className="text-sm">Monitor sector ETF relationships</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Trading Approach</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Momentum Sectors</p>
                        <p className="text-sm">Trade strongest sector moves</p>
                      </div>
                      <div>
                        <p className="font-semibold">Relative Strength</p>
                        <p className="text-sm">Compare stock vs sector performance</p>
                      </div>
                      <div>
                        <p className="font-semibold">News Impact</p>
                        <p className="text-sm">Sector-wide catalyst effects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Technical-Fundamental Integration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Technical Analysis</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Chart Patterns</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Institutional accumulation</li>
                          <li>Support/resistance levels</li>
                          <li>Volume confirmation</li>
                          <li>Moving averages</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Price Action</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Trend analysis</li>
                          <li>Momentum indicators</li>
                          <li>Volatility measures</li>
                          <li>Time frames alignment</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Fundamental Analysis</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Key Metrics</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Revenue growth</li>
                          <li>Profit margins</li>
                          <li>Market share</li>
                          <li>Competitive position</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Catalysts</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Earnings reports</li>
                          <li>Product launches</li>
                          <li>Management changes</li>
                          <li>Industry developments</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 7 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Sector Analysis:</span>
                    <p className="mt-1">Track and analyze sector rotation patterns and their impact on mid cap stocks.</p>
                  </li>
                  <li>
                    <span className="font-bold">Institutional Activity:</span>
                    <p className="mt-1">Practice identifying institutional accumulation and distribution patterns.</p>
                  </li>
                  <li>
                    <span className="font-bold">Integration Exercise:</span>
                    <p className="mt-1">Develop a trading plan that combines technical and fundamental analysis for mid caps.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 8: Trading Strategies for Large Caps →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week6">
                <Button variant="outline">
                  ← Previous: Trading Strategies for Small Caps
                </Button>
              </Link>
              <Link href="/ebook/week8">
                <Button>
                  Next: Trading Strategies for Large Caps →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 