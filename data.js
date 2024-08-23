const express = require('express');
const app = express();
const port = 3000;

// Datos simulados
const data = {
  "labels": ["3 horas", "2.5 - 1.5 horas", "1.5 horas"],
  "data": [25, 5, 50]
};

// Endpoint para obtener datos
app.get('/api/data', (req, res) => {
  res.json(data); // Enviar los datos como JSON
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
