const { Router } = require('express');
const { body, param } = require('express-validator');

const { cuidadorPost, cuidadorGet } = require('../controllers/cuidador.controller');
const validateFields = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');

const router = Router();

router.post('/',[
    body('nombre', 'El nombre es requerido').exists(),
    body('parentesco', 'El nombre es requerido').exists(),
    body('genero', 'El genero es requerido').exists(), 
    body('telefono', 'El telefono es requerido').exists(),
    validateFields
], cuidadorPost);

router.get('/:id_cuidador*?', [
    validateToken,
    param('id_cuidador').exists(),
    validateFields
], cuidadorGet);

module.exports = router;