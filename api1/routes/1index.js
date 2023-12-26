var express = require("express");
var router = express.Router();
const db = require("../config/db");
const fs = require("fs");
const path = require("path");
// 测试接口
/* GET home page. */
router.get("/", (req, res, next) => {
  // const name = files.map((a) => a.replace(".jpg", ""));

  const filePath = path.join(__dirname, "../public", "images", "imgAll");
  const files = fs.readdirSync(filePath);
  let img = [];
  files.forEach((file) => {
    let fileName = path.basename(file, path.extname(file));
    let filePathc = path.join(filePath, file);
    img.push({ name: fileName, path: filePathc });
  });
  res.send({
    img
  });
});

module.exports = router;
