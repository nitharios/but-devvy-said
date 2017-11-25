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
  
  const { title, format, code, comment } = req.body;
  //should do validation.. f
  // console.log(topic,"TOPICS!")
  // console.log(title,"TITLE!")
  // console.log(student,"STUDETN!!")
  // console.log(format,"FORMATTTT!")
  // console.log(cohort,"COHORT !")
  // console.log(bullets, " BULLETS")
  console.log(req.body, " REQ BOD")

  return Example.create({
    title : title,
    format: format,
    code : code,
    comment: comment
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