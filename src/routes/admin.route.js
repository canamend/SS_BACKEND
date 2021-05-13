const router = require('express').Router();
const { body } = require('express-validator');

const validateFields = require('../middlewares/validate-fields');
const { adminGet, adminPost } = require('../controllers/admin-controller');


router.get('/', adminGet);

router.post('/',[
    body('nombre', 'El nombre es requerido').exists(),
    body('appaterno', 'El apellido paterno es requerido').exists(),
    body('apmaterno', 'El apellido materno es requerido').exists(),
    body('genero','El genero es requerido').exists(),
    body('genero','El genero debe tener uno de los siguientes valores [M, F]').isIn(['M', 'F']),
    body('fnacimiento', 'La fecha de nacimiento es requerida').exists(),
    body('fnacimiento','Formato de fecha incorrecto').isDate(),
    validateFields
], adminPost);

module.exports = router;