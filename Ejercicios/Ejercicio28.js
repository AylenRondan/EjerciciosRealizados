
//28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive)
//Return true if either of them are in the said range.

const prompt = require("prompt-sync")({ sigint: true });
const strnum1 = prompt("Ingrese el primer numero: ");
var x = Number(strnum1);
const strnum2 = prompt("Ingrese el segundo numero: ");
var y = Number(strnum2);

if(x === y && x >= 50 && x <= 99){
    console.log('true. Both numbers are the same and there are in the named range');
}
else if(x >= 50 && x <= 99) {
    console.log('true for x');
    if(y >=50 && y <= 99){
        console.log('true for y too');
    }
}
else if(y >= 50 && y <=99) {
    console.log('true for y');
}
else {
    console.log(false)
}
