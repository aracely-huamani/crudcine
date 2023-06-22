const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    
    titulo: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    actores: {
        type: String,
        require: true
    },
   
});

module.exports = mongoose.model('Pelicula', PeliculaSchema)