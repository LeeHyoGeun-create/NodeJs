let fs = require("fs");

//readFileSync

// console.log("A");
// let result = fs.readFileSync("./syntax/smaple.txt", "utf-8");
// console.log(result);
// console.log("C");

//비동기적인걸 선호
console.log("A");
fs.readFile("./syntax/smaple.txt", "utf-8", function (err, result) {
  console.log(result);
});

console.log("C");
