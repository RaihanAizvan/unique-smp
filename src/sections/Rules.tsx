import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingBag, ShieldCheck, Swords, Handshake, BookOpen, GraduationCap } from 'lucide-react';
import { content } from '../constants/content';
import { Section } from '../components/Section';
import { RulesQuiz } from '../components/RulesQuiz';

/**
 * Rules Section - Redesigned with Quiz Integration
 * 
 * Two-tab layout:
 * 1. Learn Rules - Visual rules display with video
 * 2. Test Knowledge - Interactive quiz
 */
export function Rules() {
  const t = content;
  const [activeTab, setActiveTab] = useState<'rules' | 'quiz'>('quiz');

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              {t.rules.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto">
            {t.rules.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-2xl">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'quiz'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              <span>Test Knowledge</span>
            </button>
            
            <button
              onClick={() => setActiveTab('rules')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'rules'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Learn Rules</span>
            </button>
          </div>
        </motion.div>

        {/* YouTube Video - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {t.rules.videoTitle}
            </h3>
            <p className="text-neutral-400 text-lg">
              Watch our comprehensive rules walkthrough
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/20">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 blur-xl" />
            
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

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'rules' ? (
            <div className="space-y-12">
              {/* Rules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.rules.rules.map((rule, index) => {
                  const Icon = iconMap[rule.icon];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group"
                    >
                      <div className="relative h-full bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 overflow-hidden hover:border-purple-600/50 transition-all duration-500">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-transparent transition-all duration-500" />
                        
                        {/* Number badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center font-black text-lg text-neutral-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                          {index + 1}
                        </div>

                        <div className="relative z-10">
                          {/* Icon */}
                          <div className="mb-6 inline-block">
                            <div className="p-4 bg-purple-600/10 rounded-xl border border-purple-600/20 group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-300">
                              {Icon && (
                                <Icon 
                                  className="w-8 h-8 text-purple-400"
                                  strokeWidth={1.5}
                                />
                              )}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
                            {rule.title}
                          </h3>

                          {/* Description */}
                          <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                            {rule.description}
                          </p>

                          {/* Accent bar */}
                          <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-500 rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              {/* Quiz Section */}
              <RulesQuiz />
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
