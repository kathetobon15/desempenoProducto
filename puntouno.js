//Entradas del problema
let coordenadaxPlanetaUno=10
let coordenadayPlanetaUno=-50

let coordenadaxPlanetaDos=80
let coordenadayPlanetaDos=0

//Proceso del problema
let restasCoordenadasx=coordenadaxPlanetaDos-coordenadaxPlanetaUno
let restasCoordenadasy=coordenadayPlanetaDos-coordenadayPlanetaUno


let distanciaCalculada=Math.sqrt(Math.pow(coordenadaxPlanetaDos-coordenadaxPlanetaUno,2)+Math.pow(coordenadayPlanetaDos-coordenadayPlanetaUno,2))

console.log("La distancia calculada es: "+distanciaCalculada)
console.log(`La distancia calculada es ${distanciaCalculada}`)
