"use client";
import React, { useState, memo, useCallback, useMemo } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  specialty: string;
  image: string;
  social: string;
}

const TEAM_MEMBERS: TeamMember[] = [
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

// Memoized components
const MemberImage = memo(({ member }: { member: TeamMember }) => (
  <div className="w-48 h-48 relative rounded-full overflow-hidden">
    <a href={member.social} target="_blank" rel="noopener noreferrer">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
        sizes="20vw"
        priority={true}
      />
    </a>
  </div>
));

MemberImage.displayName = "MemberImage";

const MemberInfo = memo(({ member }: { member: TeamMember }) => (
  <>
    <h3 className="text-2xl font-bold text-primary">
      <a href={member.social} target="_blank" rel="noopener noreferrer">
        {member.name}
      </a>
    </h3>
    <p className="text-lg text-light text-center">{member.designation}</p>
    <p className="text-base text-zinc-400 text-center">{member.specialty}</p>
  </>
));

MemberInfo.displayName = "MemberInfo";

const NavigationDots = memo(({ 
  currentIndex, 
  total, 
  onSelect 
}: { 
  currentIndex: number; 
  total: number; 
  onSelect: (index: number) => void;
}) => (
  <div className="flex justify-center space-x-2 mt-4">
    {Array.from({ length: total }, (_, index) => (
      <button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-2 h-2 rounded-full transition-all duration-200 ${
          index === currentIndex ? "bg-primary w-4" : "bg-neutral"
        }`}
        aria-label={`Go to team member ${index + 1}`}
      />
    ))}
  </div>
));

NavigationDots.displayName = "NavigationDots";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const nextMember = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TEAM_MEMBERS.length);
  }, []);

  const prevMember = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length
    );
  }, []);

  const currentMember = useMemo(
    () => TEAM_MEMBERS[currentIndex],
    [currentIndex]
  );

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
          <div className="flex justify-center items-center w-full">
            <div className={`${isDesktop ? 'scale-[2]' : ''} transition-transform duration-300 py-20`}>
              <AnimatedTooltip 
                items={TEAM_MEMBERS} 
                className="flex-wrap justify-center gap-8 md:gap-6" 
              />
            </div>
          </div>
        ) : (
          <div className="sm:hidden relative max-w-[400px] mx-auto">
            <div className="flex flex-col items-center p-4 space-y-3">
              <MemberImage member={currentMember} />
              <MemberInfo member={currentMember} />
            </div>

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

            <NavigationDots
              currentIndex={currentIndex}
              total={TEAM_MEMBERS.length}
              onSelect={setCurrentIndex}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(TeamSection);
