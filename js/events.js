import { player } from "./settings.js";

let hiddenEvent = {
  t: 0,
  dt: 0.02,
  startX: -93,
  endX: -180,
  start: false,
};

function showPopup() {
  document.querySelector("body").removeEventListener("click", showPopup);
  document.getElementById("jsPopup").style.display = "block";
  document.getElementById("jsPopupText").style.display = "block";

  document.querySelector("body").addEventListener("click", hidePopup);
}

function hidePopup() {
  document.querySelector("body").removeEventListener("click", hidePopup);
  document.getElementById("jsPopup").style.display = "none";
  document.getElementById("jsPopupText").style.display = "none";
}

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
