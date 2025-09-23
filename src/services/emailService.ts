import { ContactFormData, EmailServiceResponse } from '@/types';

// Google Forms configuration with validation
const GOOGLE_FORM_CONFIG = {
  formId: import.meta.env.VITE_GOOGLE_FORM_ID || 'YOUR_GOOGLE_FORM_ID',
  formUrl: import.meta.env.VITE_GOOGLE_FORM_URL || 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
};

// Validate environment configuration
const validateConfig = (): boolean => {
  const hasValidFormId = GOOGLE_FORM_CONFIG.formId !== 'YOUR_GOOGLE_FORM_ID';
  const hasValidFormUrl = GOOGLE_FORM_CONFIG.formUrl.includes('docs.google.com/forms');
  return hasValidFormId && hasValidFormUrl;
};

// Validate form data
const validateFormData = (data: ContactFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.name?.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.message?.trim()) {
    errors.push('Message is required');
  }
  
  return errors;
};

export const emailService = {
  // Method 1: Using Google Forms (FREE and simple)
  sendWithGoogleForms: async (data: ContactFormData): Promise<EmailServiceResponse> => {
    try {
      // Validate configuration
      if (!validateConfig()) {
        return {
          success: false,
          message: 'Email service not configured. Please contact support.',
          error: 'Missing or invalid Google Forms configuration',
        };
      }

      // Validate form data
      const validationErrors = validateFormData(data);
      if (validationErrors.length > 0) {
        return {
          success: false,
          message: validationErrors.join(', '),
          error: 'Validation failed',
        };
      }

      const formData = new FormData();
      
      // Google Forms field names (you'll need to match these with your form)
      formData.append('entry.1234567890', data.name.trim()); // Replace with your field ID
      formData.append('entry.0987654321', data.email.trim().toLowerCase()); // Replace with your field ID
      formData.append('entry.1122334455', data.company?.trim() || ''); // Replace with your field ID
      formData.append('entry.5566778899', data.message.trim()); // Replace with your field ID

      await fetch(GOOGLE_FORM_CONFIG.formUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formData,
      });

      // With no-cors mode, we can't check response status
      // But if no error is thrown, we assume success
      return {
        success: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
      };
    } catch (error) {
      console.error('Google Forms error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact us directly.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  },

  // Method 2: Direct redirect to Google Form (simplest approach)
  redirectToGoogleForm: (data: ContactFormData): void => {
    const params = new URLSearchParams({
      'entry.1234567890': data.name, // Replace with your field ID
      'entry.0987654321': data.email, // Replace with your field ID
      'entry.1122334455': data.company || '', // Replace with your field ID
      'entry.5566778899': data.message, // Replace with your field ID
    });
    
    const formUrl = `${GOOGLE_FORM_CONFIG.formUrl}?${params.toString()}`;
    window.open(formUrl, '_blank');
  },

  // Main send method - uses Google Forms
  send: async (data: ContactFormData): Promise<EmailServiceResponse> => {
    return await emailService.sendWithGoogleForms(data);
  },
};

export default emailService;
