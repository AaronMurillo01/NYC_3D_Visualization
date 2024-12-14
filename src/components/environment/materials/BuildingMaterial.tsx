import { Color } from 'three';

interface BuildingMaterialProps {
  color: string | Color;
  normalMap: THREE.Texture | null;
  isGlass?: boolean;
}

export function BuildingMaterial({ color, normalMap, isGlass }: BuildingMaterialProps) {
  return (
    <meshPhysicalMaterial 
      color={color}
      normalMap={normalMap}
      normalScale={[0.3, 0.3]}
      metalness={isGlass ? 0.9 : 0.6}
      roughness={isGlass ? 0.1 : 0.4}
      transparent={isGlass}
      opacity={isGlass ? 0.6 : 1}
      envMapIntensity={isGlass ? 2 : 1}
      clearcoat={isGlass ? 1 : 0.5}
    />
  );
}