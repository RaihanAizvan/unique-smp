/**
 * Form Validation Utilities
 * 
 * Provides validation functions for whitelist application form
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validators = {
  minecraftUsername: (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, error: 'Minecraft username is required' };
    }
    if (value.length < 3 || value.length > 16) {
      return { isValid: false, error: 'Username must be 3-16 characters' };
    }
    if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      return { isValid: false, error: 'Username can only contain letters, numbers, and underscores' };
    }
    return { isValid: true };
  },

  discordUsername: (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, error: 'Discord username is required' };
    }
    if (value.length < 2 || value.length > 32) {
      return { isValid: false, error: 'Discord username must be 2-32 characters' };
    }
    return { isValid: true };
  },

  age: (value: string): ValidationResult => {
    const age = parseInt(value);
    if (isNaN(age)) {
      return { isValid: false, error: 'Please enter a valid age' };
    }
    if (age < 10 || age > 99) {
      return { isValid: false, error: 'Age must be between 10 and 99' };
    }
    return { isValid: true };
  },

  reason: (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, error: 'Please tell us why you want to join' };
    }
    if (value.length < 20) {
      return { isValid: false, error: 'Please provide at least 20 characters' };
    }
    if (value.length > 500) {
      return { isValid: false, error: 'Maximum 500 characters allowed' };
    }
    return { isValid: true };
  },

  experience: (value: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, error: 'Please describe your experience' };
    }
    if (value.length < 10) {
      return { isValid: false, error: 'Please provide at least 10 characters' };
    }
    if (value.length > 300) {
      return { isValid: false, error: 'Maximum 300 characters allowed' };
    }
    return { isValid: true };
  },
};
