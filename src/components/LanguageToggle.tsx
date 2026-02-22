import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/**
 * Language Toggle Component
 * 
 * Minimal toggle between English and Malayalam
 * - Fixed position in top-right
 * - Smooth transition animation
 * - Premium hover effect
 */
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <motion.div
      className="fixed top-6 right-6 z-50 flex gap-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-lg p-1"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-red-600 text-white'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ml')}
        className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
          language === 'ml'
            ? 'bg-red-600 text-white'
            : 'text-neutral-400 hover:text-white'
        }`}
      >
        മലയാളം
      </button>
    </motion.div>
  );
}
