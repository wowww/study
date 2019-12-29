/* eslint-disable */
alert("원기둥의 겉넓이 구하기!");

function getSylinderVolume(argumentType = [radius, h]) {
  let PI = 3.14;
  if (
    isNaN(argumentType) ||
    argumentType === null
    ) {
    throw new Error("인자가 올바르지않습니다. 숫자 값을 정확히 입력해주세요.");
  } else {
  return (2 *  PI * radius * h) + (2 * PI * (radius * radius));
  }
}
console.log(volume);
let radius = parseInt(prompt("반지름 값을 입력하세요."));
let h = parseInt(prompt("높이 값을 입력하세요."));
let volume = getSylinderVolume(radius, h);

console.log(volume);
