const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/problema1', (request, response, next) => {
    response.render('problema1');
});


router.post('/problema1', (request, response, next) => {
    console.log(request.body.respuesta1);
    const res1 = request.body.respuesta1;
    console.log(res1);
    
    function problema1(num) {
        var res = "";
        if (num < 2 || num > 10) {
            return "escribe un numero entre el 2 y el 10";
        } else {
            for (let i = 1; i <= num; i++) {
                res += "El numero al cuadrado de " + i + " es: " + i*i + " y el cubo es: " + i*i*i + "\n";
            }
        }
        return res;
    }

    x = problema1(res1);
    respuesta = x;
    //response.redirect('/problema1');
    response.send(x);
});


router.get('/problema2', (request, response, next) => {
    response.render('problema2');
});

router.get('/problema3', (request, response, next) => {
    response.render('problema3');
});

router.get('/problema4', (request, response, next) => {
    response.render('problema4');
});

router.get('/problema5', (request, response, next) => {
    response.render('problema5');
});

router.get('/problema6', (request, response, next) => {
    response.render('problema6');
});

router.get('/', (request, response, next) => {
    response.render("principal");
});

module.exports = router;