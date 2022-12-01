const {Router} = require('express');
const {createUsuario, getUsuarios, getUsuarioByID, updateUsuarioByID, deleteUsuarioByID} = require('../controllers/usuario');
const {check} = require('express-validator');

const router = Router();
//crear un tipo de equipo
router.post('/', [
  check('nombre', 'invalid.nombre').not().isEmpty(),
  check('email', 'invalid.email').isEmail(),
  check('rol', 'invalid.rol').isIn(['Administrador', 'Docente']),
  check('contrasena', 'invalid.contrasena').not().isEmpty()  
], createUsuario);
//consulta todos los tipos de equipo
router.get('/', getUsuarios);
//consulta un tipo de equipo por ID
router.get('/:id', getUsuarioByID);
//actualizar un tipo de equipo por ID
router.put('/:id', updateUsuarioByID);
//borra un tipo de equipo por ID
router.delete('/:id', deleteUsuarioByID);

module.exports = router;