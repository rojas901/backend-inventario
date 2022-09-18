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
        type: String,
        default: new Date().toLocaleString()
    },
    fechaActualizacion: {
        type: String,
        default: new Date().toLocaleString()
    }
});

module.exports = model('TipoEquipo', TipoEquipoSchema);