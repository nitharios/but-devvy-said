const express = require('express');
const { Resource,
        Topic
      } = require('../models');
const { already_exists,
        error, 
        missing_key 
      } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
.get((req, res) => {
  return Topic.findAll({
    include : [{ model : Resource }],
    order : [[ 'name' ]]
  })
  .then(topicsList => {
    return res.json(topicsList);
  })
  .catch(err => {
    console.log('ERROR', err);
    return res.json(response.error);
  });
})
.post((req, res) => {
  const { name, topic_id } = req.body;

  if (!name || !topic_id) {
    return res.json((response.missing_key));
  }

  return Topic.findOne({
    where : { name : name.toLowerCase() }
  })
  .then(response => {
    if (response) {
      return res.json(response.already_exists);
    
    } else {
      return Topic.create({
        name : name,
        topic_id : topic_id
      })
      .then(newTopic => {
        return res.json(newTopic);
      });
    }
  })
  .catch(err => {
    console.log('ERROR', err);
    return res.json(null);
  });
});

router.route('/:topic_name')
.get((req, res) => {
  const { topic_name } = req.params;

  if (!topic_name) {
    return(response.missing_key);
  }

  return Topic.findOne({
    where : { name : topic_name },
    include : [{ model : Resource }]
  })
  .then(singleTopic => {
    return res.json(singleTopic);
  })
  .catch(err => {
    console.log('ERROR', err);
    return res.json(null);
  });
})
.put((req, res) => {
  const { topic_name } = req.params;
  const { id, updatedTopicName } = req.body; 

  return Topic.update({
    name : updatedTopicName
  },
  { 
    where : { id : id }
  })
  .then(updatedTopic => {
    console.log('update successful');
    
    return updatedTopic.reload({
      include : [{ model : Resource }]
    })
    .then(updatedTopicDetails => {
      return res.json(updatedTopicDetails);
    });
  })
  .catch(err => {
    console.log(err);
    return res.json(response.error);
  });
});

module.exports = router;