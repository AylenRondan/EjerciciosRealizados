
//38. Rellenar una matriz con materias y notas correspondientes, hasta leer 'fin' para finalizar la carga.
//Retornar Promedio general, Materia con mayor nota y Materia a rendir nota < 6.

const prompt = require("prompt-sync")({ sigint: true });

var materia = ' '
while (materia !== 'Fin' || 'fin') {
    var materia = prompt("Ingrese materia: ");
    const NumNot = prompt("Ingrese nota: ");
    var nota = Number(NumNot); 
    
    var alumno = [materia, nota];
    console.log(alumno);
    var Alumnos = [[Alumnos] + [alumno]];
    console.log(Alumnos);

}



