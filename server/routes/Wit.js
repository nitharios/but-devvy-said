const express = require('express');
const { client } = require('../../node-wit/wit');
const db = require('../models');
const { Topic, Resource } = db;
const { error_occurred, missing_key } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
.post((req, res) => {
  const { userQuery } = req.body;
  
  return client.message(userQuery)
  .then(data => {
    const { db_query } = data.entities;
    
    return Topic.findOne({ 
      where : { name : db_query[0].value },
      include : [
        {
          model : Resource,
          limit : 5,
          order : [[ 'createdAt', 'DESC' ]]
        }
      ]
    })
    .then(topicInfo => {      
      return res.json(topicInfo);
    });
  })
  .catch(err => {
    console.log(err);
    return res.json(error_occurred);
  });
});

module.exports = router;