//número aleatorio
const generarEnergiaAleatoria = () => Math.floor(Math.random() * 201) - 100; // Valores entre -100 y 100 Joules

//revisar los sables de luz y contar los que tienen energía negativa
const contarSablesEnergiaNegativa = (cantidadSables) => {
    let contadorNegativos = 0;

    for (let i = 0; i < cantidadSables; i++) {
        const energia = generarEnergiaAleatoria();
        console.log(`Sable ${i + 1}: ${energia} Joules`);

        if (energia < 0) {
            contadorNegativos++;
        }
    }

    return contadorNegativos;
};

const n = 10; 
const sablesNegativos = contarSablesEnergiaNegativa(n);

console.log(`Cantidad de sables con energía negativa: ${sablesNegativos}`);
