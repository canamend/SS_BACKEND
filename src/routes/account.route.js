const { Router } = require('express');
const { check } = require('express-validator');

const { accountGet, accountPost, login } = require('../controllers/account.controller');
const { existsAccount } = require('../middlewares/exists-user');
const validateFields = require('../middlewares/validate-fields');

const router = Router();

router.get('/:usuario*?',[
    check('usuario', 'El nombre de usuario es requerido').exists(),
    validateFields
], accountGet);

router.post('/login',[
    check('usuario', 'El usuario es requerido').exists(),
    check('contrasenia', 'La contrasenia es requerida').exists(),
    validateFields
], login)

router.post('/', [
    check('usuario', 'El nombre de usuario es requerido').exists(),
    check('usuario').custom(existsAccount),
    check('contrasenia', 'La contraseña es requerida').exists(),
    check('rol', 'El rol no es valido').isIn(['admin_rol', 'paciente_rol']),
    validateFields
], accountPost)

module.exports = router;