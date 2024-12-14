import { Vector2 } from 'three';
import { useTextureWithFallback } from '../hooks/useTextureWithFallback';

export function Ground() {
  const normalMap = useTextureWithFallback('buildingNormal');
  const roughnessMap = useTextureWithFallback('buildingRoughness');

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[1000, 1000, 128, 128]} />
      <meshStandardMaterial 
        color="#2a2a2a"
        roughness={0.9}
        metalness={0.1}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        normalScale={[0.15, 0.15]}
        envMapIntensity={0.5}
      />
    </mesh>
  );
}