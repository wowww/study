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


## 추가미션
### javascript set과 map에 대해 알아보고 정리하기
set   
set() 메서드는 Map 객체에서 주어진 키를 가진 요소를 추가하고 키의 요소가 이미 있다면 대채함.
```
myMap.set(key, value);
```

매개변수   
`key`  
 map에 추가하거나 변경할 요소의 키.  
`value`
 map에 추가하거나 변경할 요소의 값.  
 
 
map   
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
- for문 활용 예제 1
``` javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for (let i = 0; i < array.length; i++) {
squared.push(array[i] * array[i]);
}
console.log(squared);
```
- for문 활용 예제 2
``` javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = [];
for (let i = 0; i < array.length; i++) {
squared.push(array[i] * array[i]);
}
console.log(squared);
```
- map 활용 예제 1
``` javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n * n;
const squared = array.map(square);
console.log(squared);
```
- map활용 예제 2
``` javascript
const items = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = items.map(item => item.id);
console.log(texts);
```
#### 어떻게 사용하는 것인가?
#### object, array와 어떤 점이 다른가?
#### 언제 유용하게 쓰일 수 있을까?
