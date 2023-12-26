var express = require("express");
var router = express.Router();
const db = require("../config/db");
/* GET home page. */
router.get("/", (req, res, next) => {
  db.query("Select * from headnav", (err, result) => {
    if (err) {
      console.log(err);
    }
    const test = JSON.stringify(result);
    res.send(test);
  });
});
// 搜索框请求数据
// router.post('/Search',res,req,next)=>{
//   db.query()
// }
module.exports = router;
