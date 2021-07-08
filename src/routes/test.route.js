const { Router } = require('express');
const { param } = require('express-validator');

const { testGet } = require('../controllers/test.controller');
const validateFields = require('../middlewares/validate-fields');


const router = Router();

router.get('/:testid*?', [
    param('testid', 'Debe proporcionar el id del test').exists(),
    validateFields
], testGet);

module.exports = router;