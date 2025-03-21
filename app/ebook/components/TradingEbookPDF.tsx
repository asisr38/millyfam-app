import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Font,
} from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/fonts/open-sans-v15-latin-regular.ttf' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/fonts/open-sans-v15-latin-700.ttf', fontWeight: 700 }
  ]
});

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 40,
    fontFamily: 'Roboto'
  },
  coverPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#f8f9fa',
    padding: 40,
  },
  coverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  coverSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#555'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    color: '#444'
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 10,
    color: '#333'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    borderBottom: '1px solid #ddd',
    paddingBottom: 10,
    color: '#222'
  },
  bulletPoint: {
    marginBottom: 8,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  bulletPointText: {
    marginLeft: 5,
    flex: 1,
    fontSize: 12,
    lineHeight: 1.5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: 'grey',
    borderTop: '1px solid #ddd',
    paddingTop: 10,
  },
  toc: {
    fontSize: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  tocItem: {
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  tocText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 1.5,
  },
  tocPage: {
    fontSize: 12,
    color: '#555',
  },
  keyPointBox: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f1f8ff',
    borderLeft: '3px solid #4285f4',
  },
  keyPointTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4285f4',
  },
  exerciseBox: {
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    border: '1px solid #ddd',
  },
  exerciseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 12,
    color: '#777',
  },
  chartContainer: {
    marginVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Create the PDF Document
export const TradingEbookPDF = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.coverTitle}>Trading Fundamentals</Text>
      <Text style={styles.coverTitle}>A Visual Journey from Beginner to Expert</Text>
      <Text style={styles.coverSubtitle}>A comprehensive guide to transform novices into competent traders</Text>
    </Page>

    {/* Table of Contents */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Table of Contents</Text>
      
      <View style={styles.toc}>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 1: Trading Foundations</Text>
          <Text style={styles.tocPage}>3</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 2: Market Analysis</Text>
          <Text style={styles.tocPage}>8</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 3: Risk Management</Text>
          <Text style={styles.tocPage}>13</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 4: Trading Strategies</Text>
          <Text style={styles.tocPage}>18</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 5: Building Your Trading Plan</Text>
          <Text style={styles.tocPage}>23</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 6: Advanced Concepts</Text>
          <Text style={styles.tocPage}>28</Text>
        </View>
        <View style={styles.tocItem}>
          <Text style={styles.tocText}>Section 7: Putting It All Together</Text>
          <Text style={styles.tocPage}>33</Text>
        </View>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Section 1: Trading Foundations */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.chapterTitle}>Section 1: Trading Foundations</Text>
        
        <Text style={styles.subtitle}>What is Trading?</Text>
        <Text style={styles.content}>
          Trading refers to the buying and selling of financial instruments such as stocks, bonds, currencies, commodities, and derivatives with the goal of generating returns that outperform buy-and-hold investing. Unlike investing, which typically involves holding assets for longer periods, trading involves more frequent transactions to capitalize on short to medium-term market opportunities.
        </Text>
        
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>[Visual: Markets Overview Diagram]</Text>
        </View>

        <Text style={styles.subtitle}>Trading Styles</Text>
        <Text style={styles.content}>
          Trading can be categorized into several distinct styles based on timeframes and strategies:
        </Text>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Day Trading: </Text>
            Positions are opened and closed within the same trading day, with no overnight exposure.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Swing Trading: </Text>
            Positions are held for several days to weeks to capture &quot;swings&quot; in price momentum.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Position Trading: </Text>
            Longer-term approach with positions held for weeks to months, focusing on significant trends.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Scalping: </Text>
            Very short-term trading with positions held for seconds to minutes, aiming for small but frequent profits.
          </Text>
        </View>

        <View style={styles.keyPointBox}>
          <Text style={styles.keyPointTitle}>Key Point</Text>
          <Text style={styles.content}>
            No single trading style is inherently better than others. The best approach depends on your personality, time availability, capital, and risk tolerance.
          </Text>
        </View>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
    
    {/* More sections would continue here - this is a shortened version for demonstration */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Market Ecosystem</Text>
        <Text style={styles.content}>
          The market ecosystem consists of various participants who interact to create the dynamic environment in which trading occurs:
        </Text>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Retail Traders: </Text>
            Individual non-professional traders like yourself.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Institutional Investors: </Text>
            Banks, hedge funds, pension funds, and mutual funds that manage large portfolios.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Market Makers: </Text>
            Firms that provide liquidity by always being willing to buy or sell securities.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Brokers: </Text>
            Intermediaries that execute trades on behalf of traders.
          </Text>
        </View>
        
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            <Text style={{ fontWeight: 'bold' }}>Exchanges: </Text>
            Organized marketplaces where trading occurs (NYSE, NASDAQ, etc.).
          </Text>
        </View>
        
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>[Visual: Market Participants Infographic]</Text>
        </View>
        
        <Text style={styles.subtitle}>Trading Psychology</Text>
        <Text style={styles.content}>
          Psychology plays a crucial role in trading success. The ability to control emotions, maintain discipline, and follow a well-defined trading plan often separates successful traders from unsuccessful ones.
        </Text>
        
        <View style={styles.exerciseBox}>
          <Text style={styles.exerciseTitle}>Exercise: Self-Assessment</Text>
          <Text style={styles.content}>
            Reflect on your personality traits and answer these questions:
            1. How do you typically react to losing money?
            2. Can you stick to rules even when tempted to break them?
            3. Are you patient or do you seek immediate gratification?
            4. How do you handle stress and uncertainty?
          </Text>
        </View>
      </View>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>

    {/* Final page with references and resources */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.chapterTitle}>Additional Resources</Text>
        
        <Text style={styles.subtitle}>Recommended Books</Text>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            &quot;Trading in the Zone&quot; by Mark Douglas
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            &quot;Technical Analysis of the Financial Markets&quot; by John J. Murphy
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            &quot;Market Wizards&quot; by Jack D. Schwager
          </Text>
        </View>
        
        <Text style={styles.subtitle}>Online Learning Resources</Text>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            Investopedia.com - Comprehensive trading encyclopedia
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            TradingView.com - Charts, analysis, and community
          </Text>
        </View>
        <View style={styles.bulletPoint}>
          <Text>•</Text>
          <Text style={styles.bulletPointText}>
            Babypips.com - Forex education for beginners
          </Text>
        </View>
        
        <Text style={{...styles.content, marginTop: 40, textAlign: 'center'}}>
          This ebook serves as an introductory guide. Trading involves significant risk of loss and is not suitable for everyone. 
          Past performance is not indicative of future results. Always do your own research and consider consulting with a financial advisor.
        </Text>
      </View>
      
      <Text style={styles.footer}>
        © {new Date().getFullYear()} | Trading Fundamentals: A Visual Journey from Beginner to Expert
      </Text>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
); 