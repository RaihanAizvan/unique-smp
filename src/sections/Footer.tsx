import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { content } from '../constants/content';
import { Button } from '../components/Button';

/**
 * Footer Section - Brand-First Premium Layout
 * 
 * New layout focuses on massive branding and minimal luxury content
 * - Oversized logo treatment
 * - Split layout with brand + links
 * - Gradient accents and subtle motion
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
    <footer className="relative bg-black border-t border-neutral-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Brand Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
                <span className="text-white" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  Unique
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-violet-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  SMP
                </span>
              </div>
              <div className="h-2 w-32 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full mt-6" />
            </div>

            <p className="text-xl text-neutral-400 max-w-lg mb-8">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 text-neutral-500 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Kerala, India</span>
            </div>

            <Button variant="primary" size="lg" href="https://discord.gg/Tz4kHwJHek">
              {t.footer.discord}
            </Button>
          </motion.div>

          {/* Links Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Quick Links */}
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold">Quick Links</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About', id: 'about' },
                  { label: 'Video', id: 'video' },
                  { label: 'Rules', id: 'rules' },
                  { label: 'Whitelist', id: 'whitelist' },
                  { label: 'Platform', id: 'platform' },
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-neutral-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Community */}
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold">Community</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://discord.gg/Tz4kHwJHek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  Discord Server
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://modrinth.com/plugin/simple-voice-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  Voice Chat Plugin
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="mailto:admin@uniquesmp.com"
                  className="text-neutral-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Staff
                </a>
              </div>
            </div>

            {/* Server Info */}
            <div>
              <div className="flex items-center gap-2 text-white mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold">Server Info</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-neutral-400">
                <div>
                  <div className="text-sm text-neutral-500">Edition</div>
                  <div className="font-semibold text-white">Java + Bedrock</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Status</div>
                  <div className="font-semibold text-white">Online 24/7</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Type</div>
                  <div className="font-semibold text-white">Vanilla SMP</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Region</div>
                  <div className="font-semibold text-white">Asia (IN)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 mt-16 pt-8 text-neutral-500 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <span>{t.footer.copyright}</span>
          <span>Crafted for the Unique SMP community</span>
        </div>
      </div>
    </footer>
  );
}
