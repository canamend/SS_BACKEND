const router = require('express').Router();
const { check } = require('express-validator');

const { body } = require('express-validator');
const { patientPost, patientGet, patientsGet, patientDelete } = require('../controllers/patient.controller');
const { existsCuidador } = require('../middlewares/exists-cuidador');
const { existsExpediente } = require('../middlewares/exists-expediente');
const { ableToDelete } = require('../middlewares/exists-user');
const personalDataValidators = require('../middlewares/personal-data-validators');
const { validateToken } = require('../middlewares/validate-token');

const validateFields = require('../middlewares/validate-fields');

// Obtener todos los pacientes.
router.get('/all', [
    validateToken
], patientsGet);

/**
 * @param username opcional
 * Si el que está haciendo la petición es un paciente, no es necesario ya que viene en el token.
 * Pero si es otro tipo de usuario, se debe proporcionar dicho valor en los parámetros
 */
router.get('/:username*?', [
    validateToken
], patientGet);

router.post('/',[
    body('no_expediente','Debe proporcionar el expediente del paciente.').exists(),
    body('no_expediente').custom( existsExpediente ),
    body('id_cuidador','Debe proporcionar el id del cuidador.').exists(),
    body('id_cuidador').custom( existsCuidador ),
    ...personalDataValidators
], patientPost);

router.delete('/:username*?', [
    check('username').custom(ableToDelete),
    validateFields
], patientDelete);

module.exports = router;
