const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false, // la sesion no se guardara en cada peticion sino solo si algo cambio
    saveUninitialized: false, // asegura que no se guarde una sesion para una peticion que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Agregar protección contra ataques CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

const rutasUsuarios = require('./routes/usuarios.routes.js');
app.use('/users', rutasUsuarios);

const rutasProblemas = require('./routes/problemas.routes.js');
app.use('/principal', rutasProblemas);


app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
        path.join(__dirname, 'views', '404.html')
    );
});

app.listen(3000);