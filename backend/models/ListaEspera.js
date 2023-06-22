const mongoose = require('mongoose');

const ListaEsperaSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  pelicula: {
    type: String,
    required: true
  },
  socios: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('ListaEspera', ListaEsperaSchema);
