
//20. Write a JavaScript program to check from two given integers, whether one is positive and another one 
//is negative.
const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var y = Number(strnum2);

if(x >= 1){
    console.log('El primer numero es positivo')
} else if(x <= -1) {
    console.log('El primer numero es negativo');
}
else {
    console.log('El primer numero es 0');
}
if(y >= 1) {
    console.log('El segundo numero es positivo');
} else if(y <= -1) {
    console.log('El segundo numero es negativo');
}
else {
    console.log('El segundo numero es 0');
}