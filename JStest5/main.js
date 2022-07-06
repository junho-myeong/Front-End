// 문자 자료형
// let myName = 'junho';
// let eMail = 'wnsgh9166@naver.com';
// // 벡틱 기호를 사용한 보관법($사인을 통해)은 데이터를 넣어서 문자로 사용하기 위한 방법 중에 하나이다, $사이에 데이터를 넣어서 문자로 사용하기 위한 방법이다.
// let hello = `hello ${myName}?!`;

// console.log(myName);
// console.log(eMail);
// console.log(hello);


// 객체 자료형(객체 데이터들은 그 안에 여러가지 데이터들을 가지고 잇고, .을 사용해서 그 값을 얻을수 잇다.)
let user = {
  name: 'junho',
  age: 23
};

console.log(user);
console.log(user.name);
console.log(user.age);

// 함수란 특정 기능 을수행하는 코드들의 모임을 말한다.
// 함수의 선언
function testFunc() {
  console.log(123);
}
// 함수 호출 부분
testFunc();
// 함수는 특정 기능을 수행함과 동시에 특정 값을 반환할수도 잇다.
function returnFunc() {
  return 1234;
}
let a = returnFunc();
console.log(a)