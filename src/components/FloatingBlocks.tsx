import { Canvas } from '@react-three/fiber';
import { MinecraftBlock } from './MinecraftBlock';
import { Suspense } from 'react';

/**
 * Floating Blocks Scene
 * 
 * Hero background with subtle floating Minecraft blocks
 * - Dark environment lighting
 * - Purple accent blocks
 * - Performance optimized (simple geometry, few blocks)
 * - Responsive canvas sizing
 */
export function FloatingBlocks() {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          alpha: true, 
          antialias: false, // Performance optimization
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting for subtle visibility */}
          <ambientLight intensity={0.3} />
          
          {/* Purple accent light from below */}
          <pointLight position={[0, -5, 0]} intensity={0.5} color="#9333ea" />
          
          {/* Floating blocks - strategic placement */}
          <MinecraftBlock position={[-4, 2, 0]} speed={0.3} />
          <MinecraftBlock position={[4, -1, -2]} speed={0.5} />
          <MinecraftBlock position={[-2, -2, -3]} color="#a855f7" speed={0.4} />
          <MinecraftBlock position={[3, 3, -1]} speed={0.6} />
          <MinecraftBlock position={[0, -3, -4]} color="#6b21a8" speed={0.35} />
        </Suspense>
      </Canvas>
    </div>
  );
}
