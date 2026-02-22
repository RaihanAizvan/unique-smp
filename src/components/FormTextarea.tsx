import type { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  showCharCount?: boolean;
  maxLength?: number;
}

/**
 * FormTextarea Component
 * 
 * Styled textarea with label, error handling, and character counter
 */
export function FormTextarea({ 
  label, 
  error, 
  showCharCount = true,
  maxLength,
  value = '',
  className = '', 
  ...props 
}: FormTextareaProps) {
  const charCount = typeof value === 'string' ? value.length : 0;
  
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-semibold text-neutral-300">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {showCharCount && maxLength && (
          <span className={`text-xs ${charCount > maxLength ? 'text-red-400' : 'text-neutral-500'}`}>
            {charCount}/{maxLength}
          </span>
        )}
      </div>
      <textarea
        {...props}
        value={value}
        maxLength={maxLength}
        className={`w-full px-4 py-3 bg-neutral-900 border-2 ${
          error ? 'border-red-500' : 'border-neutral-800'
        } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors duration-200 resize-none ${className}`}
      />
      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
          <span>⚠</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
