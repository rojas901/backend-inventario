const Marca = require('../models/marca');

const createMarca = async (req, res) => {
    const marca = new Marca(req.body);
    try {
        if (await Marca.findOne({nombre: req.body.nombre})) {
            return res.status(200).json({msg: 'La marca ya existe.'});
        }else {
            await marca.save();
            return res.status(200).json(marca);
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find({estado:true});
        return res.status(200).json(marcas);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const getMarcaByID = async (req, res) => {
    try {
        const marca = await Marca.findOne({_id: req.params.id, estado:true});
        return res.status(200).json(marca);
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const updateMarcaByID = async (req, res) => {
    try {
        const marca = await Marca.findByIdAndUpdate(
            req.params.id, 
            {...req.body, fechaActualizacion: new Date().toLocaleString()}, 
            {returnOriginal: false}
        );
        return res.status(200).json(marca);    
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

const deleteMarcaByID = async (req, res) => {
    try {
        if (await Marca.findByIdAndDelete(req.params.id)) {
            res.status(200).json({msg: `Se ha borrado el tipo de equipo: ${req.params.id}`});
        }else {
            return res.status(404).json({msg: 'La marca no existe.'});
        }        
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Petición invalida'});
    }
}

module.exports = {
    createMarca, 
    getMarcas, 
    getMarcaByID, 
    updateMarcaByID, 
    deleteMarcaByID
}