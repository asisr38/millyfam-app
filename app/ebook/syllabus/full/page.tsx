"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import EbookLayout from "../../components/EbookLayout";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { TradingEbookSyllabusPDF } from "../../components/TradingEbookSyllabusPDF";

export default function FullSyllabusPage() {
  const weeks = [
    {
      id: 1,
      title: "Introduction to Stock Market Basics",
      objective: "Understand the fundamentals of the stock market and key concepts.",
      topics: [
        {
          name: "What is the stock market?",
          subtopics: ["How markets function", "Exchange structures", "Market hours and sessions"]
        },
        {
          name: "Types of stocks",
          subtopics: ["Small Caps (characteristics, risks, rewards)", "Mid Caps (characteristics, risks, rewards)", "Large Caps (characteristics, risks, rewards)"]
        },
        {
          name: "Market participants",
          subtopics: ["Retail traders", "Institutional investors", "Market makers"]
        },
        {
          name: "Key terminology",
          subtopics: ["Bid/Ask/Spread", "Volume analysis", "Market capitalization", "P/E Ratio", "Earnings Per Share (EPS)"]
        },
        {
          name: "Introduction to trading styles",
          subtopics: ["Day Trading", "Swing Trading", "Long-Term Investing"]
        }
      ],
      activities: [
        "Complete glossary of essential trading terms",
        "Watch educational videos explaining market mechanics",
        "Analyze real-world examples of stocks across all cap sizes"
      ]
    },
    {
      id: 2,
      title: "Setting Up for Trading",
      objective: "Prepare for active trading with proper tools, accounts, and mindset.",
      topics: [
        {
          name: "Choosing a brokerage",
          subtopics: ["Commission structures", "Platform features", "Research tools", "Customer support"]
        },
        {
          name: "Types of trading accounts",
          subtopics: ["Cash accounts vs. Margin accounts", "Pros and cons of each", "Regulations (Pattern Day Trader rules)"]
        },
        {
          name: "Trading platforms",
          subtopics: ["Overview of popular platforms (Thinkorswim, TradingView, etc.)", "Mobile vs. desktop trading", "Key features to look for"]
        },
        {
          name: "Risk management fundamentals",
          subtopics: ["Capital preservation strategies", "Position sizing", "Setting stop losses"]
        }
      ],
      activities: [
        "Step-by-step guide to opening a demo trading account",
        "Comprehensive checklist for setting up a trading workspace",
        "Creating your first trading journal template"
      ]
    },
    {
      id: 3,
      title: "Fundamental Analysis",
      objective: "Learn to evaluate stocks based on financial health and performance metrics.",
      topics: [
        {
          name: "Financial statements deep-dive",
          subtopics: ["Income Statement analysis", "Balance Sheet interpretation", "Cash Flow Statement insights"]
        },
        {
          name: "Key valuation metrics",
          subtopics: ["Price-to-Earnings (P/E) Ratio", "Debt-to-Equity", "Return on Equity (ROE)", "Dividend Yield"]
        },
        {
          name: "Sector and industry analysis",
          subtopics: ["Economic cycles impact", "Sector rotation strategies", "Competitive landscape evaluation"]
        },
        {
          name: "Earnings reports",
          subtopics: ["How to interpret quarterly results", "Earnings surprises", "Forward guidance importance"]
        }
      ],
      activities: [
        "Detailed analysis of example stocks (Small, Mid, and Large Cap)",
        "Research project: Fundamental analysis presentation on a chosen stock",
        "Sector comparison worksheet"
      ]
    },
    {
      id: 4,
      title: "Technical Analysis Basics",
      objective: "Master reading price charts and identifying key patterns.",
      topics: [
        {
          name: "Candlestick patterns",
          subtopics: ["Basic patterns (Doji, Hammer, Shooting Star)", "Reversal patterns (Engulfing, Evening/Morning Star)", "Continuation patterns (Harami, Windows)"]
        },
        {
          name: "Support and Resistance levels",
          subtopics: ["Identifying key price levels", "Historical support/resistance", "Psychological price points"]
        },
        {
          name: "Trendlines and channels",
          subtopics: ["Uptrend vs. downtrend identification", "Channel drawing techniques", "Trading within channels"]
        },
        {
          name: "Moving Averages",
          subtopics: ["Simple Moving Average (SMA)", "Exponential Moving Average (EMA)", "Using MAs for trend confirmation"]
        }
      ],
      activities: [
        "Interactive chart pattern recognition exercises",
        "Support/resistance mapping practice on live charts",
        "Moving average strategy development worksheet"
      ]
    },
    {
      id: 5,
      title: "Advanced Technical Analysis",
      objective: "Expand technical skills with advanced indicators and patterns.",
      topics: [
        {
          name: "Technical indicators",
          subtopics: ["Relative Strength Index (RSI)", "Moving Average Convergence Divergence (MACD)", "Bollinger Bands", "Volume Profile"]
        },
        {
          name: "Advanced chart patterns",
          subtopics: ["Head and Shoulders", "Double Tops/Bottoms", "Triangle formations (ascending, descending, symmetric)", "Cup and Handle"]
        },
        {
          name: "Fibonacci analysis",
          subtopics: ["Fibonacci retracements", "Fibonacci extensions", "Time-based Fibonacci tools"]
        }
      ],
      activities: [
        "Indicator interpretation case studies",
        "Backtesting exercise using technical indicators",
        "Pattern recognition quiz with real market examples"
      ]
    },
    {
      id: 6,
      title: "Trading Strategies for Small Caps",
      objective: "Develop specialized techniques for small capitalization stocks.",
      topics: [
        {
          name: "Small Cap characteristics",
          subtopics: ["Higher volatility profiles", "Liquidity challenges", "Growth potential assessment"]
        },
        {
          name: "Specialized strategies",
          subtopics: ["Breakout trading techniques", "Momentum trading approaches", "Gap trading opportunities"]
        },
        {
          name: "Risk management for volatile stocks",
          subtopics: ["Position sizing for small caps", "Stop loss placement", "Profit-taking strategies"]
        }
      ],
      activities: [
        "Small cap case studies (successful trades analysis)",
        "Opportunity identification practice",
        "Small cap watchlist development"
      ]
    },
    {
      id: 7,
      title: "Trading Strategies for Mid Caps",
      objective: "Master approaches for trading mid-sized companies.",
      topics: [
        {
          name: "Mid Cap characteristics",
          subtopics: ["Balance of growth and stability", "Liquidity considerations", "Institutional ownership impact"]
        },
        {
          name: "Effective strategies",
          subtopics: ["Trend following approaches", "Mean reversion techniques", "Swing trading setups"]
        },
        {
          name: "Sector rotation with Mid Caps",
          subtopics: ["Sector leadership identification", "Rotation timing strategies", "Mid cap sector ETFs"]
        }
      ],
      activities: [
        "Sector-based mid cap stock analysis",
        "Mid cap watchlist creation and management",
        "Comparative performance tracking"
      ]
    },
    {
      id: 8,
      title: "Trading Strategies for Large Caps",
      objective: "Develop approaches for trading established companies.",
      topics: [
        {
          name: "Large Cap characteristics",
          subtopics: ["Stability factors", "Dividend considerations", "Lower volatility implications"]
        },
        {
          name: "Large Cap strategies",
          subtopics: ["Dividend investing approaches", "Blue-chip portfolio construction", "Options strategies on large caps"]
        },
        {
          name: "Timeframe considerations",
          subtopics: ["Long-term vs. short-term approaches", "Combining timeframes", "Position trading with large caps"]
        }
      ],
      activities: [
        "Dividend history analysis exercise",
        "Large cap fundamental evaluation project",
        "Long-term investment case study"
      ]
    },
    {
      id: 9,
      title: "Day Trading",
      objective: "Master intraday trading techniques and psychology.",
      topics: [
        {
          name: "Day trading foundations",
          subtopics: ["Definition and characteristics", "Pattern Day Trader (PDT) rules", "Intraday risk management"]
        },
        {
          name: "Day trading approaches",
          subtopics: ["Scalping techniques", "Momentum day trading", "Reversal trading"]
        },
        {
          name: "Essential tools",
          subtopics: ["Level 2 market data interpretation", "Time and sales analysis", "Hot keys and trade execution"]
        },
        {
          name: "Psychology of day trading",
          subtopics: ["Managing emotions", "Developing discipline", "Creating and following a plan"]
        }
      ],
      activities: [
        "Simulated day trading sessions",
        "Day trading plan development",
        "Pre-market routine creation"
      ]
    },
    {
      id: 10,
      title: "Swing Trading",
      objective: "Develop skills for multi-day position trading.",
      topics: [
        {
          name: "Swing trading foundations",
          subtopics: ["Timeframes and holding periods", "Overnight risk management", "News and catalyst evaluation"]
        },
        {
          name: "Setup identification",
          subtopics: ["Pullback swing strategies", "Breakout swing opportunities", "Reversal patterns for swing trading"]
        },
        {
          name: "Risk management for swing traders",
          subtopics: ["Position sizing methodologies", "Stop placement techniques", "Scaling in/out strategies"]
        }
      ],
      activities: [
        "Swing trade setup identification practice",
        "Tracking exercise: Follow potential swing trades",
        "Swing trading journal implementation"
      ]
    },
    {
      id: 11,
      title: "Long-Term Investing",
      objective: "Build skills for sustainable portfolio growth.",
      topics: [
        {
          name: "Investment philosophies",
          subtopics: ["Value investing principles", "Growth investing approach", "GARP (Growth at a Reasonable Price)"]
        },
        {
          name: "Portfolio construction",
          subtopics: ["Diversification strategies", "Asset allocation models", "Risk/reward optimization"]
        },
        {
          name: "Long-term strategies",
          subtopics: ["Dollar-cost averaging", "Dividend reinvestment", "Tax-efficient investing"]
        },
        {
          name: "Portfolio management",
          subtopics: ["Rebalancing techniques", "Performance benchmarking", "When to sell long-term holdings"]
        }
      ],
      activities: [
        "Long-term portfolio construction project",
        "Dollar-cost averaging simulation",
        "Historical investment case studies"
      ]
    },
    {
      id: 12,
      title: "Advanced Topics and Final Project",
      objective: "Integrate all knowledge and develop a personal trading system.",
      topics: [
        {
          name: "Options trading",
          subtopics: ["Call and put basics", "Options strategies for income", "Options for hedging positions"]
        },
        {
          name: "Advanced concepts",
          subtopics: ["Algorithmic trading introduction", "Automation possibilities", "Quantitative analysis basics"]
        },
        {
          name: "Trading business",
          subtopics: ["Tax implications for traders", "Business structures for traders", "Record-keeping requirements"]
        },
        {
          name: "Trading psychology mastery",
          subtopics: ["Emotional intelligence in trading", "Discipline development", "Continuous improvement mindset"]
        }
      ],
      activities: [
        "Final project: Comprehensive trading plan presentation",
        "Trading system documentation",
        "Interactive Q&A session"
      ]
    }
  ];

  return (
    <EbookLayout title="Complete 12-Week Trading Course Syllabus">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/ebook/syllabus" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Syllabus Overview
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              Print Syllabus
            </Button>
            <PDFDownloadLink 
              document={<TradingEbookSyllabusPDF />}
              fileName="trading-course-syllabus.pdf"
              className="flex"
            >
              {({ loading }) => (
                <Button variant="outline" className="flex items-center" disabled={loading}>
                  <Download className="h-4 w-4 mr-2" />
                  {loading ? "Generating PDF..." : "Download PDF"}
                </Button>
              )}
            </PDFDownloadLink>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none print:prose-sm">
          <h1 className="text-4xl font-bold mb-4 print:text-3xl">📚 Complete Stock Trading Mastery</h1>
          <h2 className="text-2xl font-semibold mb-6 print:text-xl">A Comprehensive 12-Week Curriculum for Beginner to Advanced Traders</h2>
          
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
            &ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo; — Warren Buffett
          </blockquote>
          
          <p className="text-lg">
            This curriculum is tailored for traders at all levels, from complete beginners to those looking to refine 
            their advanced skills. Each week builds upon previous knowledge, creating a structured learning path toward trading mastery.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md my-8 print:bg-white print:border print:border-blue-200">
            <h2 className="text-2xl font-bold flex items-center mb-4 print:text-xl">
              <span className="text-yellow-500 mr-2">🌟</span> Course Highlights
            </h2>
            
            <ul className="space-y-2 mb-2">
              <li className="flex items-start">
                <span className="font-bold mr-2">Comprehensive Coverage</span>: From market fundamentals to advanced trading techniques
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Practical Experience</span>: Hands-on activities each week to reinforce learning
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Flexible Learning Path</span>: Suitable for beginners, intermediate, and advanced traders
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Multi-Asset Focus</span>: Strategies for small, mid, and large cap stocks
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">Trading Styles</span>: Learn day trading, swing trading, and long-term investing approaches
              </li>
            </ul>
          </div>
          
          <div className="not-prose">
            <div className="overflow-x-auto mt-6 mb-12 print:text-xs">
              <h2 className="text-2xl font-bold flex items-center mb-4 print:text-xl">
                <span className="text-blue-500 mr-2">📆</span> Course Schedule
              </h2>
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-4 border-b text-left">Week</th>
                    <th className="py-3 px-4 border-b text-left">Topic</th>
                    <th className="py-3 px-4 border-b text-left">Live Session</th>
                    <th className="py-3 px-4 border-b text-left">Assignment Due</th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map(week => (
                    <tr key={week.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="py-2 px-4 border-b">{week.id}</td>
                      <td className="py-2 px-4 border-b">{week.title}</td>
                      <td className="py-2 px-4 border-b">Monday 7PM EST</td>
                      <td className="py-2 px-4 border-b">Sunday 11:59PM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {weeks.map(week => (
            <div key={week.id} id={`week-${week.id}`} className="mb-16 print:break-inside-avoid-page">
              <h2 className="text-2xl font-bold mt-12 border-b pb-2 border-gray-200 print:text-xl">
                Week {week.id}: {week.title}
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md my-4 print:bg-white print:border print:border-blue-200">
                <p className="font-bold flex items-center mb-0">
                  <span className="mr-2">🎯</span> Objective: {week.objective}
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-4 print:text-lg">Topics:</h3>
              <ul className="space-y-4">
                {week.topics.map((topic, index) => (
                  <li key={index}>
                    <span className="font-bold">{topic.name}</span>
                    <ul className="ml-6 mt-2">
                      {topic.subtopics.map((subtopic, idx) => (
                        <li key={idx}>{subtopic}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-4 print:text-lg">Activities:</h3>
              <ul className="space-y-2">
                {week.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="print:break-inside-avoid-page">
            <h2 className="text-2xl font-bold mt-12 border-b pb-2 border-gray-200 print:text-xl">
              Additional Resources
            </h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center print:text-lg">
              <span className="text-blue-500 mr-2">📚</span> Recommended Books:
            </h3>
            <ul className="space-y-2">
              <li><span className="font-bold">&ldquo;The Intelligent Investor&rdquo;</span> by Benjamin Graham</li>
              <li><span className="font-bold">&ldquo;Technical Analysis of the Financial Markets&rdquo;</span> by John J. Murphy</li>
              <li><span className="font-bold">&ldquo;Trading in the Zone&rdquo;</span> by Mark Douglas</li>
              <li><span className="font-bold">&ldquo;Market Wizards&rdquo;</span> by Jack D. Schwager</li>
              <li><span className="font-bold">&ldquo;Reminiscences of a Stock Operator&rdquo;</span> by Edwin Lefèvre</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center print:text-lg">
              <span className="text-blue-500 mr-2">🖥️</span> Essential Tools:
            </h3>
            <ul className="space-y-2">
              <li><span className="font-bold">TradingView</span> - Professional charting</li>
              <li><span className="font-bold">Finviz</span> - Stock screening and visualization</li>
              <li><span className="font-bold">Yahoo Finance</span> - Fundamental research</li>
              <li><span className="font-bold">StockCharts</span> - Technical analysis</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-4 flex items-center print:text-lg">
              <span className="text-blue-500 mr-2">👥</span> Community Engagement:
            </h3>
            <ul className="space-y-2">
              <li>Weekly live Q&A sessions</li>
              <li>Trading challenges with prizes</li>
              <li>Peer review trading plan workshops</li>
              <li>Mentorship opportunities</li>
              <li>Alumni network access</li>
            </ul>
          </div>
          
          <p className="mt-8 mb-4 text-center italic">
            This curriculum ensures a structured progression from foundational concepts to advanced trading techniques. 
            Each week builds upon previous knowledge, with practical activities to reinforce learning and develop real-world skills.
          </p>
          
          <div className="mt-8 mb-16 text-center print:hidden">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Ready to start your trading journey? Enroll today!
            </Button>
          </div>
        </div>
      </div>
    </EbookLayout>
  );
} 