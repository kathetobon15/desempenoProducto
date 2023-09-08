//declaro la funcion principal

function crearPadawan (nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        //logica de la funcion principal
        let padawan={
        nombreEstudiante: nombre,
        planetaEstudiante: planeta,
        edadEstudiante: edad,
        estaturaEstudiante: estatura
        }
        clasificarPadawan(padawan)
    },2000)
}
//llamar a la funcion principal
crearPadawan("Grogu","yodora",10,30,function(padawan){
    if(padawan.edadEstudiante<15){
         console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} vas a clase manejo sable de fuerza`)
    }else{
        console.log (`${padawan.nombreEstudiante}tienes ${padawan.edadEstudiante} vas a clase manejo sable de luz`)
    }
   
})