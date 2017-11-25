const express = require('express');
const router = express.Router();
/* routes */
const Wit = require('./Wit');
const Resources = require('./Resources');
const Tags = require('./Tags');
const Topics = require('./Topics');
const Example = require('./Examples');

router.use('/query', Wit);
router.use('/resources', Resources);
router.use('/tags', Tags);
router.use('/topics', Topics);
router.use('/examples', Example);

module.exports = router;