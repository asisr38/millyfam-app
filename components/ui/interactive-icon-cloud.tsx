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

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
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

export type IconCloudProps = {
  iconSlugs: string[]
}

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const { theme = "dark" } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [icons, setIcons] = useState<SimpleIcon[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const result = await fetchSimpleIcons({ slugs: iconSlugs })
        setIcons(Object.values(result.simpleIcons))
      } catch (error) {
        console.error("Failed to load icons:", error)
      }
    }

    if (mounted) {
      loadIcons()
    }
  }, [iconSlugs, mounted])

  const renderedIcons = useMemo(
    () => icons.map((icon) => renderCustomIcon(icon, theme)),
    [icons, theme]
  )

  if (!mounted) return null

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  )
}
