const express = require('express');

const app = express();
//TODO: importa y habilitar cors

//importacion de rutas
const tipoEquipo = require('./routes/tipoEquipo');

//middlewares
//TODO: middleware para urlencoded
app.use(express.json());
//TODO: middleware subida de foto
//TODO: middleware de cors

app.use('/api/tipoequipos', tipoEquipo);

module.exports = app;