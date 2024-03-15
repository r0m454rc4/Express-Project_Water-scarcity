const express = require("express");
const monk = require("monk");
const db = monk("localhost:27017/gp1-projectePart2");
const router = express.Router();

router.post("/comprovarUsuariBD", function (req, res, next) {
  let coleccio = db.get("usuaris-projectePart2");

  // If I submit the form.
  if (req.method == "POST") {
    let correu = req.body.correu;
    let contrasenya = req.body.passwd;
    // console.log(`Correu: ${correu}, contrasenya: ${contrasenya}`);
    console.log("Connexio correcta amb mongodb fent servir monk.");

    coleccio
      .findOne({
        correu,
        contrasenya,
      })
      .then((user) => {
        console.log(user);

        if (user) {
          console.log(
            `Usuari ${user.nomUsuari} connectat a mongodb fent servir monk.`
          );

          // Here I say that the user admin is enabled, which can enter to all pages.
          if (user.tipus == "admin") {
            usuariAdmin = true;
          }
        } else {
          console.log("Credencials incorrectes.");
          // If another user wants to log in, I must restrict the entry to the webpage.
          usuariAdmin = false;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Change URL.
    res.location("login");
    // Redirect to the view.
    res.redirect("login");
  }
});

module.exports = router;
