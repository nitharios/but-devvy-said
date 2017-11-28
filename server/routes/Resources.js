const express = require('express');
const db = require('../models');
const { Resource } = db;
const { error_occurred, 
        missing_key 
      } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
.get((req, res) => {
  return Resource.findAll({
    order : [[ 'createdAt', 'DESC' ]],
    limit : 10
  })
  .then(resourceList => {
    console.log('resources requested');
    res.json(resourceList);
  })
  .catch(err => {
    console.log('ERROR', err);
    res.json(error_occurred);
  });
})
.post((req, res) => {
  console.log(req.body);
  const data = req.body;

  return Resource.create({
    firstName : data.firstName,
    lastName : data.lastName,
    email : data.email,

    cohort : data.cohort,
    
    topics : data.topics,
    note : data.note,
    example : data.example,
    link: data.link,
  })
  .then(newResource => {
    console.log('new resource added');
    return res.json(newResource);
  })
  .catch(err => {
    console.log('ERROR', err);
    return res.json(error_occurred);
    
  });
});

module.exports = router;