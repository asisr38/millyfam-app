"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WinShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/wins/win1.png",
    "/wins/win2.png",
    "/wins/win3.png",
    "/wins/win4.png",
    "/wins/win5.jpg",
    "/wins/win6.png",
    "/wins/win8.png",
    "/wins/win9.png",
    "/wins/win10.png",
    "/wins/win11.png",
    "/wins/win12.png",
    "/wins/win13.png",
    "/wins/win14.jpg",
    "/wins/win15.png",
    "/wins/win16.jpg",
    "/wins/win17.png",
    "/wins/win18.png"

  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section
      id="winshowcase"
      className="w-full py-8 md:py-12 lg:py-26 flex items-center justify-center bg-dark"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-light">
          Some of our <span className="text-[#27Ae60]">WINS</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Fixed height container */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <Image
              src={images[currentIndex]}
              alt={`Win showcase ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-dark/75 p-3 sm:p-2 rounded-full transform -translate-x-1/2 transition-all duration-200 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-dark/75 p-3 sm:p-2 rounded-full transform translate-x-1/2 transition-all duration-200 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-primary w-4" : "bg-neutral"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
