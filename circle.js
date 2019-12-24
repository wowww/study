alert("원의 넓이 구하기!");
function getCircleVolume(radius) {
  let PI = 3.14;
  return radius * radius * PI;
}

let circleRadius = prompt("반지름의 값을 입력하세요.");
let volume = getCircleVolume(circleRadius);

console.log(volume);