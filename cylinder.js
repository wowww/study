/* eslint-disable */
alert("원기둥의 넓이 구하기!");

function getSylinderVolume(radius, h) {
  let PI = 3.14;
  return 2 *  PI * radius * h + 2 * PI * radius * radius;
}

console.log(volume);
let radius = parseInt(prompt("반지름 값을 입력하세요."));
let h = parseInt(prompt("높이 값을 입력하세요."));
let volume = getSylinderVolume(radius, h);

console.log(volume);
