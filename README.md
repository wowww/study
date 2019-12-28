# 다각형의 넓이구하기
## 재귀 연습하기
### 팩토리얼
``` javascript
function factorial(x) {
  // 종료 조건
  if (x < 0) return;
  // 기반 조건
  if (x === 0) return 1;
  // 재귀
  return x * factorial(x - 1);
}

console.log(factorial(3));
```
### 피보나치 수열
``` javascript
var i = 0;
function fibonacci (arr, n) {
if(arr.length < n) {
arr.push(arr[i] + arr[++i])
fibonacci (arr, n)
}
return arr;
}

console.log(fibonacci(3));

```
## 미션1. 다음처럼 동작하는 getArea 함수 만들기
``` javascript
// getArea('circle', 10);
// 원의 넓이 값출력

// getArea('rect', 10,15);
// 사각형의 넓이값출력

// getArea('trapezoid', 10,15,12);
// 사다리꼴의 넓이값출력

// getArea('circle', 1, n);
// 반지름이 1부터 n까지 1씩 증가하면서, n개까지의 원의 넓이의 모든 합을 출력. (재귀적인 해결책을 제시한다)
```
## 미션2. printExecutionSequence 함수 만들기
``` javascript
getCircle() 
getCircle() 
getArea('circle',2) 
getArea('rect',2,3) 
printExecutionSequence()  // printExecutionSequence가 불려지면, 함수 호출된 순서를 출력한다. 
// 계산수행순서 : circle, circle, circle, rect
```
## 추가미션
var, const, let의 hoisting에 대해서 자세히 알아보기
### Scope
- 유효 범위
변수가 선언되면 모든 코드에서 사용가능한 것이 아니라 변수의 종류에 따라 사용 가능한 '유효 범위'가 정해지게 되는데 이를 Scope(스코프)라 한다. 변수가 사용되는 유효범위를 뜻하며 크게 전역/지역 스코프로 나뉜다.
- global(전역): 어떤 함수나 블록에도 속하지 않는 최상단 스코프
- local(지역): 특정 함수나 블록 내부에 국한된 스코프
``` javascript
var global = 'global scope'; // 어떤 함수나 블록에도 속하지 않는다.

function foo() {
  var local = 'local scope'; // 함수 내에 존재한다.
};
```
내부 스코프에서 외부 스코프로 접근은 가능하지만, 그 반대의 접근은 불가하다.
### hoisting(호이스팅)
- 최상단 선언
- 스코프 내에서 모든 변수 선언들을 위치에 관계없이 스코프의 가장 최상단으로 끌어올려 선언시키는 것을 뜻함.
``` javascript
function first() {}
function secone() {}

var third = 'hello';
const fourth = 'world';
```
이러한 순서의 코드라도 내부적으로는 변수 선언들이 호이스팅되어 아래와 같은 방법으로 작동한다.
``` javascript
var third;
const fourth;

function first() {}
function secone() {}

third = 'hello';
fourth = 'world';
```
- 변수 할당, 재할당은 해당하지 않고 선언만을 Hoisting한다.
- 내부적인 처리이므로 실제 코드가 변경되어 쓰여지는 것은 아니다.
### var, let, const
var는 ES2015(ES6) 이전부터 사용됬고, let과 const는 ES6에서 등장했다.
이 세가지는 scope와 hoisting을 중점으로 뚜렷한 차이가 난다.
#### var
함수 스코프를 사용하며 재할당, 재선언 모두 가능하다.
#### Temporal Dead Zone(TDZ)이란?
호이스팅시 undefinend로 값이 자동 초기화되는 var와 달리 let, const는 초기값이 설정되지않는다. 따라서 let과 const의 경우 변수 값이 선언되고 난 후에야 실제 변수 사용이 가능하며 그 이전에는 ReferenceError를 발생시킨다. 이렇게 호이스팅-변수 선언 사이의 구간, 변수가 존재하기는 하나 선언되기 전까지의 구간을 TDZ이라 일컫는다.
#### let과 const는 호이스팅되지 않을까?
에러가 발생하기는 해도 let과 const 역시 변수의 존재를 알기에 에러가 발생하는 것이므로 호이스팅 되고 있는 것이다. 나아가 에러를 발생시킴으로써 이후 발생할 버그를 초기에 잡을 수 있다.
``` javascript
console.log(testLet); // Uncaught ReferenceError: Cannot access 'testLet' before initialization
let testLet = 'test tdz';
console.log(testLet); // 'test tdz'

console.log(testConst); // Uncaught ReferenceError: Cannot access 'testConst' before initialization
const testConst = 'test tdz';
console.log(testConst); // 'test tdz'
```
#### let
- 블록 스코프를 사용하며 재할당이 가능하고 재선언을 불가능하다.
- 호이스팅이 되긴 하지만 변수 값 선언 전까지 TDZ 제한으로 ReferenceError를 발생시킨다.
``` javascript
console.log(testLet); // Uncaught ReferenceError: Cannot access 'testLet' before initialization
let testLet = 1;
console.log(testLet); // 1
```
#### const
- 블록 스코프를 사용하며 재선언, 재할당 모두 불가능하다.
- let과 동일하게 호이스팅이 되긴 하지만 변수 값 선언 전까지 TDZ 제한으로 ReferenceError를 발생시킨다.
``` javascript
console.log(testConst); // Uncaught ReferenceError: Cannot access 'testConst' before initialization
const testConst = 1;
console.log(testConst); // 1
```
[출처: https://velog.io/@yejinh](https://velog.io/@yejinh/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-var-let-const)
### printExecutionSequence 함수 수정하기
- 수행순서 뿐 아니라, 함수의 결과까지 순서대로 같이 출력하는 기능을 만들어보자.
### binary search 알고리즘을 공부하고, 이를 재귀함수로 구현해보기
### 단위 테스트란?
