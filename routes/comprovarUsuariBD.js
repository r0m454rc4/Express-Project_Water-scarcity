const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Usuari = require("./modelUsuari");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

const modelUsuari = Usuari;
let usuariAdmin = false;

router.post("/comprovarUsuariBD", function (req, res, next) {
  // If I submit the form.
  if (req.method == "POST") {
    let correu = req.body.correu;
    let contrasenya = req.body.passwd;
    console.log(`Correu: ${correu}, contrasenya: ${contrasenya}`);
    console.log("Connexio correcta amb mongodb fent servir mongoose.");

    async function comprovarUsuariBD(correuUsuari, contrasenyaUsuari) {
      try {
        let usuari = await modelUsuari.findOne({
          correu: correuUsuari,
          contrasenya: contrasenyaUsuari,
        });

        if (usuari) {
          console.log(`Usuari connectat a mongodb fent servir mongoose.`);

          if (usuari.tipus == "admin") {
            usuariAdmin = true;
            res.redirect("admin");
          }
        } else {
          console.log("Credencials incorrectes, o usuari no trobat.");
          res.redirect("login");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor.");
      }
    }

    comprovarUsuariBD(correu, contrasenya);
  }
});

router.get("/admin", function (req, res, next) {
  if (usuariAdmin == true) {
    res.render("admin");
  } else {
    res.status(404).send("Error, no tens permis per accedir a aquesta pagina.");
  }
});

router.get("/logout", function (req, res, next) {
  if (usuariAdmin == true) {
    console.log("Logout usuari admin.");
    usuariAdmin = false;
    res.render("login");
  } else {
    res.status(404).send("Error, nomes un usuari connectat pot fer logout.");
  }
});

module.exports = router;
