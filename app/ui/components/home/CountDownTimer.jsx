"use client";
import { useState, useEffect } from "react";

export default function CountDownTimer({ dayCount }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + dayCount); // 300 days from now

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    // Initial calculation
    calculateTimeLeft();
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-8 lg:gap-3">
      <div className="w-20 h-24 flex flex-col items-center justify-center py-4 px-5 rounded-xl bg-white/10">
        <span className="text-3xl font-bold font-barlow text-white">
          {timeLeft.days}
        </span>
        <span className="text-white/70 text-lg capitalize">days</span>
      </div>
      <div className="w-20 h-24 flex flex-col items-center justify-center py-4 px-5 rounded-xl bg-white/10">
        <span className="text-3xl font-bold font-barlow text-white">
          {timeLeft.hours}
        </span>
        <span className="text-white/70 text-lg capitalize">hours</span>
      </div>
      <div className="w-20 h-24 flex flex-col items-center justify-center py-4 px-5 rounded-xl bg-white/10">
        <span className="text-3xl font-bold font-barlow text-white">
          {timeLeft.minutes}
        </span>
        <span className="text-white/70 text-lg capitalize">min</span>
      </div>
      <div className="w-20 h-24 flex flex-col items-center justify-center py-4 px-5 rounded-xl bg-white/10">
        <span className="text-3xl font-bold font-barlow text-white">
          {timeLeft.seconds}
        </span>
        <span className="text-white/70 text-lg capitalize">sec</span>
      </div>
    </div>
  );
}
