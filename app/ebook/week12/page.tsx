"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
} from "@/components/ui/card";
import EbookNavigation from "../components/EbookNavigation";

export default function Week12Page() {
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
              Week 12: Advanced Topics and Final Project
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg my-8 border-l-4 border-amber-500">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400 mb-2">🎯 Learning Objectives</h4>
                <p className="text-amber-800 dark:text-amber-300">
                  By the end of Week 12, you&apos;ll understand advanced trading concepts, develop a comprehensive trading plan, and complete your final project demonstrating mastery of the course material.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Advanced Trading Concepts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Options Strategies</h4>
                    <p className="mb-2">Advanced options trading techniques.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Concepts:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spreads</li>
                        <li>Iron Condors</li>
                        <li>Calendar trades</li>
                        <li>Volatility plays</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Risk management</p>
                      <p className="text-sm">Position sizing</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Market Psychology</h4>
                    <p className="mb-2">Advanced behavioral analysis.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Areas:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Mass psychology</li>
                        <li>Market cycles</li>
                        <li>Sentiment analysis</li>
                        <li>Behavioral biases</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Crowd behavior</p>
                      <p className="text-sm">Decision making</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Risk Management</h4>
                    <p className="mb-2">Advanced risk control methods.</p>
                    <div className="mt-4">
                      <p className="font-semibold">Key Tools:</p>
                      <ul className="list-disc pl-5 mt-1">
                        <li>Portfolio VaR</li>
                        <li>Risk metrics</li>
                        <li>Hedging strategies</li>
                        <li>Position correlation</li>
                      </ul>
                    </div>
                    <div className="mt-4 pt-3 border-t">
                      <p className="text-sm">Risk modeling</p>
                      <p className="text-sm">Portfolio protection</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Trading Plan Development</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Key Elements</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Implementation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Strategy Definition</td>
                      <td className="px-6 py-4">Trading style, timeframes</td>
                      <td className="px-6 py-4">Clear rules and guidelines</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Risk Parameters</td>
                      <td className="px-6 py-4">Position sizing, max loss</td>
                      <td className="px-6 py-4">Risk management rules</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Entry/Exit Rules</td>
                      <td className="px-6 py-4">Triggers, confirmations</td>
                      <td className="px-6 py-4">Systematic approach</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium">Performance Metrics</td>
                      <td className="px-6 py-4">KPIs, tracking methods</td>
                      <td className="px-6 py-4">Regular review process</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Final Project Guidelines</h2>
              
              <div className="my-8 bg-muted rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Project Components</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Trading Plan</p>
                        <p className="text-sm">Complete strategy documentation</p>
                      </div>
                      <div>
                        <p className="font-semibold">Market Analysis</p>
                        <p className="text-sm">Current market assessment</p>
                      </div>
                      <div>
                        <p className="font-semibold">Trade Journal</p>
                        <p className="text-sm">Detailed trade analysis</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-md border">
                    <h4 className="font-bold text-lg mb-2">Evaluation Criteria</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Strategy Clarity</p>
                        <p className="text-sm">Clear and executable plan</p>
                      </div>
                      <div>
                        <p className="font-semibold">Risk Management</p>
                        <p className="text-sm">Comprehensive controls</p>
                      </div>
                      <div>
                        <p className="font-semibold">Analysis Quality</p>
                        <p className="text-sm">Depth of research</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Course Integration</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Knowledge Integration</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Technical Analysis</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Pattern recognition</li>
                          <li>Indicator mastery</li>
                          <li>Multi-timeframe</li>
                          <li>Price action</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Fundamental Analysis</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Company analysis</li>
                          <li>Industry research</li>
                          <li>Economic factors</li>
                          <li>Market context</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2">Practical Application</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Trading Skills</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Strategy execution</li>
                          <li>Risk management</li>
                          <li>Position sizing</li>
                          <li>Trade management</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Professional Development</p>
                        <ul className="list-disc pl-5 text-sm">
                          <li>Trading psychology</li>
                          <li>Continuous learning</li>
                          <li>Performance review</li>
                          <li>Adaptation skills</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8 border border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4">Week 12 Activities</h4>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <span className="font-bold">Trading Plan Development:</span>
                    <p className="mt-1">Create a comprehensive trading plan incorporating all course concepts.</p>
                  </li>
                  <li>
                    <span className="font-bold">Market Analysis Project:</span>
                    <p className="mt-1">Conduct detailed analysis of current market conditions and opportunities.</p>
                  </li>
                  <li>
                    <span className="font-bold">Strategy Presentation:</span>
                    <p className="mt-1">Present your trading plan and analysis to demonstrate course mastery.</p>
                  </li>
                </ol>
              </div>

              <div className="my-12 text-center">
                <Link href="/ebook">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Return to Course Contents →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-between">
              <Link href="/ebook/week11">
                <Button variant="outline">
                  ← Previous: Long-Term Investing
                </Button>
              </Link>
              <Link href="/ebook">
                <Button>
                  Return to Contents →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 