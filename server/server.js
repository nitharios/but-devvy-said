// THIS IS NIGEL!!!!
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('botkit:webserver');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const redis = require('connect-redis')(session);
const path = require('path');

const db = require('./models');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(session({
  store: new redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

/* routes */
app.use('/api', routes);
app.use('*', (req, res) => {
  console.log('sanity');
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  db.sequelize.sync({ force : false });
  console.log(`Server listening on port: ${PORT}`);
});