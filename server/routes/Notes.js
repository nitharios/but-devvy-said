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
    
    /*  { topic : 'Arrow Functions', title : 'Arrow Function Notes', student : 'Chris', bullets : ['Bullet Point 1', 'Bullet Point 2', 'Bullet Point 3'] }  */

    const { topic, title, student, bullets } = req.body;
    if (!topic || !title || !student || !bullets) {
      return res.json((missing_key));
    } 
    return Note.create({
      topic : topic,
      title : title,
      student : student,
      bullets : bullets
    })
    .then(newNote => {
      return res.json(newNote);
    })
    .catch(error => {
      return res.json(error_occurred);
    });

  });


module.exports = router;

