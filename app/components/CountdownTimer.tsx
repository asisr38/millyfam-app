"use client"
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  // Calculate time remaining until target date (February 1, 2025, 3:00 PM EST)
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-02-01T15:00:00-05:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  // Update timer every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // If countdown is finished
  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="w-full py-8 bg-gray-900">
        <div className="text-center text-white text-3xl font-bold">
          Join MillyFam , We here NOW!!! 🚀
        </div>
      </div>
    );
  }

  // Render each time unit in a styled container    
  return (
    <div className="w-full min-h-[10vh] py-6 bg-gray-800">
      <div className="container mx-auto px-2">
        <div className="text-center text-white text-2xl font-bold mb-4">
          TIME TILL LAUNCH
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {Object.entries(timeLeft).map(([interval, value]) => (
            <div key={interval} className="flex flex-col items-center min-w-[100px]">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {value?.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {interval}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;