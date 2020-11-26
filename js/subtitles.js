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
  cupboardMove: "책장이 밀자 숨겨진 방이 나타났다!",
  barrier: "도로용 장애물이다. \n왜 여기있는지는 모르겠다.",
};

const subtitlesENG = {};

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
