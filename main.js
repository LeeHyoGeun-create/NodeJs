var http = require("http");
var fs = require("fs");
let url = require("");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  let queryData = url.parse(_url + true).qurey;
  console.log(queryData);
  console.log(_url + "hihi");
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  console.log(__dirname + _url);
  response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
