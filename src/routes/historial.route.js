const router = require('express').Router();

const { check } = require('express-validator');
const { body } = require('express-validator');
const { historialesGet, historialPost, historialGet, historialUpdate } = require('../controllers/historial.controller');

const validateFields = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');

router.get('/all', [
    validateToken
], historialesGet);

router.get('/:patientid*?',[
    check('patientid', 'El número de paciente es requerido').exists(),
    validateFields
], historialGet);

router.post('/', [
    body('id_test', 'El numero de test es requerido').exists(),
    body('id_paciente', 'El id_paciente es requerido').exists(),
    body('id_admin', 'El id_admin es requerido').exists(),
    body('f_asignacion', 'La fecha de asignación es requerida').exists(),
    validateFields
], historialPost);

router.post('/:historial_id*?', [
    check('historial_id', 'El número de paciente es requerido').exists(), //borrar si causa problemas
    validateFields
], historialUpdate);

module.exports = router;