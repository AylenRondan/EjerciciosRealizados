
//31.Write a JavaScript program to find the largest of three given integers.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingresa el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingresa el segundo numero: ");
var y = Number(strnum2);
const strnum3 = prompt("Ingresa el tercer numero: ");
var z = Number(strnum3);

valmin = 0
valmax = 0

if(x > y) {
    valmax = x;
    valmin = y;
}else{
    valmax = y;
    valmin = x;
}
if(y > z) {
   valmax = y;
   valmin = z;
}else {
    valmax = z;
    valmin = y;
}
if(z > x) {
    valmax = z;
    valmin = x;
}else {
    valmax = x;
    valmin = z;
}
console.log('The max value of the three numbers is: ', valmax);

