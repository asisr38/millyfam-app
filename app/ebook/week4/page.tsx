"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week4Page() {
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
              Week 4: Technical Analysis Basics
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 4, you&apos;ll understand price action, candlestick patterns, chart patterns, support and resistance levels, and basic technical indicators.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Price Action Basics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Candlestick Anatomy</h4>
                    <p className="mb-2">Understanding the components of a candlestick.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Components:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Open Price</li>
                        <li>Close Price</li>
                        <li>High Price</li>
                        <li>Low Price</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Green candle: Close above open</p>
                      <p className="text-sm">Red candle: Close below open</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Time Frames</h4>
                    <p className="mb-2">Different periods for analyzing price movement.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Common Frames:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>1-minute</li>
                        <li>5-minute</li>
                        <li>15-minute</li>
                        <li>Daily</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Shorter timeframes for day trading</p>
                      <p className="text-sm">Longer for swing trading</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Volume Analysis</h4>
                    <p className="mb-2">Understanding trading volume and its significance.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Concepts:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Volume bars</li>
                        <li>Volume trends</li>
                        <li>Price-volume relationship</li>
                        <li>Volume spikes</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">High volume confirms trends</p>
                      <p className="text-sm">Low volume suggests weakness</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Candlestick Patterns</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pattern</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Signal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Doji</td>
                      <td className="px-6 py-4">Open and close prices are nearly equal</td>
                      <td className="px-6 py-4">Market indecision</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Hammer</td>
                      <td className="px-6 py-4">Small body with long lower shadow</td>
                      <td className="px-6 py-4">Potential reversal from downtrend</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Engulfing</td>
                      <td className="px-6 py-4">Second candle completely engulfs first</td>
                      <td className="px-6 py-4">Strong reversal signal</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Morning Star</td>
                      <td className="px-6 py-4">Three-candle pattern with small middle candle</td>
                      <td className="px-6 py-4">Bullish reversal pattern</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Support and Resistance</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Support Levels</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Definition</p>
                        <p className="text-sm">Price level where buying pressure exceeds selling pressure</p>
                      </div>
                      <div>
                        <p className="font-semibold">Identification</p>
                        <p className="text-sm">Previous lows, round numbers, moving averages</p>
                      </div>
                      <div>
                        <p className="font-semibold">Trading Strategy</p>
                        <p className="text-sm">Buy near support with stop loss below</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Resistance Levels</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Definition</p>
                        <p className="text-sm">Price level where selling pressure exceeds buying pressure</p>
                      </div>
                      <div>
                        <p className="font-semibold">Identification</p>
                        <p className="text-sm">Previous highs, psychological levels, trend lines</p>
                      </div>
                      <div>
                        <p className="font-semibold">Trading Strategy</p>
                        <p className="text-sm">Sell near resistance with stop loss above</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Basic Technical Indicators</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Moving Averages</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Simple Moving Average (SMA)</p>
                        <p className="text-sm">Average price over a specific period</p>
                      </div>
                      <div>
                        <p className="font-semibold">Exponential Moving Average (EMA)</p>
                        <p className="text-sm">Weighted average giving more importance to recent prices</p>
                      </div>
                      <div>
                        <p className="font-semibold">Common Periods</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>20-day for short term</li>
                          <li>50-day for medium term</li>
                          <li>200-day for long term</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Momentum Indicators</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Relative Strength Index (RSI)</p>
                        <p className="text-sm">Measures overbought/oversold conditions</p>
                      </div>
                      <div>
                        <p className="font-semibold">MACD</p>
                        <p className="text-sm">Trend-following momentum indicator</p>
                      </div>
                      <div>
                        <p className="font-semibold">Stochastic Oscillator</p>
                        <p className="text-sm">Compares closing price to price range</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 4 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Pattern Recognition:</span>
                    <p className="mt-1">Practice identifying candlestick patterns on historical charts.</p>
                  </li>
                  <li>
                    <span className="font-bold">Support/Resistance Exercise:</span>
                    <p className="mt-1">Draw support and resistance levels on different timeframes.</p>
                  </li>
                  <li>
                    <span className="font-bold">Indicator Analysis:</span>
                    <p className="mt-1">Apply and interpret basic technical indicators on various stocks.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 flex justify-between">
                <Link href="/ebook/week3">
                  <Button variant="outline">
                    ← Previous: Fundamental Analysis
                  </Button>
                </Link>
                <Link href="/ebook/week5">
                  <Button>
                    Next: Advanced Technical Analysis →
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