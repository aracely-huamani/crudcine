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
    directoresFavoritos: {
        type: Number,
        require: true
    },
    actoresFavoritos: {
        type: Date,
        default: Date.now()
    },
    generosPreferidos: {
        type: Date,
        default: Date.now()
    }
    
    
});

module.exports = mongoose.model('Socio', SocioSchema)