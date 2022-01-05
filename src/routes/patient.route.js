const router = require('express').Router();

const { body } = require('express-validator');
const { patientPost, patientGet, patientsGet,accountDeletePaciente } = require('../controllers/patient.controller');
const { existsCuidador } = require('../middlewares/exists-cuidador');
const { existsExpediente } = require('../middlewares/exists-expediente');
const personalDataValidators = require('../middlewares/personal-data-validators');
const { validateToken } = require('../middlewares/validate-token');

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

router.delete('/:id*?', [
], accountDeletePaciente);
module.exports = router;
