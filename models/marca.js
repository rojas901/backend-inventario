const { Schema, model } = require("mongoose");

const MarcaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre marca requerido']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Marca', MarcaSchema);