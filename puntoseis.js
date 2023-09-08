//generar un número aleatorio 
const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//generar 20 edades aleatorias y 20 códigos aleatorios
const edades = [];
const codigos = [];
for (let i = 0; i < 20; i++) {
    edades.push(generarNumeroAleatorio(1, 100));
    codigos.push(generarNumeroAleatorio(1000, 9999));
}

// encontrar la edad mayor y contar repeticiones
let edadMayor = edades[0];
let contadorRepeticiones = 1;
for (let i = 1; i < edades.length; i++) {
    if (edades[i] > edadMayor) {
        edadMayor = edades[i];
        contadorRepeticiones = 1;
    } else if (edades[i] === edadMayor) {
        contadorRepeticiones++;
    }
}

//resultados
console.log("Edades generadas aleatoriamente:", edades);
console.log("Códigos generados aleatoriamente:", codigos);
console.log(`La mayor edad es: ${edadMayor}`);
console.log(`Se repite ${contadorRepeticiones} veces.`);

//funcion flecha
const generarNumeroAleatorio1 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generarEdadesCodigos = () => {
    const edades1 = [];
    const codigos1 = [];
    for (let i = 0; i < 20; i++) {
        edades1.push(generarNumeroAleatorio(1, 100));
        codigos1.push(generarNumeroAleatorio(1000, 9999));
    }
    return { edades1, codigos1 };
};

const { edades1, codigos1 } = generarEdadesCodigos();

let edadMayor1 = edades[0];
let contadorRepeticiones1 = 1;
for (let i = 1; i < edades1.length; i++) {
    if (edades1[i] > edadMayor1) {
        edadMayor1 = edades1[i];
        contadorRepeticiones1 = 1;
    } else if (edades1[i] === edadMayor1) {
        contadorRepeticiones1++;
    }
}

console.log("Edades generadas aleatoriamente:", edades1);
console.log("Códigos generados aleatoriamente:", codigos1);
console.log(`La mayor edad es: ${edadMayor1}`);
console.log(`Se repite ${contadorRepeticiones1} veces.`);

