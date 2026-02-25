import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShoppingBag, ShieldCheck, Swords, Handshake, ChevronDown } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';

/**
 * Rules Section - Interactive Accordion Design
 * 
 * Unique features:
 * - Expandable accordion cards
 * - Smooth height animations
 * - Active state highlighting
 * - Number badges
 * - YouTube video integration
 */
export function Rules() {
  const t = content;
  const [expandedRule, setExpandedRule] = useState<number | null>(0);

  // Icon mapping
  const iconMap: Record<string, any> = {
    users: Users,
    shop: ShoppingBag,
    shield: ShieldCheck,
    swords: Swords,
    handshake: Handshake,
  };

  return (
    <Section id="rules" background="secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-600/30 rounded-full">
              <ShieldCheck className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold uppercase text-sm tracking-wider">
                Server Guidelines
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              {t.rules.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.rules.subtitle}
          </p>
        </motion.div>

        {/* Accordion Rules */}
        <div className="grid gap-4 mb-16">
          {t.rules.rules.map((rule, index) => {
            const Icon = iconMap[rule.icon];
            const isExpanded = expandedRule === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setExpandedRule(isExpanded ? null : index)}
                  className="w-full text-left"
                >
                  <div className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isExpanded 
                      ? 'bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-purple-600/50 shadow-lg shadow-purple-900/20' 
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-purple-600/30'
                  }`}>
                    
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 transition-opacity duration-500 ${
                      isExpanded ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Card Header - Always Visible */}
                    <div className="relative z-10 p-6 flex items-center gap-6">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all duration-500 ${
                        isExpanded
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-xl transition-all duration-500 ${
                        isExpanded
                          ? 'bg-purple-600/20 border border-purple-600/40'
                          : 'bg-neutral-800/50'
                      }`}>
                        {Icon && (
                          <Icon 
                            className={`w-6 h-6 transition-colors duration-500 ${
                              isExpanded ? 'text-purple-300' : 'text-neutral-400'
                            }`}
                            strokeWidth={2}
                          />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`flex-1 text-xl md:text-2xl font-bold transition-colors duration-500 ${
                        isExpanded ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {rule.title}
                      </h3>

                      {/* Expand/Collapse Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-6 h-6 transition-colors duration-500 ${
                          isExpanded ? 'text-purple-400' : 'text-neutral-500'
                        }`} />
                      </motion.div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pl-20 pr-12">
                              {/* Divider */}
                              <div className="h-px bg-gradient-to-r from-purple-600/50 via-purple-600/20 to-transparent mb-4" />
                              
                              {/* Description */}
                              <p className="text-lg text-neutral-300 leading-relaxed">
                                {rule.description}
                              </p>

                              {/* Accent bar */}
                              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t.rules.videoTitle}
            </h3>
            <p className="text-neutral-400">
              Watch our detailed rules explanation video
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/20">
            {/* Video glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 blur-xl" />
            
            {/* Video iframe */}
            <iframe
              className="relative z-10 w-full h-full"
              src="https://www.youtube.com/embed/NJCTRMK9phE?rel=0&modestbranding=1"
              title="Unique SMP Server Rules"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
