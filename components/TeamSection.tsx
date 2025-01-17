"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const teamMembers = [
  {
    name: "Anish",
    title: "Founder & CEO",
    specialty: "Strategic Leadership",
    image: "/team/anish.jpg",
    social: "https://www.instagram.com/millynish7/",
  },
  {
    name: "Taran",
    title: "Chief Financial Officer",
    specialty: "Financial Planning",
    image: "/team/taran.jpg",
    social: "https://www.instagram.com/taran_23/",
  },
  {
    name: "Manish",
    title: "Head of Marketing",
    specialty: "Digital Marketing",
    image: "/team/manish.jpg",
    social: "https://www.instagram.com/manifesting_95/",
  },
  {
    name: "Sajan",
    title: "HR",
    specialty: "Human Resources",
    image: "/team/sajan.jpg",
    social: "https://www.instagram.com/sajanpradhan12/",
  },
  {
    name: "Mingo",
    title: "Artist",
    specialty: "Pudgy Penguin Artist",
    image: "/team/mingo.jpg",
    social: "https://www.instagram.com/ming0bling/",
  }
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section
      id="team"
      className="w-full flex items-center justify-center py-6 sm:py-10 md:py-14 lg:py-20 bg-zinc-900"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-center mb-6 sm:mb-8 md:mb-12 text-light">
          Meet Our <span className="text-primary">TEAM</span>
        </h2>

        {isDesktop ? (
          // Desktop Grid View
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 sm:p-6 space-y-2 sm:space-y-3 ${
                  teamMembers.length === 4 && index === 3 ? "col-span-3" : ""
                }`}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden">
                  <a
                    href={member.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-primary">
                  <a
                    href={member.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="text-[16px] sm:text-[18px] text-light text-center">
                  {member.title}
                </p>
                <p className="text-[14px] sm:text-[16px] text-zinc-400 text-center">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Mobile Carousel View
          <div className="sm:hidden relative max-w-[300px] mx-auto">
            <div className="flex flex-col items-center p-4 space-y-3">
              <div className="w-32 h-32 relative rounded-full overflow-hidden">
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
                  />
                </a>
              </div>
              <h3 className="text-xl font-bold text-primary">
                <a
                  href={teamMembers[currentIndex].social}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {teamMembers[currentIndex].name}
                </a>
              </h3>
              <p className="text-base text-light text-center">
                {teamMembers[currentIndex].title}
              </p>
              <p className="text-sm text-zinc-400 text-center">
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

export default TeamSection;
