'use client'

import React, { useMemo } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AnimatedBackground: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const symbolCount = 12 // Always use 12 symbols regardless of device
  
  const moneySymbols = useMemo(() => ['$', '💰', '💵', '💎', '🚀', '📈'], [])

  const animatedElements = useMemo(() => {
    return Array.from({ length: symbolCount }, (_, i) => {
      const leftPos = (i * (100 / symbolCount)) % 100
      const delay = (i * 0.8) % 5
      const duration = 8 + (i % 3)
      const fontSize = isDesktop ? 18 + (i % 12) : 16 + (i % 8)
      const symbolIndex = i % moneySymbols.length

      const styleProps: React.CSSProperties & Record<'--opacity', string> = {
        left: `${leftPos}%`,
        animationDelay: `${delay}s`,
        fontSize: `${fontSize}px`,
        animationDuration: `${duration}s`,
        ['--opacity']: isDesktop ? '0.4' : '0.3',
      };

      return (
        <div
          key={i}
          className="absolute -top-[20%] text-[#D4AF37] opacity-30 animate-float"
          style={styleProps}
        >
          {moneySymbols[symbolIndex]}
        </div>
      )
    })
  }, [isDesktop, symbolCount, moneySymbols])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{animatedElements}</div>
}

export default AnimatedBackground

