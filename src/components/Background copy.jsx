import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min"; // Import Vanta.NET


const Background = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf55e0c,
          backgroundColor: 0xf0e9e9,
          points: 8.0,
          spacing: 17.0,
          // showDots: false,
          THREE: THREE, // Pass THREE.js to Vanta.js
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0"></div>;
};

export default Background;
