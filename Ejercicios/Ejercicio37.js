
//37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given 
//string. If the string length is less than 3 convert all the characters in upper case.

const prompt = require("prompt-sync")({ sigint: true });
const str = prompt("Ingrese una palabra: ");

    if(str.length < 3){
        console.log(str.toUpperCase());
    }
    else {
        var front = (str.substring(0, 3)).toLowerCase()
        var back = str.substring(3, str.length)
        console.log(front + back)
    }