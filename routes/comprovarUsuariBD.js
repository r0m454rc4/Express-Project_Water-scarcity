const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

const esquemaUsuari = new mongoose.Schema({
  correu: String,
  edat: {
    type: Number,
    min: 1,
    max: 99,
    required: [true, "Edat no valida."],
  },
  nomCognom: String,
  nomUsuari: String,
  telf: String,
  tipus: String,
  contrasenya: String,
});

const modelUsuari = mongoose.model("usuaris-projectePart2", esquemaUsuari);

router.post("/comprovarUsuariBD", function (req, res, next) {
  // If I submit the form.
  if (req.method == "POST") {
    let correu = req.body.correu;
    let contrasenya = req.body.passwd;
    console.log(`Correu: ${correu}, contrasenya: ${contrasenya}`);
    console.log("Connexio correcta amb mongodb fent servir mongoose.");

    async function comprovarUsuariBD() {
      try {
        let usuari = await modelUsuari.findOne({
          correu: correu,
          contrasenya: contrasenya,
        });

        if (usuari) {
          console.log(`Usuari connectat a mongodb fent servir mongoose.`);

          if (usuari.tipus == "admin") {
            console.log("USERTYPE = admin.");
          }

          res.location("admin");
          res.redirect("admin");
        } else {
          console.log("Credencials incorrectes, o usuari no trobat.");
          res.location("login");
          res.redirect("login");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor.");
      }
    }

    comprovarUsuariBD();
  }
});

module.exports = router;
