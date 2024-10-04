import React, { useEffect, useRef } from 'react';
import { neonCursor } from 'threejs-toys';
import './App.css';

const BackgroundEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const neon = neonCursor({
      el: container,
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    });

    return () => {
      // Clean up the effect
      if (neon && typeof neon.destroy === 'function') {
        neon.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default BackgroundEffect;