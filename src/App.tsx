import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Interface } from './components/Interface';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas>
        <Scene />
      </Canvas>
      <Interface />
    </div>
  );
}

export default App;