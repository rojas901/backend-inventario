const Inventario = require('../models/inventario');

const createInventario = async (req, res) => {
    const fechaDeCompra = new Date(req.body.fechaCompra);
    const inventario = new Inventario({...req.body, fechaCompra: fechaDeCompra});
    try {           
        if (await Inventario.findOne({serial: req.body.serial})) {
            return res.status(200).json({msg: 'El equipo ya esta en inventario.'});
        }else {
            await inventario.save();
            res.status(200).json(inventario);
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getInventarios = async (req, res) => {
    try {
        const inventario = await Inventario.find().
        populate([
            {path: 'usuario', select: 'nombre'},
            {path: 'tipo', select: 'nombre'},
            {path: 'estado', select: 'nombre'},
            {path: 'marca', select: 'nombre'}
        ]);
        return res.status(200).json(inventario);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getInventarioByID = async (req, res) => {
    try {
        const inventario = await Inventario.findById(req.params.id).
        populate({path: 'usuario', select: 'nombre'}).
        populate({path: 'tipo', select: 'nombre'}).
        populate({path: 'estado', select: 'nombre'}).
        populate({path: 'marca', select: 'nombre'});
        return res.status(200).json(inventario);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const updateInventarioByID = async (req, res) => {
    if (req.body.fechaCompra) {
        fechaDeCompra = new Date(req.body.fechaCompra);
        newBody = {...req.body, fechaCompra: fechaDeCompra}
    }
    try {
        const inventario = await Inventario.findByIdAndUpdate(
            req.params.id, 
            req.body.fechaCompra ? newBody : req.body,
            {returnOriginal: false}
        );
        return res.status(200).json(inventario);    
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const deleteInventarioByID = async (req, res) => {
    try {
        if (await Inventario.findByIdAndDelete(req.params.id)) {
            res.status(200).json({msg: `Se ha borrado el registro de inventario con id: ${req.params.id}`});
        }else {
            return res.status(404).json({msg: 'El registro de inventario no existe.'});
        }       
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

module.exports = {
    createInventario, 
    getInventarios, 
    getInventarioByID, 
    updateInventarioByID, 
    deleteInventarioByID
}