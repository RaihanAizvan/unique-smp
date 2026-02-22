import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface MinecraftBlockProps {
  position: [number, number, number];
  color?: string;
  speed?: number;
}

/**
 * Minecraft Block 3D Component
 * 
 * A simple voxel cube with:
 * - Slow rotation animation
 * - Optional color customization
 * - Optimized geometry (BoxGeometry)
 * - Red glow emission for accent blocks
 */
export function MinecraftBlock({ 
  position, 
  color = '#dc2626',
  speed = 0.5 
}: MinecraftBlockProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      
      // Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}
