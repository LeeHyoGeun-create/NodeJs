var q = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1); //함수의 이름이 바뀌었을 때 실행이 안되는 상황을 막기 위해
  },
  f2: function () {
    console.log(this.v2);
  },
};

q.f1();
q.f2();
