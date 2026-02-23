import { motion } from 'framer-motion';
import { Pickaxe, MessageSquare, Shield, Gamepad2, Users, ShoppingBag } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

/**
 * About Section
 * 
 * Features showcase with animated cards
 * - 6 key features in responsive grid
 * - Icon placeholders for each feature
 * - Stagger animation on scroll
 * - Premium card hover effects
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
  };
  
  return (
    <Section id="about" background="gradient">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t.about.title}
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          {t.about.subtitle}
        </p>
      </motion.div>
      
      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.about.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card hover glow>
              {/* Icon */}
              <div className="mb-4">
                {(() => {
                  const Icon = iconMap[feature.icon];
                  return Icon ? <Icon className="w-12 h-12 text-purple-600" strokeWidth={1.5} /> : null;
                })()}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
