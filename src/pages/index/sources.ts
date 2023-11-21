import * as THREE from 'three'

// non-glowing lights
const whiteSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFFFFF') })
const greenSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#1EFF51') })
const redSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF0033') })
const blackSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#000000') })
const pinkSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF2FD5') })
const blueSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#01DDFF') })
const orangeSignMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF5100') })
const redLedMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF112B') })
const greenLedMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#00FF00') })

// glowing lights
const neonYellowMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FFF668') })
const neonPinkMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF3DCB') })
const neonBlueMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#00BBFF') })
// const poleLightMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#FF5EF1') })
const neonGreenMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#56FF54') })

export default [
  // Baked Textures
  {
    name: 'ramenShopJoined',
    type: 'basic',
    path: '/static/textures/baked/ramenShopBaked1024.ktx2',
  },
  {
    name: 'machinesJoined',
    type: 'basic',
    path: '/static/textures/baked/machinesBaked1024.ktx2',
  },
  {
    name: 'floor',
    type: 'basic',
    path: '/static/textures/baked/floorBaked1024.ktx2',
  },
  {
    name: 'miscJoined',
    type: 'basic',
    path: '/static/textures/baked/miscBaked1024.ktx2',
  },
  {
    name: 'graphicsJoined',
    type: 'basic',
    path: '/static/textures/baked/graphicsBaked512.ktx2',
  },

  // Matcaps
  {
    name: 'dish',
    type: 'matcap',
    path: '/static/textures/matcaps/dishMatCap.ktx2',
  },
  {
    name: 'dishStand',
    type: 'matcap',
    path: '/static/textures/matcaps/dishMatCap.ktx2',
  },
  {
    name: 'fan1',
    type: 'matcap',
    path: '/static/textures/matcaps/fanMatCap.ktx2',
  },
  {
    name: 'fan2',
    type: 'matcap',
    path: '/static/textures/matcaps/fanMatCap.ktx2',
  },
  // {
  //   name: 'poleLight',
  //   type: 'texture',
  //   path: '/static/textures/matcaps/lightMatcap.png',
  // },
  // {
  //   name: 'neonPink',
  //   type: 'texture',
  //   path: '/static/textures/matcaps/lightMatcap.png',
  // },
  // {
  //   name: 'neonBlue',
  //   type: 'matcap',
  //   path: '/static/textures/matcaps/neonBlueMatCap.ktx2',
  // },
  // {
  //   name: 'neonGreen',
  //   type: 'basic',
  //   path: '/static/textures/matcaps/neonGreenMatCap.ktx2',
  // },

  // Arcade Screens
  {
    name: 'arcadeScreen',
    type: 'basic',
    path: '/static/textures/screens/arcadeScreens/arcadeScreenDefault.ktx2',
  },
  {
    name: 'arcadeScreenCreditsTexture',
    type: 'basic',
    path: '/static/textures/screens/arcadeScreens/arcadeScreenCredits.ktx2',
  },
  {
    name: 'arcadeScreenThanksTexture',
    type: 'basic',
    path: '/static/textures/screens/arcadeScreens/arcadeScreenThanks.ktx2',
  },

  // Easel
  {
    name: 'easelFrontGraphic',
    type: 'basic',
    path: '/static/textures/screens/easel/easelClick.ktx2',
  },
  {
    name: 'easelFrontGraphicTouchTexture',
    type: 'basic',
    path: '/static/textures/screens/easel/easelTouch.ktx2',
  },

  // About Me Screens
  {
    name: 'bigScreen',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenDefault.ktx2',
  },
  {
    name: 'bigScreenAboutMeTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenAbout.ktx2',
  },
  {
    name: 'bigScreenSkillsTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenSkills.ktx2',
  },
  {
    name: 'bigScreenExperienceTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenExperience.ktx2',
  },
  {
    name: 'bigScreenAboutMeMobileTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenAboutMobile.ktx2',
  },
  {
    name: 'bigScreenSkillsMobileTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenSkillsMobile.ktx2',
  },
  {
    name: 'bigScreenExperienceMobileTexture',
    type: 'basic',
    path: '/static/textures/screens/aboutMeScreens/bigScreenExperienceMobile.ktx2',
  },

  // Projects
  {
    name: 'vendingMachineScreen',
    type: 'basic',
    path: '/static/textures/screens/vendingMachineScreens/vendingMachineDefault.ktx2',
  },

  // sideScreen
  {
    name: 'sideScreen',
    type: 'basic',
    path: '/static/textures/screens/sideScreens/sideScreen1.ktx2',
  },
  {
    name: 'sideScreen2Texture',
    type: 'basic',
    path: '/static/textures/screens/sideScreens/sideScreen2.ktx2',
  },
  {
    name: 'sideScreen3Texture',
    type: 'basic',
    path: '/static/textures/screens/sideScreens/sideScreen3.ktx2',
  },

  // color
  {
    name: 'jesseZhouJoined',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'vendingMachineLight',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'projectsWhite',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'articlesWhite',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'whiteButton',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'lampLights',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'greenSignSquare',
    type: 'color',
    material: greenSignMaterial,
  },
  {
    name: 'chinese',
    type: 'color',
    material: greenSignMaterial,
  },
  {
    name: 'projectsRed',
    type: 'color',
    material: redSignMaterial,
  },
  {
    name: 'articlesRed',
    type: 'color',
    material: redSignMaterial,
  },
  {
    name: 'jZhouBlack',
    type: 'color',
    material: blackSignMaterial,
  },
  {
    name: 'aboutMeBlack',
    type: 'color',
    material: blackSignMaterial,
  },
  {
    name: 'creditsBlack',
    type: 'color',
    material: blackSignMaterial,
  },
  {
    name: 'jZhouPink',
    type: 'color',
    material: pinkSignMaterial,
  },
  {
    name: 'aboutMeBlue',
    type: 'color',
    material: blueSignMaterial,
  },
  {
    name: 'blueLights',
    type: 'color',
    material: blueSignMaterial,
  },
  {
    name: 'creditsOrange',
    type: 'color',
    material: orangeSignMaterial,
  },
  {
    name: 'yellowRightLight',
    type: 'color',
    material: orangeSignMaterial,
  },
  {
    name: 'redLED',
    type: 'color',
    material: redLedMaterial,
  },
  {
    name: 'arcadeToken',
    type: 'color',
    material: redLedMaterial,
  },
  {
    name: 'greenLED',
    type: 'color',
    material: greenLedMaterial,
  },
  {
    name: 'neonYellow',
    type: 'color',
    material: neonYellowMaterial,
  },
  {
    name: 'neonPink',
    type: 'color',
    material: neonPinkMaterial,
  },
  {
    name: 'poleLight',
    type: 'color',
    material: whiteSignMaterial,
  },
  {
    name: 'neonBlue',
    type: 'color',
    material: neonBlueMaterial,
  },
  {
    name: 'portalLight',
    type: 'color',
    material: neonBlueMaterial,
  },
  {
    name: 'storageLight',
    type: 'color',
    material: neonBlueMaterial,
  },
  {
    name: 'arcadeRim',
    type: 'color',
    material: neonBlueMaterial,
  },
  {
    name: 'neonGreen',
    type: 'color',
    material: neonGreenMaterial,
  },
]
