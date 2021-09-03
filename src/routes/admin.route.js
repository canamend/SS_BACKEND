const router = require('express').Router();
const { param } = require('express-validator');

const { adminGet, adminPost, adminsGet } = require('../controllers/admin-controller');
const personalDataValidators = require('../middlewares/personal-data-validators');
const { validateToken } = require('../middlewares/validate-token'); 

router.get('/', [
    validateToken
], adminGet);

router.get('/all', [
], adminsGet)

router.post('/',[
    ...personalDataValidators
], adminPost);

module.exports = router;