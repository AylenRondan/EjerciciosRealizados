
//18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or 
//if their sum is 50. 

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var a = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var b = Number(strnum2);

if(a === 50 || b === 50){
    console.log(true);
}
else {
    suma = a + b
    if(suma === 50){
        console.log(true)
    }
}