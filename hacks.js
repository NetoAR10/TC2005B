console.log("hola mundo de maincra");

//fs es el modulo para manipular el sistema de archivos
const filesystem = require('fs');

//Escribe el segundo parametro en el archivo indicado en el primer parametro
filesystem.writeFileSync('hola.txt', 'Hola desde node');

const te_hackie = () => {
    console.log('jojo te hackie');
};


//codigo asincrono, se ejecuta en 7 segundos
setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 21, 1000, 0, 120, 2000, 340, 10000];

//codigo asicncrono se imprime en orden
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

console.log("esto se imprime antes de los numeros");

//http modulo de node con todas las funciones de un servidor web
const http = require('http');

const server = http.createServer( (request, response) => {
    if (request.url == '/') {
        //codigo html de construir

    } else if (request.url == '/construir') {
        //codigo html de construir

    } else {
        //devolver codigo de respuesta pra recurso no encontrado
        response.statusCode = 404;
        response.end();
    }
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("hola mundo desde node");
    response.end();
});

//usar en nav localhost:3000
server.listen(3000);