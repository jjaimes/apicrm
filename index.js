const express       = require('express');
const routes        = require('./routes');
const mongoose      = require('mongoose');
const conectarDB    = require('./config/db');
const bodyParser    = require('body-parser')

require('dotenv').config({ path: 'variables.env'})

// CONECTAR BD
conectarDB();

//Crear el SERVER
const app = express();

//HABILITAR el BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// RUTAS de la APP
app.use('/', routes() );

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

//PUERTO
// app.listen(5000);
app.listen(port, host, () =>{
    console.log('Server up!')
} );