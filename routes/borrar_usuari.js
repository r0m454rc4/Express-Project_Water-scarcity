const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("borrar_usuari", {
    titol: "Borrar usuari",
  });
});

module.exports = router;
