//limpiando grupo

function limpiarGrupo(tiempo){
  let i = 0
  for (let i=0;i<tiempo;i++){
    console.log("limpiando grupo")
  }
}

let tiempo = 10
limpiarGrupo(tiempo)

//purgando grupo

function purgarGrupo(boton){
  if (boton){
    console.log("purgando")
  }
}
let boton = 10
purgarGrupo(boton)

//limpiando portaFiltro

function limpiarPortaFiltro(estado){
  let i=3
  do{
    if (estado != "sucio"){
      console.log("Porta filtro esta limpio")
    } else {
      console.log("limpiando Porta Filtro")
      i--
    } 
  } while (i = 0)
}

let estado = "sucio"
limpiarPortaFiltro(estado)
console.log("Porta filtro limpio")	

//Moliendo cafe

function molerCafe(numTaza,tipoGrano,Cant){
  if (numTaza > 0){
    do{
    console.log("Moliendo cafe para expresso")
    console.log(`Cantidad: ${cant} gramos Nivel de Molido: ${tipoGrano}`)
    console.log("Depositando cafe en portaFiltro")
    console.log(`taza: ${numTaza}`)
    numTaza--
    } while (numTaza = 0)
  }
}

let molienda ={ //ajusta tipo de molienda
  nivel1:"fino",
  nivel2:"medio",
  nivel3:"grueso"
}

let dosificador ={ //ajusta cantidad de cafe
  dosis1: 5,
  dosis2: 16, //Expresso Sencillo 16 grs.
  dosis3: 32
}

let numTaza = 1
let tipoGrano = molienda.nivel2
let cant = dosificador.dosis1
molerCafe(numTaza,tipoGrano,cant)
console.log("Dosis lista")
