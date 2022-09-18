const {Router} = require('express');
const {createTipoEquipo, getTipoEquipoByID, getTiposEquipos, updateTipoEquipoByID, deleteTipoEquipoByID} = require('../controllers/tipoEquipo');

const router = Router();
//crear un tipo de equipo
router.post('/', createTipoEquipo);
//consulta todos los tipos de equipo
router.get('/', getTiposEquipos);
//consulta un tipo de equipo por ID
router.get('/:id', getTipoEquipoByID);
//actualizar un tipo de equipo por ID
router.put('/:id', updateTipoEquipoByID);
//borra un tipo de equipo por ID
router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;