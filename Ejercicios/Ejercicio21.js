//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given 
//string begins with "Py" then return the original string.

const prompt = require("prompt-sync")({ sigint: true });
const str = prompt("Ingrese una palabra: ");

newstr = [str]

if(str[0] === 'P' && str[1] === 'y') {
    console.log(str);
} else {
    console.log('Py' + str)
}
