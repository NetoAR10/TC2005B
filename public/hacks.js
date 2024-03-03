const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));



app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//registrar el middleware con el modulo construcciones
const rutasConstrucciones = require('./routes/construcciones.routes');

app.use('/', rutasConstrucciones);

app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', '404.html'));
  });

  app.listen(3000);