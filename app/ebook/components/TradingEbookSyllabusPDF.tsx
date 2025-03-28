"use client";

import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet,
} from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica'
  },
  coverPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#1a365d',
    padding: 40,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  coverSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 60,
    color: '#e2e8f0',
    maxWidth: '80%',
    lineHeight: 1.6,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 20,
    padding: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#4299e1',
    borderLeftStyle: 'solid',
    color: '#e2e8f0',
    maxWidth: '70%',
  },
  section: {
    margin: 15,
    padding: 15,
    flexGrow: 1
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2d3748',
    borderBottomWidth: 3,
    borderBottomColor: '#4299e1',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 30,
    color: '#2d3748',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.6,
    marginBottom: 12,
    color: '#4a5568',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#718096',
  },
  weekTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ebf8ff',
    color: '#2b6cb0',
    borderRadius: 5,
  },
  objective: {
    fontSize: 14,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f7fafc',
    borderLeft: 4,
    borderLeftColor: '#4299e1',
    borderLeftStyle: 'solid',
    color: '#4a5568',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  bulletPoint: {
    marginBottom: 10,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  bulletPointText: {
    marginLeft: 8,
    flex: 1,
    fontSize: 12,
    lineHeight: 1.6,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#718096',
    borderTopWidth: 2,
    borderTopColor: '#e2e8f0',
    borderTopStyle: 'solid',
    paddingTop: 15,
  },
  topicHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2d3748',
  },
  activityHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#2d3748',
  },
  topic: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#4a5568',
  },
  subtopic: {
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 5,
    color: '#718096',
    lineHeight: 1.4,
  },
  activity: {
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 8,
    color: '#4a5568',
    lineHeight: 1.4,
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#4299e1',
    color: 'white',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
    backgroundColor: '#f7fafc',
    minHeight: 40,
  },
  tableCol1: {
    width: '10%',
    padding: 8,
    justifyContent: 'center',
  },
  tableCol2: {
    width: '45%',
    padding: 8,
    justifyContent: 'center',
  },
  tableCol3: {
    width: '25%',
    padding: 8,
    justifyContent: 'center',
  },
  tableCol4: {
    width: '20%',
    padding: 8,
    justifyContent: 'center',
  },
  tableCell: {
    fontSize: 11,
    textAlign: 'left',
    color: '#4a5568',
  },
  highlightBox: {
    margin: 20,
    padding: 20,
    backgroundColor: '#ebf8ff',
    borderWidth: 2,
    borderColor: '#bee3f8',
    borderStyle: 'solid',
    borderRadius: 8,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2b6cb0',
  },
  highlightItem: {
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 1.6,
    color: '#4a5568',
  },
  resourceSection: {
    marginTop: 25,
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f7fafc',
    borderRadius: 8,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2d3748',
    borderBottomWidth: 2,
    borderBottomColor: '#4299e1',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
  },
  resourceItem: {
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 1.6,
    color: '#4a5568',
    paddingLeft: 10,
  },
});

