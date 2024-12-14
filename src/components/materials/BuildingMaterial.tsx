import { Color } from 'three';
import { MATERIAL_PRESETS } from '../../utils/materials/constants';

interface BuildingMaterialProps {
  color: string | Color;
  normalMap: THREE.Texture | null;
  metalnessMap?: THREE.Texture | null;
  isGlass?: boolean;
}

export function BuildingMaterial({ 
  color, 
  normalMap, 
  metalnessMap, 
  isGlass 
}: BuildingMaterialProps) {
  const preset = isGlass ? MATERIAL_PRESETS.glass : MATERIAL_PRESETS.concrete;
  
  return (
    <meshPhysicalMaterial 
      color={color}
      normalMap={normalMap}
      metalnessMap={metalnessMap}
      normalScale={[0.3, 0.3]}
      {...preset}
    />
  );
}