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
    const { entities } = data;
    const { db_query } = entities;
    // let attributes = ['example', 'note', 'link'];
    let limit = 5;

    if (entities.number) {
      limit = entities.number[0].value;
    }

    // if (entities.info_type) {
    //   attributes = [entities.info_type[0].value];
    // }
    
    return Topic.findOne({ 
      where : { name : db_query[0].value },
      include : [
        {
          model : Resource,
          order : [[ 'createdAt', 'DESC' ]],
          // attributes : attributes,
          limit : limit
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