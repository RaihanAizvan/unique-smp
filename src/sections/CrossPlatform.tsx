import { motion } from 'framer-motion';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { Canvas } from '@react-three/fiber';
import { PlatformIcon } from '../components/PlatformIcon';
import { Suspense } from 'react';

/**
 * Cross Platform Section
 * 
 * Showcases Java and Bedrock compatibility
 * - Side-by-side comparison
 * - 3D platform icons
 * - Feature lists for each platform
 * - Emphasis on seamless crossplay
 */
export function CrossPlatform() {
  const t = content;
  
  return (
    <Section id="platform" background="secondary">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t.crossPlatform.title}
        </h2>
        <p className="text-xl text-neutral-400">
          {t.crossPlatform.subtitle}
        </p>
      </motion.div>
      
      {/* Platform comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {/* Java Edition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-purple-600/50 transition-all duration-300"
        >
          {/* 3D Icon */}
          <div className="h-40 mb-6">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <PlatformIcon type="java" />
              </Suspense>
            </Canvas>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            {t.crossPlatform.java.title}
          </h3>
          
          <ul className="space-y-3">
            {t.crossPlatform.java.features.map((feature, index) => (
              <li key={index} className="flex items-center text-neutral-300">
                <span className="text-purple-500 mr-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Bedrock Edition */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-blue-600/50 transition-all duration-300"
        >
          {/* 3D Icon */}
          <div className="h-40 mb-6">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <PlatformIcon type="bedrock" />
              </Suspense>
            </Canvas>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            {t.crossPlatform.bedrock.title}
          </h3>
          
          <ul className="space-y-3">
            {t.crossPlatform.bedrock.features.map((feature, index) => (
              <li key={index} className="flex items-center text-neutral-300">
                <span className="text-blue-500 mr-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Seamless crossplay note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <p className="text-2xl text-neutral-400 max-w-2xl mx-auto bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-lg p-6">
          <span className="text-purple-500 font-semibold">✨ {t.crossPlatform.note}</span>
        </p>
      </motion.div>
    </Section>
  );
}
