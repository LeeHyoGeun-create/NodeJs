var f = function () {
  //함수는 값이라서 익명함수의 형태를 취할 수 있음.
  console.log(1 + 1);
  console.log(1 + 2);
};
var a = [f];
a[0]();

var o = {
  func: f,
};
o.func();
