import { motion } from 'framer-motion';
import { content } from '../constants/content';
import { Button } from '../components/Button';
import { FloatingBlocks } from '../components/FloatingBlocks';

/**
 * Hero Section
 * 
 * Cinematic opening with:
 * - Animated gradient background
 * - 3D floating Minecraft blocks
 * - Large typography with smooth entrance animations
 * - Dual CTAs for Discord and Whitelist
 * - Red glow accents
 */
export function Hero() {
  const t = content;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black">
        {/* Red glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-3xl" />
      </div>
      
      {/* 3D Floating blocks */}
      <FloatingBlocks />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo placeholder - will be replaced with actual logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block p-8 bg-neutral-900/50 backdrop-blur-sm border-2 border-red-600/30 rounded-2xl">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
              {t.hero.title}
            </h1>
          </div>
        </motion.div>
        
        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-6"
        >
          {t.hero.tagline}
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>
        
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" href="https://discord.gg/Tz4kHwJHek">
            {t.hero.cta.discord}
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
            document.getElementById('whitelist')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t.hero.cta.whitelist}
          </Button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-red-600 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
