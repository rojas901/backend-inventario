const EstadoEquipo = require('../models/estadoEquipo');
//crear un tipo de equipo
const createEstadoEquipo = async (req, res) => {
    const estadoEquipo = new EstadoEquipo(req.body);
    try {
        await estadoEquipo.save();
        res.status(200).json(estadoEquipo)
    } catch (error) {
        console.log(error);
    }
}

//consulta todos los tipos de equipo
const getEstadosEquipos = async (req, res) => {
    try {
        const estadosEquipo = await EstadoEquipo.find();
        res.status(200).json(estadosEquipo)
    } catch (error) {
        console.log(error);
    }
}

//consulta un tipo de equipo por ID
const getEstadoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        const estadoEquipo = await EstadoEquipo.findById(id);
        res.status(200).json(estadoEquipo);
    } catch (error) {
        console.log(error);
    }
}

//actualizar un tipo de equipo por ID
const updateEstadoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        let estadoEquipo = await EstadoEquipo.findByIdAndUpdate(
            id, 
            {...req.body, fechaActualizacion: new Date().toLocaleString()}, 
            {returnOriginal: false}
        );
        res.status(200).json(estadoEquipo);    
    } catch (error) {
        console.log(error);
    }
}

//borra un tipo de equipo por ID
const deleteEstadoEquipoByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        await EstadoEquipo.findByIdAndDelete(id);
        res.status(200).json({msg: `Se ha borrado el estado de equipo: ${id}`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createEstadoEquipo, 
    getEstadosEquipos, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID
}