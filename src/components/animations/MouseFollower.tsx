import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks';

interface MouseFollowerProps {
  children?: React.ReactNode;
  className?: string;
}

export const MouseFollower: React.FC<MouseFollowerProps> = ({ 
  children, 
  className = '' 
}) => {
  const mousePosition = useMousePosition();
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const updatePosition = () => {
      follower.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    };

    updatePosition();
  }, [mousePosition]);

  return (
    <motion.div
      ref={followerRef}
      className={`fixed top-0 left-0 pointer-events-none z-10 ${className}`}
      style={{
        transform: `translate(-50%, -50%)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children || (
        <div className="w-4 h-4 bg-glow-primary rounded-lg opacity-50 blur-sm" />
      )}
    </motion.div>
  );
};

export default MouseFollower;
