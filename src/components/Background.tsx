import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Text, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const TechIcon = ({ text, position, color }: { text: string, position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        <Text
          fontSize={0.4}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
        <mesh scale={[0.8, 0.8, 0.1]}>
          <boxGeometry />
          <meshStandardMaterial color={color} transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

const Background = () => {
  const techStack = [
    { name: 'Python 🐍', color: '#3776AB', pos: [-5, 3, -10] as [number, number, number] },
    { name: 'Django 🚀', color: '#092E20', pos: [5, -4, -12] as [number, number, number] },
    { name: 'React ⚛️', color: '#61DAFB', pos: [-8, -2, -8] as [number, number, number] },
    { name: 'JS 💛', color: '#F7DF1E', pos: [7, 2, -15] as [number, number, number] },
    { name: 'Node 🌲', color: '#339933', pos: [-3, -6, -11] as [number, number, number] },
    { name: 'Motion 💫', color: '#FF0055', pos: [4, 5, -9] as [number, number, number] },
    { name: 'CSS 🎨', color: '#1572B6', pos: [-10, 5, -13] as [number, number, number] },
    { name: 'HTML 🏗️', color: '#E34F26', pos: [10, -6, -14] as [number, number, number] },
    { name: '💻', color: '#ffffff', pos: [2, -2, -5] as [number, number, number] },
    { name: '🎓', color: '#ffffff', pos: [-2, 2, -6] as [number, number, number] },
    { name: '💼', color: '#ffffff', pos: [0, -4, -7] as [number, number, number] },
  ];

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
      {/* Aurora Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] animate-pulse-slow rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] animate-pulse-slow rounded-full" />
      
      {/* Minimalist Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {techStack.map((tech) => (
          <TechIcon key={tech.name} text={tech.name} position={tech.pos} color={tech.color} />
        ))}
      </Canvas>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050508_100%)]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise-overlay opacity-[0.02]" />
    </div>
  );
};

export default Background;
