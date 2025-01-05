'use client'
import { useEffect, useState } from 'react'
import { DollarSign, Coins, PiggyBank, Wallet } from 'lucide-react'

const icons = [DollarSign, Coins, PiggyBank, Wallet]

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    speed: number;
    icon: number;
    opacity: number;
  }>>([])

  useEffect(() => {
    const particleCount = 15
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.5 + Math.random() * 1,
      icon: Math.floor(Math.random() * icons.length),
      opacity: 0.3 + Math.random() * 0.3,
    }))

    setParticles(newParticles)

    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          y: particle.y < -10 ? 110 : particle.y - particle.speed,
        }))
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => {
        const Icon = icons[particle.icon]
        return (
          <div
            key={particle.id}
            className="absolute text-zinc-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Icon size={24} />
          </div>
        )
      })}
    </div>
  )
} 