import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

/**
 * Card Component
 * 
 * Design: Dark elevated surface with subtle gradients
 * - Optional red glow effect on hover
 * - Minecraft-inspired sharp corners (slight rounding for premium feel)
 * - Smooth hover animations
 */
export function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  const baseStyles = 'bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6';
  const hoverStyles = hover ? 'transition-all duration-300' : '';
  const glowStyles = glow ? 'hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/20' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
}
