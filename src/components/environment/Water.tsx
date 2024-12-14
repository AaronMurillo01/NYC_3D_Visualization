import { useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';
import { setupTextureRepeat } from '../../utils/materials/textures';
import { useTextureWithFallback } from '../../hooks/useTextureWithFallback';
import { WaterMaterial } from '../materials/WaterMaterial';

export function Water() {
  const meshRef = useRef<Mesh>(null);
  const normalMap = useTextureWithFallback('waterNormal');
  
  setupTextureRepeat(normalMap, new Vector2(8, 16));

  useFrame((state) => {
    if (meshRef.current && normalMap) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      normalMap.offset.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh 
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[-80, -0.2, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 400, 32, 64]} />
      <WaterMaterial normalMap={normalMap} />
    </mesh>
  );
}