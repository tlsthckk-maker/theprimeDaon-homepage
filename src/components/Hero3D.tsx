'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LeatherBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // 마우스 반응형 회전 애니메이션
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // 기본 천천히 회전하는 베이스 모션
    const baseRotY = time * 0.2;
    const baseRotX = Math.sin(time * 0.5) * 0.1;
    
    // 마우스 포인터에 부드럽게 따라가는 모션
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;
    
    meshRef.current.rotation.y += (baseRotY + targetX - meshRef.current.rotation.y) * 0.1;
    meshRef.current.rotation.x += (baseRotX - targetY - meshRef.current.rotation.x) * 0.1;
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[3, 5, 0.4]} // 폰케이스나 장지갑 비율
      radius={0.2}
      smoothness={4}
    >
      <meshStandardMaterial
        color="#854D0E" // Gold Brown 계열 가죽 톤
        roughness={0.8}
        metalness={0.1}
        envMapIntensity={1.2}
      />
    </RoundedBox>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto cursor-pointer">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#0F172A" />
        <LeatherBox />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
