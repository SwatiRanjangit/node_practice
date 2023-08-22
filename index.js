const fs = require("fs");
const http = require("http");
const colors = require("colors");
const data = require("./data");
const path = require("path");

// console.log("hello world!");
// fs.writeFileSync("hello.txt", "hello everyone! welcome to my world!");

// SIMPLE API......
//DAY 1
// http
//   .createServer((req, res) => {
//     // res.write("<h1>Hello this is Swati</h1>");
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));

//     res.end();
//     console.log("App is running...".yellow);
//   })
//   .listen(8000);

// console.log("hello");

// SET INPUT FROM COMMAND LINE

// const input = process.argv;
// // fs.writeFileSync(input[2], input[3]);
// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid output".red);
// }

// DAY 3
// FILES AND FOLDER THROUGH COMMAND LINE
const dirPath = path.join(__dirname, "files");
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(`${dirPath}/apple${i}.txt`, "simple test file");
// }

// read file from directory

fs.readdir(dirPath, (err, files) => {
  //   console.log(files);
  files.forEach((item) => {
    console.log(item);
  });
});
