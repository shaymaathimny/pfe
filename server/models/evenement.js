const mongoose = require("mongoose");

const evenmentSchema = mongoose.Schema({
  categoryId: { type: String },
  titre: { type: String, required: true },
  description: { type: String, required: true },
  dateDebut: { type: String, required: true },
  dateFin: { type: String, required: true },
  heure: { type: String, required: true },
  lieu: { type: String, required: true },
  particularite: { type: String, required: true },
  nombreMax: { type: Number, required: true },
  prix: { type: Number, required: true },
  image: { type: String},
});

const evenmentModel = mongoose.model("evenment", evenmentSchema);
module.exports = evenmentModel;
