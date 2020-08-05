const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// Metodo Get para traer todos los Estudiantes
router.get('/api/student', (req, res) => {
  mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
    if (!err) {
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

// Metodo post para Agregar un Estudiante
router.post('/api/student', (req, res) => {
  mysqlConnection.query('INSERT INTO student SET ?', [req.body], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Estudiante Guardado' });
    } else {
      console.log(err);
    }
  });
});

// Metodo PUT para Actualizar un Estudiante
router.put('/api/student/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('UPDATE student SET ? WHERE id = ?', [req.body, id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Alumno Actualizado'});
    } else {
      console.log(err);
    }
  });
});

// Metodo DELETE para Eliminar un Estudiante
router.delete('/api/student/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM student WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Estudiante Eliminado' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