// Define the weeks of the syllabus
const weeks = [
  {
    id: 1,
    title: "Introduction to Stock Market Basics",
    objective: "Understand the fundamentals of the stock market and key concepts.",
    topics: [
      { name: "What is the stock market?", subtopics: ["How markets function", "Exchange structures", "Market hours and sessions"] },
      { name: "Types of stocks", subtopics: ["Small Caps (characteristics, risks, rewards)", "Mid Caps (characteristics, risks, rewards)", "Large Caps (characteristics, risks, rewards)"] },
      { name: "Market participants", subtopics: ["Retail traders", "Institutional investors", "Market makers"] },
      { name: "Key terminology", subtopics: ["Bid/Ask/Spread", "Volume analysis", "Market capitalization", "P/E Ratio", "Earnings Per Share (EPS)"] },
      { name: "Introduction to trading styles", subtopics: ["Day Trading", "Swing Trading", "Long-Term Investing"] }
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
      { name: "Choosing a brokerage", subtopics: ["Commission structures", "Platform features", "Research tools", "Customer support"] },
      { name: "Types of trading accounts", subtopics: ["Cash accounts vs. Margin accounts", "Pros and cons of each", "Regulations (Pattern Day Trader rules)"] },
      { name: "Trading platforms", subtopics: ["Overview of popular platforms (Thinkorswim, TradingView, etc.)", "Mobile vs. desktop trading", "Key features to look for"] },
      { name: "Risk management fundamentals", subtopics: ["Capital preservation strategies", "Position sizing", "Setting stop losses"] }
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
      { name: "Financial statements deep-dive", subtopics: ["Income Statement analysis", "Balance Sheet interpretation", "Cash Flow Statement insights"] },
      { name: "Key valuation metrics", subtopics: ["Price-to-Earnings (P/E) Ratio", "Debt-to-Equity", "Return on Equity (ROE)", "Dividend Yield"] },
      { name: "Sector and industry analysis", subtopics: ["Economic cycles impact", "Sector rotation strategies", "Competitive landscape evaluation"] },
      { name: "Earnings reports", subtopics: ["How to interpret quarterly results", "Earnings surprises", "Forward guidance importance"] }
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
      { name: "Candlestick patterns", subtopics: ["Basic patterns (Doji, Hammer, Shooting Star)", "Reversal patterns (Engulfing, Evening/Morning Star)", "Continuation patterns (Harami, Windows)"] },
      { name: "Support and Resistance levels", subtopics: ["Identifying key price levels", "Historical support/resistance", "Psychological price points"] },
      { name: "Trendlines and channels", subtopics: ["Uptrend vs. downtrend identification", "Channel drawing techniques", "Trading within channels"] },
      { name: "Moving Averages", subtopics: ["Simple Moving Average (SMA)", "Exponential Moving Average (EMA)", "Using MAs for trend confirmation"] }
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
      { name: "Technical indicators", subtopics: ["Relative Strength Index (RSI)", "Moving Average Convergence Divergence (MACD)", "Bollinger Bands", "Volume Profile"] },
      { name: "Advanced chart patterns", subtopics: ["Head and Shoulders", "Double Tops/Bottoms", "Triangle formations (ascending, descending, symmetric)", "Cup and Handle"] },
      { name: "Fibonacci analysis", subtopics: ["Fibonacci retracements", "Fibonacci extensions", "Time-based Fibonacci tools"] }
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
      { name: "Small Cap characteristics", subtopics: ["Higher volatility profiles", "Liquidity challenges", "Growth potential assessment"] },
      { name: "Specialized strategies", subtopics: ["Breakout trading techniques", "Momentum trading approaches", "Gap trading opportunities"] },
      { name: "Risk management for volatile stocks", subtopics: ["Position sizing for small caps", "Stop loss placement", "Profit-taking strategies"] }
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
      { name: "Mid Cap characteristics", subtopics: ["Balance of growth and stability", "Liquidity considerations", "Institutional ownership impact"] },
      { name: "Effective strategies", subtopics: ["Trend following approaches", "Mean reversion techniques", "Swing trading setups"] },
      { name: "Sector rotation with Mid Caps", subtopics: ["Sector leadership identification", "Rotation timing strategies", "Mid cap sector ETFs"] }
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
      { name: "Large Cap characteristics", subtopics: ["Stability factors", "Dividend considerations", "Lower volatility implications"] },
      { name: "Large Cap strategies", subtopics: ["Dividend investing approaches", "Blue-chip portfolio construction", "Options strategies on large caps"] },
      { name: "Timeframe considerations", subtopics: ["Long-term vs. short-term approaches", "Combining timeframes", "Position trading with large caps"] }
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
      { name: "Day trading foundations", subtopics: ["Definition and characteristics", "Pattern Day Trader (PDT) rules", "Intraday risk management"] },
      { name: "Day trading approaches", subtopics: ["Scalping techniques", "Momentum day trading", "Reversal trading"] },
      { name: "Essential tools", subtopics: ["Level 2 market data interpretation", "Time and sales analysis", "Hot keys and trade execution"] },
      { name: "Psychology of day trading", subtopics: ["Managing emotions", "Developing discipline", "Creating and following a plan"] }
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
      { name: "Swing trading foundations", subtopics: ["Timeframes and holding periods", "Overnight risk management", "News and catalyst evaluation"] },
      { name: "Setup identification", subtopics: ["Pullback swing strategies", "Breakout swing opportunities", "Reversal patterns for swing trading"] },
      { name: "Risk management for swing traders", subtopics: ["Position sizing methodologies", "Stop placement techniques", "Scaling in/out strategies"] }
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
      { name: "Investment philosophies", subtopics: ["Value investing principles", "Growth investing approach", "GARP (Growth at a Reasonable Price)"] },
      { name: "Portfolio construction", subtopics: ["Diversification strategies", "Asset allocation models", "Risk/reward optimization"] },
      { name: "Long-term strategies", subtopics: ["Dollar-cost averaging", "Dividend reinvestment", "Tax-efficient investing"] },
      { name: "Portfolio management", subtopics: ["Rebalancing techniques", "Performance benchmarking", "When to sell long-term holdings"] }
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
      { name: "Options trading", subtopics: ["Call and put basics", "Options strategies for income", "Options for hedging positions"] },
      { name: "Advanced concepts", subtopics: ["Algorithmic trading introduction", "Automation possibilities", "Quantitative analysis basics"] },
      { name: "Trading business", subtopics: ["Tax implications for traders", "Business structures for traders", "Record-keeping requirements"] },
      { name: "Trading psychology mastery", subtopics: ["Emotional intelligence in trading", "Discipline development", "Continuous improvement mindset"] }
    ],
    activities: [
      "Final project: Comprehensive trading plan presentation",
      "Trading system documentation",
      "Interactive Q&A session"
    ]
  }
];

