
//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 
//inclusive.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var y = Number(strnum2);

if(x >= 40 && x <= 60) {
    console.log('El primer numero esta dentro del rango 40 - 60.');
} else if(x >= 70 && x <= 100) {
    console.log('El primer numero esta dentro del rango 70 - 100.');
} else { 
    console.log('El primer numero no esta dentro de los rangos.');
}
if(y >= 40 && y <= 60){
    console.log('El segundo numero esta dentro del rango 40 - 60.');
} else if(y >= 70 && y <= 100) {
    console.log('El segundo numero esta dentro del rango 70 - 100.');
} else {
    console.log('El segundo numero no esta dentro de los rangos.');
}