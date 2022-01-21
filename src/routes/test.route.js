const { Router } = require('express');
const { param, check } = require('express-validator');

const { testGet, testsGet, testPost } = require('../controllers/test.controller');
const { existTest, containsPreguntas } = require('../middlewares/exists-test');
const validateFields = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');


const router = Router();

router.get('/all', [
], testsGet);

router.get('/:testid*?', [
    param('testid', 'Debe proporcionar el id del test').exists(),
    validateFields
], testGet);

router.post('/',[
    check('keyword', 'La palabra clave es requerida').exists(),
    check('questions.*.nombre', 'El nombre es requerido').exists(),
    check('questions.*.puntos', 'Los puntos son requeridos').exists(),
    check('questions.*.factor', 'El factor es requerido').exists(),
    validateFields
], testPost);


module.exports = router;