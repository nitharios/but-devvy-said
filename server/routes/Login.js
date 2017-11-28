const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.route()
.get('/', (req, res, next) => {
  console.log('IN THE LOGIN ROUTE')
  res.send('Go back and register!');
});

module.exports = router;