import { Suspense, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, ContactShadows } from '@react-three/drei';
import { Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import type { Group } from 'three';
import { Mesh, MeshStandardMaterial, Scene } from 'three';

/**
 * Java Steve 3D Model
 */
function JavaModel() {
  const { scene } = useGLTF('/models/minecraft_steve_character_for_java.glb');
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (scene instanceof Scene) {
      scene.background = null;
    }
    scene.traverse((child) => {
      // Java model: Object_2 is the background plane, hide it
      if (child.name === 'Object_2') {
        child.visible = false;
      }
      if (child instanceof Mesh) {
        const mat = child.material as MeshStandardMaterial;
        if (mat) {
          mat.transparent = true;
          mat.depthWrite = true;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0}>
      <primitive ref={ref} object={scene} scale={0.6} position={[0, -0.5, 0]} />
      <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={4} blur={2.5} color="#9333ea" />
    </Float>
  );
}

/**
 * Bedrock Steve 3D Model
 */
function BedrockModel() {
  const { scene } = useGLTF('/models/minecraft_steve_for_bedrock.glb');
  const ref = useRef<Group>(null);

  useEffect(() => {
    if (scene instanceof Scene) {
      scene.background = null;
    }
    scene.traverse((child) => {
      // Bedrock model: 'back' and 'Object_9' are background elements
      if (child.name === 'back' || child.name === 'Object_9') {
        child.visible = false;
      }
      if (child instanceof Mesh) {
        const mat = child.material as MeshStandardMaterial;
        if (mat) {
          mat.transparent = true;
          mat.depthWrite = true;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0}>
      <primitive ref={ref} object={scene} scale={0.6} position={[0, -0.5, 0]} />
      <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={4} blur={2.5} color="#7c3aed" />
    </Float>
  );
}

/**
 * CrossPlatform Section - Clean Character Showcase
 *
 * No boxes, no backgrounds - just the 3D characters floating
 * with text below them. Clean, cinematic, premium.
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
          className="text-center mb-20"
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

        {/* Characters Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Java Edition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* 3D Character - transparent background */}
            <div className="w-full h-80 md:h-96" style={{ background: 'transparent' }}>
              <Canvas
                camera={{ position: [0, 1, 8], fov: 20 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.8} />
                <pointLight position={[4, 6, 4]} intensity={2.5} color="#a855f7" />
                <pointLight position={[-4, 2, -2]} intensity={1.2} color="#7c3aed" />
                <spotLight position={[0, 10, 2]} intensity={2} color="#ffffff" angle={0.3} />
                <Suspense fallback={null}>
                  <JavaModel />
                </Suspense>
              </Canvas>
            </div>

            {/* Text below character */}
            <div className="text-center mt-6 w-full">
              <div className="inline-block px-4 py-1.5 bg-purple-600/20 border border-purple-600/40 rounded-full mb-4">
                <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">Java Edition</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-6">
                {t.crossPlatform.java.title}
              </h3>
              <ul className="space-y-3 text-left max-w-xs mx-auto">
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
                    <span className="text-base md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bedrock Edition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            {/* 3D Character - transparent background */}
            <div className="w-full h-80 md:h-96" style={{ background: 'transparent' }}>
              <Canvas
                camera={{ position: [0, 1, 8], fov: 20 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: 'transparent' }}
              >
                <ambientLight intensity={0.8} />
                <pointLight position={[4, 6, 4]} intensity={2.5} color="#8b5cf6" />
                <pointLight position={[-4, 2, -2]} intensity={1.2} color="#6d28d9" />
                <spotLight position={[0, 10, 2]} intensity={2} color="#ffffff" angle={0.3} />
                <Suspense fallback={null}>
                  <BedrockModel />
                </Suspense>
              </Canvas>
            </div>

            {/* Text below character */}
            <div className="text-center mt-6 w-full">
              <div className="inline-block px-4 py-1.5 bg-violet-600/20 border border-violet-600/40 rounded-full mb-4">
                <span className="text-violet-300 text-sm font-semibold tracking-wider uppercase">Bedrock Edition</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-6">
                {t.crossPlatform.bedrock.title}
              </h3>
              <ul className="space-y-3 text-left max-w-xs mx-auto">
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
                    <span className="text-base md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Crossplay Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20"
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
