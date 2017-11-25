const express = require('express');
const db = require('../models');
const { Note, Example } = db;
const { already_exists, 
        error_occurred,
        missing_key 
      } = require('../lib/query.responses');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    return Note.findAll({
      include : [{ model : Example }],
      order : [[ 'Submission Date' ]]
    })
    .then(notes => {
      return res.json(notes);
    })
    .catch(err => {
      return res.json(error_occurred);
    });
  })
  .post((req, res) => {
    
    /*  
      { 
        topic : 'Arrow Functions',
        title : 'My Notes on Arrow Functions', 
        firstName : 'Chris',
        lastName : 'Min',
        cohort : 19,
        bullets : ['Bullet Point 1', 'Bullet Point 2', 'Bullet Point 3'] 
      }  
    */

    const { topic, title, student, cohort, bullets } = req.body;
    //should do validation.. 
    return Note.create({
      topic : topic,
      title : title,
      student : student,
      cohort : cohort,
      bullets : bullets
    })
    .then(newNote => {
      return res.json(newNote);
    })
    .catch(error => {
      console.log(error);
      return res.json(error_occurred);
    });

  });

module.exports = router;