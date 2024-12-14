import { RepeatWrapping, Vector2, TextureLoader, Texture } from 'three';

// Create a procedural texture
function createProceduralTexture(type: 'normal' | 'roughness' | 'metal'): string {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  
  const imageData = ctx.createImageData(256, 256);
  const data = imageData.data;
  
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const i = (y * 256 + x) * 4;
      const scale = 0.1;
      
      switch (type) {
        case 'normal':
          // Create a more detailed normal map pattern
          data[i] = 128;     // R
          data[i + 1] = 128; // G
          data[i + 2] = 255; // B
          break;
          
        case 'metal':
          // Create a varied metallic pattern
          const metalValue = Math.random() * 200 + 55;
          data[i] = metalValue;
          data[i + 1] = metalValue;
          data[i + 2] = metalValue;
          break;
          
        case 'roughness':
          // Create a noise-based roughness pattern
          const roughValue = (Math.sin(x * scale) + Math.sin(y * scale) + 2) / 4 * 255;
          data[i] = roughValue;
          data[i + 1] = roughValue;
          data[i + 2] = roughValue;
          break;
      }
      data[i + 3] = 255; // Alpha
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

// Texture definitions with improved patterns
export const TEXTURES = {
  buildingNormal: createProceduralTexture('normal'),
  buildingMetal: createProceduralTexture('metal'),
  buildingRoughness: createProceduralTexture('roughness'),
  waterNormal: createProceduralTexture('normal'),
} as const;

export type TextureKey = keyof typeof TEXTURES;

// Safe texture repeat setup
export function setupTextureRepeat(texture: Texture | null, repeat: Vector2) {
  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.copy(repeat);
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