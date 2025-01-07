'use client'

import React, { useMemo } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AnimatedBackground: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const symbolCount = isDesktop ? 12 : 6
  
  const moneySymbols = useMemo(() => ['$', '💰', '💵', '🪙'], [])

  const animatedElements = useMemo(() => {
    return Array.from({ length: symbolCount }, (_, i) => {
      // Use deterministic values based on index
      const leftPos = (i * (100 / symbolCount)) % 100
      const delay = (i * 0.5) % 5
      const duration = 10 + (i % 5)
      const fontSize = isDesktop ? 40 + (i % 20) : 25 + (i % 10)
      const symbolIndex = i % moneySymbols.length

      return (
        <div
          key={i}
          className="absolute text-[#D4AF37] opacity-40 animate-float"
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

