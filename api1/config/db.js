const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "test"
});
module.exports = db;
