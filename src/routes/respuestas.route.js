const { Router } = require('express');
const { tiposRespuestasGet } = require('../controllers/respuestas.controller');

const router = Router();

router.get('/all', [
], tiposRespuestasGet);

module.exports = router;