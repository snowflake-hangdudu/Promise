const fs = require("fs");

let p = new Promise((resolve, reject) => {
  fs.readFile("./test.txt", (err, data) => {
    if (err) {
      reject(err);
      console.log("我在返回报错前");
    } else {
      resolve(data.toString());
      console.log("我在返回成功后");
    }
  });
});
console.log("我在路径中");
p.then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
