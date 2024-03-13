const express = require("express");
const monk = require("monk");
// const db = monk("localhost:27017/gp1-projectePart2");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login", {
    titol: "Login",
  });

  console.log(req.method);
});

module.exports = router;
