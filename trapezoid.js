/* eslint-disable */
alert("사다리꼴의 넓이 구하기!");

function getTrapezoidVolume(a, b, h) {
  return (a + b) * h / 0.5 ;
}

let a = parseInt(prompt("윗변 값을 입력하세요."));
let b = parseInt(prompt("밑변 값을 입력하세요."));
let h = parseInt(prompt("높이 값을 입력하세요."));
let volume = getTrapezoidVolume(a, b, h);

console.log(volume);
