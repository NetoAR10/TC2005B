const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});


const rutasProblemas = require('./routes/problemas.routes.js');
app.use('/', rutasProblemas);


app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
        path.join(__dirname, 'views', '404.html')
    );
});

app.listen(3000);