const mongoose = require('mongoose');

const SocioSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  directoresFavoritos: {
    type: [String],
    required: true
  },
  actoresFavoritos: {
    type: [String],
    required: true
  },
  generosPreferidos: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Socio', SocioSchema);
