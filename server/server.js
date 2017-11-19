const express = require('express');
const bodyParser = require('body-parser');

/*const routes = require('./routes/index');*/


const db = require('./models');
const DevvyCho = require('./chatbot');
const dotenv = require('dotenv');
// load env variables
dotenv.load();

const PORT = process.env.PORT || 8000;
const SLACK_TOKEN = process.env.SLACK_TOKEN || '';

const app = express();

app.use(express.static(__dirname + '..' + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});