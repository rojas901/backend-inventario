const {Router} = require('express');
const {validationResult, check} = require('express-validator');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const generarJWT = require('../helpers/jwt');

const router = Router();

router.post('/', [
  check('email', 'email.requerido').isEmail(),
  check('contrasena', 'contrasena.requerida').not().isEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({msg: errors.array()});
    }

    const usuario = await Usuario.findOne({email: req.body.email});
    if (!usuario) {
      return res.status(400).json({msg: 'Usuario no encontrado'})
    }

    const esIgual = bcrypt.compareSync(req.body.contrasena, usuario.contrasena);
    if (!esIgual) {
      return res.status(400).json({msg: 'Usuario no encontrado'});
    }

    const token = generarJWT(usuario);

    return res.status(200).json({_id: usuario._id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol, access_token: token});
    
  } catch (error) {
    console.log(error);
    res.status(400).json({msg: 'Petición invalida'});
  }
});

module.exports = router;