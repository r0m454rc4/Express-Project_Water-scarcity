const express = require("express");
const router = express.Router();
const path = require("path");

// router.get("/", function (req, res, next) {
//   res.sendFile(path.join(__dirname + "/public", "login.html"));
// });

router.get("/", function (req, res, next) {
  res.render("formulari", {
    titol: "suma",
  });
});

module.exports = router;
