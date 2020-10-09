// -- Configuracion del proyecto --

//importamos express
const express = require('express');
const routes = require('./routes');
const path = require('path'); //lee los archivos del sistema para ingresar a ellos

// crear una app de express
const app = express();

//cargamos los archivos estaticos
app.use(express.static('public'));

//habilitar Pug
app.set('view engine','pug');

//luego añadimos las carpeta de las vistas, __dirname devuelve la carpeta
app.set('views', path.join(__dirname, './views'));

app.use('/',routes() );

//puerto para correr
app.listen(3000);

