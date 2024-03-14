const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("registre_usuari", {
    titol: "Registrar usuari",
  });
});

module.exports = router;
