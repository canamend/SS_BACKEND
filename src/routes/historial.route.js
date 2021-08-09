const { Router } = require('express');
const { body } = require('express-validator');
const { historialPost, historialGet } = require('../controllers/historial.controller');
const validateFields = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');


const router = Router();

router.post('/', [
    body('id_test', 'El numero de test es requerido').exists(),
    body('id_paciente', 'El id_paciente es requerido').exists(),
    body('id_admin', 'El id_admin es requerido').exists(),
    body('f_asignacion', 'La fecha de asignación es requerida').exists(),
    validateFields
], historialPost);

/**
 * @param username opcional
 * Si el que está haciendo la petición es un paciente, no es necesario ya que viene en el token.
 * Pero si es otro tipo de usuario, se debe proporcionar dicho valor en los parámetros
 */
 router.get('/:username*?', [
    validateToken
], historialGet);

module.exports = router;