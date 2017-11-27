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
  const { title, topic_id } = req.body;
  const data = req.body;
console.log(data, " DATA FROM FORMS!!!!")
  if (!title || !topic_id) {
    return res.json(missing_key);
  }

  return Resource.create({
    title : title,
    topic_id : topic_id,
    example : data.example,
    link: data.link,
    note : data.note,
    cohort : data.cohort,
    name : data.name
  })
  .then(newResource => {
    console.log('new resource added');
    res.json(newResource);
  })
  .catch(err => {
    console.log('ERROR', err);
    res.json(error_occurred);
    
  });
});

module.exports = router;