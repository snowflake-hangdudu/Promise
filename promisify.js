//util.promisify
const util = require("util");

const fs = require("fs");

//返回新的函数
let mineReadfile = util.promisify(fs.readFile);

mineReadfile("./test.txt")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
