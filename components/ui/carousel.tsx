"use client";
import { IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  src: string;
  priority?: boolean;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  onImageClick: (src: string) => void;
}

const Slide = ({ slide, index, current, handleSlideClick, onImageClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title, priority } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[45vmin] mx-[4vmin] z-10 cursor-pointer touch-manipulation"
        onClick={(e) => {
          e.preventDefault();
          if (current === index) {
            onImageClick(src);
          } else {
            handleSlideClick(index);
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: current !== index
            ? "scale(0.98) rotateX(8deg)"
            : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform: current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              className="object-contain transition-opacity duration-600 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0.5,
              }}
              alt={title}
              src={src}
              fill
              sizes="(max-width: 768px) 90vw, 70vmin"
              priority={priority || index === current}
              quality={85}
            />
          </div>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-14 h-14 sm:w-10 sm:h-10 flex items-center mx-2 justify-center bg-neutral-200/90 dark:bg-neutral-800/90 backdrop-blur-sm border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 z-10 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleClick();
      }}
      aria-label={title}
      type="button"
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200 w-6 h-6 sm:w-5 sm:h-5" />
    </button>
  );
};

export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number>(0);
  const touchEnd = useRef<number>(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    setCurrent(index);
  };

  const handleImageClick = (src: string) => {
    const index = slides.findIndex(slide => slide.src === src);
    setModalIndex(index);
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleModalPrevious = () => {
    const prevIndex = modalIndex - 1;
    const newIndex = prevIndex < 0 ? slides.length - 1 : prevIndex;
    setModalIndex(newIndex);
    setModalImage(slides[newIndex].src);
  };

  const handleModalNext = () => {
    const nextIndex = modalIndex + 1;
    const newIndex = nextIndex === slides.length ? 0 : nextIndex;
    setModalIndex(newIndex);
    setModalImage(slides[newIndex].src);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // minimum distance for a swipe
    const swipeDistance = touchStart.current - touchEnd.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left
        handleModalNext();
      } else {
        // Swiped right
        handleModalPrevious();
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNextClick, 5000);
      return () => clearInterval(interval);
    }
  }, [current, isPaused]);

  const id = useId();

  return (
    <>
      <div
        className="relative w-[80vmin] sm:w-[70vmin] h-[70vmin] mx-auto"
        aria-labelledby={`carousel-heading-${id}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
              onImageClick={handleImageClick}
            />
          ))}
        </ul>

        <div className="absolute flex justify-between w-full px-2 sm:px-0 sm:justify-center items-center top-1/2 -translate-y-1/2 sm:top-[calc(100%+1rem)] sm:translate-y-0 z-20 pointer-events-auto">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative w-[90vw] h-[90vh] max-w-7xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-50"
              aria-label="Close modal"
            >
              <IconX size={24} />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleModalPrevious();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors md:left-4 z-50 w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full"
              aria-label="Previous image"
            >
              <IconArrowNarrowRight className="w-8 h-8 rotate-180" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleModalNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors md:right-4 z-50 w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full"
              aria-label="Next image"
            >
              <IconArrowNarrowRight className="w-8 h-8" />
            </button>

            <div className="w-full h-full relative bg-black/40 rounded-lg overflow-hidden">
              <Image
                src={modalImage}
                alt="Full size view"
                className="object-contain"
                fill
                sizes="90vw"
                quality={100}
                priority
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
