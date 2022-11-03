const EstadoEquipo = require('../models/estadoEquipo');

const createEstadoEquipo = async (req, res) => {
    const estadoEquipo = new EstadoEquipo(req.body);
    try {
        if (await EstadoEquipo.findOne({nombre: req.body.nombre})) {
            return res.status(200).json({msg: 'El estado de equipo ya existe.'});
        }else {
            await estadoEquipo.save();
            return res.status(200).json(estadoEquipo);
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getEstadosEquipos = async (req, res) => {
    try {
        const estadosEquipo = await EstadoEquipo.find();
        return res.status(200).json(estadosEquipo);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getEstadoEquipoByID = async (req, res) => {
    try {
        const estadoEquipo = await EstadoEquipo.findOne({_id: req.params.id, estado:true});
        return res.status(200).json(estadoEquipo);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const updateEstadoEquipoByID = async (req, res) => {
    try {
        const estadoEquipo = await EstadoEquipo.findByIdAndUpdate(
            req.params.id, 
            {...req.body, fechaActualizacion: Date.now()}, 
            {returnOriginal: false}
        );
        return res.status(200).json(estadoEquipo);    
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const deleteEstadoEquipoByID = async (req, res) => {
    try {
        if (await EstadoEquipo.findByIdAndDelete(req.params.id)) {
            return res.status(200).json({msg: `Se ha borrado el estado de equipo con id: ${req.params.id}`});
        }else {
            return res.status(404).json({msg: 'El estado de equipo no existe.'});
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

module.exports = {
    createEstadoEquipo, 
    getEstadosEquipos, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID
}