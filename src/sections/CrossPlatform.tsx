import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, Float, Stars } from '@react-three/drei';
import { Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import type { Group } from 'three';

/**
 * Java Edition 3D Model
 * 
 * Loads the Steve (Java) GLB model with float animation
 */
function JavaModel() {
  const { scene } = useGLTF('/models/minecraft_steve_character_for_java.glb');
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive ref={ref} object={scene} scale={1.8} position={[0, -1, 0]} />
    </Float>
  );
}

/**
 * Bedrock Edition 3D Model
 * 
 * Loads the Steve (Bedrock) GLB model with float animation
 */
function BedrockModel() {
  const { scene } = useGLTF('/models/minecraft_steve_for_bedrock.glb');
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3 + state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive ref={ref} object={scene} scale={1.8} position={[0, -1, 0]} />
    </Float>
  );
}

/**
 * CrossPlatform Section - Premium 3D Model Showcase
 *
 * Uses actual GLB models for Java and Bedrock editions
 * with professional lighting, shadows and animations
 */
export function CrossPlatform() {
  const t = content;

  return (
    <Section id="platform" background="secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600/10 border border-purple-600/30 rounded-full mb-6">
            <Globe className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Crossplay Ready</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.crossPlatform.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.crossPlatform.subtitle}
          </p>
        </motion.div>

        {/* Platform Cards with 3D Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Java Edition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

            <div className="relative bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 hover:border-purple-600/60 rounded-3xl overflow-hidden transition-all duration-500">
              {/* 3D Model Canvas */}
              <div className="h-72 md:h-96 w-full bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
                {/* Stars bg */}
                <div className="absolute inset-0">
                  <Canvas camera={{ position: [0, 1, 5], fov: 45 }} gl={{ alpha: true }}>
                    <Stars radius={20} depth={10} count={300} factor={2} fade speed={1} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[3, 5, 3]} intensity={2} color="#a855f7" />
                    <pointLight position={[-3, -2, -2]} intensity={1} color="#7c3aed" />
                    <spotLight position={[0, 8, 0]} intensity={1.5} color="#ffffff" />
                    <Suspense fallback={null}>
                      <JavaModel />
                      <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={5} blur={2} />
                      <Environment preset="night" />
                    </Suspense>
                  </Canvas>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-purple-600/20 border border-purple-600/40 rounded-full">
                    <span className="text-purple-300 text-sm font-semibold">Java Edition</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-6">
                  {t.crossPlatform.java.title}
                </h3>

                <ul className="space-y-4">
                  {t.crossPlatform.java.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" strokeWidth={2} />
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bedrock Edition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-bl from-violet-600/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

            <div className="relative bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 hover:border-violet-600/60 rounded-3xl overflow-hidden transition-all duration-500">
              {/* 3D Model Canvas */}
              <div className="h-72 md:h-96 w-full bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
                <div className="absolute inset-0">
                  <Canvas camera={{ position: [0, 1, 5], fov: 45 }} gl={{ alpha: true }}>
                    <Stars radius={20} depth={10} count={300} factor={2} fade speed={1} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[3, 5, 3]} intensity={2} color="#8b5cf6" />
                    <pointLight position={[-3, -2, -2]} intensity={1} color="#6d28d9" />
                    <spotLight position={[0, 8, 0]} intensity={1.5} color="#ffffff" />
                    <Suspense fallback={null}>
                      <BedrockModel />
                      <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={5} blur={2} />
                      <Environment preset="night" />
                    </Suspense>
                  </Canvas>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-violet-600/20 border border-violet-600/40 rounded-full">
                    <span className="text-violet-300 text-sm font-semibold">Bedrock Edition</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-6">
                  {t.crossPlatform.bedrock.title}
                </h3>

                <ul className="space-y-4">
                  {t.crossPlatform.bedrock.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-neutral-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" strokeWidth={2} />
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Crossplay Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/10 border border-purple-600/30 rounded-full">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold text-lg">{t.crossPlatform.note}</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Preload models
useGLTF.preload('/models/minecraft_steve_character_for_java.glb');
useGLTF.preload('/models/minecraft_steve_for_bedrock.glb');
