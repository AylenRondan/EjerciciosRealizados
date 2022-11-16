
//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple 
//of 7.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var x = Number(strnum1);

if(x % 3 === 0){
    console.log('El numero es multiplo de 3');
}
else if(x % 7 === 0) {
    console.log('El numero es multiplo de 7');
}
else {
    console.log('El numero no es ni multiplo de 3, ni de 7');
}