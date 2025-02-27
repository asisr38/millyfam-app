"use client";

import { Carousel } from "@/components/ui/carousel";

export default function WinShowcase() {
  const slideData = [
    // Stock Wins
    {
      title: "Stock Win 1",
      src: "/wins/stockwin1.png",
    },
    {
      title: "Stock Win 2",
      src: "/wins/stockwin2.png",
    },
    {
      title: "Stock Win 3",
      src: "/wins/stockwin3.png",
    },
    {
      title: "Stock Win 4",
      src: "/wins/stockwin4.png",
    },
    {
      title: "Stock Win 5",
      src: "/wins/stockwin5.png",
    },
    {
      title: "Stock Win 6",
      src: "/wins/stockwin6.png",
    },
    {
      title: "Stock Win 7",
      src: "/wins/stockwin7.png",
    },
    // Crypto & Other Wins
    {
      title: "Win 1",
      src: "/wins/win1.png",
    },
    {
      title: "Win 3",
      src: "/wins/win3.png",
    },
    {
      title: "Win 4",
      src: "/wins/win4.png",
    },
    {
      title: "Win 5",
      src: "/wins/win5.jpg",
    },
    {
      title: "Win 6",
      src: "/wins/win6.png",
    },
    {
      title: "Win 8",
      src: "/wins/win8.png",
    },
    {
      title: "Win 9",
      src: "/wins/win9.png",
    },
    {
      title: "Win 10",
      src: "/wins/win10.png",
    },
    {
      title: "Win 11",
      src: "/wins/win11.png",
    },
    {
      title: "Win 12",
      src: "/wins/win12.png",
    },
    {
      title: "Win 13",
      src: "/wins/win13.png",
    },
    {
      title: "Win 14",
      src: "/wins/win14.jpg",
    },
    {
      title: "Win 15",
      src: "/wins/win15.png",
    },
    {
      title: "Win 16",
      src: "/wins/win16.jpg",
    },
    {
      title: "Win 17",
      src: "/wins/win17.png",
    },
    {
      title: "Win 18",
      src: "/wins/win18.png",
    },
  ].map((slide, index) => ({
    ...slide,
    priority: index < 4, // Only prioritize loading first 4 images
  }));

  return (
    <section
      id="winshowcase"
      className="w-full min-h-[60vh] py-6 md:py-8 lg:py-18 flex items-center justify-center"
    >
      <div className="container px-3 md:px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground">
          Some of our <span className="text-[#27Ae60]">WINS</span>
        </h2>
        
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </div>
    </section>
  );
}