// Create the PDF Document
export const TradingEbookSyllabusPDF = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.coverTitle}>Complete Stock Trading Mastery</Text>
      <Text style={styles.coverSubtitle}>A Comprehensive 12-Week Curriculum for Beginner to Advanced Traders</Text>
      <Text style={styles.quote}>&ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo; — Warren Buffett</Text>
    </Page>

    {/* Course Highlights */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Course Overview</Text>
      
      <View style={styles.highlightBox}>
        <Text style={styles.highlightTitle}>Course Highlights</Text>
        <Text style={styles.highlightItem}>• Comprehensive Coverage: From market fundamentals to advanced trading techniques</Text>
        <Text style={styles.highlightItem}>• Practical Experience: Hands-on activities each week to reinforce learning</Text>
        <Text style={styles.highlightItem}>• Flexible Learning Path: Suitable for beginners, intermediate, and advanced traders</Text>
        <Text style={styles.highlightItem}>• Multi-Asset Focus: Strategies for small, mid, and large cap stocks</Text>
        <Text style={styles.highlightItem}>• Trading Styles: Learn day trading, swing trading, and long-term investing approaches</Text>
      </View>
      
      <Text style={styles.subtitle}>Course Schedule</Text>
      
      <View style={styles.tableRow}>
        <View style={styles.tableCol1}><Text style={styles.tableHeader}>Week</Text></View>
        <View style={styles.tableCol2}><Text style={styles.tableHeader}>Topic</Text></View>
        <View style={styles.tableCol3}><Text style={styles.tableHeader}>Live Session</Text></View>
        <View style={styles.tableCol4}><Text style={styles.tableHeader}>Assignment Due</Text></View>
      </View>
      
      {weeks.map((week) => (
        <View key={week.id} style={styles.tableRow}>
          <View style={styles.tableCol1}><Text style={styles.tableCell}>{week.id}</Text></View>
          <View style={styles.tableCol2}><Text style={styles.tableCell}>{week.title}</Text></View>
          <View style={styles.tableCol3}><Text style={styles.tableCell}>Monday 7PM EST</Text></View>
          <View style={styles.tableCol4}><Text style={styles.tableCell}>Sunday 11:59PM</Text></View>
        </View>
      ))}

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Week Pages */}
    {weeks.map((week) => (
      <Page key={week.id} size="A4" style={styles.page}>
        <Text style={styles.weekTitle}>Week {week.id}: {week.title}</Text>
        
        <Text style={styles.objective}>Objective: {week.objective}</Text>
        
        <Text style={styles.topicHeader}>Topics:</Text>
        
        {week.topics.map((topic, index) => (
          <View key={index}>
            <Text style={styles.topic}>• {topic.name}</Text>
            {topic.subtopics.map((subtopic, idx) => (
              <Text key={idx} style={styles.subtopic}>- {subtopic}</Text>
            ))}
          </View>
        ))}
        
        <Text style={styles.activityHeader}>Activities:</Text>
        
        {week.activities.map((activity, index) => (
          <Text key={index} style={styles.activity}>• {activity}</Text>
        ))}

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    ))}

    {/* Additional Resources */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Additional Resources</Text>
      
      <View style={styles.resourceSection}>
        <Text style={styles.resourceTitle}>Recommended Books:</Text>
        <Text style={styles.resourceItem}>• &ldquo;The Intelligent Investor&rdquo; by Benjamin Graham</Text>
        <Text style={styles.resourceItem}>• &ldquo;Technical Analysis of the Financial Markets&rdquo; by John J. Murphy</Text>
        <Text style={styles.resourceItem}>• &ldquo;Trading in the Zone&rdquo; by Mark Douglas</Text>
        <Text style={styles.resourceItem}>• &ldquo;Market Wizards&rdquo; by Jack D. Schwager</Text>
        <Text style={styles.resourceItem}>• &ldquo;Reminiscences of a Stock Operator&rdquo; by Edwin Lefèvre</Text>
      </View>
      
      <View style={styles.resourceSection}>
        <Text style={styles.resourceTitle}>Essential Tools:</Text>
        <Text style={styles.resourceItem}>• TradingView - Professional charting</Text>
        <Text style={styles.resourceItem}>• Finviz - Stock screening and visualization</Text>
        <Text style={styles.resourceItem}>• Yahoo Finance - Fundamental research</Text>
        <Text style={styles.resourceItem}>• StockCharts - Technical analysis</Text>
      </View>
      
      <View style={styles.resourceSection}>
        <Text style={styles.resourceTitle}>Community Engagement:</Text>
        <Text style={styles.resourceItem}>• Weekly live Q&A sessions</Text>
        <Text style={styles.resourceItem}>• Trading challenges with prizes</Text>
        <Text style={styles.resourceItem}>• Peer review trading plan workshops</Text>
        <Text style={styles.resourceItem}>• Mentorship opportunities</Text>
        <Text style={styles.resourceItem}>• Alumni network access</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>
          This curriculum ensures a structured progression from foundational concepts to advanced trading techniques.
          Each week builds upon previous knowledge, with practical activities to reinforce learning and develop real-world skills.
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
); 