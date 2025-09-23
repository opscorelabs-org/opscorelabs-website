import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface ChainGlowProps {
  count?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export const ChainGlow: React.FC<ChainGlowProps> = ({ 
  count = 8, 
  intensity = 'medium' 
}) => {
  const getIntensity = () => {
    switch (intensity) {
      case 'low': return { opacity: 0.05, blur: 'blur-3xl' };
      case 'high': return { opacity: 0.1, blur: 'blur-2xl' };
      default: return { opacity: 0.08, blur: 'blur-3xl' };
    }
  };

  const intensityConfig = getIntensity();

  // Memoize chain links to prevent constant re-renders
  const chainLinks = React.useMemo(() => 
    Array.from({ length: count }).map((_, i) => {
      // Use deterministic values based on index to prevent re-renders
      const size = 100 + (i * 25) % 200; // 100px to 300px
      const delay = (i * 1.5) % 10; // 0s to 10s
      const duration = 12 + (i * 0.5) % 8; // 12s to 20s
      const top = (i * 15) % 100;
      const left = (i * 23) % 100;
      const colorIndex = i % 6;
    
      const colors = [
        'rgba(0, 212, 255, 0.2)',
        'rgba(255, 0, 110, 0.2)', 
        'rgba(131, 56, 236, 0.2)',
        'rgba(0, 255, 136, 0.2)',
        'rgba(255, 170, 0, 0.2)',
        'rgba(255, 51, 102, 0.2)'
      ];

      return (
        <motion.div
          key={i}
          className={cn(
            'absolute pointer-events-none z-0',
            intensityConfig.blur
          )}
          style={{
            width: size,
            height: size * 0.3, // Chain link shape
            top: `${top}%`,
            left: `${left}%`,
            background: `linear-gradient(45deg, ${colors[colorIndex]} 0%, transparent 50%, ${colors[(colorIndex + 1) % 6]} 100%)`,
            borderRadius: '8px',
            opacity: intensityConfig.opacity,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            rotate: 0 
          }}
          animate={{
            opacity: [intensityConfig.opacity * 0.5, intensityConfig.opacity],
            scale: [0.95, 1.02],
            x: [`${(i * 7) % 50 - 25}px`, `${(i * 11) % 50 - 25}px`],
            y: [`${(i * 13) % 50 - 25}px`, `${(i * 17) % 50 - 25}px`],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: delay,
          }}
        />
      );
    }), [count, intensity]);
  
  return <>{chainLinks}</>;
};

export default ChainGlow;