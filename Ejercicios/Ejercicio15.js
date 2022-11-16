
//15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater
//than 13 return double the absolute difference. 

const prompt = require("prompt-sync")({ sigint: true });
const strnum = prompt("Ingrese un numero: ");
var num = Number(strnum);
dif = num - 13;

if(num > 13) {
    var rest = (dif * 2);
    console.log(`El resultado es: ${rest}`)
}
else {
    var abs = Math.abs(dif)
    console.log(`El resultado es: ${abs}`)
}
