const {Router} = require('express');
const {createInventario, getInventarios, getInventarioByID, updateInventarioByID, deleteInventarioByID} = require('../controllers/inventario');

const router = Router();
//crear un tipo de equipo
router.post('/', createInventario);
//consulta todos los tipos de equipo
router.get('/', getInventarios);
//consulta un tipo de equipo por ID
router.get('/:id', getInventarioByID);
//actualizar un tipo de equipo por ID
router.put('/:id', updateInventarioByID);
//borra un tipo de equipo por ID
router.delete('/:id', deleteInventarioByID);

module.exports = router;