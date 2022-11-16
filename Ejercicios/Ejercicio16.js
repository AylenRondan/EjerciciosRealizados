
//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, 
//then returns triple their sum.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var a = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var b = Number(strnum2);

var suma = a + b

if(a === b){
    var trSum = (suma * 3)
    console.log(`El resultado del triple de la suma es: ${trSum}`)
}
else {
    console.log(`El resultado de la suma es: ${suma}`)
}