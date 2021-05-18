const router = require('express').Router();

const { adminGet, adminPost } = require('../controllers/admin-controller');
const personalDataValidators = require('../middlewares/personal-data-validators');

router.get('/', adminGet);

router.post('/',[
    ...personalDataValidators
], adminPost);

module.exports = router;