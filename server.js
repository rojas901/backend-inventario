const express = require('express');

const app = express();

const tiposEquipos = [
    {
        nombre: 'Computo',
        estado: true,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
    },
    {
        nombre: 'Movil',
        estado: true,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date()
    }    
]

app.get('/', (req, res) => {
    return res.status(200).json(tiposEquipos);
});

app.listen(3000, () => {
    console.log('Listen on port 3000');
});