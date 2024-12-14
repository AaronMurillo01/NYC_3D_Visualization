import { useMemo } from 'react';
import { Vector2 } from 'three';
import { useTextureWithFallback } from '../../hooks/useTextureWithFallback';

export function Streets() {
  const normalMap = useTextureWithFallback('buildingNormal');

  const streets = useMemo(() => {
    const streetData = [];
    
    // Main avenues (vertical)
    for (let i = -5; i <= 5; i++) {
      streetData.push({
        position: [i * 40, 0, 0],
        rotation: [-Math.PI / 2, 0, 0],
        scale: [8, 400, 1]
      });
    }
    
    // Cross streets (horizontal)
    for (let i = -5; i <= 5; i++) {
      streetData.push({
        position: [0, 0, i * 40],
        rotation: [-Math.PI / 2, Math.PI / 2, 0],
        scale: [8, 400, 1]
      });
    }
    
    return streetData;
  }, []);

  return (
    <group position={[0, 0.01, 0]}>
      {streets.map((street, index) => (
        <mesh
          key={`street-${index}`}
          position={street.position}
          rotation={street.rotation}
          receiveShadow
        >
          <planeGeometry args={street.scale} />
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.8}
            metalness={0.2}
            normalMap={normalMap}
            normalScale={[0.1, 0.1]}
          />
        </mesh>
      ))}
    </group>
  );
}