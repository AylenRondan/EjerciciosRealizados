
//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingresa el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingresa el segundo numero: ");
var y = Number(strnum2);

if(x > y){
    console.log('El primer valor esta mas cercano a 100');
}
else {
    console.log('EL segundo valor esta mas cercano a 100')
}