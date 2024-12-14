import { MeshPhysicalMaterial } from 'three';
import { extend } from '@react-three/fiber';

export class WaterMaterialImpl extends MeshPhysicalMaterial {
  constructor() {
    super({
      color: '#006994',
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.8,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
      envMapIntensity: 2
    });
  }
}

extend({ WaterMaterialImpl });