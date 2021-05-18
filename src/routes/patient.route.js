const router = require('express').Router();

const { body } = require('express-validator');
const { patientPost } = require('../controllers/patient.controller');
const { existsCuidador } = require('../middlewares/exists-cuidador');
const { existsExpediente } = require('../middlewares/exists-expediente');
const personalDataValidators = require('../middlewares/personal-data-validators');

router.post('/',[
    body('no_expediente','Debe proporcionar el expediente del paciente.').exists(),
    body('no_expediente').custom( existsExpediente ),
    body('id_cuidador','Debe proporcionar el id del cuidador.').exists(),
    body('id_cuidador').custom( existsCuidador ),
    ...personalDataValidators
], patientPost);

module.exports = router;
