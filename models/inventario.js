const { Schema, model } = require("mongoose");
const usuario = require('./usuario');
const marca = require('./marca');
const estadoEquipo = require('./estadoEquipo');
const tipoEquipo = require('./tipoEquipo');

const InventarioSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial equipo requerido']
    },
    modelo: {
        type: String,
        required: [true, 'Modelo equipo requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'Descripcion equipo requerido']
    },
    fotoEquipo: {
        type: String,
        required: [true, 'Foto equipo requerido']
    },
    color: {
        type: String,
        required: [true, 'Color equipo requerido']
    },
    fechaCompra: {
        type: String,
        default: new Date().toLocaleString()
    },
    precio: {
        type: Number,
        required: [true, 'Precio equipo requerido']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: usuario
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: marca
    },
    estado: {
        type: Schema.Types.ObjectId,
        ref: estadoEquipo
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: tipoEquipo
    }
});

module.exports = model('Inventario', InventarioSchema);