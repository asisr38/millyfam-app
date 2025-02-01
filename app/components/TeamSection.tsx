"use client";
import React, { useState } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Anish",
    designation: "Founder & CEO",
    specialty: "Strategic Leadership",
    image: "/team/anish.jpg",
    social: "https://www.instagram.com/millynish7/",
  },
  {
    id: 2,
    name: "Taran",
    designation: "Chief Financial Officer",
    specialty: "Financial Planning",
    image: "/team/taran.jpg",
    social: "https://www.instagram.com/taran_23/",
  },
  {
    id: 3,
    name: "Manish",
    designation: "Head of Marketing",
    specialty: "Digital Marketing",
    image: "/team/manish.jpg",
    social: "https://www.instagram.com/manifesting_95/",
  },
  {
    id: 4,
    name: "Sajan",
    designation: "HR",
    specialty: "Human Resources",
    image: "/team/sajan.jpg",
    social: "https://www.instagram.com/sajanpradhan12/",
  },
  {
    id: 5,
    name: "Mingo",
    designation: "Artist",
    specialty: "Pudgy Penguin Artist",
    image: "/team/mingo.jpg",
    social: "https://www.instagram.com/ming0bling/",
  },
];

const TeamSection2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <section
      id="team"
      className="w-full flex items-center justify-center py-4 sm:py-10 md:py-12 lg:py-16 bg-zinc-900"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-center mb-6 sm:mb-6 md:mb-12 text-light">
          Meet Our <span className="text-primary">TEAM</span>
        </h2>

        {isDesktop ? (
          // Desktop Grid View
          <div className="flex justify-center items-center w-full">
            <div className={`${isDesktop ? 'scale-[2.3]' : ''} transition-transform duration-300 py-20`}>
              <AnimatedTooltip 
                items={teamMembers} 
                className="flex-wrap justify-center gap-10 md:gap-8" 
              />
            </div>
          </div>
        ) : (
          // Mobile Carousel View
          <div className="sm:hidden relative max-w-[400px] mx-auto">
            <div className="flex flex-col items-center p-4 space-y-3">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <a
                  href={teamMembers[currentIndex].social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={teamMembers[currentIndex].image}
                    alt={teamMembers[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </a>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                <a
                  href={teamMembers[currentIndex].social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamMembers[currentIndex].name}
                </a>
              </h3>
              <p className="text-lg text-light text-center">
                {teamMembers[currentIndex].designation}
              </p>
              <p className="text-base text-zinc-400 text-center">
                {teamMembers[currentIndex].specialty}
              </p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevMember}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-dark/75 p-3 sm:p-2 rounded-full transform -translate-x-1/2 transition-all duration-200 touch-manipulation"
              aria-label="Previous member"
            >
              <ChevronLeft className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />
            </button>
            <button
              onClick={nextMember}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-dark/50 hover:bg-dark/75 p-3 sm:p-2 rounded-full transform translate-x-1/2 transition-all duration-200 touch-manipulation"
              aria-label="Next member"
            >
              <ChevronRight className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-primary w-4" : "bg-neutral"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection2;
