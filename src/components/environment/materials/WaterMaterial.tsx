import { COLORS } from '../../../utils/textures';

interface WaterMaterialProps {
  normalMap: THREE.Texture | null;
}

export function WaterMaterial({ normalMap }: WaterMaterialProps) {
  return (
    <meshPhysicalMaterial 
      color={COLORS.environment.water}
      normalMap={normalMap}
      normalScale={[0.3, 0.3]}
      metalness={0.9}
      roughness={0.1}
      transparent
      opacity={0.8}
      clearcoat={1}
      clearcoatRoughness={0.2}
      envMapIntensity={2}
    />
  );
}