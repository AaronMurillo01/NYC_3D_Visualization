import { useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useMultipleTexturesWithFallback } from '../../hooks/useTextureWithFallback';
import { Trees } from './park/Trees';
import { Paths } from './park/Paths';
import { Lake } from './park/Lake';

export function CentralPark() {
  const [normalMap, roughnessMap] = useMultipleTexturesWithFallback([
    'buildingNormal',
    'buildingRoughness'
  ]);

  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle wind effect on grass
      const time = state.clock.getElapsedTime();
      meshRef.current.material.normalScale.set(
        0.5 + Math.sin(time * 0.5) * 0.1,
        0.5 + Math.cos(time * 0.5) * 0.1
      );
    }
  });

  return (
    <group position={[0, 0, 40]}>
      {/* Base ground */}
      <mesh 
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        receiveShadow
      >
        <planeGeometry args={[80, 120, 64, 64]} />
        <meshStandardMaterial 
          color="#2d5a27"
          roughness={1}
          metalness={0}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          normalScale={[0.5, 0.5]}
        />
      </mesh>
      
      <Trees />
      <Paths />
      <Lake />
    </group>
  );
}