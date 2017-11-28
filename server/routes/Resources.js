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
  const title = data.title;
  const topic_id = data.topic_id;

  if (!title || !topic_id) {
    return res.json(missing_key);
  }

  return Resource.create({
    name : data.name,
    cohort : data.cohort,
    title : title,
    tags : data.tags,
    topic_id : topic_id,
    note : data.note,
    example : data.example,
    link: data.link
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