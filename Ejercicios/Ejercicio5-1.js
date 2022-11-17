
////5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing
// one letter from the end of the string and attaching it to the front.

const prompt = require("prompt-sync")({ sigint: true });
const str = prompt("Ingrese una string: ");

var arr = str.split('');

for (var i = 0; i < arr.length; i++) {
    console.log(arr.join(''));
    arr.unshift(arr.pop());
    
}