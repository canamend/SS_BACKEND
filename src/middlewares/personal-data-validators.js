const { body } = require("express-validator")

const validateFields = require("./validate-fields");
const { userAlreadyRegistered, duplicatedUser } = require('./exists-user');

let personalDataValidators = [
  body('usuario', 'El usuario es requerido').exists(),
  body('usuario').custom( userAlreadyRegistered ),
  body('usuario').custom(duplicatedUser),
  body('nombre', 'El nombre es requerido').exists(),
  body('appaterno', 'El apellido paterno es requerido').exists(),
  body('apmaterno', 'El apellido materno es requerido').exists(),
  body('genero','El genero es requerido').exists(),
  body('genero','El genero debe tener uno de los siguientes valores [M, F]').isIn(['M', 'F']),
  body('fnacimiento', 'La fecha de nacimiento es requerida').exists(),
  body('fnacimiento','Formato de fecha incorrecto').isDate(),
  validateFields
]


module.exports = personalDataValidators;