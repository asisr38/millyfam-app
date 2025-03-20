"use client"

import { useEffect, useMemo, useState, useRef } from "react"
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
      depth: 1.5, // Increased depth for more 3D feel
      wheelZoom: false,
      imageScale: 2,
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
      radiusX: 0.9, // Slightly smaller radius to keep icons contained
      radiusY: 0.9, // Slightly smaller radius to keep icons contained
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
    
    // Change direction more gradually (longer interval = smoother appearance)
    const interval = setInterval(() => {
      const currentOptions = cloudPropsRef.current?.options;
      const newProps = getCloudProps({
        reverse: currentOptions?.reverse ?? false,
        initial: currentOptions?.initial as [number, number] || [0.1, 0.1]
      })
      
      cloudPropsRef.current = newProps
      setCloudProps(newProps)
    }, 8000 + Math.random() * 4000) // Longer intervals for smoother transitions
    
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
        
        // Use fewer icons on mobile
        let slugsToUse = iconSlugs
        if (isMobile && iconSlugs.length > 8) {
          slugsToUse = iconSlugs.slice(0, Math.min(8, Math.ceil(iconSlugs.length / 2))) 
        }
        
        console.log(`Fetching ${slugsToUse.length} icons:`, slugsToUse)
        const result = await fetchSimpleIcons({ slugs: slugsToUse })
        const iconsArray = Object.values(result.simpleIcons)
        console.log(`Successfully loaded ${iconsArray.length} icons`)
        setIcons(iconsArray)
      } catch (error) {
        console.error("Failed to load icons:", error)
        setLoadingError(String(error))
      }
    }

    if (mounted) {
      loadIcons()
    }
  }, [iconSlugs, mounted, isMobile])

  const renderCustomIcon = (icon: SimpleIcon) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
    const minContrastRatio = theme === "dark" ? 2 : 1.2

    // Adjust size based on viewport
    const size = isMobile ? 32 : 42
    
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
  }

  const renderedIcons = useMemo(
    () => icons.map((icon) => renderCustomIcon(icon)),
    [icons, theme, isMobile]
  )

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
      className="w-full h-full flex items-center justify-center"
      style={{ 
        overflow: 'hidden',
        position: 'relative',
        minHeight: '300px'
      }}
    >
      <Cloud {...cloudProps}>
        {renderedIcons}
      </Cloud>
    </div>
  )
}
