import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  intensity?: 'low' | 'medium' | 'high';
}

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ intensity = 'medium' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const getIntensity = () => {
    switch (intensity) {
      case 'low': return { speed: 0.5, distort: 0.3, color: '#00d4ff' };
      case 'high': return { speed: 2, distort: 0.8, color: '#ff006e' };
      default: return { speed: 1, distort: 0.5, color: '#8338ec' };
    }
  };

  const intensityConfig = getIntensity();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * intensityConfig.speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * intensityConfig.speed * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color={intensityConfig.color}
        attach="material"
        distort={intensityConfig.distort}
        speed={intensityConfig.speed}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
};

interface Globe3DProps {
  intensity?: 'low' | 'medium' | 'high';
  position?: [number, number, number];
}

export const Globe3D: React.FC<Globe3DProps> = ({ 
  intensity = 'medium'
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere intensity={intensity} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Globe3D;
