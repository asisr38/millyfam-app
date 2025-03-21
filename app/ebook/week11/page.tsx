"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week11Page() {
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
              Week 11: Long-Term Investing
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 11, you&apos;ll understand long-term investment principles, portfolio management, fundamental analysis for long-term holdings, and how to build a diversified investment strategy.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Long-Term Investment Principles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Time Horizon</h4>
                    <p className="mb-2">Understanding long-term investment timeframes.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Points:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Multi-year holds</li>
                        <li>Compound growth</li>
                        <li>Market cycles</li>
                        <li>Economic trends</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Hold time: 3+ years</p>
                      <p className="text-sm">Long-term focus</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Portfolio Management</h4>
                    <p className="mb-2">Managing long-term investments.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Essentials:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Asset allocation</li>
                        <li>Diversification</li>
                        <li>Rebalancing</li>
                        <li>Risk management</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Regular review</p>
                      <p className="text-sm">Strategic planning</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Investment Analysis</h4>
                    <p className="mb-2">Long-term analysis approach.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Tools:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Fundamental analysis</li>
                        <li>Industry research</li>
                        <li>Economic data</li>
                        <li>Market trends</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Deep research</p>
                      <p className="text-sm">Macro perspective</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Fundamental Analysis for Long-Term Investing</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Analysis Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Key Metrics</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Investment Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Financial Health</td>
                      <td className="px-6 py-4">Balance Sheet, Cash Flow</td>
                      <td className="px-6 py-4">Company stability and growth</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Valuation</td>
                      <td className="px-6 py-4">P/E, P/B, DCF Analysis</td>
                      <td className="px-6 py-4">Investment value assessment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Growth Metrics</td>
                      <td className="px-6 py-4">Revenue, EPS Growth</td>
                      <td className="px-6 py-4">Future potential evaluation</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Industry Analysis</td>
                      <td className="px-6 py-4">Market Share, Competition</td>
                      <td className="px-6 py-4">Competitive advantage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Portfolio Construction</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Asset Allocation</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Stocks</p>
                        <p className="text-sm">Growth and value equities</p>
                      </div>
                      <div>
                        <p className="font-semibold">Bonds</p>
                        <p className="text-sm">Fixed income securities</p>
                      </div>
                      <div>
                        <p className="font-semibold">Alternative Assets</p>
                        <p className="text-sm">REITs, commodities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Diversification</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Sectors</p>
                        <p className="text-sm">Industry spread</p>
                      </div>
                      <div>
                        <p className="font-semibold">Geography</p>
                        <p className="text-sm">Global market exposure</p>
                      </div>
                      <div>
                        <p className="font-semibold">Market Cap</p>
                        <p className="text-sm">Size diversification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Long-Term Investment Strategies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Value Investing</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Analysis Focus</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Intrinsic value</li>
                          <li>Margin of safety</li>
                          <li>Financial ratios</li>
                          <li>Company fundamentals</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Strategy</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Buy undervalued</li>
                          <li>Hold long-term</li>
                          <li>Regular monitoring</li>
                          <li>Dividend focus</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Growth Investing</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Key Indicators</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Revenue growth</li>
                          <li>Market opportunity</li>
                          <li>Competitive edge</li>
                          <li>Management quality</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Approach</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Future potential</li>
                          <li>Industry trends</li>
                          <li>Innovation focus</li>
                          <li>Market leadership</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 11 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Portfolio Construction:</span>
                    <p className="mt-1">Design a diversified long-term investment portfolio with proper asset allocation.</p>
                  </li>
                  <li>
                    <span className="font-bold">Company Analysis:</span>
                    <p className="mt-1">Conduct in-depth fundamental analysis of potential long-term investments.</p>
                  </li>
                  <li>
                    <span className="font-bold">Strategy Development:</span>
                    <p className="mt-1">Create a long-term investment plan with specific goals and rebalancing criteria.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook/week12">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Continue to Week 12: Advanced Topics and Final Project →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week10">
                <Button variant="outline">
                  ← Previous: Swing Trading Techniques
                </Button>
              </Link>
              <Link href="/ebook/week12">
                <Button>
                  Next: Advanced Topics and Final Project →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 