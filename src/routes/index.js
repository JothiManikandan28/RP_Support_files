const express = require('express');

const router = express.Router();

// const response = require('../utility/response');

const response = require('../utility/response');


router.use('/login', require('./login.routes'), response?.default);
router.use('/user', require('./user.routes'), response.default);
router.use('/roles',require('./roles.routes'), response?.default);
router.use('/modules', require('./modules.routes'), response.default);
router.use('/features', require('./features.routes'), response.default);


module.exports = router;
