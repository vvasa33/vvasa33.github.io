import { useMemo } from 'react';

/**
 * ParallaxScene - Layered 3D elements positioned at different Z depths
 * 
 * Creates depth perception through 5 layers of abstract geometry:
 * - Layer 1 (z: -8): Farthest background plane with subtle grid
 * - Layer 2 (z: -6): Large geometric shapes for depth
 * - Layer 3 (z: -4): Medium accent shapes
 * - Layer 4 (z: -2): Foreground geometric elements
 * - Layer 5 (z: -1): Closest subtle accents
 * 
 * All elements use simple geometries for optimal performance.
 * Colors are muted to maintain professional aesthetic and not distract from content.
 * 
 * @param {Object} props
 * @param {boolean} props.prefersReducedMotion - Simplify scene for accessibility
 */
export default function ParallaxScene({ prefersReducedMotion }) {
  
  /**
   * Memoize geometry to prevent recreation on every render
   * This is a performance optimization - geometries are created once
   */
  const geometries = useMemo(() => ({
    // Simple shapes for minimal performance impact
    box: null, // Will use <boxGeometry /> inline
    circle: null,
    ring: null,
  }), []);

  // Muted color palette - professional and non-distracting
  // Using low opacity to keep focus on HTML content
  const colors = {
    background: '#f5f5f5',
    accent1: '#e0e0e0',
    accent2: '#d0d0d0',
    accent3: '#c0c0c0',
    highlight: '#b0b0b0',
  };

  // If reduced motion is preferred, render a simplified static scene
  if (prefersReducedMotion) {
    return (
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[40, 30]} />
        <meshBasicMaterial color={colors.background} opacity={0.3} transparent />
      </mesh>
    );
  }

  return (
    <group>
      {/* LAYER 1: Background plane (z: -8) - Farthest layer */}
      {/* Provides a subtle backdrop with minimal visual weight */}
      <mesh position={[0, 0, -8]}>
        <planeGeometry args={[50, 40]} />
        <meshBasicMaterial 
          color={colors.background} 
          opacity={0.4} 
          transparent 
        />
      </mesh>

      {/* LAYER 2: Large geometric shapes (z: -6) */}
      {/* Creates primary depth perception */}
      <group position={[0, 0, -6]}>
        {/* Large circle - top right */}
        <mesh position={[12, 6, 0]}>
          <circleGeometry args={[4, 32]} />
          <meshBasicMaterial 
            color={colors.accent1} 
            opacity={0.15} 
            transparent 
          />
        </mesh>

        {/* Rectangle - bottom left */}
        <mesh position={[-10, -4, 0]} rotation={[0, 0, Math.PI / 6]}>
          <planeGeometry args={[6, 8]} />
          <meshBasicMaterial 
            color={colors.accent2} 
            opacity={0.12} 
            transparent 
          />
        </mesh>
      </group>

      {/* LAYER 3: Medium accent shapes (z: -4) */}
      {/* Adds mid-depth visual interest */}
      <group position={[0, 0, -4]}>
        {/* Ring shape - left side */}
        <mesh position={[-12, 2, 0]}>
          <ringGeometry args={[2, 3, 32]} />
          <meshBasicMaterial 
            color={colors.accent3} 
            opacity={0.18} 
            transparent 
          />
        </mesh>

        {/* Small box - top center */}
        <mesh position={[4, 8, 0]} rotation={[0, 0, Math.PI / 4]}>
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial 
            color={colors.highlight} 
            opacity={0.2} 
            transparent 
          />
        </mesh>

        {/* Circle - bottom right */}
        <mesh position={[10, -6, 0]}>
          <circleGeometry args={[3, 32]} />
          <meshBasicMaterial 
            color={colors.accent1} 
            opacity={0.15} 
            transparent 
          />
        </mesh>
      </group>

      {/* LAYER 4: Foreground geometric elements (z: -2) */}
      {/* Creates strong parallax effect due to proximity */}
      <group position={[0, 0, -2]}>
        {/* Small rectangle - right side */}
        <mesh position={[14, 0, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <planeGeometry args={[2.4, 4]} />
          <meshBasicMaterial 
            color={colors.accent2} 
            opacity={0.25} 
            transparent 
          />
        </mesh>

        {/* Ring - bottom left */}
        <mesh position={[-8, -8, 0]}>
          <ringGeometry args={[1.6, 2.4, 32]} />
          <meshBasicMaterial 
            color={colors.accent3} 
            opacity={0.22} 
            transparent 
          />
        </mesh>
      </group>

      {/* LAYER 5: Closest subtle accents (z: -1) */}
      {/* Provides maximum parallax movement */}
      <group position={[0, 0, -1]}>
        {/* Small circle - top left */}
        <mesh position={[-14, 8, 0]}>
          <circleGeometry args={[1.6, 32]} />
          <meshBasicMaterial 
            color={colors.highlight} 
            opacity={0.3} 
            transparent 
          />
        </mesh>

        {/* Tiny square - middle right */}
        <mesh position={[12, -2, 0]} rotation={[0, 0, Math.PI / 3]}>
          <planeGeometry args={[1.6, 1.6]} />
          <meshBasicMaterial 
            color={colors.accent1} 
            opacity={0.28} 
            transparent 
          />
        </mesh>
      </group>

      {/* Ambient light - ensures all elements are visible */}
      {/* Using basic materials so light isn't strictly necessary, but adds polish */}
      <ambientLight intensity={0.5} />
    </group>
  );
}
