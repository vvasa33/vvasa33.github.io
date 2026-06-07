import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ParallaxCamera from './ParallaxCamera';
import ParallaxScene from './ParallaxScene';

/**
 * HeroCanvas - 3D parallax background for the hero section
 * 
 * This component:
 * 1. Wraps the Three.js canvas and positions it as a background layer
 * 2. Detects user's motion preferences for accessibility
 * 3. Passes container reference to camera controller for mouse tracking
 * 4. Configures canvas for optimal performance (no shadows, simple rendering)
 * 
 * The canvas is absolutely positioned behind HTML content and does not
 * interfere with text readability or user interactions.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - HTML content to render in front of canvas
 */
const NARROW_MAX = '(max-width: 767px)';

export default function HeroCanvas({ children }) {
  // Reference to the hero section container for mouse tracking
  const containerRef = useRef(null);

  // Check user's motion preferences for accessibility
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // Skip WebGL on narrow viewports to save battery and keep type crisp
  const [isNarrowViewport, setIsNarrowViewport] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(NARROW_MAX).matches
  );

  useEffect(() => {
    const narrowMq = window.matchMedia(NARROW_MAX);
    const onNarrowChange = () => setIsNarrowViewport(narrowMq.matches);
    onNarrowChange();
    narrowMq.addEventListener('change', onNarrowChange);
    return () => narrowMq.removeEventListener('change', onNarrowChange);
  }, []);

  useEffect(() => {
    /**
     * Respect prefers-reduced-motion media query
     * Users who request reduced motion will see a static scene
     * This is critical for accessibility (vestibular disorders, motion sensitivity)
     */
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes (user might toggle system preference)
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const showCanvas = !isNarrowViewport;
  const softenTextGlow = prefersReducedMotion || isNarrowViewport;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full"
    >
      {showCanvas && (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <Canvas
            camera={{
              fov: 60,
              near: 0.1,
              far: 100,
              position: [0, 0, 10],
            }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            shadows={false}
            flat
          >
            <ParallaxCamera
              containerRef={containerRef}
              prefersReducedMotion={prefersReducedMotion}
            />

            <ParallaxScene prefersReducedMotion={prefersReducedMotion} />
          </Canvas>
        </div>
      )}

      <div
        className="relative"
        style={{
          zIndex: 1,
          textShadow: softenTextGlow ? 'none' : '0 0 20px rgba(255,255,255,0.5)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
