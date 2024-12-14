import { useMemo } from 'react';
import { Color, Vector2 } from 'three';
import { useMultipleTexturesWithFallback } from '../../hooks/useTextureWithFallback';
import { DISTRICT_CONFIGS } from '../../constants/buildingData';

interface DistrictProps {
  area: keyof typeof DISTRICT_CONFIGS;
  density: number;
  maxHeight: number;
}

export function District({ area, density, maxHeight }: DistrictProps) {
  const [normalMap, metalMap, roughnessMap] = useMultipleTexturesWithFallback([
    'buildingNormal',
    'buildingMetal',
    'buildingRoughness'
  ]);

  const buildings = useMemo(() => {
    const buildingData = [];
    const buildingCount = Math.floor(Math.random() * density + density/2);
    const config = DISTRICT_CONFIGS[area];
    
    for (let i = 0; i < buildingCount; i++) {
      const x = config.x + (Math.random() * config.spread - config.spread/2);
      const z = config.z + (Math.random() * config.spread - config.spread/2);
      const height = Math.random() * maxHeight + (maxHeight * 0.3);
      const width = Math.random() * 4 + 2;
      
      let color;
      switch(config.style) {
        case 'modern':
          color = new Color().setHSL(0.6 + Math.random() * 0.1, 0.3, 0.4 + Math.random() * 0.2);
          break;
        case 'classic':
          color = new Color().setHSL(0.1 + Math.random() * 0.05, 0.3, 0.4 + Math.random() * 0.1);
          break;
        case 'mixed':
          color = new Color().setHSL(0.35 + Math.random() * 0.3, 0.2, 0.4 + Math.random() * 0.2);
          break;
      }

      const isModern = Math.random() > 0.5;

      buildingData.push({ 
        position: [x, height/2, z], 
        scale: [width, height, width], 
        color,
        isModern
      });
    }
    return buildingData;
  }, [area, density, maxHeight]);

  return (
    <group>
      {buildings.map((building, index) => (
        <mesh 
          key={`${area}-${index}`}
          position={building.position}
          scale={building.scale}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1, 4, 16, 4]} />
          <meshPhysicalMaterial 
            color={building.color}
            metalness={building.isModern ? 0.8 : 0.4}
            roughness={building.isModern ? 0.2 : 0.7}
            normalMap={normalMap}
            normalScale={[0.2, 0.2]}
            metalnessMap={metalMap}
            roughnessMap={roughnessMap}
            envMapIntensity={building.isModern ? 1.5 : 0.8}
            clearcoat={building.isModern ? 0.5 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}