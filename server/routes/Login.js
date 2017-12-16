const express = require('express');
const db = require('../models');
const { User } = db;

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Go back and register!');
});

module.exports = router;