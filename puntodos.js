function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
console.log(obtenerNombre("ARQ2555: Sara Bel-Sun"))

//Funcion flecha
let obtenerNombreFlecha=(codigo) => codigo.split(":")[1]
console.log (obtenerNombreFlecha("ARQ2555:Sara Bel-Sun"))