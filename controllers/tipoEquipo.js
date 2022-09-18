const TipoEquipo = require('../models/tipoEquipo');
//crear un tipo de equipo
const createTipoEquipo = async (req, res) => {
    const tipoEquipo = new TipoEquipo(req.body);
    try {
        await tipoEquipo.save();
        res.status(200).json(tipoEquipo)
    } catch (error) {
        console.log(error);
    }
}

//consulta todos los tipos de equipo
const getTiposEquipos = async (req, res) => {
    try {
        const tiposEquipo = await TipoEquipo.find();
        res.status(200).json(tiposEquipo)
    } catch (error) {
        console.log(error);
    }
}

//consulta un tipo de equipo por ID
const getTipoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        const tipoEquipo = await TipoEquipo.findById(id);
        res.status(200).json(tipoEquipo);
    } catch (error) {
        console.log(error);
    }
}

//actualizar un tipo de equipo por ID
const updateTipoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        let tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, {...req.body, fechaActualizacion: new Date().toLocaleString()}, {returnOriginal: false});
        res.status(200).json(tipoEquipo);    
    } catch (error) {
        console.log(error);
    }
}

//borra un tipo de equipo por ID
const deleteTipoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        await TipoEquipo.findByIdAndDelete(id);
        res.status(200).json({msg: `Se ha borrado el tipo de equipo: ${id}`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createTipoEquipo, 
    getTiposEquipos, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID
}