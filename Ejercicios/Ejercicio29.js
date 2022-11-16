
//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 
//(inclusive). Return true if one or more of them are in the said range. 
const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var y = Number(strnum2);
const strnum3 = prompt("Ingrese el tercer numero: ");
var z = Number(strnum3);

if(x >= 50 && x <= 99) {
    console.log('true for the firs number');
} 
else if(y >= 50 && y <= 99){
        console.log('true for the second number');
}
if(z >= 50 && z <= 99){
            console.log('true for the third numbers');
}