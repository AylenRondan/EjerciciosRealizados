
//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

const prompt = require("prompt-sync")({ sigint: true });
const num1 = prompt("Ingrese el primer numero: ");
var a = Number(num1);
const num2 = prompt("Ingrese el segundo numero: ");
var b = Number(num2);
const operacion = prompt("Ingrese la operacion que desea realizar: Division o Multiplicacion: ");

switch (operacion) {
    case 'Multiplicacion':
        mult = a * b;
        console.log(`'El resultado de la mult es:  ${mult} `);
        break;

    case 'Division':
        if(b !== 0) {
            div = a / b;
            console.log(`'El resultado de la div es:  ${div} `);
        
        }
        else { 
            console.log('El divisor debe ser distinto de 0')
        }
        break;
}
