import { setting } from "./settings.js";

const subtitlesKOR = {
  pCube49:
    "오래되어 보이는 나무상자이다 <br>무거워서 옮기거나 열지는 못할 것 같다.",
  "boxwood:pCube1":
    "오래되어 보이는 나무상자이다 <br>무거워서 옮기거나 열지는 못할 것 같다.",
  pCube48:
    "오래되어 보이는 나무상자이다 <br>무거워서 옮기거나 열지는 못할 것 같다.",
  pCube1: "무거워 보이는 돌이다.",
  pCube2: "무거워 보이는 돌이다.",
  pCube4: "평범해 보이는 나무판자이다.",
  pCube47: "평범해 보이는 나무판자이다.",
  "boxxe:pCylinder1": "낡은 기름통인 것 같다.",
  bed: "더럽고 오래되어 보이는 침대이다. <br>피가 묻은 것 처럼 보인다",
  book: "오래되어 보이는 일기장이다. <br>일기를 읽어볼 여유는 없을 것 같다.",
  diary:
    "11월 12일, 가림막이 부서져서 새걸로 바꿔야겠다. <br>11월 15일, 낡은 책장을 구해 가림막으로 만들었다. <br>11월 16일, 가림막이 나름 티도 안나고 괜찮은 것 같다. <br>11월 21일, 책장의 물건들이 자꾸 떨어져 다 치워버렸다. <br>...",
  woodenCabinet:
    "특이하게 오래되어 보이지 않는 캐비넷이다. <br>열 수 있을 것 같다.",
  openWoodenCabinet: "캐비넷을 열었다!",
  key: "<span class='highlight'>열쇠</span>를 획득했다!",
  door:
    "문은 자물쇠로 굳게 닫혀있다. <br>문을 열기 위해서는 <span class='highlight'>열쇠</span>가 필요할 것 같다.",
  doorOpen: "<span class='highlight'>열쇠로 문을 열었다!</span>",
  metaldoor:
    "문을 열 수 있을 것 같다. <br>하지만 아직 살펴볼 곳이 남은 것 같다.",
  metaldoorTwo: "문을 열 수 있을 것 같다!",
  metaldoorOpen: "문을 열었다!",
  axe: "도끼가 땅에 깊게 박혀서 뺄 수 없을 것 같다.",
  corpse:
    "<span class='highlight'>시체</span>인 것 같다. <br>빨리 이곳을 빠져나가야 한다.",
  corpseWire:
    "시체를 덮은 천과 끈이 새 것처럼 깨끗하다. <br>처리한 지 얼마 되지 않은 것 같다.",
  cupboard: "크고 낡은 책장이다. <br>이상한 점은 없는 것 같다.",
  seeCupboard:
    "크고 낡은 책장이다. <br>근데 이상할 정도로 아무 것도 채워지지 않았다. <br><span class='highlight'>최근에 이곳</span>으로 옮긴 것 같이...",
  cupboardMove:
    "책장을 밀자 <span class='highlight'>숨겨진 방</span>이 나타났다!",
  barrier: "도로용 장애물이다. <br>왜 여기있는지는 모르겠다.",
};

const subtitlesENG = {
  pCube49:
    "It's an old wooden box. <br>It's too heavy to move. Also I can't even open it.",
  "boxwood:pCube1":
    "It's an old wooden box. <br>It's too heavy to move. Also I can't even open it.",
  pCube48:
    "It's an old wooden box. <br>It's too heavy to move. Also I can't even open it.",
  pCube1: "It's a heavy-looking stone.",
  pCube2: "It's a heavy-looking stone.",
  pCube4: "It's a normal wooden board.",
  pCube47: "It's a normal wooden board.",
  "boxxe:pCylinder1": "This is a rusty drum.",
  bed: "It's a dirty bed. <br>It looks like blood on it.",
  book: "There is an old diary. <br>I don't have spare to read the diary now.",
  diary:
    "Nov 12th, the cover is broken. need to change it. <br>Nov 15th, I got an old shelf to make it a cover. <br>Nov 16th, The cover seems not bad. <br>Nov 21th, Things on the bookshelf kept falling off (clean). <br>...",
  woodenCabinet:
    "Unusually, this cabinet is not dirty. <br>Looks like I can open it.",
  openWoodenCabinet: "I opened the cabinet.",
  key: "I got the <span class='highlight'>key</span>.",
  door:
    "The door is locked tight. <br>There is a lock. I think I need a <span class='highlight'>key</span>.",
  doorOpen: "<span class='highlight'>I opened the door with a key!</span>",
  metaldoor:
    "I think I can open the door. <br>But I think we still have a place to look.",
  metaldoorTwo: "I think I can open the door.",
  metaldoorOpen: "The door opened!",
  axe: "The axe is so deep in the ground that I can't take it out.",
  corpse:
    "Looks like a <span class='highlight'>corpse</span>. <br>Must get out of here quickly.",
  corpseWire:
    "The cloth and string covering the body are as clean as new. <br>I don't think it's been long since we've handled.",
  cupboard: "It's a big old bookcase. <br>Nothing strange..",
  seeCupboard:
    "It's a big old bookcase. <br>But why isn't there anything filled? <br>I think it <span class='highlight'>recently moved here...</span>",
  cupboardMove:
    "A <span class='highlight'>hidden room</span> appeared when the bookshelf pushed!",
  barrier: "It's a roadblock. <br>I don't know why It's here.",
};

function getSubtitle(name) {
  if (setting.korean) {
    if (name in subtitlesKOR) return subtitlesKOR[name];
    else return "특이한 점은 없는 것 같다.";
  } else {
    if (name in subtitlesENG) return subtitlesENG[name];
    else return "there's anything unusual.";
  }
}

export { subtitlesKOR, subtitlesENG, getSubtitle };
