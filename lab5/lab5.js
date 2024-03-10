//Problema 1
document.addEventListener('DOMContentLoaded', function() {
    const label = document.getElementById('pregunta1');
    label.textContent = "Introduce un número del 2 al 10 para mostrar sus cuadrados y cubos del 1 a ese número";

    const button = document.getElementById('enviarRespuesta1');
    button.onclick = function(event) {
        event.preventDefault();

        const respuestaUsuario = parseInt(document.getElementById('respuestaUsuario1').value);
        const resultado = document.getElementById('resultado1');

        if (respuestaUsuario < 2 || respuestaUsuario > 10) {
            resultado.className = "notification is-danger";
            resultado.textContent = "escribe un numero entre el 2 y el 10";
        } else {
            for (let i = 1; i <= respuestaUsuario; i++) {
                const elementoLista = document.createElement('li');
                elementoLista.textContent = "El numero al cuadrado de " + i + " es: " + i*i + " y el cubo es: " + i*i*i + "\n";
                resultado.appendChild(elementoLista);
            }
        }

        resultado.classList.remove('is-hidden');
    };
});

//Problema 2
document.addEventListener('DOMContentLoaded', function() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);

    const label = document.getElementById('pregunta2');
    label.textContent = "¿Cuál es el resultado de la suma de " + num1 + "+" + num2 + "?";

    const button = document.getElementById('enviarRespuesta2');
    button.onclick = function(event) {
        event.preventDefault();

        const respuestaUsuario = parseInt(document.getElementById('respuestaUsuario2').value);
        const resultado = document.getElementById('resultado2');

        if (respuestaUsuario === num1 + num2) {
            resultado.className = "notification is-primary";
            resultado.textContent = "¡Correcto!"
        } else {
            resultado.className = "notification is-danger";
            resultado.textContent = "Incorrecto. La respuesta correcta es " + (num1 + num2) + ".";
        }

        resultado.classList.remove('is-hidden');
    };
});


//Problema 3
document.addEventListener('DOMContentLoaded', function() {
    const valores = []; // Arreglo para almacenar los valores
    const inputValor = document.getElementById('valorInput');
    const botonAgregar = document.getElementById('agregarValor');
    const listaValores = document.getElementById('listaValores');

    botonAgregar.onclick = function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        if (valores.length < 10) {
         // Añadir el valor del input al arreglo
            valores.push(inputValor.value);
         // Mostrar el valor en la lista
            const elementoLista = document.createElement('li');
            elementoLista.textContent = inputValor.value;
            listaValores.appendChild(elementoLista);
            // Limpiar el input
            inputValor.value = '';
            inputValor.focus();
        }

        if (valores.length === 10) {
            alert("Has introducido 10 valores.");
         // Deshabilitar el botón si se alcanza el límite de valores
            botonAgregar.disabled = true;
        }
    };  
    const botonEnviar = document.getElementById('enviarRespuesta3')
    botonEnviar.onclick = function(event){
        event.preventDefault();
        const resultado = document.getElementById('respuesta3');
        let contNeg = 0;
        let contCero = 0;
        let contPos = 0;
        for(let pos of valores) {
            if (pos < 0) {
                contNeg = contNeg + 1;
            } 
            if (pos == 0) {
                contCero = contCero + 1;
            }
            if (pos > 0) {
                contPos = contPos + 1;
            }
        }

        const elementoLista = document.createElement('li');
        const elementoLista2 = document.createElement('li');
        const elementoLista3 = document.createElement('li');
        elementoLista.textContent = "Cantidad de números negativos = " + contNeg;
        elementoLista2.textContent = "Cantidad de números igual a 0 = " + contCero;
        elementoLista3.textContent = "Cantidad de números positivos = " + contPos;
        resultado.appendChild(elementoLista);
        resultado.appendChild(elementoLista2);
        resultado.appendChild(elementoLista3);
        resultado.classList.remove('is-hidden');
    }

});

//Problema 4
document.addEventListener('DOMContentLoaded', function() {
    const matriz = [[], [], []]; // Arreglo para almacenar los valores
    const inputValor = document.getElementById('respuestaUsuario4');
    const botonAgregar = document.getElementById('agregarValor2');
    const listaValores = document.getElementById('listaValores');
    const promediosRenglones = document.getElementById('respuesta4')

    botonAgregar.onclick = function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let valorActual = parseFloat(inputValor.value);
        if (!isNaN(valorActual)) {
            let renglonActual = Math.floor(listaValores.children.length / 3);
            if (renglonActual < 3) {
                matriz[renglonActual].push(valorActual);
                const elementoLista4 = document.createElement('li');
                elementoLista4.textContent = "Renglon" + (renglonActual + 1) + ", Valor: " + valorActual;
                listaValores.appendChild(elementoLista4);
                inputValor.value = '';
                inputValor.focus(); 

                if (matriz[renglonActual].length === 3) {
                    let suma = matriz[renglonActual].reduce((a, b) => a + b, 0);
                    let promedio = suma / 3;
                    const elementoPromedio = document.createElement('li');
                    elementoPromedio.textContent = "Promedio Renglón " + (renglonActual + 1) + ": " + promedio.toFixed(2);
                    promediosRenglones.appendChild(elementoPromedio);
                    promediosRenglones.classList.remove('is-hidden');
                }
            }
            if (listaValores.children.length === 9) {
                botonAgregar.disabled = true;
            }
        } else {
            alert("Por favor, introduce un número válido");
        }

    };  
});

//Problema 5
document.addEventListener('DOMContentLoaded', function() {
    const label = document.getElementById('pregunta5');
    label.textContent = "Introduce un número para invertir";

    const button = document.getElementById('enviarRespuesta5');
    button.onclick = function(event) {
        event.preventDefault();

        const respuestaUsuario = parseInt(document.getElementById('respuestaUsuario5').value);
        const resultado = document.getElementById('resultado5');

        function inverso(num) {
            let invertido = 0;
            while (num != 0) {
                digito = num % 10;
                invertido = invertido * 10 + digito;
                num = Math.floor(num / 10);
            }
            return invertido;
        }
        
        resultado.textContent = inverso(respuestaUsuario);
        resultado.classList.remove('is-hidden');
    };
});

//Problema 6
document.addEventListener('DOMContentLoaded', function() {
    var resultado = document.getElementById('resultado6');
    
    const button = document.getElementById('enviarRespuesta6');
    button.onclick = function(event) {
        event.preventDefault();
        const unidadEntrada = document.getElementById('inputTemp').value;
        const unidadSalida= document.getElementById('outputTemp').value;
        const temperatura = parseFloat(document.getElementById('respuestaUsuario6').value);
        console.log(unidadEntrada)
        console.log(unidadSalida)
        console.log(temperatura)
        var res;
        if (!isNaN(temperatura)) {
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
        resultado.textContent = 'Resultado: ' + res.toFixed(2) + unidadSalida;
        resultado.classList.remove('is-hidden');
        console.log(res)
        } else {
        resultado.textContent = 'Por favor, introduce un número válido.';
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
    }
});  