const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const port = 8888;

const index = require("./routes/index");
const login = require("./routes/login");
const comprovarUsuariBD = require("./routes/comprovarUsuariBD");


// https://github.com/martirodm/GeoTag/blob/main/Documentation/GeoTagInstallation-Manual.pdf
const httpsOptions = {
  // openssl genrsa -out server.key 2048.
  key: fs.readFileSync("./cert/server.key"),
  // openssl req -new -key server.key -out server.csr, openssl x509 -req -in server.csr -signkey server.key -out server.crt.
  cert: fs.readFileSync("./cert/server.crt"),
};

const server = https.createServer(httpsOptions, app);

// View engine setup.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static("./routes/public"));

app.use("/", index);

app.use("/index", index);

app.use("/login", login);

app.use("/comprovarUsuariBD", comprovarUsuariBD);

server.listen(port, function () {
  console.log(`Servidor escoltant a https://localhost:${port}`);
});
