const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const port = 8888;

const index = require("./routes/index");
const login = require("./routes/login");
const comprovarUsuariBD = require("./routes/comprovarUsuariBD");
const registre_usuari = require("./routes/registre_usuari");
const modificar_usuari = require("./routes/modificar_usuari");
const borrar_usuari = require("./routes/borrar_usuari");

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
// This is to encode the url. to be able to get data after submiting a form.
app.use(express.urlencoded({ extended: false }));

app.use("/", index);

app.use("/index", index);

app.use("/login", login);

app.post("/comprovarUsuariBD", comprovarUsuariBD);
app.get("/admin", comprovarUsuariBD);
// Added logout, which is available on admin.
app.get("/logout", comprovarUsuariBD);

// There are two routes, as I must be able to load the form, and send it to register the new user.
app.use("/registre_usuari", registre_usuari);
app.post("/registre_usuari", registre_usuari);

app.use("/modificar_usuari", modificar_usuari);
app.post("/modificar_usuari", modificar_usuari);

app.use("/borrar_usuari", borrar_usuari);
app.post("/borrar_usuari", borrar_usuari);

server.listen(port, function () {
  console.log(`Servidor escoltant a https://localhost:${port}`);
});
