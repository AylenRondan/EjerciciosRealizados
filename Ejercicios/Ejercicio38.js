
const prompt = require("prompt-sync")({ sigint: true });

var materia = ' ';
var prom = 0;
var notas = 0;
var maynota = [0, 0];
var desapr = [];
var Asig = [];
var numasig = [];
var B = 0;

var materia = prompt("Ingrese materia: ");


while (materia !== 'Fin') { 
    const notastr = prompt("Ingrese nota: ");
    var nota = Number(notastr);
    notas = notas + nota;
    var Alumno = [materia, nota];
    Asig.push(Alumno);
    if(Alumno[1] < 6) {
        desapr.push(Alumno);
    }
    if(Alumno[1] > maynota[1]){
        maynota = Alumno;
    }

    materia = prompt("Ingrese materia: ");
        numasig.push(Alumno[0]);
        var length = numasig.length
}
prom = (notas/length)
console.log(Asig)
console.log('El promedio es: ',prom);
console.log('La mayor nota es: ',maynota);
console.log('La/s materia/s que el alumno recupera son: ', desapr);