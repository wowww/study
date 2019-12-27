# 자바스크립트 함수-추가미션
## 1. default parameter 와 rest parameter

  ### default parameter (매개변수 기본 값)

  - 함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 그렇지 않은 경우에도 에러가 발생하지 않는다. 함수는 매개변수의 갯수와 인수의 갯수를 체크하지않는다. 인수가 부족한 경우 매개변수의 값은 undefinded이다.
  - 기본 함수 매개변수(default function parameter)를 사용하면 값이 없거나 undefinded가 전달될 경우 매개변수를 기본값으로 초기화할 수 있다.

``` javascript
function sum(x, y) {
  return x + y;
}

console.log(sum(1)); // NaN
```
따라서 매개변수에 적절한 인수가 전달되었는지 함수 내부에서 확인할 필요가 있다.
``` javascript
function sum(x, y) {
  // 매개변수의 값이 falsy value인 경우, 기본값을 할당한다.
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1));    // 1
console.log(sum(1, 2)); // 3
```
ES6(ES2015)에서는 매개변수 기본값을 사용하여 함수 내에서 수행하던 인수 체크 및 초기화를 간소화 할 수 있다. 매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우에만 유효하다.
``` javascript
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1));    // 1
console.log(sum(1, 2)); // 3
```
매개변수 기본값은 함수 정의 시, 선언한 매개변수 개수를 나타나내는 함수 객체의 length 프로퍼티와 arguments 객체에 영향을 주지 않는다.
  > - arguments 객체
  >> 모든 함수 내에서 이용 가능한 지역 변수입니다. arguments 객체를 사용하여 함수 내에서 모든 인수를 참조할 수 있으며, 호출할 때 제공한 인수 각각에 대한 항목을 갖고 있습니다. 항목의 인덱스는 0부터 시작합니다. 
  >> [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

``` javascript
function foo(x, y = 0) {
  console.log(arguments);
}

console.log(foo.length); // 1

sum(1);    // Arguments { '0': 1 }
sum(1, 2); // Arguments { '0': 1, '1': 2 }
```

### rest parameter
- Rest 파라미터(Rest Parameter, 나머지 매개변수)는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다.
- Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
``` javascript
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);
```
함수에 전달된 인수들은 순차적으로 파라미터와 Rest 파라미터에 할당된다.
``` javascript
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest);  // [ 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```
Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 나머지 인수들이 모두 배열에 담겨 할당된다. 따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.
``` javascript
function foo( ...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```
Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
``` javascript
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2
```
[참고: https://poiemaweb.com](https://poiemaweb.com/es6-extended-parameter-handling)
***
## 2. call by value, call by reference의 차이
자바스크립트는 세가지 주요한 방식을 통해 데이터의 값을 조작할 수 있다.
- 값을 새로운 변수에 할당하여 사용할 수 있다.
- 값을 함수나 메서드의 전달인자로 넘겨줄 수 있다.
- 데이터의 두 값이 동일한지를 알아보기 위해 한 값과 다른 값을 비교할 수 있다.

이러한 데이터 값을 조작하는 방식은 2가지로 나뉘는 데, 그것이 기본형 데이터 (값에 의한, -by value)와 참조형 데이터(by reference)이다.

### Call by value (값에 의한 호출)
- 장점: 복사하여 처리하기 때문에 안전하다. 원래의 값이 보존된다.
- 단점: 복사를 하기 때문에 메모리 사용량이 늘어난다.
- 종류: Number, String, boolean, null, undifined
기본형 데이터를 조작할 때 가장 중요한 것은 데이터 값이다. 값을 할당할 때 기본형 데이터의 경우 실제 그 값이 복사되며, 복사 시 해당 데이터는 변수, 객체 프포퍼티, 배열 원소에 저장되어 원본 데이터와는 별도의 독립적인 값이 된다. 따라서 값을 변경한다고 하여 원본 데이터에는 아무런 영향을 미치지 않는다.
``` javscript
var original = 1;
var copy = original;
original = 2;
console.log(original);    //result : 2
console.log(copy);    //result : 1
```
위 코드에서 'original'이라는 변수에서 값을 할당한 후 'copy'라는 변수에 'original'변수의 값을 복사하였다. 그 후 원본 'original'변수의 값을 바꾸고 나서 값을 보면 원본은 변경이 되었지만 'copy'라는 변수의 값은 변경되지 않았다.

이러한 데이터는 함수 내에서 값을 변경하면 함수에 전달된 데이터만 변경될 뿐 함수 전달된 원본 복사본에는 아무런 영향을 미치지않는다.
### Call by reference (참조에 의한 호출)
- 장점: 복사를 하지않고 직접 참조를 하기때문에 빠르다.
- 단점: 직접 참조를 하기때문에 원래 값이 영향을 받는다.(리스크)
- 종류: Object, Array, function
참조형 데이터의 경우 값에 대한 실제 복사본이 오직 하나만 존재하며, 참조형 데이터는 그 값의 주소를 말 그대로 참조할 값의 복사본이나 값 자체가 할당되지 않는다. 참조에 의해 할달된 새 변수는 원본 변수가 가르키는 값과 동일한 값을 가리킨다. 원본 변수와 할달된 변수는 모두 동등하며, 값을 조작하는데 사용될 수 있다. 그래서 할당된 변수(참조)가 변경되면 원본 변수에서도 동일하게 변경된다.
``` javascript
var original = [1,2,3,4,5];
var copy = original;
    
copy[0] = undefined;
console.log(copy);    // 결과 : [undefined, 2, 3, 4, 5]
console.log(original);    // 결과 : [undefined, 2, 3, 4, 5]
```
[참고: https://blog.martinwork.co.kr](https://blog.martinwork.co.kr/javascript/2017/07/23/callbyreference-callbyvalue.html)

