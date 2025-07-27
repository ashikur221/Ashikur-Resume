// src/hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(5, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup
    };
  }, []);
};

export default useLenis;
