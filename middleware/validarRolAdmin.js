const validarRolAdmin = (req, res, next) => {
  if (req.payload.rol !== 'Administrador') {
    return res.status(401).json({msg: 'Error no autorizado'});
  }

  next();
}

module.exports = validarRolAdmin;