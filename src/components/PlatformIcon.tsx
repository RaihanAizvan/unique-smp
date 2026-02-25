import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface PlatformIconProps {
  type: 'java' | 'bedrock';
}

/**
 * Platform Icon 3D Component
 * 
 * Simple 3D representation for Java/Bedrock platforms
 * - Java: Sharp cube (representing precision)
 * - Bedrock: Rounded edges (representing accessibility)
 */
export function PlatformIcon({ type }: PlatformIconProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });
  
  const color = type === 'java' ? '#a855f7' : '#8b5cf6';
  
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={type === 'java' ? [1.5, 1.5, 1.5] : [1.3, 1.3, 1.3]} />
      <meshStandardMaterial 
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
}
