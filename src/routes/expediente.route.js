const { Router } = require('express');
const { body } = require('express-validator');
const { expedientePost } = require('../controllers/expediente.controller');
const validateFields = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
  body('expediente', 'El numero de expediente es requerido').exists(),
  body('id_admin', 'El id_admin es requerido').exists(),
  body('disponible', 'El disponible es requerido').exists(),
  validateFields
], expedientePost);

module.exports = router;