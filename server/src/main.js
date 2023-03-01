const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
// 创建web服务器
const app = express();
app.use(cors());
//全局注册使用bodyParser,处理json，raw,URL-encode格式请求体等
app.use(bodyParser.json())
//create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

const baseUrl = "/api";
// 监听服务器
app.listen(8080, () => {
  console.log('running in http://127.0.0.1:8080')
});

