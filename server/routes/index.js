const express = require('express');
const router = express.Router();
/* routes */
const Resources = require('./Resources');
const Tags = require('./Tags');
const Topics = require('./Topics');

router.use('/resources', Resources);
router.use('/tags', Tags);
router.use('/topics', Topics);

module.exports = router;