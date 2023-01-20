console.log("probando!")

// CALLBACKS

function decirHola() {
  console.log("Hola Mundo!")
} // ref 1234

// decirHola()
function decirAdios() {
  console.log("Adios Mundo!")
}



function funcionQueAceptaOtraFuncion( callback ) {
  // let unaFuncion = decirHola // ref 1234

  // decirHola()
  callback()
}


funcionQueAceptaOtraFuncion( decirHola )
funcionQueAceptaOtraFuncion( decirAdios )


// 1. 

// forEach => recibe otra funcion

function printSomething() {
  console.log("ejecutando algo...")
}

let numArr = [2, 10, 23]

numArr.forEach( printSomething )

numArr.forEach( function() {
  console.log("ejecutando algo con funcion anonima")
} )

numArr.forEach( () => {
  console.log("ejecutando algo con funcion anonima de tipo flecha")
} )

const arrowFunction = () => {
  //...
}




// 2. muchos desarrolladores, crear logicas minimizando redundancia de codigo usando callbacks.




// DA METODOS QUE SIMULAN UN COMPORTAMIENTO ASINCRONO

// JS es un lenguaje sincrono con comportamientos asincronos


// setTimeout

// 2 argumentos.
// 1. una funcion de callback a invocar
// 2. una cantidad de tiempo en ms que debe esperar antes de ejecutar la funcion


// setTimeout( () => {
//   console.log("ha pasado cierto tiempo real") // 3
// }, 2000 )

// setTimeout( decirHola, 3000 ) // 4

// setTimeout( () => {
//   console.log("a los 0 segundos") // 2
// }, 0 )

console.log("luego de los setTimeout") // 1

// JS primero resuelve TODOS las ejecuciones sincronas.
// Y luego, resuelve TODAS las ejecuciones asincronas


// setInterval => crea una ejecucion constante

// setInterval( () => {
//   console.log("ejecutando hasta el fin")
// }, 1500 )



// como controlamos un intervalo

// 1. variable control

// let control = 0;
// setInterval siempre retorna algo (el id que necesitamos)

// let intervalId = setInterval(() => {
//   control++

//   console.log("intervalo controlado", control)
  
//   if (control >= 10) {
//     // deten el intervalo con clearInterval
//     clearInterval(intervalId) // debemos pasarle con argumento el id de el intervalo a detener
//   }

// }, 1000);




// ejemplo de una funcion que retorna un valor y lo guardamos en una variable
function fullName(name, lastName) {
  return name + " " + lastName
}

let someName = fullName("Bob", "Mcintosh")
console.log(someName) // "Bob Mcintosh"


let control = 0;

let intId = setInterval( () => {
  console.log("intervalo andando")
}, 500 )

setTimeout( () => {
  clearInterval(intId)
}, 4000 )


