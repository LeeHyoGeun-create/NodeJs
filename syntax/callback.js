// function a() {
//   console.log("A");
// }

// 익명함수
// 함수는 값이다.
let a = function () {
  console.log("A");
};

function slowfunc(callback) {
  callback();
}

slowfunc(a);
