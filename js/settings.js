import * as THREE from "./threejs/three.module.js";

// loading screen
const loadingScreen = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 100),
  VRcamera: new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 100),
  box: new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshBasicMaterial({ color: 0x4444ff })
  ),
};

// player status
let player = {
  storyStart: false,
  height: 1.6,
  speed: 1000,

  moveForward: false,
  moveBackward: false,
  moveLeft: false,
  moveRight: false,

  velocity: new THREE.Vector3(),
  direction: new THREE.Vector3(),

  // event status
  seeDoor: false,
  seeDiary: false,
  seeCupboard: false,
  readDiary: false,
  moveCupboard: false,
  metaldoorOpen: false,
  hasKey: false,
  doorOpen: false,
};

// setting status
let setting = {
  korean: false,
  developerMode: false,
  blockVisible: false,
  blockWireframe: true,
  spotlight: true,
  vr: false,
  lock: false,
  shadow: true,
};

// set object and children name
function setChildrenName(obj, name) {
  obj.name = name;
  for (let i = 0; i < obj.children.length; i++) {
    obj.children[i].name = name;
  }
}

// fix position into room
function fixPosition(camera) {
  if (player.doorOpen || setting.developerMode) return;
  if (camera.position.x > 325) camera.position.x = 305;
  if (camera.position.x < -96) camera.position.x = -76;
  if (camera.position.z > 102) camera.position.z = 82;
  if (camera.position.z < -220) camera.position.x = -200;
  if (camera.position.x != 0) camera.position.y = 0;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export {
  loadingScreen,
  player,
  setting,
  setChildrenName,
  fixPosition,
  lerp,
  ease,
};
