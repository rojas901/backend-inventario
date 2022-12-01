const express = require('express');

const app = express();
//TODO: importa y habilitar cors
const cors = require('cors');

const fileUpload = require('express-fileupload');

//importacion de rutas
const tipoEquipo = require('./routes/tipoEquipo');
const estadoEquipo = require('./routes/estadoEquipo');
const usuario = require('./routes/usuario');
const marca = require('./routes/marca');
const inventario = require('./routes/inventario');
const login = require('./routes/auth');
const validarJWT = require('./middleware/validarJWT');
const validarRolAdmin = require('./middleware/validarRolAdmin');

//middlewares
//TODO: middleware para urlencoded
app.use(express.json());
//TODO: middleware subida de foto
app.use(express.urlencoded({extended: false}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
//TODO: middleware de cors
app.use(cors({
    origin: '*'
}));

app.use('/api/login', login);
app.use('*', validarJWT);
app.use('/api/inventarios', inventario);
app.use('*', validarRolAdmin);
app.use('/api/tipoequipos', tipoEquipo);
app.use('/api/estadoequipos', estadoEquipo);
app.use('/api/usuarios', usuario);
app.use('/api/marcas', marca);


app.get("*", (req, res) => {
    return res.status(404).json({
        msg: 'pagina no encontrada'
    });
});

module.exports = app;