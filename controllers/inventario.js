const Inventario = require('../models/inventario');
//crear un tipo de equipo
const createInventario = async (req, res) => {
    const fechaDeCompra = new Date(req.body.fechaCompra).toLocaleString();
    const inventario = new Inventario({...req.body, fechaCompra: fechaDeCompra});
    try {
        await inventario.save();
        res.status(200).json(inventario);
    } catch (error) {
        console.log(error);
    }
}

//consulta todos los tipos de equipo
const getInventarios = async (req, res) => {
    try {
        const inventario = await Inventario.find();
        res.status(200).json(inventario);
    } catch (error) {
        console.log(error);
    }
}

//consulta un tipo de equipo por ID
const getInventarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        const inventario = await Inventario.findById(id);
        res.status(200).json(inventario);
    } catch (error) {
        console.log(error);
    }
}

//actualizar un tipo de equipo por ID
const updateInventarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    if (req.body.fechaCompra) {
        fechaDeCompra = new Date(req.body.fechaCompra).toLocaleString();
        newBody = {...req.body, fechaCompra: fechaDeCompra}
    }
    try {
        let inventario = await Inventario.findByIdAndUpdate(
            id, 
            req.body.fechaCompra ? newBody : req.body,
            {returnOriginal: false}
        );
        res.status(200).json(inventario);    
    } catch (error) {
        console.log(error);
    }
}

//borra un tipo de equipo por ID
const deleteInventarioByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        await Inventario.findByIdAndDelete(id);
        res.status(200).json({msg: `Se ha borrado el inventario: ${id}`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createInventario, 
    getInventarios, 
    getInventarioByID, 
    updateInventarioByID, 
    deleteInventarioByID
}