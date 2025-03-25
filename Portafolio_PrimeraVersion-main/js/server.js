const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));


const dbConfig = {
  host: 'bsqd8wkyzrcfy5m0ujxt-mysql.services.clever-cloud.com',
  user: 'u7xnpuhe1qmcdoao',
  password: 'VzZYSSiz3YIUA1tswjqQ',
  database: 'bsqd8wkyzrcfy5m0ujxt',
  port: 3306,
  ssl: { rejectUnauthorized: false }
};


app.post('/procesar-formulario', async (req, res) => {
  let connection;
  try {

    if (!req.body.user_busca || !req.body.user_presupuesto) {
      return res.redirect('/?success=false&error=' + encodeURIComponent('Debes seleccionar un servicio y presupuesto'));
    }

    connection = await mysql.createConnection(dbConfig);
    
    await connection.execute(
      `INSERT INTO contactame 
      (Nombre, CorreoElectronico, Trabajo, BuscaDe, Presupuesto, Detalles) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        req.body.user_name, 
        req.body.user_mail, 
        req.body.user_trab, 
        req.body.user_busca, 
        req.body.user_presupuesto, 
        req.body.user_message
      ]
    );

  
    res.redirect('/?success=true');
  } catch (err) {
    console.error('Error en la base de datos:', err);

    res.redirect('/?success=false&error=' + encodeURIComponent(err.message));
  } finally {
    if (connection) await connection.end();
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../formulario.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.redirect('/?success=false&error=' + encodeURIComponent('Error interno del servidor'));
});

app.listen(4000, () => console.log('Servidor listo en http://localhost:4000'));