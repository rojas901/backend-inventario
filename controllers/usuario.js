const Usuario = require('../models/usuario');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const createUsuario = async (req, res) => {
    const salt = bcrypt.genSaltSync();
    const contrasena = bcrypt.hashSync(req.body.contrasena, salt);
    const usuario = new Usuario({...req.body, contrasena});
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({msg: errors.array()})
        }

        if (await Usuario.findOne({$or: [{nombre: req.body.nombre}, {email: req.body.email}]})) {
            return res.status(400).json({msg: 'El usuario o email, ya existe.'});
        }else {
            await usuario.save();
            return res.status(200).json(usuario);
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getUsuarios = async (req, res) => {
    try {
        const usuario = await Usuario.find();
        return res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getUsuarioByID = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({_id: req.params.id, estado:true});
        return res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const updateUsuarioByID = async (req, res) => {
    try {
        let contrasena = "";
        if (req.body.contrasena) {
            const salt = bcrypt.genSaltSync();
            contrasena = bcrypt.hashSync(req.body.contrasena, salt);
        }
        const usuario = await Usuario.findByIdAndUpdate(
            req.params.id, 
            req.body.contrasena ? {...req.body, contrasena, fechaActualizacion: Date.now()}:{...req.body, fechaActualizacion: Date.now()}, 
            {returnOriginal: false}
        );
        return res.status(200).json(usuario);    
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

//borra un tipo de equipo por ID
const deleteUsuarioByID = async (req, res) => {
    try {
        if (await Usuario.findByIdAndDelete(req.params.id)) {
            return res.status(200).json({msg: `Se ha borrado el usuario: ${req.params.id}`});
        }else {
            return res.status(404).json({msg: 'El usuario no existe.'});
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

module.exports = {
    createUsuario, 
    getUsuarios, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID
}