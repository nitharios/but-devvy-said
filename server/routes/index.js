const express = require('express');
const router = express.Router();
/* routes */
const Wit = require('./Wit');
const Resources = require('./Resources');
const Topics = require('./Topics');

router.use('/query', Wit);
router.use('/resources', Resources);
router.use('/topics', Topics);

module.exports = router;