const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Usuari = require("./modelUsuari");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

const modelUsuari = Usuari;

router.get("/", function (req, res, next) {
  res.render("modificar_usuari", {
    titol: "Modificar usuari",
  });
});

// This is to modify an user after submitting the form.
router.post("/modificar_usuari", async function (req, res, next) {
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

    async function modificarUsuariBD(
      nomUsuari,
      nomCognom,
      edat,
      correuUsuari,
      passwd,
      telf,
      tipus
    ) {
      try {
        let usuari = await modelUsuari.findOneAndUpdate(
          {
            nomUsuari: nomUsuari,
          },
          {
            $set: {
              nomCognom: nomCognom,
              edat: edat,
              correuUsuari: correuUsuari,
              passwd: passwd,
              telf: telf,
              tipus: tipus,
            },
          },
          { new: true }
        );

        if (usuari) {
          console.log(`Usuari connectat a mongodb fent servir mongoose.`);
          console.log("Usuari modificat correctament");

          res.location("admin");
          res.redirect("admin");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor.");
      }
    }

    modificarUsuariBD(nomUsuari, nomCognom, edat, correu, passwd, telf, tipus);
  }
});

module.exports = router;
