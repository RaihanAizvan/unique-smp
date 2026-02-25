import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

/**
 * Header Component
 * 
 * Premium navigation header with:
 * - Glassmorphism effect
 * - Scroll-triggered backdrop blur
 * - Mobile responsive menu
 * - Smooth animations
 * - Purple accent theme
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Rules', id: 'rules' },
    { label: 'Whitelist', id: 'whitelist' },
    { label: 'Platform', id: 'platform' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-purple-900/20 shadow-lg shadow-purple-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-500/30 transition-all duration-300" />
              
              {/* Logo text */}
              <div className="relative flex items-baseline gap-1">
                <span className="text-2xl md:text-3xl font-black tracking-tight text-white" style={{ fontFamily: 'Righteous, sans-serif' }}>
                  Unique
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-purple-400 via-purple-500 to-violet-500 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  SMP
                </span>
              </div>
              
              {/* Underline accent */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 mt-1" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-neutral-300 hover:text-white transition-colors rounded-lg hover:bg-purple-600/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="https://discord.gg/Tz4kHwJHek">
              Join Discord
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-purple-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-b border-purple-900/20"
        >
          <nav className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-neutral-300 hover:text-white hover:bg-purple-600/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-purple-900/20">
              <Button variant="primary" size="md" href="https://discord.gg/Tz4kHwJHek">
                Join Discord
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
