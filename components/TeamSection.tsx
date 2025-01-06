'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'John Doe',
    title: 'Founder & CEO',
    specialty: 'Strategic Leadership',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Jane Smith',
    title: 'Chief Financial Officer',
    specialty: 'Financial Planning',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Mike Johnson',
    title: 'Head of Marketing',
    specialty: 'Digital Marketing',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Sarah Williams',
    title: 'Lead Developer',
    specialty: 'Full-Stack Development',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Alex Brown',
    title: 'Community Manager',
    specialty: 'Member Engagement',
    image: '/placeholder.svg?height=300&width=300'
  }
]

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section className="w-full py-12 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Meet Our Team</h2>
        
        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-[#D4AF37]">{member.title}</p>
              <p className="text-zinc-400 text-center mt-2">{member.specialty}</p>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <Image
                src={teamMembers[currentIndex].image}
                alt={teamMembers[currentIndex].name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">{teamMembers[currentIndex].name}</h3>
            <p className="text-[#D4AF37]">{teamMembers[currentIndex].title}</p>
            <p className="text-zinc-400 text-center mt-2">{teamMembers[currentIndex].specialty}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={prevMember}
              className="bg-zinc-800 text-white p-2 rounded-full mr-4"
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextMember}
              className="bg-zinc-800 text-white p-2 rounded-full"
              aria-label="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection

