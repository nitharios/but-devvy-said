const express = require('express');
const { client } = require('../../node-wit/wit');

const db = require('../models');
const { Topic,
        Example,
        Note,
        Resource } = db;
const { error_occurred, missing_key } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
.post((req, res) => {
  const { userQuery } = req.body;
  console.log(userQuery);

  return client.message(userQuery)
  .then(data => {
    
    let { db_query } = data.entities;

    return Topic.findOne({ 
      where : { name : db_query[0].value },
      include : [
        { 
          model : Example,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 3
        },
        {
          model : Note,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 3
        },
        {
          model : Resource,
          order : [[ 'createdAt', 'DESC' ]],
          limit : 5
        }
      ]
    })
    .then(topicInfo => {
      return res.json(topicInfo);
    });
  })
  .catch(err => {
    console.log(error_occurred);
    return res.json(error_occurred);
  });
});

module.exports = router;