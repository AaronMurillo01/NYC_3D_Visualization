import { OrbitControls, PerspectiveCamera, Environment, Sky, Stars, Cloud } from '@react-three/drei';
import { Buildings } from './Buildings';
import { Ground } from './Ground';
import { Lights } from './Lights';
import { CentralPark } from './environment/CentralPark';
import { Streets } from './environment/Streets';

export function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[150, 150, 150]} />
      <OrbitControls 
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={100}
        maxDistance={500}
      />
      
      <Sky 
        distance={450000} 
        sunPosition={[100, 100, 20]} 
        inclination={0.5}
        azimuth={0.25}
        rayleigh={2}
        turbidity={10}
      />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <Environment preset="city" background blur={0.8} />
      
      <Cloud 
        opacity={0.5}
        speed={0.4}
        width={100}
        depth={1.5}
        segments={20}
        position={[20, 100, 0]}
      />
      <Cloud 
        opacity={0.3}
        speed={0.3}
        width={120}
        depth={2}
        segments={25}
        position={[-50, 150, 50]}
      />
      <Cloud 
        opacity={0.4}
        speed={0.2}
        width={80}
        depth={1.8}
        segments={18}
        position={[80, 120, -30]}
      />

      <Lights />
      <Streets />
      <Buildings />
      <CentralPark />
      <Ground />
    </>
  );
}