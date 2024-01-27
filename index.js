const express = require('express');
const os = require('os');
 
// Obtener el nombre de la máquina
const hostname = os.hostname();
 
// Mostrar el nombre de la máquina

console.log('El nombre de la máquina es:', hostname);

const app = express();

app.get('/', (req, res) => {
  res.send('El nombre de la máquina es:' + hostname);
})

module.exports = app;
