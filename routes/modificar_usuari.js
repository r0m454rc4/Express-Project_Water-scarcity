const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("modificar_usuari", {
    titol: "Modificar usuari",
  });
});

module.exports = router;
