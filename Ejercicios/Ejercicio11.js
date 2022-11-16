
//11.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

const prompt = require("prompt-sync")({ sigint: true });
const far_cel = prompt("Ingrese desde que temperatura desea hacer la conversion (Celsius o Farenheit): ");
const strTemp = prompt("Ingrese la temperatura: ");
var numTemp = Number(strTemp);


switch (far_cel) {
    case 'Celsius': 
        var Far = ((numTemp * 1.8) + 32);
        console.log(`La conversion es: ${numTemp}°C = ${Far}°F`);
        break;

    case 'Farenheit':
        var Cel = ((numTemp - 32) / 1.8)
        console.log(`La conversion es: ${numTemp}°F = ${Cel}°C`);
        break;
}
