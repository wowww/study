// alert("사각형의 넓이 구하기!");
// function getSquareVolume() {
//   const argumentType = [x, y];
//   if (
//     isNaN(argumentType[0]) ||
//     isNaN(argumentType[1]) ||
//     argumentType[0] === null ||
//     argumentType[1] === null
//   ) {
//     throw new Error("인자가 올바르지않습니다. 숫자 값을 정확히 입력해주세요.");
//   } else {
//     return x * y;
//   }
// }

// let x = prompt("가로 값을 입력하세요.");
// let y = prompt("세로 값을 입력하세요.");
// let volume = getSquareVolume(x, y);

// console.log(volume);

alert("사각형의 넓이 구하기!");

function getSquareVolume(argumentType = [x, y])
{
  if (
    isNaN(argumentType) ||
    argumentType === null
    ) {
    throw new Error("인자가 올바르지않습니다. 숫자 값을 정확히 입력해주세요.");
  } else {
    return x * y;
  }
}

let x = prompt("가로 값을 입력하세요.");
let y = prompt("세로 값을 입력하세요.");
let volume = getSquareVolume(x, y);

console.log(volume);