const mongoose = require("mongoose");

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

module.exports = mongoose.model("usuaris-projectePart2", esquemaUsuari);
