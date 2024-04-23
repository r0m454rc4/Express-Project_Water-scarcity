const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Usuari = require("./modelUsuari");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/gp1-projectePart2");

const modelUsuari = Usuari;

router.get("/", function (req, res, next) {
  res.render("borrar_usuari", {
    titol: "Borrar usuari",
  });
});

// This is to modify an user after submitting the form.
router.post("/borrar_usuari", async function (req, res, next) {
  // If I submit the form.
  if (req.method == "POST") {
    let nomUsuari = req.body.nomUsuari;

    console.log("Connexio correcta amb mongodb fent servir mongoose.");

    async function borrarUsuariBD(nomUsuari) {
      try {
        let usuari = await modelUsuari.findOneAndDelete(
          {
            nomUsuari: nomUsuari,
          },
          { new: true }
        );

        if (usuari) {
          console.log(`Usuari connectat a mongodb fent servir mongoose.`);
          console.log("Usuari borrat correctament");

          res.location("admin");
          res.redirect("admin");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor.");
      }
    }

    borrarUsuariBD(nomUsuari);
  }
});

module.exports = router;
