export function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[50, 50, 25]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <pointLight
        position={[-50, 50, -25]}
        intensity={0.5}
        color="#ff7700"
        castShadow
      />
      <pointLight
        position={[30, 30, 30]}
        intensity={0.3}
        color="#0077ff"
      />
      <hemisphereLight
        skyColor="#b1e1ff"
        groundColor="#000000"
        intensity={0.2}
      />
    </>
  );
}