const { Router } = require('express');
const { check } = require('express-validator');
const { tiposRespuestasGet, respuestasPost } = require('../controllers/respuestas.controller');
const validateFields = require('../middlewares/validate-fields');

const router = Router();

router.get('/all', [
], tiposRespuestasGet);


router.post('/',[
    //check('respuestas', 'Las respuestas son requeridas').exists(),
    check('respuestas.*.opcion', 'La opción es requerida').exists(),
    check('respuestas.*.puntos', 'Los puntos son requeridos').exists(), 
    check('respuestas.*.tipo_respuestas', 'El tipo de respuesta es requerido').exists(),
    check('respuestas.*.url_imagen', 'El url de la imagen es requerido').exists(),
    validateFields
], respuestasPost);

module.exports = router;