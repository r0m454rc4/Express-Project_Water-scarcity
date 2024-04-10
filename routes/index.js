const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "index.html"));
  res.render("index");
});

router.get("/nosotros", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "nosotros.html"));
  res.render("nosotros");
});

router.get("/noticias", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "noticias.html"));
  res.render("noticias");
});

router.get("/contacto", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "contacto.html"));
  res.render("contacto");
});

router.get("/admin", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "admin.html"));
  res.render("admin");
});

module.exports = router;
