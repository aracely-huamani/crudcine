const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  actores: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);
