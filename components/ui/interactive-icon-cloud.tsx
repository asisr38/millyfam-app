"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

// Cloud props with disabled interactions
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
    className: "pointer-events-none", // Disable pointer events on container
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: null,
    initial: [0.1, -0.1],
    clickToFront: false,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.01, // Reduce speed
    minSpeed: 0.005, // Reduce speed
  },
}

export type IconCloudProps = {
  iconSlugs: string[]
}

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const { theme = "dark" } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [icons, setIcons] = useState<SimpleIcon[]>([])
  const [loadingError, setLoadingError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const loadIcons = async () => {
      try {
        setLoadingError(null)
        console.log("Fetching icons for:", iconSlugs)
        const result = await fetchSimpleIcons({ slugs: iconSlugs })
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
  }, [iconSlugs, mounted])

  const renderCustomIcon = (icon: SimpleIcon) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
    const minContrastRatio = theme === "dark" ? 2 : 1.2

    return renderSimpleIcon({
      icon,
      bgHex,
      fallbackHex,
      minContrastRatio,
      size: 42,
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
    [icons, theme]
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
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  )
}
