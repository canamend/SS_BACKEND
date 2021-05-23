const { Router } = require('express');
const { body } = require('express-validator');

const { cuidadorPost } = require('../controllers/cuidador.controller');

const router = Router();

router.post('/',[
    body('nombre', 'El nombre es requerido').exists(),
    body('parentesco', 'El nombre es requerido').exists(),
    body('genero', 'El genero es requerido').exists(), 
    body('telefono', 'El telefono es requerido').exists(),
], cuidadorPost);

module.exports = router;