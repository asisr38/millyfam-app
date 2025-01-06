'use client'
import React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const screenshots = [
  { src: '/win1.png', alt: 'Screenshot of a major win' },
  { src: '/win2.png', alt: 'Another impressive achievement' },
  { src: '/win3.png', alt: 'Milestone reached by a community member' },
  { src: '/win4.png', alt: 'Exciting progress shared in the community' },
]

const WinShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section className="w-full py-12 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Community Wins</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-[#D4AF37]' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WinShowcase

