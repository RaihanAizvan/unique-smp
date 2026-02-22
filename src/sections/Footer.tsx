import { motion } from 'framer-motion';
import { content } from '../constants/content';
import { Button } from '../components/Button';

/**
 * Footer Section
 * 
 * Minimal clean footer with:
 * - Discord link
 * - Kerala community mention
 * - Copyright info
 * - Navigation links
 * - Premium dark aesthetic
 */
export function Footer() {
  const t = content;
  
  return (
    <footer className="bg-black border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white mb-3">
              UNIQUE SMP
            </h3>
            <p className="text-neutral-400 text-sm">
              {t.footer.tagline}
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#about"
                className="block text-neutral-400 hover:text-red-500 transition-colors duration-200"
              >
                {t.footer.links.rules}
              </a>
              <a
                href="#whitelist"
                className="block text-neutral-400 hover:text-red-500 transition-colors duration-200"
              >
                {t.footer.links.whitelist}
              </a>
              <a
                href="https://discord.gg/Tz4kHwJHek"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-red-500 transition-colors duration-200"
              >
                {t.footer.links.discord}
              </a>
            </nav>
          </motion.div>
          
          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Join Our Community
            </h4>
            <Button variant="primary" size="md" href="https://discord.gg/Tz4kHwJHek">
              {t.footer.discord}
            </Button>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-t border-neutral-900 pt-8 text-center"
        >
          <p className="text-neutral-500 text-sm">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
