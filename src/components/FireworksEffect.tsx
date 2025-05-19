


import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        rocketsPoint: { min: 0, max: 100 },
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1,
        particles: 100,
        trace: 3,
        explosion: 5,
      });
      fireworks.start();
      return () => fireworks.stop();
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default FireworksEffect;
