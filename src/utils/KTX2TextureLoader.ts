import * as THREE from 'three'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader'

import type { TresObject3D } from '@tresjs/core'
import type { WebGLRenderer } from 'three'
import type WebGPURenderer from 'three/examples/jsm/renderers/webgpu/WebGPURenderer'

export function useKTX2TextureLoader(path: string = '/static/basis/') {
  const KTX2TextureLoader = new KTX2Loader()
  KTX2TextureLoader.setTranscoderPath(path)

  function setDetectSupport(renderer: WebGLRenderer | WebGPURenderer) {
    KTX2TextureLoader.detectSupport(renderer)
  }

  function loadKTX2Texture(obj: TresObject3D, type: string, path: string) {
    KTX2TextureLoader.load(path, (map) => {
      if (type === 'basic') {
        obj.material = new THREE.MeshBasicMaterial({ map })
      }
      else if (type === 'matcap') {
        obj.material = new THREE.MeshMatcapMaterial({ matcap: map, side: THREE.DoubleSide })
      }
    })
  }

  function getKTX2Texture(path: string) {
    return new Promise<THREE.Texture>((resolve) => {
      KTX2TextureLoader.load(path, (texture) => {
        resolve(texture)
      })
    })
  }

  return {
    setDetectSupport,
    loadKTX2Texture,
    getKTX2Texture,
  }
}
