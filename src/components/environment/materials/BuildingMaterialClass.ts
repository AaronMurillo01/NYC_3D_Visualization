import { MeshPhysicalMaterial } from 'three';
import { extend } from '@react-three/fiber';

export class BuildingMaterialImpl extends MeshPhysicalMaterial {
  constructor() {
    super({
      metalness: 0.6,
      roughness: 0.4,
      envMapIntensity: 1,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1
    });
  }
}

extend({ BuildingMaterialImpl });