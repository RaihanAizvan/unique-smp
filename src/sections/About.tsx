import { motion } from 'framer-motion';
import { Pickaxe, MessageSquare, Shield, Gamepad2, Users, ShoppingBag, Crown } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

/**
 * About Section - Redesigned
 * 
 * Premium experience showcase with:
 * - Bento-style grid layout
 * - Advanced animations
 * - Icon highlights
 * - Mobile responsive design
 */
export function About() {
  const t = content;

  // Icon mapping using Lucide React icons
  const iconMap: Record<string, any> = {
    grass: Pickaxe,
    shield: Shield,
    mic: MessageSquare,
    platform: Gamepad2,
    team: Users,
    shop: ShoppingBag,
    vip: Crown,
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  };

  return (
    <Section id="about" background="primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.about.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            
            // Different card sizes for visual interest
            const cardSizes = [
              'md:col-span-1 lg:row-span-2', // Tall card
              'md:col-span-1',
              'md:col-span-1',
              'md:col-span-2 lg:col-span-1',
              'md:col-span-1',
              'md:col-span-1',
            ];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative ${cardSizes[index]}`}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 overflow-hidden hover:border-purple-600/50 transition-all duration-500">
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-purple-600/10 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Glow effect */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-block">
                      <div className="p-4 bg-purple-600/10 rounded-xl border border-purple-600/20 group-hover:bg-purple-600/20 group-hover:border-purple-600/40 transition-all duration-300">
                        {Icon && (
                          <Icon 
                            className="w-8 h-8 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" 
                            strokeWidth={1.5} 
                          />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Download link if available */}
                    {(feature as any).link && (
                      <div className="mt-6">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          href={(feature as any).link}
                        >
                          {(feature as any).linkText}
                        </Button>
                      </div>
                    )}

                    {/* Animated accent line */}
                    <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-500 italic">
            "Experience Minecraft the way it was meant to be played"
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
