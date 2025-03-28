"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { TradingEbookSyllabusPDF } from "@/app/ebook/components/TradingEbookSyllabusPDF";

export default function EbookPage() {
  const sections = [
    {
      id: 1,
      title: "Introduction to Stock Market Basics",
      description: "Learn the fundamentals of stock markets, types of stocks, market participants, key terminology, and trading styles.",
      link: "/ebook/week1"
    },
    {
      id: 2,
      title: "Setting Up for Trading",
      description: "Choose brokers, understand account types, explore trading platforms, and learn risk management fundamentals.",
      link: "/ebook/week2"
    },
    {
      id: 3,
      title: "Fundamental Analysis",
      description: "Master financial statements, valuation metrics, sector analysis, and earnings report interpretation.",
      link: "/ebook/week3"
    },
    {
      id: 4,
      title: "Technical Analysis Basics",
      description: "Learn candlestick patterns, support/resistance, trendlines, and moving averages.",
      link: "/ebook/week4"
    },
    {
      id: 5,
      title: "Advanced Technical Analysis",
      description: "Master technical indicators, advanced chart patterns, and Fibonacci analysis.",
      link: "/ebook/week5"
    },
    {
      id: 6,
      title: "Trading Strategies for Small Caps",
      description: "Develop specialized techniques for trading small capitalization stocks with high growth potential.",
      link: "/ebook/week6"
    },
    {
      id: 7,
      title: "Trading Strategies for Mid Caps",
      description: "Master approaches for trading mid-sized companies with balanced growth and stability.",
      link: "/ebook/week7"
    },
    {
      id: 8,
      title: "Trading Strategies for Large Caps",
      description: "Learn effective strategies for trading established companies with strong fundamentals.",
      link: "/ebook/week8"
    },
    {
      id: 9,
      title: "Day Trading",
      description: "Master intraday trading techniques, psychology, and essential tools for successful day trading.",
      link: "/ebook/week9"
    },
    {
      id: 10,
      title: "Swing Trading",
      description: "Develop skills for multi-day position trading with effective risk management.",
      link: "/ebook/week10"
    },
    {
      id: 11,
      title: "Long-Term Investing",
      description: "Build skills for sustainable portfolio growth through value and growth investing approaches.",
      link: "/ebook/week11"
    },
    {
      id: 12,
      title: "Advanced Topics and Final Project",
      description: "Explore options trading, algorithmic trading, business structures, and develop your trading system.",
      link: "/ebook/week12"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Trading Fundamentals: A Visual Journey from Beginner to Expert
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive guide designed to transform complete beginners into competent traders through visual learning and practical exercises.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <PDFDownloadLink 
            document={<TradingEbookSyllabusPDF />}
            fileName="trading-fundamentals-ebook.pdf"
            className="flex"
          >
            {({ loading }) => (
              <Button size="lg" className="bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? "Generating PDF..." : "Download Full Ebook (PDF)"}
              </Button>
            )}
          </PDFDownloadLink>
          <Link href="/ebook/syllabus">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View 12-Week Course Syllabus
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {sections.map((section) => (
          <Card key={section.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Link href={section.link} className="w-full">
                <Button variant="outline" className="w-full">Read Chapter {section.id}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 