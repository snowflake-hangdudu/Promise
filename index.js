//开启端口为9000的服务
const express = require("express");
const app = express();
const port = 9000;
app.get("/", (req, res) => {
  //配置跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
