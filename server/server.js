const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./models');
const DevvyCho = require('./chatbot');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(DevvyCho);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});