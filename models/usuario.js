const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre usuario requerido']
    },
    email: {
        type: String,
        required: [true, 'Email usuario requerido'],
        unique: true
    },
    contrasena: {
        type: String,
        required: [true, 'Contrasena usuario requerido']
    },
    rol: {
        type: String,
        default: 'Docente',
        required: [true, 'Rol usuario requerido'],
        enum: ['Administrador', 'Docente']
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

module.exports = model('Usuario', UsuarioSchema);