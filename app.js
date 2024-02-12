const port = 8888;

var express = require("express");
const path = require("path");
var app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "index.html"));
});

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "index.html"));
});

app.get("/nosotros", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "nosotros.html"));
});

app.get("/contacto", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "contacto.html"));
});

app.get("/kids", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "kids.html"));
});

app.get("/admin", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "admin.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/public", "login.html"));
});


app.listen(port, function () {
  console.log(`Servidor escoltant a http://localhost:${port}`);
});
