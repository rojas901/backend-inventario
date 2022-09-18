const Usuario = require('../models/usuario');
//crear un tipo de equipo
const createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
    }
}

//consulta todos los tipos de equipo
const getUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
    }
}

//consulta un tipo de equipo por ID
const getUsuarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
    }
}

//actualizar un tipo de equipo por ID
const updateUsuarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        let usuario = await Usuario.findByIdAndUpdate(
            id, 
            {...req.body, fechaActualizacion: new Date().toLocaleString()}, 
            {returnOriginal: false}
        );
        res.status(200).json(usuario);    
    } catch (error) {
        console.log(error);
    }
}

//borra un tipo de equipo por ID
const deleteUsuarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({msg: `Se ha borrado el usuario: ${id}`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUsuario, 
    getUsuarios, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID
}