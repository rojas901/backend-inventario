const express = require('express');

const app = express();
//TODO: importa y habilitar cors

//importacion de rutas
const tipoEquipo = require('./routes/tipoEquipo');
const estadoEquipo = require('./routes/estadoEquipo');
const usuario = require('./routes/usuario');
const marca = require('./routes/marca');
const inventario = require('./routes/inventario');

//middlewares
//TODO: middleware para urlencoded
app.use(express.json());
//TODO: middleware subida de foto
//TODO: middleware de cors

app.use('/api/tipoequipos', tipoEquipo);
app.use('/api/estadoequipos', estadoEquipo);
app.use('/api/usuarios', usuario);
app.use('/api/marcas', marca);
app.use('/api/inventarios', inventario);

module.exports = app;