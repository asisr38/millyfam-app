"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const winImages = [
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
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

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
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => {
            const angle = i * (360 / faceCount)
            const isCenter = angle === 0 || Math.abs(angle - 360) < 1
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
                  transition={transition}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo(() => winImages, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeImg) {
        handleClose()
      }
    }

    if (activeImg) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImg])

  const handleClick = (imgUrl: string, index: number) => {
    setActiveImg(imgUrl)
    setActiveIndex(index)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  const handleSwipe = (direction: number) => {
    const newIndex = (activeIndex + direction + cards.length) % cards.length
    setActiveIndex(newIndex)
    setActiveImg(cards[newIndex])
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
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 m-2 md:m-36 lg:mx-[19rem] rounded-3xl backdrop-blur-sm"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 50
              if (Math.abs(swipe) > 100) {
                if (swipe > 0) {
                  handleSwipe(-1) // Swipe right, go to previous
                } else {
                  handleSwipe(1) // Swipe left, go to next
                }
              }
            }}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="w-full h-full md:max-w-[90%] md:max-h-[90%] rounded-lg shadow-lg object-contain p-4"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleSwipe(-1)
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleSwipe(1)
                }}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };
