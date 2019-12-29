/* eslint-disable */

alert("원의 넓이 구하기!");
function getCircleVolume(radius) {
  let PI = 3.14;
  return radius * radius * PI;
}

let circleRadius = parseInt(prompt("반지름의 값을 입력하세요.\n 숫자만 입력 가능."));
let volume = getCircleVolume(circleRadius);

if(circleRadius){
  alert(volume);
}else{
  alert('숫자를 입력해주세요.')
}

