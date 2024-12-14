import { RepeatWrapping, Vector2, TextureLoader, Texture, Color } from 'three';

// Create a procedural texture
function createProceduralTexture(type: 'normal' | 'roughness'): string {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  
  const imageData = ctx.createImageData(256, 256);
  for (let i = 0; i < imageData.data.length; i += 4) {
    if (type === 'normal') {
      imageData.data[i] = 128;     // R
      imageData.data[i + 1] = 128; // G
      imageData.data[i + 2] = 255; // B
    } else {
      const value = Math.random() * 255;
      imageData.data[i] = value;
      imageData.data[i + 1] = value;
      imageData.data[i + 2] = value;
    }
    imageData.data[i + 3] = 255;   // A
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

// Texture definitions
export const TEXTURES = {
  buildingNormal: createProceduralTexture('normal'),
  buildingRoughness: createProceduralTexture('roughness'),
  waterNormal: createProceduralTexture('normal'),
} as const;

export type TextureKey = keyof typeof TEXTURES;

// Safe texture repeat setup
export function setupTextureRepeat(texture: Texture | null, repeat: Vector2) {
  if (texture) {
    texture.repeat = repeat;
    texture.wrapS = texture.wrapT = RepeatWrapping;
  }
}

// Texture loader with error handling
const textureLoader = new TextureLoader();
export function loadTexture(url: string): Promise<Texture> {
  return new Promise((resolve) => {
    textureLoader.load(
      url,
      (texture) => {
        texture.needsUpdate = true;
        resolve(texture);
      },
      undefined,
      () => {
        console.warn(`Failed to load texture: ${url}, using fallback`);
        const fallbackTexture = textureLoader.load(createProceduralTexture('normal'));
        resolve(fallbackTexture);
      }
    );
  });
}

// Material colors
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
};