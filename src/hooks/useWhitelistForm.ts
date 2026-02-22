import { useState } from 'react';
import { validators } from '../utils/validation';
import { sendToDiscord } from '../utils/discord';
import type { WhitelistApplication } from '../utils/discord';

interface FormErrors {
  minecraftUsername?: string;
  discordUsername?: string;
  age?: string;
  reason?: string;
  experience?: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

/**
 * Custom hook for whitelist form submission
 * Handles validation, submission, and state management
 */
export function useWhitelistForm() {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: WhitelistApplication): boolean => {
    const newErrors: FormErrors = {};

    const usernameCheck = validators.minecraftUsername(data.minecraftUsername);
    if (!usernameCheck.isValid) {
      newErrors.minecraftUsername = usernameCheck.error;
    }

    const discordCheck = validators.discordUsername(data.discordUsername);
    if (!discordCheck.isValid) {
      newErrors.discordUsername = discordCheck.error;
    }

    const ageCheck = validators.age(data.age);
    if (!ageCheck.isValid) {
      newErrors.age = ageCheck.error;
    }

    const reasonCheck = validators.reason(data.reason);
    if (!reasonCheck.isValid) {
      newErrors.reason = reasonCheck.error;
    }

    const experienceCheck = validators.experience(data.experience);
    if (!experienceCheck.isValid) {
      newErrors.experience = experienceCheck.error;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (data: WhitelistApplication): Promise<boolean> => {
    // Reset state
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      error: null,
    });
    setErrors({});

    // Validate
    if (!validateForm(data)) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Please fix the errors above',
      });
      return false;
    }

    // Get webhook URL from environment variable
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: 'Discord webhook not configured. Please contact server admin.',
      });
      return false;
    }

    // Submit to Discord
    const result = await sendToDiscord(data, webhookUrl);

    if (result.success) {
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      });
      return true;
    } else {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: result.error || 'Failed to submit application. Please try again.',
      });
      return false;
    }
  };

  const resetForm = () => {
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
    setErrors({});
  };

  return {
    ...formState,
    errors,
    submitForm,
    resetForm,
  };
}
