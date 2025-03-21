"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week10Page() {
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
              Week 10: Swing Trading Techniques
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 10, you&apos;ll understand swing trading principles, multi-day patterns, position management techniques, and how to develop effective swing trading strategies.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Swing Trading Principles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Time Horizon</h4>
                    <p className="mb-2">Understanding swing trading timeframes.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Multi-day holds</li>
                        <li>Weekly trends</li>
                        <li>Position timing</li>
                        <li>Market cycles</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Hold time: 2-10 days</p>
                      <p className="text-sm">Multiple timeframes</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Position Management</h4>
                    <p className="mb-2">Managing swing positions effectively.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Essentials:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Position sizing</li>
                        <li>Overnight risk</li>
                        <li>Scaling methods</li>
                        <li>Profit targets</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Max risk: 2% per trade</p>
                      <p className="text-sm">Scaling rules</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Analysis</h4>
                    <p className="mb-2">Multi-timeframe analysis approach.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Tools:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Daily charts</li>
                        <li>Weekly trends</li>
                        <li>Sector analysis</li>
                        <li>Market themes</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Multiple timeframes</p>
                      <p className="text-sm">Trend alignment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Multi-Day Patterns</h2>
              
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
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Bull Flag</td>
                      <td className="px-6 py-4">Uptrend consolidation pattern</td>
                      <td className="px-6 py-4">Buy breakout with volume</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Cup and Handle</td>
                      <td className="px-6 py-4">Rounded bottom formation</td>
                      <td className="px-6 py-4">Buy handle breakout</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Head and Shoulders</td>
                      <td className="px-6 py-4">Reversal pattern formation</td>
                      <td className="px-6 py-4">Short neckline break</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Double Bottom</td>
                      <td className="px-6 py-4">Support level retest</td>
                      <td className="px-6 py-4">Buy second bounce</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Technical Analysis for Swing Trading</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Chart Analysis</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Moving Averages</p>
                        <p className="text-sm">20, 50, 200-day EMAs</p>
                      </div>
                      <div>
                        <p className="font-semibold">Trend Lines</p>
                        <p className="text-sm">Support and resistance levels</p>
                      </div>
                      <div>
                        <p className="font-semibold">Volume Analysis</p>
                        <p className="text-sm">Accumulation/distribution</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Technical Indicators</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Momentum</p>
                        <p className="text-sm">RSI, MACD, Stochastics</p>
                      </div>
                      <div>
                        <p className="font-semibold">Trend</p>
                        <p className="text-sm">ADX, Trend Direction</p>
                      </div>
                      <div>
                        <p className="font-semibold">Volatility</p>
                        <p className="text-sm">Bollinger Bands, ATR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Swing Trading Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Trend Following</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Entry Criteria</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Strong trend</li>
                          <li>Pullback to support</li>
                          <li>Volume confirmation</li>
                          <li>Momentum alignment</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Management</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Trailing stops</li>
                          <li>Scale out levels</li>
                          <li>Trend line stops</li>
                          <li>Time-based exits</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Counter-Trend</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Setup Conditions</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Oversold/overbought</li>
                          <li>Key level tests</li>
                          <li>Divergence signals</li>
                          <li>Pattern completion</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Control</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Tight stops</li>
                          <li>Position sizing</li>
                          <li>Target levels</li>
                          <li>Reversal confirmation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 10 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Pattern Scanning:</span>
                    <p className="mt-1">Develop a daily routine for scanning multiple timeframes and identifying swing setups.</p>
                  </li>
                  <li>
                    <span className="font-bold">Strategy Development:</span>
                    <p className="mt-1">Create and backtest swing trading strategies using historical data.</p>
                  </li>
                  <li>
                    <span className="font-bold">Position Management:</span>
                    <p className="mt-1">Practice managing multiple positions with different timeframes and targets.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week11">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 11: Long-Term Investing →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week9">
                <Button variant="outline">
                  ← Previous: Day Trading Techniques
                </Button>
              </Link>
              <Link href="/ebook/week11">
                <Button>
                  Next: Long-Term Investing →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 