/* eslint-disable*/
var func1 = function (param, callback) {
  console.log(param);
  callback(param + 1);
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
func1(start, (result) => {
  // 1을 받고 1+1인 2를 오른쪽 result로 전달
  func2(result, (result) => {
    //2를 받고 2+2인 4를 오른쪽 result로 전달
    func3(result, (result) => {
      //4를 받고 4+3인 7을 오른쪽 result로 전달
      console.log(result); // 7출력
    });
  });
});

// 결과는 1,2,4,7이 출력 될 것이다.
