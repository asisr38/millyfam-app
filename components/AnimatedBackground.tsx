'use client'

import React from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const AnimatedBackground: React.FC = () => {
  const moneySymbols = ['$', '💰', '💵', '🪙']
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const symbolCount = isDesktop ? 10 : 5

  const animatedElements = Array.from({ length: symbolCount }, (_, i) => (
    <div
      key={i}
      className="absolute text-[#D4AF37] opacity-30 animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: '-20%',
        animationDelay: `${Math.random() * 5}s`,
        fontSize: isDesktop ? `${Math.random() * 20 + 20}px` : `${Math.random() * 10 + 10}px`,
        animationDuration: `${Math.random() * 5 + 10}s`,
      }}
    >
      {moneySymbols[Math.floor(Math.random() * moneySymbols.length)]}
    </div>
  ))

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{animatedElements}</div>
}

export default AnimatedBackground

