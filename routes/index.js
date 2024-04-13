const express = require("express");
const router = express.Router();
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

router.get("/geolocalizacion_OSM", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "geolocalitzacio.html"));
  res.render("geolocalizacion_OSM");
});

router.get("/admin", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "/public", "admin.html"));
  res.render("admin");
});

module.exports = router;
