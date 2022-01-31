const { Router } = require('express');
const { param, check, body } = require('express-validator');

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
    body('id_test', 'El id del test es requerido').exists(),
    body('nombre', 'El nombre del test es requerido').exists(),
    body('keyword', 'La palabra clave del test es requerido').exists(),
    body('enfoque', 'El enfoque del test es requerido').exists(),
    body('questions.*.nombre', 'Las preguntas del test son requeridas').exists(),
    validateFields 
], testPost);


module.exports = router;