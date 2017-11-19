const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models');
const dotenv = require('dotenv');
// load env variables
dotenv.load();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname + '..' + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});