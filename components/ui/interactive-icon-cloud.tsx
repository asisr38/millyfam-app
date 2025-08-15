"use client"

import { useEffect, useMemo, useState, useRef, useCallback } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

// Cloud props with disabled interactions but smoothly animated
export const getCloudProps = (prev?: Partial<{
  reverse: boolean;
  initial: [number, number];
}>): Omit<ICloud, "children"> => {
  // Smooth transition by not changing all properties at once
  const reverse = prev?.reverse !== undefined 
    ? prev.reverse 
    : Math.random() > 0.5

  // Generate smooth initial values - either brand new or slight variation from previous
  let initialX: number, initialY: number
  
  if (prev?.initial) {
    // Make a slight modification to the current direction (smoother transition)
    // Add a small random offset to the existing direction
    const offsetMagnitude = 0.05
    initialX = prev.initial[0] + (Math.random() * offsetMagnitude * 2 - offsetMagnitude)
    initialY = prev.initial[1] + (Math.random() * offsetMagnitude * 2 - offsetMagnitude)
    
    // Normalize to keep consistent speed
    const magnitude = Math.sqrt(initialX * initialX + initialY * initialY)
    initialX = (initialX / magnitude) * 0.1
    initialY = (initialY / magnitude) * 0.1
  } else {
    // First initialization - random direction
    const randomAngle = Math.random() * 360
    const radians = (randomAngle * Math.PI) / 180
    initialX = Math.sin(radians) * 0.1
    initialY = Math.cos(radians) * 0.1
  }
  
  // Check if we're on mobile
  const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 768
  
  return {
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%", // Ensure container takes full height
        paddingTop: 0, // Remove top padding that might be causing the cutoff
        paddingBottom: 0, // Ensure no bottom padding
        overflow: "visible", // Ensure content isn't clipped
        position: "relative", // Establish positioning context
      },
      className: "pointer-events-none", // Disable pointer events on container
    },
    options: {
      reverse,
      depth: isMobileView ? 1.2 : 1.5, // Slightly less depth on mobile
      wheelZoom: false,
      imageScale: isMobileView ? 2.5 : 2, // Bigger image scale on mobile
      activeCursor: "default", 
      tooltip: null,
      initial: [initialX, initialY], 
      clickToFront: false,
      tooltipDelay: 0,
      outlineColour: "#0000",
      maxSpeed: 0.035, // Slightly lower for smoother movement
      minSpeed: 0.015, // Slightly lower for smoother movement
      dragControl: false,
      decel: 0.98, // Higher value (closer to 1) means slower deceleration = smoother
      radiusX: isMobileView ? 0.8 : 0.9, // Tighter radius on mobile
      radiusY: isMobileView ? 0.8 : 0.9, // Tighter radius on mobile
      stretchX: 1, // Avoid stretching
      stretchY: 1, // Avoid stretching
      noSelect: true,
      lock: null, // Allow free movement
      freezeActive: false, // Don't freeze active element
      freezeDecel: false, // Don't freeze deceleration
      frontSelect: false, // Don't bring to front on select
      zoom: 1, // Normal zoom level
      pinchZoom: false, // No pinch zoom
      txtOpt: false, // No text optimization
      txtScale: 2, // Text scaling
      shape: "sphere", // Use sphere shape for better containment
      shadowBlur: 0, // No shadow blur
      shadowOffset: [0, 0], // No shadow offset
      fadeIn: 500, // Fade in duration
      padding: 0.5, // Add some padding inside the container
    },
  }
}

export type IconCloudProps = {
  iconSlugs: string[]
}

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const { theme = "dark" } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [icons, setIcons] = useState<SimpleIcon[]>([])
  const [loadingError, setLoadingError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const cloudPropsRef = useRef<Omit<ICloud, "children">>(getCloudProps())
  const [cloudProps, setCloudProps] = useState<Omit<ICloud, "children">>(cloudPropsRef.current)
  const containerRef = useRef<HTMLDivElement>(null)

  // Periodically update cloud direction with smooth transitions
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      const currentOptions = cloudPropsRef.current?.options
      const newProps = getCloudProps({
        reverse: currentOptions?.reverse ?? false,
        initial: (currentOptions?.initial as [number, number]) || [0.1, 0.1],
      })
      cloudPropsRef.current = newProps
      setCloudProps(newProps)
    }, 8000 + Math.random() * 4000)
    return () => clearInterval(interval)
  }, [mounted])

  // Detect mobile screen
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768)
      }
      
      checkMobile()
      window.addEventListener("resize", checkMobile)
      
      return () => {
        window.removeEventListener("resize", checkMobile)
      }
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const loadIcons = async () => {
      try {
        setLoadingError(null)
        const result = await fetchSimpleIcons({ slugs: iconSlugs })
        const iconsArray = Object.values(result.simpleIcons)
        setIcons(iconsArray)
      } catch (error) {
        setLoadingError(String(error))
      }
    }
    if (mounted) loadIcons()
  }, [iconSlugs, mounted])

  const renderCustomIcon = useCallback((icon: SimpleIcon) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
    const minContrastRatio = theme === "dark" ? 2 : 1.2

    // Increase size on mobile for better visibility
    const size = isMobile ? 48 : 42
    
    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size,
      aProps: {
        href: undefined,
        target: undefined,
        rel: undefined,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
      },
    })
  }, [theme, isMobile])

  const renderedIcons = useMemo(() => icons.map((icon) => renderCustomIcon(icon)), [icons, renderCustomIcon])

  if (!mounted) return null
  
  if (loadingError) {
    console.warn("Icon Cloud Error:", loadingError)
    return null
  }
  
  if (icons.length === 0) {
    console.warn("No icons loaded")
    return null
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] overflow-hidden relative flex items-center justify-center"
    >
      <Cloud {...cloudProps}>
        {renderedIcons}
      </Cloud>
    </div>
  )
}
