"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week3Page() {
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
              Week 3: Fundamental Analysis
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 3, you&apos;ll understand how to analyze company financials, interpret key ratios, evaluate industry trends, and make informed investment decisions based on fundamental data.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Financial Statements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Income Statement</h4>
                    <p className="mb-2">Shows revenue, expenses, and profitability over a period.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Components:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Revenue</li>
                        <li>Cost of Goods Sold</li>
                        <li>Operating Expenses</li>
                        <li>Net Income</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Example: Apple&apos;s Q4 2023 revenue was $89.5B with net income of $22.96B.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Balance Sheet</h4>
                    <p className="mb-2">Shows assets, liabilities, and equity at a point in time.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Components:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Current Assets</li>
                        <li>Long-term Assets</li>
                        <li>Current Liabilities</li>
                        <li>Shareholders&apos; Equity</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Example: Tesla&apos;s total assets were $94.6B with $28.2B in cash and equivalents.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Cash Flow Statement</h4>
                    <p className="mb-2">Shows cash movements from operations, investing, and financing.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Components:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Operating Cash Flow</li>
                        <li>Investing Cash Flow</li>
                        <li>Financing Cash Flow</li>
                        <li>Free Cash Flow</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Example: Microsoft generated $87.7B in operating cash flow in 2023.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Key Financial Ratios</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ratio</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Formula</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">What It Shows</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">P/E Ratio</td>
                      <td className="px-6 py-4">Stock Price / EPS</td>
                      <td className="px-6 py-4">How much investors pay per dollar of earnings</td>
                      <td className="px-6 py-4">Apple P/E: 30x</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Debt/Equity</td>
                      <td className="px-6 py-4">Total Debt / Total Equity</td>
                      <td className="px-6 py-4">Financial leverage and risk</td>
                      <td className="px-6 py-4">Tesla D/E: 0.2</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Current Ratio</td>
                      <td className="px-6 py-4">Current Assets / Current Liabilities</td>
                      <td className="px-6 py-4">Short-term solvency</td>
                      <td className="px-6 py-4">Microsoft: 2.5</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">ROE</td>
                      <td className="px-6 py-4">Net Income / Shareholders&apos; Equity</td>
                      <td className="px-6 py-4">Profitability relative to equity</td>
                      <td className="px-6 py-4">Amazon: 25%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Industry Analysis</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Industry Metrics</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Market Size</p>
                        <p className="text-sm">Total addressable market and growth rate</p>
                      </div>
                      <div>
                        <p className="font-semibold">Competition</p>
                        <p className="text-sm">Market share and competitive advantages</p>
                      </div>
                      <div>
                        <p className="font-semibold">Barriers to Entry</p>
                        <p className="text-sm">Regulatory, capital, and technological requirements</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Economic Factors</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Economic Cycles</p>
                        <p className="text-sm">Industry sensitivity to economic conditions</p>
                      </div>
                      <div>
                        <p className="font-semibold">Regulatory Environment</p>
                        <p className="text-sm">Current and potential regulations</p>
                      </div>
                      <div>
                        <p className="font-semibold">Technology Impact</p>
                        <p className="text-sm">Disruption risks and opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Valuation Methods</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Relative Valuation</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">P/E Comparison</p>
                        <p className="text-sm">Compare P/E ratios within industry</p>
                      </div>
                      <div>
                        <p className="font-semibold">EV/EBITDA</p>
                        <p className="text-sm">Enterprise value relative to earnings</p>
                      </div>
                      <div>
                        <p className="font-semibold">Price/Sales</p>
                        <p className="text-sm">Valuation relative to revenue</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Intrinsic Valuation</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">DCF Analysis</p>
                        <p className="text-sm">Discounted future cash flows</p>
                      </div>
                      <div>
                        <p className="font-semibold">Dividend Discount</p>
                        <p className="text-sm">Present value of future dividends</p>
                      </div>
                      <div>
                        <p className="font-semibold">Asset-Based</p>
                        <p className="text-sm">Net asset value calculation</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 3 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Financial Statement Analysis:</span>
                    <p className="mt-1">Download and analyze the latest quarterly reports of a company of your choice.</p>
                  </li>
                  <li>
                    <span className="font-bold">Ratio Calculation:</span>
                    <p className="mt-1">Calculate and interpret key financial ratios for three companies in the same industry.</p>
                  </li>
                  <li>
                    <span className="font-bold">Industry Report:</span>
                    <p className="mt-1">Write a brief industry analysis report focusing on market trends and competitive dynamics.</p>
                  </li>
                </ol>
              </div>

              <div className="mt-12 flex justify-between">
                <Link href="/ebook/week2">
                  <Button variant="outline">
                    ← Previous: Setting Up for Trading
                  </Button>
                </Link>
                <Link href="/ebook/week4">
                  <Button>
                    Next: Technical Analysis Basics →
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