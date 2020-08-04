const express = require('express');
const app = express();

// Definimos el Puerto
const PORT = 3000; 

// Middlewares
app.use(express.json());

// Rutas
app.use(require('./routes/student'));


// Corriendo el Server
app.listen(PORT, () => {
    console.log('Servidor en el Puerto ' + PORT);
});
