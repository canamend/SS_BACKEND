const { Router } = require('express');
const { param, check, body } = require('express-validator');

const { testGet, testsGet, testPost, questionsPost } = require('../controllers/test.controller');
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
    body('questions.*.id_test', 'Los ids del test de las preguntas del test son requeridos').exists(),
    body('questions.*.tipo_respuestas', 'Los tipos de preguntas del test son requeridos').exists(),
    body('questions.*.url_imagen', 'Los url de las preguntas del test son requeridos').exists(),
    validateFields 
], testPost);

router.post('/:testid*?',[
    param('testid', 'Debe proporcionar el id del test').exists(),
    body('questions.*.id_pregunta', 'El id de la pregunta es requerido').exists(),
    body('questions.*.nombre', 'Los nombres de las preguntas del test son requeridos').exists(),
    body('questions.*.id_test', 'Los ids del test de las preguntas del test son requeridos').exists(),
    body('questions.*.tipo_respuestas', 'Los tipos de preguntas del test son requeridos').exists(),
    body('questions.*.url_imagen', 'Los url de las preguntas del test son requeridos').exists(),
], questionsPost)


module.exports = router;