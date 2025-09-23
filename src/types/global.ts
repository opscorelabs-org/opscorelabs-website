export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

export interface AnimationState {
  isAnimating: boolean;
  duration: number;
  delay: number;
}

export interface UIState {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  mousePosition: MousePosition;
  scrollPosition: ScrollPosition;
  isLoaded: boolean;
}

export interface ContactState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  formData: ContactFormData;
}

export interface EmailServiceResponse {
  success: boolean;
  message: string;
  error?: string;
}
