import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  pulse: number;
}

interface BlockchainNodesProps {
  nodeCount?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export const BlockchainNodes: React.FC<BlockchainNodesProps> = ({ 
  nodeCount = 12, 
  intensity = 'medium' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const getIntensity = () => {
    switch (intensity) {
      case 'low': return { opacity: 0.3, speed: 0.5, connections: 0.3 };
      case 'high': return { opacity: 0.8, speed: 1.5, connections: 0.7 };
      default: return { opacity: 0.6, speed: 1, connections: 0.5 };
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

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * intensityConfig.speed,
        vy: (Math.random() - 0.5) * intensityConfig.speed,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create connections between nearby nodes
    const createConnections = () => {
      nodes.forEach(node => {
        node.connections = [];
        nodes.forEach(otherNode => {
          if (node.id !== otherNode.id) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + 
              Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 200 && Math.random() < intensityConfig.connections) {
              node.connections.push(otherNode.id);
            }
          }
        });
      });
    };

    createConnections();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = `rgba(0, 212, 255, ${intensityConfig.opacity * 0.3})`;
      ctx.lineWidth = 1;
      nodes.forEach(node => {
        node.connections.forEach(connectionId => {
          const connectedNode = nodes.find(n => n.id === connectionId);
          if (connectedNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulseSize = 3 + Math.sin(node.pulse) * 2;
        const alpha = intensityConfig.opacity * (0.7 + Math.sin(node.pulse) * 0.3);

        // Node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseSize * 4
        );
        gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 110, ${alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 212, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
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
  }, [nodeCount, intensityConfig]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: intensityConfig.opacity }}
    />
  );
};

export default BlockchainNodes;
