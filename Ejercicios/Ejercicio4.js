
//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 
//5, 6, 7.

var a = 5 ;
var b = 6;
var c = 7;

Perim = a + b + c ;
SemPer = (Perim / 2);
Area = Math.sqrt(SemPer* (SemPer - a)*(SemPer - b)*(SemPer - c))

console.log(`'El area del triangulo es: ${Area} `)
