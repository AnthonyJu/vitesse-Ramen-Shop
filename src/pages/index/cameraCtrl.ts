import Gasp from 'gsap'

export function toDefault(cameraPos: THREE.Vector3, orbitTarget: THREE.Vector3) {
  Gasp.to(
    cameraPos,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: -11.1,
      y: 1,
      z: -7.6,
    },
  )

  Gasp.to(
    orbitTarget,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: 0,
      y: 0,
      z: -1,
    },
  )
}
