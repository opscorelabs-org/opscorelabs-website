import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  intensity?: 'low' | 'medium' | 'high';
  speed?: number;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({ 
  intensity = 'medium',
  speed = 1 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const getIntensity = () => {
    switch (intensity) {
      case 'low': return { opacity: 0.1, density: 0.3, speed: 0.5 };
      case 'high': return { opacity: 0.3, density: 0.8, speed: 2 };
      default: return { opacity: 0.2, density: 0.5, speed: 1 };
    }
  };

  const intensityConfig = getIntensity();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');

    // Rain drops
    const drops: { x: number; y: number; char: string; opacity: number }[] = [];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      if (Math.random() < intensityConfig.density) {
        drops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          char: charArray[Math.floor(Math.random() * charArray.length)],
          opacity: Math.random()
        });
      }
    }

    // Animation loop
    const animate = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = `rgba(0, 0, 0, ${0.05 * intensityConfig.speed})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw drops
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((drop) => {
        // Randomly change character
        if (Math.random() < 0.1) {
          drop.char = charArray[Math.floor(Math.random() * charArray.length)];
        }

        // Draw character with glow effect
        const alpha = drop.opacity * intensityConfig.opacity;
        
        // Glow effect
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha * 0.3})`;
        ctx.fillText(drop.char, drop.x, drop.y);

        // Main character
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fillText(drop.char, drop.x, drop.y);

        // Move drop down
        drop.y += fontSize * intensityConfig.speed;

        // Reset drop when it reaches bottom
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.floor(Math.random() * columns) * fontSize;
          drop.opacity = Math.random();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensityConfig, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: intensityConfig.opacity }}
    />
  );
};

export default MatrixRain;
