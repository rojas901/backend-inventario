const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre usuario requerido']
    },
    email: {
        type: String,
        required: [true, 'Email usuario requerido']
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

module.exports = model('Usuario', UsuarioSchema);