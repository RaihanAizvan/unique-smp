import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';

/**
 * Rules Video Section
 * 
 * Dedicated section for YouTube rules walkthrough
 * Positioned before the Rules section for better flow
 */
export function RulesVideo() {
  const t = content;

  return (
    <Section id="video" background="primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/10 border border-purple-600/30 rounded-full mb-6">
            <Play className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold uppercase text-sm tracking-wider">
              Video Guide
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.rules.videoTitle}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            Watch our comprehensive walkthrough to understand everything you need to know
          </p>
        </motion.div>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/30">
            {/* Animated glow border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 via-violet-600/30 to-purple-600/30 blur-2xl animate-pulse" />
            
            {/* Video container */}
            <div className="relative z-10 w-full h-full bg-black rounded-3xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NJCTRMK9phE?rel=0&modestbranding=1"
                title="Unique SMP Server Rules - Complete Guide"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-neutral-400">
            After watching, scroll down to test your knowledge with our{' '}
            <a 
              href="#rules" 
              className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-purple-600/30 hover:decoration-purple-600 transition-colors"
            >
              interactive quiz
            </a>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
