const router = require('express').Router();
const { param } = require('express-validator');

const { adminGet, adminPost } = require('../controllers/admin-controller');
const personalDataValidators = require('../middlewares/personal-data-validators');
const { validateToken } = require('../middlewares/validate-token'); 

router.get('/', [
    validateToken
], adminGet);

router.post('/',[
    ...personalDataValidators
], adminPost);

module.exports = router;