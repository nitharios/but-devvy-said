const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models');
const DevvyCho = require('./chatbot');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8000;

const app = express();

// load env variables
dotenv.load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// connects Devvy to slack
DevvyCho(process.env.SLACK_TOKEN);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});