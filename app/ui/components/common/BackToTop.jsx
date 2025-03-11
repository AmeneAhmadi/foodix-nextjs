"use client";

import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { IoChevronUp } from "react-icons/io5";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  //function of move slow in the beginning and fast at the end
  const easeInQuad = (t) => t * t;

  const scrollToTop = () => {
    const duration = 1500; // time of animation
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeInQuad(progress); //use new easing
      const currentPosition = start * (1 - easing);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  //checking scroll to hide button
  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed flex items-center justify-center cursor-pointer z-50",
        "bottom-8 right-8 bg-[var(--primary-color)] text-white p-2.5 sm:p-3.5 md:p-4 rounded-full",
        "shadow-lg transition-all duration-300 ease-in-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <IoChevronUp size={20}/>
    </button>
  );
}
