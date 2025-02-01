"use client"
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  // Add isMounted state to handle client-side rendering only
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    // Use UTC time to ensure consistent calculations
    const targetDate = new Date('2025-02-01T20:00:00Z'); // 15:00 EST in UTC
    const now = new Date();
    const difference = +targetDate - +now;
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  useEffect(() => {
    setIsMounted(true);
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };
    
    // Initial calculation
    updateTimer();

    // Update every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't render anything during SSR or initial client render
  if (!isMounted) {
    return (
      <div className="w-full min-h-[10vh] py-6 bg-gray-800">
        <div className="container mx-auto px-2">
          <div className="text-center text-white text-2xl font-bold mb-4">
            TIME TILL LAUNCH
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            {/* Render static placeholders during SSR */}
            {['days', 'hours', 'minutes', 'seconds'].map((interval) => (
              <div key={interval} className="flex flex-col items-center min-w-[100px]">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  00
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
  }

  if (!timeLeft) {
    return <div>Loading...</div>;
  }

  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="w-full py-8 bg-gray-900">
        <div className="text-center text-white text-3xl font-bold">
          Join MillyFam, We here NOW!!! 🚀
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[10vh] py-6 bg-gray-800">
      <div className="container mx-auto px-2">
        <div className="text-center text-white text-xl sm:text-2xl font-bold mb-4">
          TIME TILL LAUNCH
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {Object.entries(timeLeft).map(([interval, value]) => (
            <div key={interval} className="flex flex-col items-center min-w-[80px] sm:min-w-[100px]">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {value?.toString().padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
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