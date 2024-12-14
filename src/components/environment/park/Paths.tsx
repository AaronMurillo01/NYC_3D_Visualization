export function Paths() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
      <planeGeometry args={[60, 100]} />
      <meshStandardMaterial 
        color="#8B7355"
        roughness={1}
        metalness={0}
        opacity={0.7}
        transparent
      />
    </mesh>
  );
}