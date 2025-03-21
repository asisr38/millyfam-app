"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week5Page() {
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
              Week 5: Advanced Technical Analysis
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 5, you&apos;ll understand advanced chart patterns, complex technical indicators, market psychology, and how to combine multiple indicators for better analysis.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Advanced Chart Patterns</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Reversal Patterns</h4>
                    <p className="mb-2">Patterns indicating trend changes.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Patterns:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Head and Shoulders</li>
                        <li>Double Top/Bottom</li>
                        <li>Triple Top/Bottom</li>
                        <li>Rounding Bottom</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Success rate: 60-70%</p>
                      <p className="text-sm">Confirmation needed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Continuation Patterns</h4>
                    <p className="mb-2">Patterns suggesting trend continuation.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Patterns:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Flags/Pennants</li>
                        <li>Triangles</li>
                        <li>Rectangles</li>
                        <li>Cup and Handle</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Volume confirmation</p>
                      <p className="text-sm">Time-based validity</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Complex Patterns</h4>
                    <p className="mb-2">Advanced formations requiring expertise.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Patterns:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Diamond Top/Bottom</li>
                        <li>Broadening Formations</li>
                        <li>Island Reversals</li>
                        <li>Three Drives Pattern</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Rare but reliable</p>
                      <p className="text-sm">Higher profit potential</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Advanced Technical Indicators</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Indicator</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Best Used For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Fibonacci Retracements</td>
                      <td className="px-6 py-4">Identify potential support/resistance levels</td>
                      <td className="px-6 py-4">Trend trading, reversal points</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Ichimoku Cloud</td>
                      <td className="px-6 py-4">Multiple aspects of market analysis</td>
                      <td className="px-6 py-4">Trend direction, momentum, support/resistance</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Volume Profile</td>
                      <td className="px-6 py-4">Show trading activity at price levels</td>
                      <td className="px-6 py-4">Price levels with high interest</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Market Profile</td>
                      <td className="px-6 py-4">Time-price opportunity analysis</td>
                      <td className="px-6 py-4">Value areas, balance areas</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Market Psychology</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Sentiment Analysis</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Fear and Greed Index</p>
                        <p className="text-sm">Measure market emotions and extremes</p>
                      </div>
                      <div>
                        <p className="font-semibold">Put/Call Ratio</p>
                        <p className="text-sm">Options market sentiment indicator</p>
                      </div>
                      <div>
                        <p className="font-semibold">VIX (Volatility Index)</p>
                        <p className="text-sm">Market&apos;s expectation of volatility</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Crowd Psychology</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Market Cycles</p>
                        <p className="text-sm">Understand emotional stages of markets</p>
                      </div>
                      <div>
                        <p className="font-semibold">Contrarian Indicators</p>
                        <p className="text-sm">Identify extreme market conditions</p>
                      </div>
                      <div>
                        <p className="font-semibold">Market Breadth</p>
                        <p className="text-sm">Overall market participation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Multi-Indicator Analysis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Indicator Combinations</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Trend + Momentum</p>
                        <p className="text-sm">Moving Averages with RSI/MACD</p>
                      </div>
                      <div>
                        <p className="font-semibold">Volume + Price</p>
                        <p className="text-sm">OBV with Price Action</p>
                      </div>
                      <div>
                        <p className="font-semibold">Multiple Timeframes</p>
                        <p className="text-sm">Analyze different time horizons</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Confirmation Strategies</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Triple Screen Method</p>
                        <p className="text-sm">Multiple timeframe confirmation</p>
                      </div>
                      <div>
                        <p className="font-semibold">Divergence Analysis</p>
                        <p className="text-sm">Price/indicator disagreement</p>
                      </div>
                      <div>
                        <p className="font-semibold">Confluence Zones</p>
                        <p className="text-sm">Multiple signals aligning</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 5 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Pattern Analysis:</span>
                    <p className="mt-1">Identify and analyze complex chart patterns in historical data.</p>
                  </li>
                  <li>
                    <span className="font-bold">Indicator Setup:</span>
                    <p className="mt-1">Create a multi-indicator chart setup and explain the rationale.</p>
                  </li>
                  <li>
                    <span className="font-bold">Market Psychology:</span>
                    <p className="mt-1">Track sentiment indicators and analyze their correlation with price movements.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 flex justify-between">
                <Link href="/ebook/week4">
                  <Button variant="outline">
                    ← Previous: Technical Analysis Basics
                  </Button>
                </Link>
                <Link href="/ebook/week6">
                  <Button>
                    Next: Trading Strategies for Small Caps →
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