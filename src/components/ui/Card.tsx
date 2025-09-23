import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-300',
        hover && 'hover:border-glow-primary/50 hover:shadow-lg hover:shadow-glow-primary/20',
        glow && 'glass-glow shadow-lg shadow-glow-primary/30',
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
