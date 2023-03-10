console.log("probando!");

// CALLBACKS

function decirHola() {
  console.log("Hola Mundo!");
} // ref 1234

// decirHola()
function decirAdios() {
  console.log("Adios Mundo!");
}

function funcionQueAceptaOtraFuncion(callback) {
  // let unaFuncion = decirHola // ref 1234

  // decirHola()
  callback();
}

funcionQueAceptaOtraFuncion(decirHola);
funcionQueAceptaOtraFuncion(decirAdios);

// 1.

// forEach => recibe otra funcion

function printSomething() {
  console.log("ejecutando algo...");
}

let numArr = [2, 10, 23];

numArr.forEach(printSomething);

numArr.forEach(function () {
  console.log("ejecutando algo con funcion anonima");
});

numArr.forEach(() => {
  console.log("ejecutando algo con funcion anonima de tipo flecha");
});

const arrowFunction = () => {
  //...
};

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

console.log("luego de los setTimeout"); // 1

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
  return name + " " + lastName;
}

let someName = fullName("Bob", "Mcintosh");
console.log(someName); // "Bob Mcintosh"

let control = 0;

// let intId = setInterval( () => {
//   console.log("intervalo andando")
// }, 500 )

// setTimeout( () => {
//   clearInterval(intId)
// }, 4000 )

function blast() {
  let timer = 0;

  let interId = setInterval(() => {
    timer++;
    // console.log("timer", timer)
    if (timer % 3 === 0 && timer % 5 === 0) {
      console.log("BOOM BANG!!");
    } else if (timer % 3 === 0) {
      console.log("BOOM!!");
    } else if (timer % 5 === 0) {
      console.log("BANG!!");
    } else {
      console.log(timer);
    }

    // if (timer >= 15) {
    //   clearInterval(interId)
    // }
  }, 1000);

  setTimeout(() => {
    clearInterval(interId);
  }, 15000);
}

// blast()

// METODOS

let person = {
  name: "alicia",
  place: "Pais de las Maravillas",
  friends: ["Sombrerero", "Gato Chesire", "Humty Dumpty", "Conejo Blanco"],
  sayHello() {
    
    // console.log(this);
    // return `Hola, mi nombre es ${person.name} y soy de ${person.place}`;
    return `Hola, mi nombre es ${this.name} y soy de ${this.place}`;
  },
  personSize() {
    // de manera aleatoria me arroje dos posibles mensajes:
    // 1. return "Alicia es peque??a"; 50%
    // 2. return "Alicia es grande"; 50%
    let randomNum = Math.random() * 10 // 0 - 0.999999
    let randomNumInt = Math.floor( randomNum )
    console.log(randomNumInt)
    if ( randomNumInt <= 4 ) {
      return `${this.name} es peque??a`
    } else {
      return `${this.name} es grande`
    }
  },
  felizNoCumplea??os() {
    // busque un amigo aleatorio
    // le desee feliz no cumplea??os
    let randomNum = Math.random() * this.friends.length
    let randomNumInt = Math.floor( randomNum )

    return `Feliz feliz no cumplea??os a ${this.friends[randomNumInt]}`
  }
};

console.log(person.name);
// console.log( person.sayHello )

person.name = "Alice";
console.log(person.sayHello());

// "this" apunta a el objeto cuando se usa dentro de propiedades o metodos de ese objeto

// console.log(this);
// this en el scope global apunta a todo la base del codigo


console.log(person.personSize())
console.log(person.felizNoCumplea??os())




// CLASE 

// crear clase que nos permite crear objetos de heroes y superheroes

// las clases siempre se deben escribir con PascalCasing
class Hero {
  
  // ESQUEMA QUE SEGUIRAN TODOS NUESTROS OBJETOS BASADOS EN ESTA CLASE

  constructor(heroName, patata, nemesis = "La vida") {
    //                                  |
    //                          para asignar valor predeterminado       
    // propiedades
    this.name = heroName;
    this.identity = patata;
    this.isEvil = false; // .todos tienen la propiedad con el mismo valor
    this.nemesis = nemesis
  }

  // metodos

  // .todos los metodos se heredan a los objetos creados de esa clase
  revealSecretIdentity() {
    return `Mi identidad secreta es ${this.identity}`
  }

  // puede ser en funcion de flecha tambien. Recomendado.
  // revealSecretIdentity = () => {
  //   return `Mi identidad secreta es ${this.identity}`
  // }

  turnEvil() {
    this.isEvil = true;
    return `${this.name} ahora es malvado. MUAHAHAHAHAH!`
  }

}

// como creamos objetos basados en esa clase

console.log(Hero)


let heroObject1 = new Hero("Batman", "Bruce Wayne", "Joker") // crear un nuevo objeto de la clase Hero
console.log(heroObject1)
console.log( heroObject1.revealSecretIdentity() )
let heroObject2 = new Hero("Iron Man", "Tony Stark")
console.log(heroObject2.isEvil)
console.log( heroObject2.turnEvil() )
console.log(heroObject2.isEvil)




// SUBCLASES

// indicamos que una es subclase esta atada a una clase => extends

class SuperHero extends Hero {

  constructor( name, identity, nemesis, superPower ) {
    // para indicar que enviaremos estos parametros para el esquema padre
    // super
    super(name, identity, nemesis) // esto envia los 3 argumentos a la plantilla padre Hero
    this.superPower = superPower
  }

  // .todos los metodos de Hero se heredan automaticamente al usar "extends"
  usePower() {
    return `${this.name} usa el poder ${this.superPower}`
  }

}

let superHeroObject1 = new SuperHero("SpiderMan", "Peter Parker", "Green Goblin", "Sentido Aracnido")
console.log(superHeroObject1)
console.log(superHeroObject1.usePower() )

let superHeroObject2 = new SuperHero("Dr.Strange", "Stephen Strange", "Scarlet Witch", "Poderes Misticos")

console.log(superHeroObject2.usePower() )

