var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var indexRouter = require("./routes/1index");
// var usersRouter = require("./routes/users");
var useheadnav = require("./routes/headnav");
var Users = require("./routes/users");
var ImgAll = require("./routes/imgs");
var Test = require("./routes/test");
const cors = require("cors");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// const options = {
//   headers: {
//     "Content-disposition": "attachment"
//   }
// };
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("static"));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/test", indexRouter);
// 头部导航栏接口
app.use("/head/headnav", useheadnav);
app.use("/user", Users);
app.use("/img", ImgAll);
app.use("/testApi", Test);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
