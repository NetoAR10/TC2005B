//Problema 1
var num_tabla = prompt("Entra un número");
var res = "";
for(let i = 1; i <= num_tabla; i++) {
    console.log("El numero al cuadrado de " + i + " es: " + i*i + " y el cubo es: " + i*i*i);
    res += "El numero al cuadrado de " + i + " es: " + i*i + " y el cubo es: " + i*i*i + "\n";
}

document.getElementById('prob1').innerText = res;


//Problema 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var num1 = getRandomInt(10);
var num2 = getRandomInt(10);

var tiempoInicio = new Date();
var res_suma = parseInt(prompt("Cuál es la suma entre " + num1 + " + " + num2 + "?"));
var tiempoFin = new Date();
var tiempo_total = (tiempoFin - tiempoInicio) / 1000;
var sumaa = num1 + num2;

if (res_suma === sumaa) {
    console.log("Respuesta correcta");
    document.getElementById('prob2').textContent = "Respuesta correcta";
}
else {
    console.log("Respuesta incorrecta");
    document.getElementById('prob2').textContent = "Respuesta incorrecta";
}

console.log("Tiempo transcurrido = " + tiempo_total + " segundos");
document.getElementById('prob2_1').textContent = "Tiempo transcurrido = " + tiempo_total + " segundos";

//Problema 3
const arreglo = [-1, 0, 1, -2, -3, -4, 0, 2];

function contador(arr) {
    let contNeg = 0;
    let contCero = 0;
    let contPos = 0;
    for(let pos of arr) {
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
    console.log("Cantidad de números negativos = " + contNeg);
    console.log("Cantidad de números igual a 0 = " + contCero);
    console.log("Cantidad de números positivos = " + contPos);
    document.getElementById('prob3').textContent = "Cantidad de números negativos = " + contNeg;
    document.getElementById('prob3_1').textContent = "Cantidad de números igual a 0 = " + contCero;
    document.getElementById('prob3_2').textContent = "Cantidad de números positivos = " + contPos;
}

contador(arreglo);

//Problema 4
function promedios(arr) {
    let promedios = arr.map(renglon => {
        let suma = renglon.reduce((acumulado, actual) => acumulado + actual, 0);
        return suma / renglon.length;
    });
    return promedios;
}

let matriz = [
    [1, 3, 5],
    [5, 5, 6],
    [0, 1, 2]
];

console.log(promedios(matriz));
document.getElementById('prob4').textContent = promedios(matriz);

//Problema 5
function inverso(num) {
    let invertido = 0;
    while (num != 0) {
        digito = num % 10;
        invertido = invertido * 10 + digito;
        num = Math.floor(num / 10);
    }
    return invertido;
}

const entradaNum = parseInt(prompt("Ingresa un número para invertir"));
console.log(inverso(entradaNum));
document.getElementById('prob5').textContent = inverso(entradaNum);

//Problema 6
class ConvertidorTemperatura {
    constructor(temperatura, unit) {
        this.temperatura = temperatura;
        this.unit = unit;
    }

    Celcius() {
        switch (this.unit) {
            case 'F':
                return (this.temperatura - 32) * 5/9;
            case 'K':
                return this.temperatura - 273.15;
            default:
                return this.temperatura;
        }
    }

    Fahrenheit() {
        switch (this.unit) {
            case 'C':
                return (this.temperatura * 9/5) + 32;
            case 'K':
                return (this.temperatura - 273.15) * 9/5 + 32;
            default:
                return this.temperatura;
        }
    }

    Kelvin() {
        switch (this.unit) {
            case 'C':
                return this.temperatura + 273.15;
            case 'F':
                return (this.temperatura - 32) * 5/9 + 273.15;
            default:
                return this.temperatura;
        }
    }
}

function convertirTemperatura() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let converter = new ConvertidorTemperatura(parseFloat(inputTemp), inputUnit);

    let result;
    switch (outputUnit) {
        case 'C':
            result = converter.Celsius();
            break;
        case 'F':
            result = converter.Fahrenheit();
            break;
        case 'K':
            result = converter.Kelvin();
            break;
    }

    document.getElementById('result').innerHTML = `Resultado: ${result.toFixed(2)} ${outputUnit}`;
}