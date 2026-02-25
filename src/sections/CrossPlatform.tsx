import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Html } from '@react-three/drei';
import { Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Mesh, Group } from 'three';
import { content } from '../constants/content';
import { Section } from '../components/Section';

/**
 * Cross Platform Section - Premium Redesign
 * 
 * Features:
 * - Large hero-style 3D scene with rotating cubes, animated lights, and stars
 * - Glassmorphism comparison panels below
 * - Staggered feature animations
 * - Central crossplay badge
 * - Premium gradient accents and glowing borders
 * - Mobile responsive layout
 */

// 3D Scene Component
function PlatformScene3D() {
  const javaCubeRef = useRef<Mesh>(null);
  const bedrockCubeRef = useRef<Mesh>(null);
  const lightRef = useRef<Group>(null);

  useFrame(() => {
    // Rotate Java cube (purple)
    if (javaCubeRef.current) {
      javaCubeRef.current.rotation.x += 0.005;
      javaCubeRef.current.rotation.y += 0.008;
    }

    // Rotate Bedrock cube (violet)
    if (bedrockCubeRef.current) {
      bedrockCubeRef.current.rotation.x -= 0.005;
      bedrockCubeRef.current.rotation.y -= 0.008;
    }

    // Animate point light orbiting
    if (lightRef.current) {
      const time = Date.now() * 0.001;
      lightRef.current.position.x = Math.sin(time) * 8;
      lightRef.current.position.y = Math.cos(time * 0.7) * 6;
      lightRef.current.position.z = Math.cos(time) * 8;
    }
  });

  return (
    <>
      {/* Background stars */}
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0.7} fade speed={0.1} />

      {/* Ambient light for overall scene */}
      <ambientLight intensity={0.4} />

      {/* Main animated point light */}
      <pointLight ref={lightRef} intensity={2} distance={20} color="#a855f7" />

      {/* Secondary lights */}
      <pointLight position={[-8, 5, 8]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[8, -5, -8]} intensity={1.2} color="#6366f1" />

      {/* Java Edition Cube - Left */}
      <mesh ref={javaCubeRef} position={[-2.5, 0, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Java Label */}
      <Html position={[-2.5, -1.5, 0]} center>
        <div className="text-white font-bold text-sm whitespace-nowrap bg-purple-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
          Java Edition
        </div>
      </Html>

      {/* Bedrock Edition Cube - Right */}
      <mesh ref={bedrockCubeRef} position={[2.5, 0, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Bedrock Label */}
      <Html position={[2.5, -1.5, 0]} center>
        <div className="text-white font-bold text-sm whitespace-nowrap bg-violet-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
          Bedrock Edition
        </div>
      </Html>
    </>
  );
}

export function CrossPlatform() {
  const t = content.crossPlatform;
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + index * 0.08,
        duration: 0.5,
      },
    }),
  };

  return (
    <Section id="platform" background="secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600/10 border border-purple-600/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
              Crossplay Ready
            </span>
          </div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Hero 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16 lg:mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-violet-900/20 rounded-3xl pointer-events-none" />
          <div className="relative min-h-[400px] lg:min-h-[500px] rounded-3xl border border-purple-600/20 overflow-hidden bg-black/50 backdrop-blur-sm">
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
                <PlatformScene3D />
              </Canvas>
            </Suspense>
          </div>
        </motion.div>

        {/* Platform Comparison Cards */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Center Connector Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-xl shadow-purple-900/50 border border-purple-400/50">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-300 text-xs font-semibold uppercase tracking-wider">Play</span>
              <span className="text-purple-300 text-xs font-semibold uppercase tracking-wider">Together</span>
            </div>
          </motion.div>

          {/* Java Edition Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-10 group-hover:border-purple-600/50 transition-all duration-500">
              {/* Platform Name */}
              <h3 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                {t.java.title}
              </h3>

              {/* Feature List */}
              <ul className="space-y-4">
                {t.java.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                    onHoverStart={() => setHoveredFeature(index)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className="flex items-center gap-3 text-neutral-300 cursor-default"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        hoveredFeature === index
                          ? 'text-purple-400 scale-110'
                          : 'text-purple-500'
                      }`}
                    />
                    <span className="text-lg font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bedrock Edition Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600/30 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card */}
            <div className="relative bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-10 group-hover:border-violet-600/50 transition-all duration-500">
              {/* Platform Name */}
              <h3 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">
                {t.bedrock.title}
              </h3>

              {/* Feature List */}
              <ul className="space-y-4">
                {t.bedrock.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                    onHoverStart={() => setHoveredFeature(index + 3)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className="flex items-center gap-3 text-neutral-300 cursor-default"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        hoveredFeature === index + 3
                          ? 'text-violet-400 scale-110'
                          : 'text-violet-500'
                      }`}
                    />
                    <span className="text-lg font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Crossplay Note Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-600/50 rounded-full shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-shadow duration-300">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 font-semibold text-lg">{t.note}</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
