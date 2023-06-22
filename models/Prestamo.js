const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    
    Idpelicula: {
        type: Number,
        require: true
    },
    Idsocio: {
        type: Number,
        require: true
    },
    Estado: {
        type: String,
        require: true
    },
    NumerodeCinta: {
        type: Number,
        require: true
    },
    fechaPrestamo: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Prestamo', PrestamoSchema)