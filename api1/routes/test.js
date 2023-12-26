var express = require("express");
var router = express.Router();
var { formidable } = require("formidable");
const multer = require("multer");
const fs = require("fs");
var path = require("path");
const db = require("../config/db");
const upload = multer({ dest: path.resolve(__dirname, "../public/images/upload") });

//  上传图片接口
router.post("/file", upload.single("name"), (req, res, next) => {
  const name = req.body.name;
  const content = req.body.content;
  const file = req.file;
  //  拼接文件路径和文件名字
  const imagePath = path.join(__dirname, "../public/images/upload/" + file.originalname);
  // 服务器文件路径
  let imgpath = "http://localhost:3000/images/upload/" + file.originalname;
  const sql = "INSERT INTO upload_img (img_path, img_name, img_content)  VALUES (?,?,?)";
  // 读取文件内容
  const readFile = fs.readFileSync(file.path);
  // 第一个参数是将文件写入到具体的位置，第二个参数是文件的内容
  fs.writeFileSync(imagePath, readFile);
  // 删除接收到的二进制数据
  fs.unlinkSync(file.path);
  db.query(sql, [imgpath, name, content], (err, results) => {});
  res.json({ imgpath, name, content });

  // 存储图片到服务器
});
router.get("/file", (req, res) => {
  const sql = "Select * from upload_img";
  db.query(sql, (err, results) => {
    res.json(results);
  });
});
// const incomingForm = formidable({
//   uploadDir: path.resolve(__dirname, "../public/images/upload"),
//   keepExtensions: true
// });
// incomingForm.parse(req, (err, filebody, { file }) => {
//   console.log(filebody, file, "666");
//   if (err) {
//     next();
//     return;
//   }
//   const imgStrin = `/images/${file[0].newFilename}`;
//   console.log(imgStrin);
//   res.send(imgStrin);
// });

module.exports = router;
