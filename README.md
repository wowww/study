# 배열과 객체연습
## 객체 탐색
### 1. for-in을 사용한 방법  
 ``` javascript
 // 반복분 for-of, for-in

const numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  console.log(num);
};

// num은 이름이 다른 것이 되도 상관없다.
// num은 10, 20, 30, 40, 50을 가르킨다.
// for-of는 배열안에 있는 것들을 사용해서 어떠한 작업을 할 때 쓴다.

// for-in 반복문은 객체에 대한 반복적인 작업을 처리할 때 사용
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

for(let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
```
for-in 더 알아보기  
객체(Object)에 있는 항목들을 반복적으로 반환하여 '무언가'를 할 수 있게 해준다.

문법
``` 
for (variable in Object) {...}
```
파라미터
`variable`  
  매번 반복마다 다른 속성이름(Value name)이 변수(variable)로 지정된다.
`Object`
  반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체.

for-in 반복문은 객체의 속성들을 반복하여 작업을 수행. 모든 객체에서 사용이 가능.  
for -in 구문은 객체의 key값에 접근할 수 있지만 value 값에 접근하는 방법은 제공하지 않는다.   


### 2. Object.keys(), Object.values, Object.entries()와 같은 메서드
``` javascript
// 객체의 정보를 배열의 형태로 받아올 수 있는 몇가지 방법
const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2
};

// 값들을 배열로 받아오기
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
```
실행결과  
<img width="400" src="https://i.imgur.com/0LmnUfh.png" alt="#" title="실행결과">


### 3. Object.keys()와 배열메서드(forEach)로 순회 하는 방법
[MDN: forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

``` javascript
// 배열 내장함수 forEach
const superheros = [
  '아이언맨',
  '캡틴 아메리카',
  '토르',
  '닥터 스트레인지'
];
// 호출방법 1: for문을 이용한 호출
for(let i = 0; i < superheros.length; i++){
  console.log(superheros[i]);
}

// 호출방법 2: forEach 사용
function print(hero){
  console.log(hero);
};
superheros.forEach(print);

// 호출방법 3: forEach 안으로 함수 옮기기
superheros.forEach(function(hero){
  console.log(hero);
});

// 호출방법 4: 화살표 함수
superheros.forEach(hero => {
  console.log(hero);
});
```
