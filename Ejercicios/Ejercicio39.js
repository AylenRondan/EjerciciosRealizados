
//39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 
//50..80 return 65 other wise return 80.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var num1 = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var num2 = Number(strnum2);

var suma = num1 + num2 
if(suma >= 50 && suma <= 80) {
    console.log('65');
}
else {
    console.log('80');
}