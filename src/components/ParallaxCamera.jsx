import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

/**
 * ParallaxCamera - Controls camera rotation based on mouse position
 * 
 * This component implements smooth camera parallax by:
 * 1. Tracking mouse position relative to the hero section
 * 2. Converting mouse coordinates to rotation angles (±4 degrees max)
 * 3. Smoothly interpolating camera rotation using lerp (damping)
 * 4. Resetting camera when mouse leaves the hero section
 * 
 * @param {Object} props
 * @param {React.RefObject} props.containerRef - Reference to the hero section DOM element
 * @param {boolean} props.prefersReducedMotion - Disable effect for accessibility
 */
export default function ParallaxCamera({ containerRef, prefersReducedMotion }) {
  const { camera } = useThree();
  
  // Target rotation values based on mouse position
  const targetRotation = useRef({ x: 0, y: 0 });
  
  // Track if mouse is currently over the hero section
  const isHovering = useRef(false);
  
  // Maximum rotation in radians (±4 degrees)
  const MAX_ROTATION = (4 * Math.PI) / 180;
  
  // Damping factor - lower = smoother but slower (0.05 = 5% per frame)
  const LERP_FACTOR = 0.05;

  useEffect(() => {
    // Skip setup if reduced motion is preferred
    if (prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;

    /**
     * Handle mouse movement within the hero section
     * Converts mouse position to normalized coordinates (-1 to 1)
     * and calculates target rotation angles
     */
    const handleMouseMove = (e) => {
      if (!isHovering.current) return;

      const rect = container.getBoundingClientRect();
      
      // Normalize mouse position to -1 to 1 range
      // X: -1 (left) to 1 (right)
      // Y: -1 (top) to 1 (bottom)
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      // Set target rotation (inverted Y for natural feel)
      // Mouse right = camera rotates right (positive Y rotation)
      // Mouse down = camera rotates down (negative X rotation)
      targetRotation.current = {
        x: -y * MAX_ROTATION,
        y: x * MAX_ROTATION,
      };
    };

    /**
     * Track when mouse enters the hero section
     * Enables parallax effect
     */
    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    /**
     * Track when mouse leaves the hero section
     * Resets camera to neutral position
     */
    const handleMouseLeave = () => {
      isHovering.current = false;
      targetRotation.current = { x: 0, y: 0 };
    };

    // Attach event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup on unmount
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, prefersReducedMotion]);

  /**
   * Animation loop - runs every frame
   * Smoothly interpolates camera rotation towards target using lerp
   * This prevents jittery movement and creates a smooth, damped effect
   */
  useFrame(() => {
    if (prefersReducedMotion) return;

    // Linear interpolation (lerp) formula: current + (target - current) * factor
    // This creates smooth damping - camera gradually catches up to target
    camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * LERP_FACTOR;
    camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * LERP_FACTOR;
  });

  return null; // This component only controls the camera, renders nothing
}
