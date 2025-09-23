import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { PARTICLE_CONFIG } from '@/utils/constants';

const Particles: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(PARTICLE_CONFIG.count * 3);
    const colors = new Float32Array(PARTICLE_CONFIG.count * 3);
    const sizes = new Float32Array(PARTICLE_CONFIG.count);
    
    for (let i = 0; i < PARTICLE_CONFIG.count; i++) {
      const i3 = i * 3;
      
      // Position with more spread
      positions[i3] = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = (Math.random() - 0.5) * 40;
      positions[i3 + 2] = (Math.random() - 0.5) * 40;
      
      // Color with more variety
      const color = new THREE.Color(
        PARTICLE_CONFIG.colors[Math.floor(Math.random() * PARTICLE_CONFIG.colors.length)]
      );
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      // Random sizes
      sizes[i] = Math.random() * 3 + 1;
    }
    
    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={PARTICLE_CONFIG.size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={PARTICLE_CONFIG.opacity * 0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

interface ParticleSystemProps {
  className?: string;
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleSystem;
