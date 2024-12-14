import { Object3DNode } from '@react-three/fiber';
import { BuildingMaterialImpl } from './BuildingMaterialClass';
import { WaterMaterialImpl } from './WaterMaterialClass';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      buildingMaterialImpl: Object3DNode<BuildingMaterialImpl, typeof BuildingMaterialImpl>;
      waterMaterialImpl: Object3DNode<WaterMaterialImpl, typeof WaterMaterialImpl>;
    }
  }
}