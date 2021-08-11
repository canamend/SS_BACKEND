const { Router } = require('express');
const { check } = require('express-validator');
const { body } = require('express-validator');
const { historialPost, historialGet } = require('../controllers/historial.controller');

const validateFields = require('../middlewares/validate-fields');


const router = Router();

router.post('/', [
    body('id_test', 'El numero de test es requerido').exists(),
    body('id_paciente', 'El id_paciente es requerido').exists(),
    body('id_admin', 'El id_admin es requerido').exists(),
    body('f_asignacion', 'La fecha de asignación es requerida').exists(),
    validateFields
], historialPost);


 router.get('/:id_paciente*?',[
    check('id_paciente', 'El número de paciente es requerido').exists(),
    validateFields
], historialGet);

module.exports = router;