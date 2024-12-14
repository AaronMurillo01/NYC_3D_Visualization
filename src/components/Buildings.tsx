import { LANDMARK_BUILDINGS, DISTRICT_CONFIGS } from '../constants/buildingData';
import { LandmarkBuilding } from './buildings/LandmarkBuilding';
import { District } from './buildings/Districts';
import { NameBuildings } from './buildings/NameBuildings';

export function Buildings() {
  return (
    <group>
      {/* Name Buildings */}
      <NameBuildings />
      
      {/* Landmark Buildings */}
      {LANDMARK_BUILDINGS.map((building) => (
        <LandmarkBuilding 
          key={building.name}
          position={building.position}
          scale={building.scale}
          color={building.color}
          isGlass={building.isGlass}
        />
      ))}
      
      {/* City Districts */}
      {Object.entries(DISTRICT_CONFIGS).map(([area, config]) => (
        <District 
          key={area}
          area={area as keyof typeof DISTRICT_CONFIGS}
          density={config.density}
          maxHeight={config.maxHeight}
        />
      ))}
    </group>
  );
}