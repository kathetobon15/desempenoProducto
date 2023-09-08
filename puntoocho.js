function generarMapas(cantidad) {
    const objetos = [];

    for (let i = 0; i < cantidad; i++) {
      const objeto = {
        // Propiedades aleatorias
        nombrePlaneta: `Planeta ${i + 1}`,
        latitud: parseFloat((Math.random() * 1000).toFixed(1)),
        longitud: parseFloat((Math.random() * 100).toFixed(2)) ,
        nivelOxigeno: Math.floor(Math.random() * 101 - 30),
        volumenAgua: Math.floor(Math.random() * 11 - 3)
        // Agrega más propiedades aleatorias según tus necesidades
      };

      objetos.push(objeto);
    }

    return objetos;

  }

   //Function de suma
   function sumarAgua(generarMapas){
    let totalAgua=0
    generarMapas.map(function(mapa){
     totalAgua=totalAgua+mapa.volumenAgua
    })
   return `La suma total de los volumenes de agua de todos los planetas es de -> ${totalAgua} \n`
    // let suma = 0
    // mapa.forEach(function(volumenTotAgua){
    //  suma += volumenTotAgua
    // })

    // return `La suma total de los volumenes de agua de todos los planetas es de -> ${suma} \n`

 }


 //Function multiplicar

 function sumarOxigeno(generarMapas){
    let mapa = generarMapas.map(function(generaMapa){
        return generaMapa.nivelOxigeno
    })

    let suma = 0
    mapa.forEach(function(sumaOxigeno){
        suma += (sumaOxigeno * 100)
    })

    return `EL valor total del oxigeno es de -> ${suma}\n`
 }

 //Function encontrar planeta con oxigeno negativo
 function planetaOxigenoNegativo(generarMapas){
    // const planetaConOxigenoNegativo = {}

    generarMapas.forEach(function(planeta){
        if(planeta.nivelOxigeno < 0){
            console.log(`Planeta con oxigeno negativo encontrado: \n ${JSON.stringify(planeta, null, 2) }`);
        }else{
            console.log("No hay planetas con oxigeno negativo")
        }
    })

    // return planetaConOxigenoNegativo;
 }

 const mapasGenerados = generarMapas(3)
  console.log(mapasGenerados);
  // console.log(sumarAgua(mapasGenerados));
  // console.log(sumarOxigeno(mapasGenerados))
 planetaOxigenoNegativo(mapasGenerados)