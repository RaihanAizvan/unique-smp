import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

/**
 * Rules Section
 * 
 * Server rules with YouTube video embed
 * - 5 main rules in cards
 * - Responsive YouTube iframe
 * - Stagger animations
 * - Clean, readable layout
 */
export function Rules() {
  const { t } = useLanguage();
  
  return (
    <Section id="rules" background="secondary">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t.rules.title}
        </h2>
        <p className="text-xl text-neutral-400">
          {t.rules.subtitle}
        </p>
      </motion.div>
      
      {/* Rules grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {t.rules.rules.map((rule, index) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card hover glow>
              {/* Icon */}
              <div className="text-4xl mb-4">{rule.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {rule.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed">
                {rule.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* YouTube video embed */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {t.rules.videoTitle}
        </h3>
        
        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-red-600/10">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Server Rules"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </Section>
  );
}
