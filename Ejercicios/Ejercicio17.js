
//17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
//Returns triple their absolute difference if the specified number is greater than 19. 

const prompt = require("prompt-sync")({ sigint: true });
const strnum = prompt("Ingrese un numero: ");
var num = Number(strnum);
var dif = num - 19

if(num > 19){
    var trDif = dif * 3;
    console.log(`El resultado es: ${trDif}`);
}
else {
    var abs = Math.abs(dif) ;
    console.log(`El resultado es: ${abs}`) ;
}