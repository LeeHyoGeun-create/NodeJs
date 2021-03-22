var members = ["egoing", "k9922", "hoya"];
console.log(members[1]);

var i = 0;
while (i < members.length) {
  console.log(members[i]);
  i = i + 1;
}

var roles = {
  prgramer: "hyogeun",
  designer: "k9922",
  manager: "hoya",
};

console.log(roles.designer);
console.log(roles["designer"]);
console.log(roles[1]); //안됨

for (let name in roles) {
  console.log(name, roles[name]);
}
