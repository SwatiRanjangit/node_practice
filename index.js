const fs = require("fs");
const http = require("http");
const colors = require("colors");

// console.log("hello world!");
// fs.writeFileSync("hello.txt", "hello everyone! welcome to my world!");
http
  .createServer((req, res) => {
    res.write("Hello this is Swati");
    res.end();
    console.log("App is running...".yellow);
  })
  .listen(8000);
