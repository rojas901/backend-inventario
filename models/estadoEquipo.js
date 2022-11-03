const { Schema, model } = require("mongoose");

const EstadoEquipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre estado requerido']
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

module.exports = model('EstadoEquipo', EstadoEquipoSchema);