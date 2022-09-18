const {Router} = require('express');
const {createMarca, getMarcas, getMarcaByID, updateMarcaByID, deleteMarcaByID} = require('../controllers/marca');

const router = Router();
//crear un tipo de equipo
router.post('/', createMarca);
//consulta todos los tipos de equipo
router.get('/', getMarcas);
//consulta un tipo de equipo por ID
router.get('/:id', getMarcaByID);
//actualizar un tipo de equipo por ID
router.put('/:id', updateMarcaByID);
//borra un tipo de equipo por ID
router.delete('/:id', deleteMarcaByID);

module.exports = router;