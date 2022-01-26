const { Router } = require('express');
const { tiposRespuestasGet } = require('../controllers/respuestas.controller');

const router = Router();

router.get('/all', [
], tiposRespuestasGet);

/*
router.post('/',[
    check('questions.*.nombre', 'El nombre es requerido').exists(),
    check('questions.*.puntos', 'Los puntos son requeridos').exists(),
    check('questions.*.factor', 'El factor es requerido').exists(),
]); */
module.exports = router;