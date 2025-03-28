"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EbookHeader() {
  return (
    <div className="py-4 px-4 flex justify-between items-center">
      <Link href="/ebook">
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Ebook Home
        </Button>
      </Link>
      <Link href="/">
        <Button variant="ghost" size="sm">
          Return to Main Site
        </Button>
      </Link>
    </div>
  );
} 