const express = require('express');
const db = require('../models');
const { Example } = db;
const { already_exists, 
        error_occurred,
        missing_key 
      } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    return Example.findAll({
      include : [{ model : Example }],
      order : [[ 'Submission Date' ]]
    })
    .then(examples => {
      return res.json(examples);
    })
    .catch(err => {
      return res.json(error_occurred);
    });
  })
  .post((req, res) => {
    
    const { topic, title, student, cohort, bullets } = req.body;
    //should do validation.. f
    return Example.create({
      topic : topic,
      title : title,
      student : student,
      cohort : cohort,
      bullets : bullets
    })
    .then(newExample => {
      return res.json(newExample);
    })
    .catch(error => {
      console.log(error);
      return res.json(error_occurred);
    });

  });

module.exports = router;