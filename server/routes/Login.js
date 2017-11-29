const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;
const bodyParser = require('body-parser');


router.get('/login', (req, res) => {
  console.log('IN THE LOGIN ROUTE')
  res.send('Go back and register!');
});

module.exports = router;