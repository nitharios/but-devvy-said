const express = require('express');
const bodyParser = require('body-parser');

const db = require('./models');
const Topic = db.topic;

const PORT = process.env.PORT || 8000;
const DevvyCho = require('./chatbot');
const app = express();

app.use(DevvyCho);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});