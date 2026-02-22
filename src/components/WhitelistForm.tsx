import { useState } from 'react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { Alert } from './Alert';
import { useWhitelistForm } from '../hooks/useWhitelistForm';
import type { WhitelistApplication } from '../utils/discord';

/**
 * WhitelistForm Component
 * 
 * Complete whitelist application form with Discord webhook integration
 * - Form validation
 * - Loading states
 * - Success/error messages
 * - Auto-reset on success
 */
export function WhitelistForm() {
  const { isSubmitting, isSuccess, error, errors, submitForm, resetForm } = useWhitelistForm();
  
  const [formData, setFormData] = useState<WhitelistApplication>({
    minecraftUsername: '',
    discordUsername: '',
    age: '',
    platform: 'Java Edition',
    reason: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    
    if (success) {
      // Reset form after successful submission
      setFormData({
        minecraftUsername: '',
        discordUsername: '',
        age: '',
        platform: 'Java Edition',
        reason: '',
        experience: '',
      });
    }
  };

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Apply for Whitelist
      </h3>

      {/* Success Message */}
      {isSuccess && (
        <Alert type="success" onClose={resetForm}>
          <strong>Application Submitted!</strong>
          <p className="mt-1 text-sm">
            Your application has been sent to our team. We'll review it and get back to you on Discord soon!
          </p>
        </Alert>
      )}

      {/* Error Message */}
      {error && (
        <Alert type="error" onClose={resetForm}>
          <strong>Submission Failed</strong>
          <p className="mt-1 text-sm">{error}</p>
        </Alert>
      )}

      {!isSuccess && (
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Minecraft Username */}
          <FormInput
            label="Minecraft Username"
            name="minecraftUsername"
            type="text"
            placeholder="Steve123"
            value={formData.minecraftUsername}
            onChange={handleChange}
            error={errors.minecraftUsername}
            required
            disabled={isSubmitting}
          />

          {/* Discord Username */}
          <FormInput
            label="Discord Username"
            name="discordUsername"
            type="text"
            placeholder="username or username#0000"
            value={formData.discordUsername}
            onChange={handleChange}
            error={errors.discordUsername}
            required
            disabled={isSubmitting}
          />

          {/* Age */}
          <FormInput
            label="Age"
            name="age"
            type="number"
            placeholder="18"
            value={formData.age}
            onChange={handleChange}
            error={errors.age}
            required
            disabled={isSubmitting}
            min="10"
            max="99"
          />

          {/* Platform */}
          <div className="w-full">
            <label className="block text-sm font-semibold text-neutral-300 mb-2">
              Platform <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white focus:outline-none focus:border-red-600 transition-colors duration-200"
              required
            >
              <option value="Java Edition">Java Edition</option>
              <option value="Bedrock Edition">Bedrock Edition</option>
            </select>
          </div>

          {/* Why Join */}
          <FormTextarea
            label="Why do you want to join Unique SMP?"
            name="reason"
            placeholder="Tell us what interests you about our server..."
            value={formData.reason}
            onChange={handleChange}
            error={errors.reason}
            rows={4}
            maxLength={500}
            required
            disabled={isSubmitting}
          />

          {/* Minecraft Experience */}
          <FormTextarea
            label="Describe your Minecraft experience"
            name="experience"
            placeholder="How long have you been playing? What do you enjoy building?"
            value={formData.experience}
            onChange={handleChange}
            error={errors.experience}
            rows={3}
            maxLength={300}
            required
            disabled={isSubmitting}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <LoadingSpinner />
                  <span>Submitting...</span>
                </span>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>

          {/* Info Text */}
          <p className="text-sm text-neutral-500 text-center">
            By submitting, you agree to follow our server rules and community guidelines.
          </p>
        </form>
      )}
    </div>
  );
}
