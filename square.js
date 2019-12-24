alert("사각형의 넓이 구하기!");
function getSquareVolume(x, y) {
  return x * y ;
}

let x = prompt("가로 값을 입력하세요.");
let y = prompt("세로 값을 입력하세요.");
let volume = getSquareVolume(x, y);

console.log(volume);
