"use client";

import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"

export default function WinShowcase() {
  return (
    <section
      id="winshowcase"
      className="w-full min-h-[60vh] py-6 md:py-8 lg:py-18 flex items-center justify-center bg-dark"
    >
      <div className="container px-3 md:px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-light">
          Some of our <span className="text-[#27Ae60]">WINS</span>
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </section>
  )
}
