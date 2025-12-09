import { useState, FormEvent } from 'react';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: null });

    const form = e.currentTarget;

    // Create hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden-form-submit-' + Date.now();
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    document.body.appendChild(iframe);

    const originalTarget = form.target;
    form.target = iframe.name;

    form.submit();

    setTimeout(() => {
      setStatus({
        message: "Message sent successfully! We'll be in touch soon.",
        type: 'success',
      });
      form.reset();
      setIsSubmitting(false);
      form.target = originalTarget;

      setTimeout(() => {
        if (iframe.parentNode) {
          iframe.remove();
        }
      }, 2000);
    }, 800);
  };

  return {
    isSubmitting,
    status,
    handleSubmit,
  };
};

