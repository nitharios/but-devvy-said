const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models');

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  console.log('Server request');
  res.json('Sanity check');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});