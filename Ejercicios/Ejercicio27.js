
//27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise

const prompt = require("prompt-sync")({ sigint: true });
const str = prompt("Ingrese una palabra: ");
newstr = [str];

if(str.length < 4){
    console.log(false);
}
letras = str.substring(0, 4);
if (letras === 'Java') {
    console.log(true);
}
else { 
    console.log(false);
}