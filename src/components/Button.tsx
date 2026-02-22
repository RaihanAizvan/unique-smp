import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
}

/**
 * Premium Button Component
 * 
 * Design: Apple-inspired minimalism with Minecraft edge
 * - Primary: Red accent with glow effect
 * - Secondary: Subtle gray with hover effect
 * - Outline: Transparent with border
 * 
 * Animations: Smooth scale and glow on hover
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer inline-block text-center';
  
  const variants = {
    primary: 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 hover:shadow-red-500/50',
    secondary: 'bg-neutral-800 hover:bg-neutral-700 text-white',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const MotionComponent = href ? motion.a : motion.button;
  
  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionComponent>
  );
}
