const { Schema, model } = require("mongoose");

const TipoEquipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre tipo requerido']
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

module.exports = model('TipoEquipo', TipoEquipoSchema);