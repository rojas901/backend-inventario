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
        type: String,
        default: new Date().toLocaleString()
    },
    fechaActualizacion: {
        type: String,
        default: new Date().toLocaleString()
    }
});

module.exports = model('Marca', MarcaSchema);