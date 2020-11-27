import { setting } from "./settings.js";

const subtitlesKOR = {
  pCube49:
    "오래되어 보이는 나무상자이다 \n무거워서 옮기거나 열지는 못할 것 같다.",
  "boxwood:pCube1":
    "오래되어 보이는 나무상자이다 \n무거워서 옮기거나 열지는 못할 것 같다.",
  pCube48:
    "오래되어 보이는 나무상자이다 \n무거워서 옮기거나 열지는 못할 것 같다.",
  pCube1: "무거워 보이는 돌이다.",
  pCube2: "무거워 보이는 돌이다.",
  pCube4: "평범해 보이는 나무판자이다.",
  pCube47: "평범해 보이는 나무판자이다.",
  "boxxe:pCylinder1": "낡은 기름통인 것 같다.",
  bed: "더럽고 오래되어 보이는 침대이다. \n피가 묻은 것 처럼 보인다",
  book: "오래되어 보이는 일기장이다. \n일기를 읽어볼 여유는 없을 것 같다.",
  diary:
    "11월 12일, 가림막이 부서져서 새걸로 바꿔야겠다. \n11월 15일, 낡은 책장을 구해 가림막으로 만들었다. \n 11월 16일, 가림막이 나름 티도 안나고 괜찮은 것 같다. \n11월 21일, 책장의 물건들이 자꾸 떨어져 다 치워버렸다. \n...",
  woodenCabinet:
    "특이하게 오래되어 보이지 않는 캐비넷이다. \n열 수 있을 것 같다.",
  openWoodenCabinet: "캐비넷을 열었다!",
  key: "열쇠를 획득했다!",
  door:
    "문은 자물쇠로 굳게 닫혀있다. \n문을 열기 위해서는 열쇠가 필요할 것 같다.",
  doorOpen: "열쇠로 문을 열었다!",
  metaldoor: "문을 열 수 있을 것 같다. \n하지만 아직 살펴볼 곳이 남은 것 같다.",
  metaldoorTwo: "문을 열 수 있을 것 같다!",
  metaldoorOpen: "문을 열었다!",
  axe: "도끼가 땅에 깊게 박혀서 뺄 수 없을 것 같다.",
  corpse: "시체인 것 같다. \n빨리 이곳을 빠져나가야 한다.",
  corpseWire:
    "시체를 덮은 천과 끈이 새 것처럼 깨끗하다. \n처리한 지 얼마 되지 않은 것 같다.",
  cupboard: "크고 낡은 책장이다. \n이상한 점은 없는 것 같다.",
  seeCupboard:
    "크고 낡은 책장이다. \n근데 이상할 정도로 아무 것도 채워지지 않았다. \n최근에 이곳으로 옮긴 것 같이...",
  cupboardMove: "책장을 밀자 숨겨진 방이 나타났다!",
  barrier: "도로용 장애물이다. \n왜 여기있는지는 모르겠다.",
};

const subtitlesENG = {
  pCube49:
    "It's an old wooden box. \nIt's too heavy to move. Also I can't even open it.",
  "boxwood:pCube1":
    "It's an old wooden box. \nIt's too heavy to move. Also I can't even open it.",
  pCube48:
    "It's an old wooden box. \nIt's too heavy to move. Also I can't even open it.",
  pCube1: "It's a heavy-looking stone.",
  pCube2: "It's a heavy-looking stone.",
  pCube4: "It's a normal wooden board.",
  pCube47: "It's a normal wooden board.",
  "boxxe:pCylinder1": "This is a rusty drum.",
  bed: "It's a dirty bed. \nIt looks like blood on it.",
  book: "There is an old diary. \nI don't have spare to read the diary now.",
  diary:
    "Nov 12th, the cover is broken. need to change it. \nNov 15th, I got an old shelf to make it a cover. \nNov 16th, The cover seems not bad. \nNov 21th, Things on the bookshelf kept falling off (clean). \n...",
  woodenCabinet:
    "Unusually, this cabinet is not dirty. \nLooks like I can open it.",
  openWoodenCabinet: "I opened the cabinet.",
  key: "I got the key.",
  door: "The door is locked tight. \nThere is a lock. I think I need a key.",
  doorOpen: "I opened the door with a key!",
  metaldoor:
    "I think I can open the door. \nBut I think we still have a place to look.",
  metaldoorTwo: "I think I can open the door.",
  metaldoorOpen: "The door opened!",
  axe: "The axe is so deep in the ground that I can't take it out.",
  corpse: "Looks like a corpse. \nMust get out of here quickly.",
  corpseWire:
    "The cloth and string covering the body are as clean as new. \nI don't think it's been long since we've handled.",
  cupboard: "It's a big old bookcase. \nNothing strange..",
  seeCupboard:
    "It's a big old bookcase. \nBut why isn't there anything filled? \nI think he recently moved here...",
  cupboardMove: "A hidden room appeared when the bookshelf pushed!",
  barrier: "It's a roadblock. I don't know why It's here.",
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
