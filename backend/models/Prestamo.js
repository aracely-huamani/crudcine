const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    
    _id: {
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
    cintaNumero: {
        type: Number,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Prestamo', PrestamoSchema)