const Marca = require('../models/marca');
//crear un tipo de equipo
const createMarca = async (req, res) => {
    const marca = new Marca(req.body);
    try {
        await marca.save();
        res.status(200).json(marca);
    } catch (error) {
        console.log(error);
    }
}

//consulta todos los tipos de equipo
const getMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find();
        res.status(200).json(marcas);
    } catch (error) {
        console.log(error);
    }
}

//consulta un tipo de equipo por ID
const getMarcaByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        const marca = await Marca.findById(id);
        res.status(200).json(marca);
    } catch (error) {
        console.log(error);
    }
}

//actualizar un tipo de equipo por ID
const updateMarcaByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        let marca = await Marca.findByIdAndUpdate(
            id, 
            {...req.body, fechaActualizacion: new Date().toLocaleString()}, 
            {returnOriginal: false}
        );
        res.status(200).json(marca);    
    } catch (error) {
        console.log(error);
    }
}

//borra un tipo de equipo por ID
const deleteMarcaByID = async (req, res) => {
    const id = req.url.slice(1, req.url.length);
    try {
        await Marca.findByIdAndDelete(id);
        res.status(200).json({msg: `Se ha borrado el tipo de equipo: ${id}`});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createMarca, 
    getMarcas, 
    getMarcaByID, 
    updateMarcaByID, 
    deleteMarcaByID
}