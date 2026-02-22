import type { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

/**
 * FormInput Component
 * 
 * Styled input field with label and error handling
 */
export function FormInput({ label, error, className = '', ...props }: FormInputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-neutral-300 mb-2">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 bg-neutral-900 border-2 ${
          error ? 'border-red-500' : 'border-neutral-800'
        } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors duration-200 ${className}`}
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
