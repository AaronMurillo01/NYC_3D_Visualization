import { useMemo } from 'react';
import { Vector3 } from 'three';
import { BuildingMaterial } from '../materials/BuildingMaterial';
import { useMultipleTexturesWithFallback } from '../../hooks/useTextureWithFallback';

const LETTER_CONFIGS = {
  'C': [[0,1,1], [1,0,0], [1,0,0], [1,0,0], [0,1,1]],
  'R': [[1,1,1], [1,0,1], [1,1,0], [1,0,1], [1,0,1]],
  'E': [[1,1,1], [1,0,0], [1,1,0], [1,0,0], [1,1,1]],
  'A': [[0,1,0], [1,0,1], [1,1,1], [1,0,1], [1,0,1]],
  'T': [[1,1,1], [0,1,0], [0,1,0], [0,1,0], [0,1,0]],
  'D': [[1,1,0], [1,0,1], [1,0,1], [1,0,1], [1,1,0]],
  'B': [[1,1,0], [1,0,1], [1,1,0], [1,0,1], [1,1,0]],
  'Y': [[1,0,1], [1,0,1], [0,1,0], [0,1,0], [0,1,0]],
  'N': [[1,0,1], [1,1,1], [1,0,1], [1,0,1], [1,0,1]],
  'M': [[1,0,1], [1,1,1], [1,0,1], [1,0,1], [1,0,1]],
  'I': [[1,1,1], [0,1,0], [0,1,0], [0,1,0], [1,1,1]],
  'L': [[1,0,0], [1,0,0], [1,0,0], [1,0,0], [1,1,1]],
  'O': [[0,1,0], [1,0,1], [1,0,1], [1,0,1], [0,1,0]],
  'U': [[1,0,1], [1,0,1], [1,0,1], [1,0,1], [0,1,0]]
};

export function NameBuildings() {
  const [normalMap, metalMap] = useMultipleTexturesWithFallback([
    'buildingNormal',
    'buildingMetal'
  ]);

  const buildings = useMemo(() => {
    const text = "CREATED BY AARON MURILLO";
    const buildingData = [];
    let xOffset = -200; // Start from the left side
    
    text.split('').forEach((letter, index) => {
      if (letter === ' ') {
        xOffset += 12; // Reduced space between words
        return;
      }
      
      const config = LETTER_CONFIGS[letter as keyof typeof LETTER_CONFIGS];
      if (!config) return;
      
      config.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            const height = 15 + Math.random() * 5; // Reduced height
            buildingData.push({
              position: new Vector3(
                xOffset + x * 4, // Reduced spacing
                height / 2,
                y * 4 - 150 // Moved to the opposite side and reduced spacing
              ),
              scale: new Vector3(3, height, 3), // Reduced scale
              color: '#87CEEB', // Lighter blue color
              isGlass: true
            });
          }
        });
      });
      
      xOffset += 15; // Reduced space between letters
    });
    
    return buildingData;
  }, []);

  return (
    <group>
      {buildings.map((building, index) => (
        <mesh
          key={`name-building-${index}`}
          position={building.position}
          scale={building.scale}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1, 4, 16, 4]} />
          <BuildingMaterial
            color={building.color}
            normalMap={normalMap}
            metalnessMap={metalMap}
            isGlass={building.isGlass}
          />
        </mesh>
      ))}
    </group>
  );
}