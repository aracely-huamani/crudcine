const mongoose = require('mongoose');

const SocioSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    directores_favorito: {
        type: Number,
        require: true
    },
    actores_favoritos: {
        type: Date,
        default: Date.now()
    },
    genero_favorito: {
        type: Date,
        default: Date.now()
    }
    
    
});

module.exports = mongoose.model('Socio', SocioSchema)