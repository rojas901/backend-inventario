const TipoEquipo = require('../models/tipoEquipo');

//crear un tipo de equipo
const createTipoEquipo = async (req, res) => {
    const tipoEquipo = new TipoEquipo(req.body);
    try {           
        if (await TipoEquipo.findOne({nombre: req.body.nombre})) {
            return res.status(200).json({msg: 'El tipo de equipo ya existe.'});
        }else {
            await tipoEquipo.save();
            return res.status(200).json(tipoEquipo);
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

//consulta todos los tipos de equipo
const getTiposEquipos = async (req, res) => {
    try {
        const tiposEquipo = await TipoEquipo.find();
        return res.status(200).json(tiposEquipo)
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

//consulta un tipo de equipo por ID
const getTipoEquipoByID = async (req, res) => {
    try {
        const tipoEquipo = await TipoEquipo.findOne({_id: req.params.id, estado:true});
        return res.status(200).json(tipoEquipo);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

//actualizar un tipo de equipo por ID
const updateTipoEquipoByID = async (req, res) => {
    try {
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(
            req.params.id, 
            {...req.body, fechaActualizacion: Date.now()}, 
            {returnOriginal: false}
        );
        return res.status(200).json(tipoEquipo);    
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

//borra un tipo de equipo por ID
const deleteTipoEquipoByID = async (req, res) => {
    try {
        if (await TipoEquipo.findByIdAndDelete(req.params.id)) {
            return res.status(200).json({msg: `Se ha borrado el tipo de equipo con id: ${req.params.id}`});
        }else {
            return res.status(404).json({msg: 'El tipo de equipo no existe.'});
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

module.exports = {
    createTipoEquipo, 
    getTiposEquipos, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID
}