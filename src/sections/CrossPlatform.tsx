import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Globe, Sparkles } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { PlatformIcon } from '../components/PlatformIcon';

/**
 * Cross Platform Section - Premium Redesign
 * 
 * Features:
 * - Glassmorphism comparison panels
 * - Central crossplay badge
 * - Enhanced 3D icon presentation
 * - Animated gradient accents
 * - Mobile-first layout
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

        {/* Platform Comparison */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Center crossplay badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="px-5 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full shadow-xl shadow-purple-900/30 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">Seamless Crossplay</span>
            </div>
          </motion.div>

          {/* Java Edition Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-10 hover:border-purple-600/50 transition-all duration-500">
              {/* 3D Icon */}
              <div className="h-44 mb-8">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.6} />
                    <pointLight position={[5, 5, 5]} intensity={1.2} />
                    <PlatformIcon type="java" />
                  </Suspense>
                </Canvas>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.crossPlatform.java.title}
              </h3>

              <ul className="space-y-4">
                {t.crossPlatform.java.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-4" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bedrock Edition Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-600/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-10 hover:border-purple-600/50 transition-all duration-500">
              {/* 3D Icon */}
              <div className="h-44 mb-8">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.6} />
                    <pointLight position={[5, 5, 5]} intensity={1.2} />
                    <PlatformIcon type="bedrock" />
                  </Suspense>
                </Canvas>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.crossPlatform.bedrock.title}
              </h3>

              <ul className="space-y-4">
                {t.crossPlatform.bedrock.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral-300">
                    <span className="w-2 h-2 rounded-full bg-violet-500 mr-4" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
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
            <span className="text-purple-300 font-semibold text-lg">{t.crossPlatform.note}</span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
