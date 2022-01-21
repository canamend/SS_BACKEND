const { body, } = require("express-validator")

const validateFields = require("./validate-fields");
//const { userAlreadyRegistered, duplicatedUser } = require('./exists-user');

let testInfoValidators = [
  body('nombre', 'El nombre del test es requerido').exists(),
  //body('usuario').custom( userAlreadyRegistered ),
  //body('usuario').custom(duplicatedUser),
  body('keyword', 'La palabra clave es requerida').exists(),
  body('enfoque', 'El enfoque del test es requerido').exists(),
  //body('questions', 'Las preguntas son requeridas').exists(),
  validateFields
]


module.exports = testInfoValidators;