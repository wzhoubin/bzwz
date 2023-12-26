var express = require("express");
var router = express.Router();
const db = require("../config/db");
const fs = require("fs");
const path = require("path");
/* GET users listing. */
// 登录接口
router.post("/login", function (req, res, next) {
  let data = req.body;
  // data.username, data.password;
  // 查询账号密码接口
  let sql = "SELECT * from user WHERE  username=? and passpwd=?";
  db.query(sql, [data.username, data.password], (err, result) => {
    if (err) {
      console.log(err);
    }
    // 账号是否已存在
    let j = JSON.stringify(result[0]);
    // code=0 || 1  0=不存在 1=存在
    if (j == undefined) {
      res.json({ code: 0 });
    } else {
      res.json({ code: 1 });
    }
    // console.log(JSON.stringify(result));

    // if (login == []) {
    //   console.log("第一个选项");
    // } else {
    //   console.log("第二个");
    // }

    // if (test == []) {
    //   console.log("111");
    //   res.json({ code: 1 });
    // }
  });
});
router.post("/register", function (req, res, next) {
  // 用户注册账号密码接口
  let data = req.body;
  let sql = "insert into user (username,passpwd) VALUES (?,?)";
  db.query(sql, [data.username, data.password], (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
});

module.exports = router;
