import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'lg', 
  className
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
    xxl: 'w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64'
  };


  return (
    <motion.div
      className={cn('flex flex-col items-center justify-center', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Container */}
      <div className={cn(
        'relative flex items-center justify-center mb-2',
        sizeClasses[size]
      )}>
        {/* Your Actual PNG Logo */}
        <img
          src="/logo.png"
          alt="OpsCore Labs"
          className={cn(
            'object-contain',
            size === 'xxl' ? 'h-40 w-auto md:h-48 md:w-auto lg:h-56 lg:w-auto' :
            size === 'xl' ? 'h-24 w-auto' : 
            size === 'lg' ? 'h-16 w-auto' : 
            size === 'md' ? 'h-12 w-auto' : 
            'h-8 w-auto'
          )}
          onError={(e) => {
            console.log('Logo failed to load, trying alternative path');
            e.currentTarget.src = './logo.png';
          }}
        />
      </div>
      
      {/* Logo already contains text, no additional text needed */}
    </motion.div>
  );
};
