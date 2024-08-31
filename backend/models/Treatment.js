const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  patientId: { type: Number, required: true },
  diseaseName: { type: String, required: true },
  medicine: { type: String, required: true },
  precaution: { type: String, required: true },
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
