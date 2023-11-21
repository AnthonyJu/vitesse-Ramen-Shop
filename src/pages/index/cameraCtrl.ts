import Gasp from 'gsap'

export function toDefault(cameraPos: THREE.Vector3, orbitTarget: THREE.Vector3) {
  Gasp.to(
    cameraPos,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: -12,
      y: 2,
      z: -7,
    },
  )

  Gasp.to(
    orbitTarget,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: 0,
      y: 4,
      z: -1,
    },
  )
}
