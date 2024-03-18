const Respuesta = require('../models/respuestas.model');

exports.get_problema1 = (request, response, next) => {
    response.render('problema1', {
        username: request.session.username || '',
    });
};

exports.post_problema1 = (request, response, next) => {
    console.log(request.body.respuesta1);
    const res1 = request.body.respuesta1;
    console.log(res1);
    x = problema1(res1);
    const respuesta = new Respuesta(request.body.respuesta1, x)

    
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

    
    //respuesta = x;
    console.log(x);

    
    respuesta.save();
    response.setHeader('Set-Cookie', 'ultima_respuesta=' + request.body.input_respuesta1 + '; HttpOnly');
    response.redirect('/');
};


exports.get_problema2 = (request, response, next) => {
    response.render('problema2')
};


exports.post_problema2 = (rquest, response, next) => {
    console.log(request.body.respuesta2);
};


exports.get_problema3 = (request, response, next) => {
    response.render('problema3')
};


exports.post_problema2 = (rquest, response, next) => {
    console.log(request.body.respuesta2);
};


exports.get_problema4 = (request, response, next) => {
    response.render('problema4')
};


exports.post_problema2 = (rquest, response, next) => {
    console.log(request.body.respuesta2);
};


exports.get_problema5 = (request, response, next) => {
    response.render('problema5')
};


exports.post_problema2 = (rquest, response, next) => {
    console.log(request.body.respuesta2);
};


exports.get_problema6 = (request, response, next) => {
    response.render('problema6')
};


exports.post_problema2 = (rquest, response, next) => {
    console.log(request.body.respuesta2);
};


exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_respuesta = request.get('Cookie');
    if (ultima_respuesta) {
        ultima_respuesta = ultima_respuesta.split('=')[1];
    } else {
        ultima_respuesta = '';
    }
    console.log(ultima_respuesta);
    response.render('principal', {
        respuestas: Respuesta.fetchAll(),
        ultima_respuesta: ultima_respuesta,
        username: request.session.username || '',
    });
};