import { motion } from 'framer-motion';
import { Pickaxe, MessageSquare, Shield, Gamepad2, Users, ShoppingBag, Crown } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

/**
 * About Section - Modern Masonry Layout
 * 
 * Features a Pinterest-style masonry grid with:
 * - Alternating card heights
 * - Smooth stagger animations
 * - Mobile-first responsive design
 * - Feature spotlight cards
 */
export function About() {
  const t = content;

  // Icon mapping
  const iconMap: Record<string, any> = {
    grass: Pickaxe,
    shield: Shield,
    mic: MessageSquare,
    platform: Gamepad2,
    team: Users,
    shop: ShoppingBag,
    vip: Crown,
  };

  return (
    <Section id="about" background="primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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

        {/* Modern Grid Layout - 2 Column Alternating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.about.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            
            // Spotlight cards (bigger, more prominent)
            const isSpotlight = index === 0 || index === 5; // Pure Vanilla & Premium Shop
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group ${isSpotlight ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative h-full bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden hover:border-purple-600/50 transition-all duration-500 ${
                  isSpotlight 
                    ? 'p-10 md:p-12 lg:p-16' 
                    : 'p-8 md:p-10'
                }`}>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-transparent transition-all duration-700" />
                  
                  {/* Glow orb */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Content */}
                  <div className={`relative z-10 ${isSpotlight ? 'flex flex-col md:flex-row items-start md:items-center gap-8' : ''}`}>
                    {/* Icon */}
                    <div className={`flex-shrink-0 ${isSpotlight ? 'mb-0' : 'mb-6'}`}>
                      <div className={`inline-flex p-5 bg-purple-600/10 rounded-2xl border border-purple-600/20 group-hover:bg-purple-600/20 group-hover:border-purple-600/40 group-hover:scale-110 transition-all duration-500 ${
                        isSpotlight ? 'md:p-8' : ''
                      }`}>
                        {Icon && (
                          <Icon 
                            className={`text-purple-400 group-hover:text-purple-300 transition-colors duration-300 ${
                              isSpotlight ? 'w-12 h-12 md:w-16 md:h-16' : 'w-10 h-10'
                            }`}
                            strokeWidth={1.5} 
                          />
                        )}
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className={`font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300 ${
                        isSpotlight ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl'
                      }`}>
                        {feature.title}
                      </h3>

                      <p className={`text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 ${
                        isSpotlight ? 'text-lg md:text-xl' : 'text-base'
                      }`}>
                        {feature.description}
                      </p>

                      {/* Download link if available */}
                      {(feature as any).link && (
                        <div className="mt-6">
                          <Button 
                            variant="primary" 
                            size={isSpotlight ? "md" : "sm"}
                            href={(feature as any).link}
                          >
                            {(feature as any).linkText}
                          </Button>
                        </div>
                      )}

                      {/* Accent bar */}
                      <div className={`mt-6 h-1.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-all duration-500 ${
                        isSpotlight ? 'w-24 group-hover:w-40' : 'w-16 group-hover:w-24'
                      }`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600/10 border border-purple-600/20 rounded-full">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <p className="text-lg text-purple-300 font-medium">
              Experience vanilla Minecraft elevated to perfection
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
