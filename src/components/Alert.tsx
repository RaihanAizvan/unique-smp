import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  children: ReactNode;
  onClose?: () => void;
}

/**
 * Alert Component
 * 
 * Shows success, error, or info messages
 */
export function Alert({ type, children, onClose }: AlertProps) {
  const styles = {
    success: 'bg-green-900/50 border-green-500 text-green-100',
    error: 'bg-red-900/50 border-red-500 text-red-100',
    info: 'bg-blue-900/50 border-blue-500 text-blue-100',
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`relative px-4 py-3 rounded-lg border-2 ${styles[type]} flex items-start gap-3`}
    >
      <span className="text-xl font-bold flex-shrink-0">{icons[type]}</span>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-xl hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          ×
        </button>
      )}
    </motion.div>
  );
}
