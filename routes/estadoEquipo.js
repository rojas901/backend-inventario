const {Router} = require('express');
const {createEstadoEquipo, getEstadoEquipoByID, getEstadosEquipos, updateEstadoEquipoByID, deleteEstadoEquipoByID} = require('../controllers/estadoEquipo');

const router = Router();
//crear un tipo de equipo
router.post('/', createEstadoEquipo);
//consulta todos los tipos de equipo
router.get('/', getEstadosEquipos);
//consulta un tipo de equipo por ID
router.get('/:id', getEstadoEquipoByID);
//actualizar un tipo de equipo por ID
router.put('/:id', updateEstadoEquipoByID);
//borra un tipo de equipo por ID
router.delete('/:id', deleteEstadoEquipoByID);

module.exports = router;