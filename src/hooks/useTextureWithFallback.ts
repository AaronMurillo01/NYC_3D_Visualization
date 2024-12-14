import { useEffect, useState } from 'react';
import { Texture } from 'three';
import { TEXTURES, TextureKey, loadTexture } from '../utils/materials/textures';

export function useTextureWithFallback(textureKey: TextureKey): Texture | null {
  const [texture, setTexture] = useState<Texture | null>(null);

  useEffect(() => {
    loadTexture(TEXTURES[textureKey]).then(setTexture);
  }, [textureKey]);

  return texture;
}

export function useMultipleTexturesWithFallback(textureKeys: TextureKey[]): (Texture | null)[] {
  const [textures, setTextures] = useState<(Texture | null)[]>(Array(textureKeys.length).fill(null));

  useEffect(() => {
    Promise.all(textureKeys.map(key => loadTexture(TEXTURES[key])))
      .then(setTextures);
  }, [textureKeys.join(',')]);

  return textures;
}