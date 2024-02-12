const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const port = 8888;

// https://github.com/martirodm/GeoTag/blob/main/Documentation/GeoTagInstallation-Manual.pdf
const httpsOptions = {
  // openssl genrsa -out server.key 2048.
  key: fs.readFileSync("./cert/server.key"),
  // openssl req -new -key server.key -out server.csr, openssl x509 -req -in server.csr -signkey server.key -out server.crt.
  cert: fs.readFileSync("./cert/server.crt"),
};

const server = https.createServer(httpsOptions, app);

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

server.listen(port, function () {
  console.log(`Servidor escoltant a https://localhost:${port}`);
});
