"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week8Page() {
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
              Week 8: Trading Strategies for Large Caps
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 8, you&apos;ll understand large cap stock characteristics, market impact analysis, algorithmic trading influence, and how to develop strategies for blue-chip stocks.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Large Cap Stock Characteristics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Features</h4>
                    <p className="mb-2">Key characteristics of large cap stocks.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>High market cap</li>
                        <li>Strong liquidity</li>
                        <li>Extensive coverage</li>
                        <li>Market leaders</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Market cap: {'>'} $10B</p>
                      <p className="text-sm">Lower risk/reward ratio</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Price Movement</h4>
                    <p className="mb-2">Understanding large cap price action.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Characteristics:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Lower volatility</li>
                        <li>Index influence</li>
                        <li>Global factors</li>
                        <li>Macro trends</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Daily moves: 1-4%</p>
                      <p className="text-sm">Minimal spreads</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Impact</h4>
                    <p className="mb-2">Large cap influence on markets.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Aspects:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Index weighting</li>
                        <li>Sector leadership</li>
                        <li>Market sentiment</li>
                        <li>Economic indicators</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">High institutional ownership</p>
                      <p className="text-sm">Market bellwethers</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Algorithmic Trading Impact</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Algorithm Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Market Impact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Trading Consideration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">VWAP Algorithms</td>
                      <td className="px-6 py-4">Steady buying/selling throughout day</td>
                      <td className="px-6 py-4">Track volume weighted price levels</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Market Making</td>
                      <td className="px-6 py-4">Tight spreads and liquidity</td>
                      <td className="px-6 py-4">Monitor order book depth</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Index Arbitrage</td>
                      <td className="px-6 py-4">Price alignment with futures</td>
                      <td className="px-6 py-4">Watch for index-futures basis</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Statistical Arbitrage</td>
                      <td className="px-6 py-4">Mean reversion trades</td>
                      <td className="px-6 py-4">Identify pair correlations</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Blue-Chip Trading Strategies</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Core Strategies</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Trend Following</p>
                        <p className="text-sm">Long-term trend identification</p>
                      </div>
                      <div>
                        <p className="font-semibold">Index Tracking</p>
                        <p className="text-sm">Correlation with major indices</p>
                      </div>
                      <div>
                        <p className="font-semibold">Dividend Strategy</p>
                        <p className="text-sm">Income generation focus</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Advanced Techniques</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Options Integration</p>
                        <p className="text-sm">Covered calls and hedging</p>
                      </div>
                      <div>
                        <p className="font-semibold">Event Trading</p>
                        <p className="text-sm">Earnings and major announcements</p>
                      </div>
                      <div>
                        <p className="font-semibold">Global Analysis</p>
                        <p className="text-sm">International market impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Risk Management for Large Caps</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Position Management</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Position Sizing</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Account for liquidity</li>
                          <li>Portfolio allocation</li>
                          <li>Correlation risk</li>
                          <li>Sector exposure</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Stop Loss Strategy</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Technical levels</li>
                          <li>Time-based exits</li>
                          <li>Volatility stops</li>
                          <li>Profit targets</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Risk Factors</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Systematic Risk</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Market beta</li>
                          <li>Interest rates</li>
                          <li>Economic cycles</li>
                          <li>Global events</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Hedging Techniques</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Options hedging</li>
                          <li>Index futures</li>
                          <li>Pair trades</li>
                          <li>Sector ETFs</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 8 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Market Impact Analysis:</span>
                    <p className="mt-1">Study how large cap movements affect broader market indices and correlations.</p>
                  </li>
                  <li>
                    <span className="font-bold">Algorithm Pattern Recognition:</span>
                    <p className="mt-1">Learn to identify and work with common algorithmic trading patterns.</p>
                  </li>
                  <li>
                    <span className="font-bold">Strategy Development:</span>
                    <p className="mt-1">Create a comprehensive trading plan for blue-chip stocks incorporating learned concepts.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week9">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 9: Day Trading Techniques →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week7">
                <Button variant="outline">
                  ← Previous: Trading Strategies for Mid Caps
                </Button>
              </Link>
              <Link href="/ebook/week9">
                <Button>
                  Next: Day Trading Techniques →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 