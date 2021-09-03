const { Router } = require('express');
const { param } = require('express-validator');

const { testGet, testsGet } = require('../controllers/test.controller');
const validateFields = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-token');


const router = Router();

router.get('/all', [
], testsGet);

router.get('/:testid*?', [
    param('testid', 'Debe proporcionar el id del test').exists(),
    validateFields
], testGet);



module.exports = router;