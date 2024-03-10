const filesystem = require('fs');

const header = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 5</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                Home
                </a>
        
                <a class="navbar-item">
                Documentation
                </a>
        
                <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    Problemas
                </a>
        
                <div class="navbar-dropdown">
                    <a class="navbar-item">
                    Problema 1
                    </a>
                    <a class="navbar-item">
                    Problema 2
                    </a>
                    <a class="navbar-item">
                    Problema 3
                    </a>
                    <a class="navbar-item">
                        Problema 4
                    </a>
                    <a class="navbar-item">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                    Convertidor de Temperatura
                    </a>
                </div>
                </div>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                    <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                    Log in
                    </a>
                </div>
                </div>
            </div>
            </div>
        </nav>
`;

const footer = `
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </body>
</html>
`;

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

function problema5(num) {
    let invertido = 0;
    while (num != 0) {
        digito = num % 10;
        invertido = invertido * 10 + digito;
        num = Math.floor(num / 10);
    }
    return invertido;
}

function convertirDesdeCelsius(temperatura, unidadSalida) {
    switch (unidadSalida) {
      case "F":
        return (temperatura * (9.0/5.0)) + 32;
      case "K":
        return temperatura + 273.15;
      default:
        return temperatura;
    }
}
  
function convertirDesdeFahrenheit(temperatura, unidadSalida) {
    switch (unidadSalida) {
      case "C":
        return (temperatura - 32) * 5/9;
      case "K":
        return (temperatura - 32) * 5/9 + 273.15;
      default:
        return temperatura;
    }
}
  
function convertirDesdeKelvin(temperatura, unidadSalida) {
    switch (unidadSalida) {
      case "C":
        return temperatura - 273.15;
      case "F":
        return (temperatura - 273.15) * 9/5 + 32;
      default:
        return temperatura;
    }
}

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <h1 class="title">Hola, las rutas son: problema1, problema5 y problema6</h1>
        <div class="columns">
        `);

        response.write(`</div>`);
        response.write(footer);
        response.end();

    } else if (request.url == "/problema1" && request.method == "GET") {
        response.write(header);
        response.write(`
        <div class="section">
            <div class="container">
                <div class="field">
                <form action="/problema1" method="POST">
                    <label class="label" id="pregunta1">Tabla con los números del 1 al número dado con sus cuadrados y cubos</label>
                    <div class="control">
                        <input class="input" type="text" id="respuestaUsuario1"  placeholder="Introduce un número" name="respuesta1" required>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" id="enviarRespuesta1">Enviar</button>
                </div>
                <ul id="resultado1" class="notification is-hidden"></ul>
            </div>
        </div>
        `)
        
        response.write(footer);
        response.end();

    } else if (request.url == "/problema1" && request.method == "POST"){
        response.write(header);
        
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

       return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const valor = datos_completos.split('=')[1];
        console.log(valor);
        response.write(problema1(valor));
        filesystem.writeFileSync('resProb1.txt', problema1(valor));
        return response.end();
       })

    } else if (request.url == "/problema5" && request.method == "GET") {
        response.write(header);
        response.write(`
        <div class="section">
            <div class="container">
                <div class="field">
                <form action="/problema5" method="POST">
                    <label class="label" id="pregunta5">Ingresa un número para invertir</label>
                    <div class="control">
                        <input class="input" type="text" id="respuestaUsuario5"  placeholder="Introduce un número" name="respuesta5" required>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" id="enviarRespuesta5">Enviar</button>
                </div>
                <ul id="resultado5" class="notification is-hidden"></ul>
            </div>
        </div>
        `)
        response.write(footer);
        response.end();

    } else if (request.url == "/problema5" && request.method == "POST"){
        response.write(header);
        
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const valor = datos_completos.split('=')[1];
            console.log(valor);
            response.write(problema5(valor).toString());
            return response.end();
        });

    } else if (request.url == "/problema6" && request.method == "GET") {
        response.write(header);
        response.write(`
        <div class="section">
            <div class="container">
                <label class="label" id="pregunta6">Convertidor de temperatura</label>
                    <div class="field has-addons">
                    <form action="/problema6" method="POST">
                        <div class="control">
                            <input class="input" type="text" id="respuestaUsuario6"  placeholder="Ingresa la temperatura" name="respuesta6" required>
                        </div>
                        <div class="select is_primary" id="input">
                            <select id="inputTemp" name="input">
                                <option value="C">Celcius</option>
                                <option value="F">Fahrenheit</option>
                                <option value="K">Kelvin</option>
                            </select>
                        </div>
                        <p>a</p>
                        <div class="select is_primary" id="output">
                            <select id="outputTemp" name="output">
                                <option value="C">Celcius</option>
                                <option value="F">Fahrenheit</option>
                                <option value="K">Kelvin</option>
                            </select>
                        </div>
                    </div>
                <div class="control">
                    <button class="button is-primary" id="enviarRespuesta6">Convertir</button>
                </div>
                <div id="resultado6" class="notification is-hidden"></div>
            </div>
        </div>
        `)
        response.write(footer);
        response.end(); 
        
    } else if (request.url == "/problema6" && request.method == "POST"){
        response.write(header);
        
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const temperatura = datos_completos.split('&')[0].split('=')[1];
            console.log(temperatura);
            const unidadEntrada = datos_completos.split('&')[1].split('=')[1];
            console.log(unidadEntrada);
            const unidadSalida = datos_completos.split('&')[2].split('=')[1];
            console.log(unidadSalida);
            var res;
            switch (unidadEntrada) {
                case "C":
                res = convertirDesdeCelsius(temperatura, unidadSalida);
                break;
                case "F":
                res = convertirDesdeFahrenheit(temperatura, unidadSalida);
                break;
                case "K":
                res = convertirDesdeKelvin(temperatura, unidadSalida);
                break;
            }
            
            response.write(res.toString() + unidadSalida);
            return response.end();
        });

    } else {
        response.statusCode = 404;

        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`<h1 class="title">Ups, este problema esta bajo construcción</h1>`);
        response.write(footer);
        response.end();
    }    
});

server.listen(3000);