import { useState } from 'react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { Alert } from './Alert';
import { useWhitelistForm } from '../hooks/useWhitelistForm';
import type { WhitelistApplication, Teammate } from '../utils/discord';

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
    hasTeammates: false,
    teammates: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTeammateToggle = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      hasTeammates: checked,
      teammates: checked ? [{ minecraftUsername: '', discordUsername: '' }] : [],
    }));
  };

  const addTeammate = () => {
    if ((formData.teammates?.length || 0) < 3) {
      setFormData(prev => ({
        ...prev,
        teammates: [...(prev.teammates || []), { minecraftUsername: '', discordUsername: '' }],
      }));
    }
  };

  const removeTeammate = (index: number) => {
    setFormData(prev => ({
      ...prev,
      teammates: prev.teammates?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleTeammateChange = (index: number, field: keyof Teammate, value: string) => {
    setFormData(prev => ({
      ...prev,
      teammates: prev.teammates?.map((teammate, i) => 
        i === index ? { ...teammate, [field]: value } : teammate
      ) || [],
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
        hasTeammates: false,
        teammates: [],
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

          {/* Teammates Section */}
          <div className="border-t border-neutral-800 pt-6">
            <div className="flex items-center gap-3 mb-4">
              <input
                type="checkbox"
                id="hasTeammates"
                checked={formData.hasTeammates}
                onChange={(e) => handleTeammateToggle(e.target.checked)}
                disabled={isSubmitting}
                className="w-5 h-5 bg-neutral-900 border-2 border-neutral-800 rounded focus:ring-2 focus:ring-red-600 focus:outline-none cursor-pointer"
              />
              <label htmlFor="hasTeammates" className="text-sm font-semibold text-neutral-300 cursor-pointer">
                I'm applying with teammates (max 3)
              </label>
            </div>

            {formData.hasTeammates && (
              <div className="space-y-4 mt-6">
                <p className="text-sm text-neutral-400 mb-4">
                  According to server rules, teams can have up to 4 members total (you + 3 teammates).
                </p>

                {formData.teammates?.map((teammate, index) => (
                  <div 
                    key={index}
                    className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-white">
                        Teammate {index + 1}
                      </h4>
                      {formData.teammates && formData.teammates.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeTeammate(index)}
                          disabled={isSubmitting}
                          className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <FormInput
                      label="Minecraft Username"
                      name={`teammate-${index}-mc`}
                      type="text"
                      placeholder="Steve123"
                      value={teammate.minecraftUsername}
                      onChange={(e) => handleTeammateChange(index, 'minecraftUsername', e.target.value)}
                      disabled={isSubmitting}
                    />

                    <FormInput
                      label="Discord Username"
                      name={`teammate-${index}-dc`}
                      type="text"
                      placeholder="username or username#0000"
                      value={teammate.discordUsername}
                      onChange={(e) => handleTeammateChange(index, 'discordUsername', e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                ))}

                {(formData.teammates?.length || 0) < 3 && (
                  <button
                    type="button"
                    onClick={addTeammate}
                    disabled={isSubmitting}
                    className="w-full py-3 bg-neutral-900 border-2 border-neutral-800 border-dashed rounded-lg text-neutral-400 hover:text-white hover:border-red-600 transition-all duration-200 font-semibold"
                  >
                    + Add Another Teammate
                  </button>
                )}
              </div>
            )}
          </div>

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
