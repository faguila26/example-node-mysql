const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// Metodo Get para traer todos los Estudiantes
router.get('/api/student', (req, res) => {
    mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });


// Metodo Get para traer un Estudiante
router.get('/api/student/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM student WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

