import { player, setting } from "./settings.js";

// hidden event (cupboard move)
let hiddenEvent = {
  t: 0,
  dt: 0.02,
  startX: -93,
  endX: -180,
  start: false,
};

// show popup (normal, vr)
function showPopup() {
  document.querySelector("body").removeEventListener("click", showPopup);
  //if (setting.vr) {
  //  document.getElementById(
  //    "jsPopupTextVR1"
  //  ).innerHTML = document.getElementById("jsPopupText").innerHTML;
  //  document.getElementById(
  //    "jsPopupTextVR2"
  //  ).innerHTML = document.getElementById("jsPopupText").innerHTML;
  //  document.getElementById("jsPopupVR1").style.display = "block";
  //  document.getElementById("jsPopupTextVR1").style.display = "block";
  //  document.getElementById("jsPopupVR2").style.display = "block";
  //  document.getElementById("jsPopupTextVR2").style.display = "block";
  //} else {
    document.getElementById("jsPopup").style.display = "block";
    document.getElementById("jsPopupText").style.display = "block";
  //}

  document.querySelector("body").addEventListener("click", hidePopup);
}

// hide popup
function hidePopup() {
  document.querySelector("body").removeEventListener("click", hidePopup);
  document.getElementById("jsPopup").style.display = "none";
  document.getElementById("jsPopupText").style.display = "none";
  document.getElementById("jsPopupVR1").style.display = "none";
  document.getElementById("jsPopupTextVR1").style.display = "none";
  document.getElementById("jsPopupVR2").style.display = "none";
  document.getElementById("jsPopupTextVR2").style.display = "none";
}

// kew interface (wasd)
const onKeyDown = function (event) {
  switch (event.keyCode) {
    case 38: // up
    case 87: // w
      player.moveForward = true;
      break;

    case 37: // left
    case 65: // a
      player.moveLeft = true;
      break;

    case 40: // down
    case 83: // s
      player.moveBackward = true;
      break;

    case 39: // right
    case 68: // d
      player.moveRight = true;
      break;
  }
};

// kew interface (wasd)
const onKeyUp = function (event) {
  switch (event.keyCode) {
    case 38: // up
    case 87: // w
      player.moveForward = false;
      break;

    case 37: // left
    case 65: // a
      player.moveLeft = false;
      break;

    case 40: // down
    case 83: // s
      player.moveBackward = false;
      break;

    case 39: // right
    case 68: // d
      player.moveRight = false;
      break;
  }
};

export { hiddenEvent, showPopup, hidePopup, onKeyDown, onKeyUp };
