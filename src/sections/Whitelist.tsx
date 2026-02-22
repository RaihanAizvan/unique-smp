import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

/**
 * Whitelist Process Section
 * 
 * Animated timeline showing 4-step process
 * - Vertical timeline on mobile, horizontal on desktop
 * - Step indicators with numbers
 * - Progressive reveal animation
 * - Clear call-to-action for each step
 */
export function Whitelist() {
  const { t } = useLanguage();
  
  return (
    <Section id="whitelist" background="gradient">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t.whitelist.title}
        </h2>
        <p className="text-xl text-neutral-400">
          {t.whitelist.subtitle}
        </p>
      </motion.div>
      
      {/* Timeline */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whitelist.steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connecting line (hidden on last item) */}
              {index < t.whitelist.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-600 to-neutral-800" />
              )}
              
              {/* Step card */}
              <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-black">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Action button */}
                  {step.step === 1 && (
                    <Button variant="primary" size="sm" href="https://discord.gg/Tz4kHwJHek">
                      {step.action}
                    </Button>
                  )}
                  
                  {step.step !== 1 && (
                    <span className="text-red-500 font-semibold text-sm">
                      {step.action}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
