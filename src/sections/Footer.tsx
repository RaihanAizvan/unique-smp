import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, ExternalLink, Heart } from 'lucide-react';
import { content } from '../constants/content';
import { Button } from '../components/Button';

/**
 * Footer Section - Premium Redesign
 * 
 * Multi-column layout with:
 * - Brand information
 * - Quick navigation links
 * - Server information
 * - Social/Community links
 * - Legal & Copyright
 */
export function Footer() {
  const t = content;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black border-t border-neutral-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black pointer-events-none" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="mb-8 group cursor-pointer"
                  onClick={() => scrollToSection('hero')}
                >
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative">
                      <div className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                        <span className="text-white" style={{ fontFamily: 'Righteous, sans-serif' }}>
                          Unique
                        </span>
                        <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-violet-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {' '}SMP
                        </span>
                      </div>
                      <div className="h-1.5 w-16 group-hover:w-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mt-3 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {t.footer.tagline}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-neutral-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Kerala, India</span>
                </div>

                {/* Discord CTA */}
                <Button variant="primary" size="md" href="https://discord.gg/Tz4kHwJHek">
                  {t.footer.discord}
                </Button>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Home', id: 'hero' },
                    { label: 'About', id: 'about' },
                    { label: 'Video Guide', id: 'video' },
                    { label: 'Rules & Quiz', id: 'rules' },
                    { label: 'Get Whitelisted', id: 'whitelist' },
                  ].map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-neutral-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-purple-600 transition-colors" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Server Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Server Info</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="text-neutral-500 text-sm mb-1">Edition</div>
                    <div className="text-white font-semibold">Java & Bedrock</div>
                  </li>
                  <li>
                    <div className="text-neutral-500 text-sm mb-1">Version</div>
                    <div className="text-white font-semibold">Latest</div>
                  </li>
                  <li>
                    <div className="text-neutral-500 text-sm mb-1">Server Type</div>
                    <div className="text-white font-semibold">Vanilla SMP</div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">24/7 Uptime</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Community */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">Community</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://discord.gg/Tz4kHwJHek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Discord Server
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://modrinth.com/plugin/simple-voice-chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Voice Chat Plugin
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('whitelist')}
                      className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      Join Application
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('rules')}
                      className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      Server Rules
                    </button>
                  </li>
                </ul>

                {/* Contact */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold text-sm mb-3">Need Help?</h4>
                  <a
                    href="https://discord.gg/Tz4kHwJHek"
                    className="flex items-center gap-2 text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Contact on Discord</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              {/* Copyright */}
              <div className="text-neutral-500 text-sm flex items-center gap-2">
                <span>{t.footer.copyright}</span>
              </div>

              {/* Credits */}
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <span>Made by</span>
                <a
                  href="https://muhammedraihan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Raihan
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
