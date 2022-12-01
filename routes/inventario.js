const {Router} = require('express');
const {createInventario, getInventarios, getInventarioByID, updateInventarioByID, deleteInventarioByID} = require('../controllers/inventario');
const validarRolAdmin = require('../middleware/validarRolAdmin');

const router = Router();
//crear un tipo de equipo
router.post('/', [validarRolAdmin], createInventario);
//consulta todos los tipos de equipo
router.get('/', getInventarios);
//consulta un tipo de equipo por ID
router.get('/:id', getInventarioByID);
//actualizar un tipo de equipo por ID
router.put('/:id', [validarRolAdmin], updateInventarioByID);
//borra un tipo de equipo por ID
router.delete('/:id', [validarRolAdmin], deleteInventarioByID);

module.exports = router;