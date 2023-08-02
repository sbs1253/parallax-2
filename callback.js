/* eslint-disable*/
var func1 = function (param, callback) {
  console.log(param);
  callback(param + 1);
  // 익명함수를 callback 함수 넘기면 파라미터로 줄 값만 보내면됌
};
var func2 = function (param, callback) {
  console.log(param);
  callback(param + 2);
};
var func3 = function (param, callback) {
  console.log(param);
  callback(param + 3);
};

var start = 1;
func1(start, (call1) => {
  // 1을 받고 1+1인 2를 오른쪽 result로 전달
  func2(call1, (call2) => {
    //2를 받고 2+2인 4를 오른쪽 result로 전달
    func3(call2, (call3) => {
      //4를 받고 4+3인 7을 오른쪽 result로 전달
      console.log(call3); // 7출력
    });
  });
});

// // 결과는 1,2,4,7이 출력 될 것이다.

function sayHello(name, callback) {
  const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';

  callback(words); // 매개변수의 함수(콜백 함수) 호출
}

sayHello('인파', function printing(name) {
  console.log(name); // 안녕하세요 내 이름은 인파 입니다.
});
