const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const router = express.Router();

mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

const esquemaUsuari = new mongoose.Schema({
  correu: String,
  edat: Number,
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
        });

        if (usuari) {
          const usuariTrobat = await bcrypt.compare(
            contrasenya,
            usuari.contrasenya
          );

          if (usuariTrobat) {
            console.log(
              `Usuari ${usuari.nomUsuari} connectat a mongodb fent servir mongoose.`
            );
            if (usuari.tipus == "admin") {
              // Handle admin login
            }
            res.location("admin");
            res.redirect("admin");
          } else {
            console.log("Credencials incorrectes.");
            res.location("login");
            res.redirect("login");
          }
        } else {
          console.log("Usuari no trobat.");
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
