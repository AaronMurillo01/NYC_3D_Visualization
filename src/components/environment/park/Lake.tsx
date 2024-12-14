import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { WaterMaterial } from '../../materials/WaterMaterial';
import { useTextureWithFallback } from '../../../hooks/useTextureWithFallback';

export function Lake() {
  const meshRef = useRef<Mesh>(null);
  const normalMap = useTextureWithFallback('waterNormal');

  useFrame((state) => {
    if (meshRef.current && normalMap) {
      normalMap.offset.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh 
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[10, 0.1, -20]}
    >
      <planeGeometry args={[30, 40, 32, 32]} />
      <WaterMaterial normalMap={normalMap} />
    </mesh>
  );
}