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
#### binary search(이진 탐색)이란?
- 데이터가 정렬 돼 있는 배열에서 특정한 값을 찾아내는 알고리즘이다. 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 x와 비교한다. x가 중간 값보다 작으면 중간 값을 기준으로 좌측의 데이터들을 대상으로 x가 중간값보다 크면 배열의 우측을 대상으로 다시 탐색한다. 동일한 방법으로 다시 중간의 값을 임의로 선택하고 비교한다. 해당 값을 찾을 때까지 이 과정을 반복한다.
#### 예시
  - 만약 친구가 1부터 10까지 중에 숫자 하나를 생각한 다음 우리에게 그 숫자가 뭔지 맞춰보라고 했다고 생각해보자. 이 때 그 숫자를 맞추기 위해 1부터 10까지 하나하나 숫자가 맞는지 물어본다면 우리는 최악의 경우 10번을 질문해야 할 것이다.
  - 그런데 만약 우리가 1과 10의 가운데 숫자를 부르고 맞춰야 할 숫자가 그 숫자보다 작은지 큰지를 알려준다면 어떨까?
  - [예시 참고 사이트](https://im-developer.tistory.com/126)
  - 이진 탐색은 순차 탐색에 비해 엄청나게 빠른 속도로 원하는 데이터를 찾을 수 있다.
  - 한 번에 엄청나게 많은 데이터를 검색 범위에서 줄일 수 있기 때문에 1부터 100사이의 숫자 중 검색한다면 어떤 숫자를 찾던 최대 7번 만에 정답을 찾을 수 있다.
  - n개의 원소를 가진 리스트에서 단순 탐색을 사용하면 최대 n번의 탐색이 필요하다.
  - 이 것을 Big O 표기법으로 O(n)이라고 표기하고 선형 시간이라고 부른다.
  - 이진 탐색을 사용하면 최대 log n번만에 답을 찾울 스 있다.
  - 이것을 Big O 표기법으로 O(log n)이라고 표기하고 로그 시간이라고 부른다.
  - 이진 탐색은 매우 빠른 속도로 데이터를 찾을 수 있지만 반드시 데이터가 정렬되어 있어야만 한다.
  #### log 로그
  - 이 표현은 쉽게 말해서 10을 몇번 곱해야 100이 되는 지 묻는 것이다. 
  ![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fxelml%2FbtqwHKmLlsN%2FEeWsDRjhHvhhkrxsrrS751%2Fimg.png)
  - 답은 2가 된다.
  - [로그에 대해 더 알아보기](https://mathbang.net/595)
  
### 단위 테스트란?
