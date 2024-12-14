import { useMemo } from 'react';
import { Color } from 'three';

export function Trees() {
  const trees = useMemo(() => {
    const treeData = [];
    const treeCount = 200;
    
    for (let i = 0; i < treeCount; i++) {
      const x = Math.random() * 70 - 35;
      const z = Math.random() * 110 - 55;
      const scale = Math.random() * 0.5 + 0.5;
      const color = new Color().setHSL(0.25 + Math.random() * 0.1, 0.6, 0.3 + Math.random() * 0.2);
      
      treeData.push({ position: [x, scale * 2, z], scale, color });
    }
    return treeData;
  }, []);

  return (
    <group>
      {trees.map((tree, i) => (
        <mesh key={i} position={tree.position} scale={[tree.scale, tree.scale * 4, tree.scale]}>
          <cylinderGeometry args={[0.2, 0.4, 1, 6]} />
          <meshStandardMaterial color="#4a3728" />
          <mesh position={[0, 1, 0]}>
            <coneGeometry args={[1, 2, 6]} />
            <meshStandardMaterial color={tree.color} />
          </mesh>
        </mesh>
      ))}
    </group>
  );
}