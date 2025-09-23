import React from 'react';
import { motion } from 'framer-motion';

interface GlowEffectProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  intensity = 'medium',
  color = 'primary',
  className = '',
}) => {
  const intensityClasses = {
    low: 'shadow-glow-primary/20',
    medium: 'shadow-glow-primary/40',
    high: 'shadow-glow-primary/60',
  };

  const colorClasses = {
    primary: 'shadow-glow-primary',
    secondary: 'shadow-glow-secondary',
    accent: 'shadow-glow-accent',
  };

  return (
    <motion.div
      className={`${intensityClasses[intensity]} ${colorClasses[color]} ${className}`}
      whileHover={{
        boxShadow: [
          '0 0 20px rgba(0, 212, 255, 0.4)',
          '0 0 40px rgba(0, 212, 255, 0.6)',
          '0 0 20px rgba(0, 212, 255, 0.4)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowEffect;
