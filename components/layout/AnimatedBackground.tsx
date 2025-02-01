'use client'

import React, { useMemo } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AnimatedBackground: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const symbolCount = isDesktop ? 8 : 4
  
  const moneySymbols = useMemo(() => ['$', '💰', '💵'], [])

  const animatedElements = useMemo(() => {
    return Array.from({ length: symbolCount }, (_, i) => {
      const leftPos = (i * (100 / symbolCount)) % 100
      const delay = (i * 0.8) % 5
      const duration = 8 + (i % 3)
      const fontSize = isDesktop ? 18 + (i % 12) : 24 + (i % 12)
      const symbolIndex = i % moneySymbols.length

      return (
        <div
          key={i}
          className="absolute text-[#D4AF37] opacity-30 animate-float"
          style={{
            left: `${leftPos}%`,
            top: '-20%',
            animationDelay: `${delay}s`,
            fontSize: `${fontSize}px`,
            animationDuration: `${duration}s`,
          }}
        >
          {moneySymbols[symbolIndex]}
        </div>
      )
    })
  }, [isDesktop, symbolCount, moneySymbols])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{animatedElements}</div>
}

export default AnimatedBackground

