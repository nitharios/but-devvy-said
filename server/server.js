const express = require('express');
const bodyParser = require('body-parser');
/*
const routes = require('./routes/index');*/

/*MODELS*/
const db = require('./models');
const Resource = db.resource;
const Tag = db.tag;
const Topic = db.topic;

const PORT = process.env.PORT || 8000;
const DevvyCho = require('./chatbot');
const app = express();

/*app.use(DevvyCho);*/

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});