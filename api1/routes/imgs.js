var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
const db = require('../config/db');
router.get('/imgall', (req, res) => {
  const sql = 'Select * from image_all';
  db.query(sql, (err, results) => {
    // const filePath = path.join(__dirname, "../public", "images", "imgAll");
    // const buffer = fs.readFileSync(filePath);
    res.json(results);
  });
});
router.post('/comment', (req, res) => {
  const id = req.body.id;
  const plun = req.body.comment;
  const sql = 'INSERT INTO comment (image_all_id, Comment_Content) VALUES (?,?)';
  db.query(sql, [id, plun], (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
  res.send({ name: '评论成功' });
  // db.query(sql,(err,results)=>{

  // })
});
router.get('/comment', (req, res) => {
  const id = req.query.id;
  const sql = 'SELECT * FROM comment WHERE image_all_id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
/* GET home page. */
router.get('/hot', (req, res, next) => {
  const sql = 'Select * from Hot_img';
  db.query(sql, (err, results) => {
    res.json(results);
  });
});

router.post('/Search', (req, res, next) => {
  const search = req.body.name;
  const filePath = path.join(__dirname, '../public', 'images', 'imgAll');
  const htp = 'http://localhost:3000/images/imgAll';
  const files = fs.readdirSync(filePath);
  // 正则表达式匹配
  const regex = new RegExp(search);
  let img = [];
  files.forEach((file) => {
    let fileName = path.basename(file, path.extname(file));
    let filePathc = path.join(htp, file);
    // 匹配名字，有一个字相同就添加
    if (regex.test(fileName)) {
      img.push({ name: fileName, path: filePathc });
    }
  });
  // console.log(img);
  res.send(img);
});
// 精品推荐接口
router.get('/Boutique', (req, res, next) => {
  const filePath = path.join(__dirname, '../public', 'images', 'Boutique', 'BoutiqueAll');
  const htp = 'http://localhost:3000/images/Boutique/BoutiqueAll';
  const files = fs.readdirSync(filePath);
  let img = [];
  files.forEach((file) => {
    let fileName = path.basename(file, path.extname(file));
    // 拼接图片地址
    let filePathc = path.join(htp, file);
    // 存储到img数组里
    img.push({ name: fileName, path: filePathc });
  });
  res.send({
    img
  });
});
// 精品推荐接口--根据获取到的选项返回不同数据
router.post('/PostBoutique', (req, res, next) => {
  const filePath = path.join(__dirname, '../public', 'images', 'Boutique', req.body.name);
  const htp = `http://localhost:3000/images/Boutique/${req.body.name}`;
  const files = fs.readdirSync(filePath);
  let img = [];
  files.forEach((file) => {
    let fileName = path.basename(file, path.extname(file));
    // 拼接图片地址
    let filePathc = path.join(htp, file);
    // 存储到img数组里
    img.push({ name: fileName, path: filePathc });
  });

  res.send({
    img
  });
});
router.post('/PostFengxian', (req, res, next) => {
  console.log(req.body);
  res.send({
    name: '666'
  });
});

/* 添加图片到数据库*/
/*-------------------------------------------------------------------------------------------*/
// 读取加载并把imgAll(所有图片文件夹)里的文件储存到数据库
fs.readdir(path.join(__dirname, '../public', 'images', 'imgAll'), (err, files) => {
  if (err) {
    console.log(err, '5');
    return;
  }
  const DelFileName = 'DELETE FROM image_all WHERE file_name NOT IN (?)';
  // 文件名字
  const FileName = files;
  const SelFileName = 'SELECT * FROM image_all WHERE file_name NOT IN (?)';
  // 手动删除图片时把数据库里的数据一并删除掉

  db.query(DelFileName, [FileName], (err, results) => {
    // console.log(results);
  });
  // 遍历文件
  files.forEach((file) => {
    const file_name = file; //文件名称
    const fileName = path.basename(file, path.extname(file)); //获取文件名并且删除文件后缀
    const sql = 'INSERT INTO image_all (image_path , image_name,file_name) VALUES (?,?,?)'; // 准备SQL语句
    // const values = [base64Data]; // 将Base64字符串作为参数存储到values数组中
    // 获取数据库是否有相同文件
    // 文件路径
    const Imgpath = 'http://localhost:3000/images/imgAll/' + file;
    const query = 'SELECT * FROM image_all WHERE image_name = ?';

    db.query(query, fileName, (err, results) => {
      // console.log(results);
      // 不等于空说明存在相同文件，所以直接返回
      if (results != '') {
        return;
      } else {
        // 没有相同文件，添加文件到数据库
        db.query(sql, [Imgpath, fileName, file_name], (err, res) => {
          if (res == undefined) {
            return;
          }
          if (err) {
            console.log(err);
          }
        });
      }
    });
  });
});
// 读取加载并把hot(热门图片文件夹)里的文件储存到数据库
fs.readdir(path.join(__dirname, '../public', 'images', 'Hot'), (err, files) => {
  if (err) {
    console.log(err, '5');
    return;
  }
  const Filename = files;
  const DelFileName = 'DELETE FROM hot_img WHERE img_suffix NOT IN (?)';
  db.query(DelFileName, [files], (err, results) => {
    console.log(results);
  });

  // 遍历文件
  files.forEach((file) => {
    const fileName = path.basename(file, path.extname(file)); //获取文件名
    const fileSuffixName = path.basename(file); //获取文件名包含后缀
    // console.log(fileSuffixName);
    const sql = 'INSERT INTO Hot_img (img_path , img_name,img_suffix) VALUES (?,?,?)'; // 准备SQL语句
    // 获取数据库是否有相同文件
    // 文件路径
    const Imgpath = 'http://localhost:3000/images/Hot/' + file;
    const query = 'SELECT * FROM Hot_img WHERE img_name = ?';
    db.query(query, fileName, (err, results) => {
      // 不等于空说明存在相同文件，所以直接返回
      if (results != '') {
        return;
      } else {
        // 没有相同文件，添加文件到数据库
        db.query(sql, [Imgpath, fileName, fileSuffixName], (err, res) => {
          if (res == undefined) {
            return;
          }
          if (err) {
            console.log(err);
          }
        });
      }
    });
  });
});
module.exports = router;
