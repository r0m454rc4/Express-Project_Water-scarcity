const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public", "index.html"));
});

router.get("/nosotros", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public", "nosotros.html"));
});

router.get("/noticias", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public", "noticias.html"));
});

router.get("/contacto", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public", "contacto.html"));
});

router.get("/admin", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/public", "admin.html"));
});

module.exports = router;
