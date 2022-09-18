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
        type: String,
        default: new Date().toLocaleString()
    },
    fechaActualizacion: {
        type: String,
        default: new Date().toLocaleString()
    }
});

module.exports = model('EstadoEquipo', EstadoEquipoSchema);