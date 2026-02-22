import { motion } from 'framer-motion';
import { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { WhitelistForm } from '../components/WhitelistForm';
import { content } from '../constants/content';

/**
 * Whitelist Process Section
 * 
 * Displays the whitelist application process with interactive form
 * - Timeline visualization
 * - Application form
 * - Discord webhook integration
 */
export function Whitelist() {
  const t = content;
  const [showForm, setShowForm] = useState(false);

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

      {/* Toggle between Timeline and Form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex rounded-lg bg-neutral-900 p-1 border border-neutral-800">
          <button
            onClick={() => setShowForm(false)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              !showForm
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => setShowForm(true)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showForm
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Apply Now
          </button>
        </div>
      </motion.div>

      {/* Content */}
      {!showForm ? (
        // Timeline View
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

          {/* Apply Now CTA */}
          <div className="text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                Skip the Wait - Apply Directly
              </Button>
            </motion.div>
          </div>
        </div>
      ) : (
        // Form View
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <WhitelistForm />
          
          {/* Back button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowForm(false)}
              className="text-neutral-400 hover:text-white transition-colors duration-200"
            >
              ← Back to Process Timeline
            </button>
          </div>
        </motion.div>
      )}
    </Section>
  );
}
