const express = require('express');
const app = express();
const filesystem = require('fs');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); 
});

app.get('/problema1', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
    `);
});

app.post('/problema1', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.respuesta1);
    filesystem.writeFileSync('lab11/InputProb1.txt', request.body.respuesta1);
    console.log(request.body);
    response.redirect('/');
})

app.get('/problema2', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
        <div class="section">
          <div class="container">
            <div class="field">
              <label class="label" id="pregunta2">¿Cuál es el resultado de la suma?</label>
              <div class="control">
                <input class="input" type="text" id="respuestaUsuario2" placeholder="Introduce un número" name="respuesta2" required>
              </div>
            </div>
            <div class="control">
              <button id="enviarRespuesta2" class="button is-primary">Enviar</button>
            </div>
            <div id="resultado2" class="notification is-hidden"></div>
          </div>
      </div>
    `);
});

app.get('/problema3', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
        <div class="section">
          <div class="container">
            <div class="field">
              <label class="label" id="pregunta3">Introduce 10 valores:</label>
              <div class="control">
                <input class="input" type="text" id="valorInput" required>
              </div>
            </div>
            <div class="control">
              <button class="button is-link" id="agregarValor">Agregar Valor</button>
              <button class="button is-primary" id ="enviarRespuesta3">Enviar</button>
            </div>
            <div>
              <ul id="listaValores" class="notification is-hidden"></ul>
              <ul id="respuesta3" class="notification is-hidden"></ul>
            </div>
          </div>
      </div>
    `);
});

app.get('/problema4', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
          <div class="section">
          <div class="container">
            <div class="field">
              <label class="label" id="pregunta4">Introduce 9 valores:</label>
              <div class="control">
                <input class="input" type="text" id="respuestaUsuario4" required>
              </div>
            </div>
            <div class="control">
              <button class="button is-link" id="agregarValor2">Agregar Valor</button>
            </div>
            <div>
              <ul id="listaValores" class="notification is-hidden"></ul>
              <ul id="respuesta4" class="notification is-hidden"></ul>
            </div>
          </div>
      </div>
    `);
});

app.get('/problema5', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
          <div class="section">
          <div class="container">
              <div class="field">
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
    `);
});

app.get('/problema6', (request, response, next) => {
    console.log(request.body);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
          <div class="section">
          <div class="container">
              <label class="label" id="pregunta6">Convertidor de temperatura</label>
                  <div class="field has-addons">
                      <div class="control">
                          <input class="input" type="text" id="respuestaUsuario6"  placeholder="Ingresa la temperatura" name="respuesta6" required>
                      </div>
                      <div class="select is_primary" id="input">
                          <select id="inputTemp">
                              <option value="C">Celcius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="K">Kelvin</option>
                          </select>
                      </div>
                      <p>a</p>
                      <div class="select is_primary" id="output">
                          <select id="outputTemp">
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
    `);
});

app.get('/', (request, response, next) => {
    console.log('Ruta /');
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        
        <div class="section">
            <div class="container">
                <div class="field">
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
    
        <div class="section">
            <div class="container">
              <div class="field">
                <label class="label" id="pregunta2">¿Cuál es el resultado de la suma?</label>
                <div class="control">
                  <input class="input" type="text" id="respuestaUsuario2" placeholder="Introduce un número" name="respuesta2" required>
                </div>
              </div>
              <div class="control">
                <button id="enviarRespuesta2" class="button is-primary">Enviar</button>
              </div>
              <div id="resultado2" class="notification is-hidden"></div>
            </div>
        </div>
    
        <div class="section">
            <div class="container">
              <div class="field">
                <label class="label" id="pregunta3">Introduce 10 valores:</label>
                <div class="control">
                  <input class="input" type="text" id="valorInput" required>
                </div>
              </div>
              <div class="control">
                <button class="button is-link" id="agregarValor">Agregar Valor</button>
                <button class="button is-primary" id ="enviarRespuesta3">Enviar</button>
              </div>
              <div>
                <ul id="listaValores" class="notification is-hidden"></ul>
                <ul id="respuesta3" class="notification is-hidden"></ul>
              </div>
            </div>
        </div>
    
        <div class="section">
            <div class="container">
              <div class="field">
                <label class="label" id="pregunta4">Introduce 9 valores:</label>
                <div class="control">
                  <input class="input" type="text" id="respuestaUsuario4" required>
                </div>
              </div>
              <div class="control">
                <button class="button is-link" id="agregarValor2">Agregar Valor</button>
              </div>
              <div>
                <ul id="listaValores" class="notification is-hidden"></ul>
                <ul id="respuesta4" class="notification is-hidden"></ul>
              </div>
            </div>
        </div>
    
        <div class="section">
            <div class="container">
                <div class="field">
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
    
        <div class="section">
            <div class="container">
                <label class="label" id="pregunta6">Convertidor de temperatura</label>
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input" type="text" id="respuestaUsuario6"  placeholder="Ingresa la temperatura" name="respuesta6" required>
                        </div>
                        <div class="select is_primary" id="input">
                            <select id="inputTemp">
                                <option value="C">Celcius</option>
                                <option value="F">Fahrenheit</option>
                                <option value="K">Kelvin</option>
                            </select>
                        </div>
                        <p>a</p>
                        <div class="select is_primary" id="output">
                            <select id="outputTemp">
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
    
        <div class="content">
            <h1 class="title is-2">Preguntas a responder lab 11</h1>
            <h3 class="title is-3">Describe el archivo package.json</h3>
            <p>Es un archivo fundamental para proyectos de Node.js que guarda metadatos del proyecto,
            gestiona dependencias, permite crear scripts para automatizar inicios de servidor, entre otros.</p>
        </div>
    
        <script src="lab5.js"></script>
    </body>
    </html>
    `)
})

app.use((request, response, next) => {
    response.status(404);
    response.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Laboratorio 11</title>
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
                    <a class="navbar-item" href="/problema1">
                      Problema 1
                    </a>
                    <a class="navbar-item" href="/problema2">
                      Problema 2
                    </a>
                    <a class="navbar-item" href="/problema3">
                      Problema 3
                    </a>
                    <a class="navbar-item" href="/problema4">
                        Problema 4
                    </a>
                    <a class="navbar-item" href="/problema5">
                        Problema 5
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item" href="/problema6">
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
        <section class="section">
            <div class="containe">
                <hi class="title">Ups, la ruta que buscas no existe</h1>
            </div>
        </section>
    `)
})

app.listen(3000);