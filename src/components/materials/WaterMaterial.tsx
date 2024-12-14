import { COLORS, MATERIAL_PRESETS } from '../../utils/materials/constants';

interface WaterMaterialProps {
  normalMap: THREE.Texture | null;
}

export function WaterMaterial({ normalMap }: WaterMaterialProps) {
  return (
    <meshPhysicalMaterial 
      color={COLORS.environment.water}
      normalMap={normalMap}
      normalScale={[0.3, 0.3]}
      {...MATERIAL_PRESETS.water}
    />
  );
}