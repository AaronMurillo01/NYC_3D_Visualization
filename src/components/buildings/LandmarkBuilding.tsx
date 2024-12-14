import { useRef } from 'react';
import { Mesh, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';
import { setupTextureRepeat } from '../../utils/materials/textures';
import { useMultipleTexturesWithFallback } from '../../hooks/useTextureWithFallback';
import { BuildingMaterial } from '../materials/BuildingMaterial';

interface LandmarkBuildingProps {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  isGlass?: boolean;
}

export function LandmarkBuilding({ position, scale, color, isGlass }: LandmarkBuildingProps) {
  const meshRef = useRef<Mesh>(null);
  
  const [normalMap, metalMap] = useMultipleTexturesWithFallback([
    'buildingNormal',
    'buildingMetal'
  ]);

  setupTextureRepeat(normalMap, new Vector2(20, 20));
  setupTextureRepeat(metalMap, new Vector2(10, 10));

  useFrame((state) => {
    if (meshRef.current && isGlass) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1, 8, 32, 8]} />
      <BuildingMaterial 
        color={color}
        normalMap={normalMap}
        metalnessMap={metalMap}
        isGlass={isGlass}
      />
    </mesh>
  );
}