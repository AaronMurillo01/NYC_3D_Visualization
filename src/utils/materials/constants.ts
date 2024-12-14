import { Color } from 'three';

export const COLORS = {
  buildings: {
    glass: '#87CEEB',
    concrete: '#A9A9A9',
    stone: '#E8E8E8',
    modern: '#B8B8B8',
  },
  environment: {
    water: '#006994',
    park: '#2d5a27',
    ground: '#202020',
  }
} as const;

export const MATERIAL_PRESETS = {
  glass: {
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.6,
    envMapIntensity: 2,
    clearcoat: 1,
  },
  concrete: {
    metalness: 0.6,
    roughness: 0.4,
    envMapIntensity: 1,
    clearcoat: 0.5,
  },
  water: {
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.8,
    clearcoat: 1,
    clearcoatRoughness: 0.2,
    envMapIntensity: 2,
  }
} as const;