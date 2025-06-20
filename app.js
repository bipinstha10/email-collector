require("dotenv").config;
const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
connection.connect((err) => {
  if (err) {
    return console.log("Connection error:", err);
  }
  console.log("Connection to MySQL!");
});

app.get("/", (req, res) => {
  const q = "SELECT COUNT(*) AS counter FROM users";
  let count;
  connection.query(q, (error, results) => {
    if (error) throw error;
    count = results[0].counter;
    res.render("home", { count: count });
  });
});

app.post("/register", (req, res) => {
  let person = {
    email: req.body.email,
  };
  connection.query("INSERT INTO users SET ?", person, (error, results) => {
    if (error) throw error;
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
