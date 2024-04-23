const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Usuari = require("./modelUsuari");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

router.get("/", function (req, res, next) {
  res.render("registre_usuari", {
    titol: "Registrar usuari",
  });
});

// This is to register an user after submitting the form.
router.post("/registre_usuari", async function (req, res, next) {
  // If I submit the form.
  if (req.method == "POST") {
    let nomUsuari = req.body.nomUsuari;
    let nomCognom = req.body.nomCognom;
    let edat = req.body.edat;
    let correu = req.body.correu;
    let passwd = req.body.passwd;
    let telf = req.body.telf;
    let tipus = req.body.tipus;

    console.log("Connexio correcta amb mongodb fent servir mongoose.");

    async function registreUsuariBD(
      nomUsuari,
      nomCognom,
      edat,
      correuUsuari,
      passwd,
      telf,
      tipus
    ) {
      try {
        let usuari = await new Usuari({
          nomUsuari: nomUsuari,
          nomCognom: nomCognom,
          edat: edat,
          correuUsuari: correuUsuari,
          passwd: passwd,
          telf: telf,
          tipus: tipus,
        });

        if (usuari) {
          console.log(`Usuari connectat a mongodb fent servir mongoose.`);
          usuari.save();
          console.log("Usuari registrat correctament");

          res.location("admin");
          res.redirect("admin");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor.");
      }
    }

    registreUsuariBD(nomUsuari, nomCognom, edat, correu, passwd, telf, tipus);
  }
});

module.exports = router;
