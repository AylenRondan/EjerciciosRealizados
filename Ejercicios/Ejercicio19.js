
//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400

const prompt = require("prompt-sync")({ sigint: true });
const strnum = prompt("Ingrese un numero: ");
var num = Number(strnum);

if(num >= 20 && num <=29){
    console.log('El num ingresado esta entre los 20');
}
else if(num >=100 && num <=199){
    console.log('El num ingresado esta entre los 100');
}
if(num >= 400 && num <= 499){
    console.log('El num ingresado esta entre los 400');
}
else {
    console.log('El numero no esta ni entre los 20, ni los 100, ni los 400');
}