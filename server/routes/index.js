const express = require('express');
const router = express.Router();
/* routes */
const Wit = require('./Wit');
const Resources = require('./Resources');
const Topics = require('./Topics');
const Login = require('./Login');

router.use('/query', Wit);
router.use('/resources', Resources);
router.use('/topics', Topics);
router.use('/login', Login);

module.exports = router;