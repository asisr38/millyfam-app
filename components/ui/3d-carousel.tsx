"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState, useRef, useCallback } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  PanInfo,
  AnimationControls,
} from "framer-motion"

// Constants
const DURATION = 0.15;
const TRANSITION = { duration: DURATION, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const TRANSITION_OVERLAY = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };
const IS_SERVER = typeof window === "undefined";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Optimized media query hook
const useMediaQuery = (query: string, options: { defaultValue?: boolean; initializeWithValue?: boolean } = {}) => {
  const { defaultValue = false, initializeWithValue = true } = options;

  const getMatches = useCallback((query: string): boolean => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(query).matches;
  }, [defaultValue]);

  const [matches, setMatches] = useState(() => 
    initializeWithValue ? getMatches(query) : defaultValue
  );

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = () => setMatches(getMatches(query));

    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query, getMatches]);

  return matches;
};

// Memoized image array
const WIN_IMAGES = [
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
] as const;

// Optimized Carousel component
const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void;
    controls: AnimationControls;
    cards: readonly string[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    const handleDrag = useCallback((_: never, info: PanInfo) => {
      if (isCarouselActive) {
        rotation.set(rotation.get() + info.offset.x * 0.05);
      }
    }, [isCarouselActive, rotation]);

    const handleDragEnd = useCallback((_: never, info: PanInfo) => {
      if (isCarouselActive) {
        controls.start({
          rotateY: rotation.get() + info.velocity.x * 0.05,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 0.1,
          },
        });
      }
    }, [isCarouselActive, controls, rotation]);

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {cards.map((imgUrl, i) => {
            const angle = i * (360 / faceCount);
            const isCenter = angle === 0 || Math.abs(angle - 360) < 1;
            return (
              <motion.div
                key={`key-${imgUrl}-${i}`}
                className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => handleClick(imgUrl, i)}
              >
                <motion.img
                  src={imgUrl}
                  alt={`Win showcase ${i + 1}`}
                  layoutId={`img-${imgUrl}`}
                  className={`pointer-events-none w-full rounded-xl object-contain aspect-square transition-transform duration-300 ${
                    isCenter ? 'scale-150 z-10' : 'scale-100'
                  }`}
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={TRANSITION}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

// Main component
export function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const cards = useMemo(() => WIN_IMAGES, []);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = useCallback((imgUrl: string, index: number) => {
    setActiveImg(imgUrl);
    setActiveIndex(index);
    setIsCarouselActive(false);
    controls.stop();
  }, [controls]);

  const handleClose = useCallback(() => {
    setActiveImg(null);
    setIsCarouselActive(true);
  }, []);

  const handleSwipe = useCallback((direction: number) => {
    const newIndex = (activeIndex + direction + cards.length) % cards.length;
    setActiveIndex(newIndex);
    setActiveImg(cards[newIndex]);
  }, [activeIndex, cards]);

  useEffect(() => {
    if (!activeImg) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (imageContainerRef.current && !imageContainerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    const handleTouchOutside = (e: TouchEvent) => {
      if (imageContainerRef.current && !imageContainerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleTouchOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [activeImg, handleClose]);

  if (!isMounted) {
    return <div className="h-[300px] md:h-[400px] lg:h-[500px]" />;
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 m-2 md:m-36 lg:mx-[19rem] rounded-3xl backdrop-blur-sm touch-none"
            style={{ willChange: "opacity" }}
            transition={TRANSITION_OVERLAY}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 100) {
                handleSwipe(info.offset.x > 0 ? -1 : 1);
              }
            }}
            ref={imageContainerRef}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white z-50 p-2 text-xl"
              aria-label="Close image"
            >
              ✕
            </button>
            <div 
              className="relative flex items-center justify-center w-full h-full max-w-[95%] max-h-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={activeImg}
                alt="Selected win"
                layoutId={`img-${activeImg}`}
                className="w-full h-full object-contain p-4"
                style={{ willChange: "transform" }}
              />
              <div 
                className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSwipe(-1);
                    }}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSwipe(1);
                    }}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>
                <p className="text-white/50 text-sm">Tap outside to close</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-[300px] md:h-[400px] lg:h-[500px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}
