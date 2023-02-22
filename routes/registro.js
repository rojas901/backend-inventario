const {Router} = require('express');
const Usuario = require('../models/usuario');
const {validationResult, check} = require('express-validator');
const bcrypt = require('bcryptjs');


const router = Router();

router.post('/', [
  check('email', 'email.requerido').isEmail(),
  check('contrasena', 'contrasena.requerida').not().isEmpty()
], async (req, res) => {
  const salt = bcrypt.genSaltSync();
  const contrasena = bcrypt.hashSync(req.body.contrasena, salt);
  const usuario = new Usuario({...req.body, contrasena});
  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({msg: errors.array()})
      }

      if (await Usuario.findOne({$or: [{nombre: req.body.nombre}, {email: req.body.email}]})) {
          return res.status(400).json({msg: 'El usuario o email, ya existe.'});
      }else {
          await usuario.save();
          return res.status(200).json(usuario);
      }
  } catch (error) {
      console.log(error);
      return res.status(400).json({msg: 'Petición invalida'});
  }
});

module.exports = router;