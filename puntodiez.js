function dieta(n) {
    let alimentos = [];
    let suma = 0;

    for (let i = 0; i < n; i++) {
        let nombres = ['Zanahoria', 'Cerdo', 'Mosca'];
        let nombreRam = nombres[Math.floor(Math.random() * nombres.length)];

        let tipos = ['vegetal', 'animal', 'insecto'];
        let typeRam = tipos[Math.floor(Math.random() * tipos.length)];

        let energia = Array.from({ length: 20 }, () => Math.floor(Math.random() * (200 - 500 + 1) + 500));
        let energiaRam = energia[Math.floor(Math.random() * energia.length)];

        let alimento = {
            nombre: nombreRam,
            tipo: typeRam,
            nivelEnergia: energiaRam
        };

        switch (alimento.nombre) {
            case 'Zanahoria':
                alimento.tipo = 'vegetal';
                break;
            case 'Mosca':
                alimento.tipo = 'insecto';
                break;
            case 'Cerdo':
                alimento.tipo = 'animal';
                break;
        }

        alimentos.push(alimento);
    }

    // Filtrar alimentos vegetales con más de 200 unidades de energía
    let filteredAlimentos = alimentos.filter((alimento) => {
        return alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200;
    });

    // Función de callback para calcular la suma de la energía
    function calcularSumaEnergia() {
        const sumaEnergia = filteredAlimentos.reduce((total, alimento) => total + alimento.nivelEnergia, 0);
        console.log("Suma de energía de alimentos vegetales seleccionados:", sumaEnergia);
    }

    // Temporizador de 5 segundos para ejecutar la función de calcularSumaEnergia
    setTimeout(calcularSumaEnergia, 5000); // 5000 milisegundos = 5 segundos
}

dieta(10); // Llama a la función dieta con n = 10

