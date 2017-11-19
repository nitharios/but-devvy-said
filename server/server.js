const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./routes/index');
const db = require('./models');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname + '..' + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.listen(PORT, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});