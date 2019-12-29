/* eslint-disable */
alert("사다리꼴의 넓이 구하기!");

function getTrapezoidVolume(argumentType = [a, b, h]) {
  if (
    isNaN(argumentType) ||
    argumentType === null
    ) {
    throw new Error("인자가 올바르지않습니다. 숫자 값을 정확히 입력해주세요.");
  } else {
  return (a + b) * h / 2 ;
  }
}

let a = parseInt(prompt("윗변 값을 입력하세요."));
let b = parseInt(prompt("밑변 값을 입력하세요."));
let h = parseInt(prompt("높이 값을 입력하세요."));
let volume = getTrapezoidVolume(a, b, h);

console.log(volume);
