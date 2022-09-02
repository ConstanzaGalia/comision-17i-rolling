//Creamos una función por declaración
function suma(num1, num2) {
  return num1 + num2;
}

const resultado = suma(50, 20);
console.log(resultado);

// Creamos funciones por expresion
const saludo = function saludar(nombre) {
  return alert(`Hola ${nombre} es un gusto`);
};

// saludo('Belén');

// Funciones anónimas --> No llevan nombre, se guardan y ejecutan directamente desde el nombre de la variable.
const saludar = function (nombre) {
  return alert(`Hola ${nombre} es un gusto`);
};

// saludar('Pablo');

//Callbacks
const esMayorDeEdad = function (nombre) {
  document.write(`<h2>${nombre} es mayor de edad</h2>`);
};

// const error = function (nombre) {
//   alert(`Error: ${nombre} no puede ingresar`);
// };

const error = nombre => alert(`Error: ${nombre} no puede ingresar`);

// const nombre = prompt('Ingrese su nombre');
// const edad = parseInt(prompt('Ingrese su edad'));

// const validation = function(esMayorDeEdad, error, edad, nombre){
//   if (edad > 18) {
//     esMayorDeEdad(nombre);
//   } else {
//     error(nombre)
//   }
// }

// validation(esMayorDeEdad, error, edad, nombre);

//ARROW FUNCTIONS
const sumando = (num1, num2) => num1 + num2;
const isValid = edad => edad > 18;
console.log(sumando(10, 10));
console.log(isValid(20));

const A = (isValid) => {
  const n = Math.random() * 30;
  console.log(`La edad es: ${n}`);
  if (isValid(n)) {
    console.log(`La persona es mayor de edad`);
  } else {
    console.log(`La persona es menor de edad`);
  }
};

console.log('A');
A(isValid);

const B = (isValid) => {
  //SCOPE LA VARIABLE n ES LOCAL
  const n = Math.random() * 30;
  console.log(`La edad es: ${n}`);
  //OPERADOR TERNARIO --> condicion, luego va ? (en el signo de pregunta se ejecuta el valor true) : (en los dos puntos se ejercuta el valor false)
  isValid(n)
    ? console.log(`La persona es mayor de edad`)
    : console.log(`La persona es menor de edad`);
};

//Fuera de la funcion B n no existe.
// console.log('N:', n)
console.log('B');
B(isValid);

// CALCULADORA
const action = parseInt(prompt('SUMA: 1, RESTA: 2, MULT: 3, DIV: 4'));
const numero1 = parseInt(prompt('Ingrese un numero'));
const numero2 = parseInt(prompt('Ingrese otro numero'));

const sum = (num1, num2) => console.log(num1 + num2);
const resta = (num1, num2) => console.log(num1 - num2);
const mult = (num1, num2) => console.log(num1 * num2);
const div = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    alert('No se puede dividir por 0');
  } else {
    console.log(num1 / num2);
  }
};

const calculadora = (sum, resta, mult, div, action, num1, num2) => {
  switch (action) {
    case 1:
      sum(num1, num2);
      break;
    case 2:
      resta(num1, num2);
      break;
    case 3:
      mult(num1, num2);
      break;
    case 4:
      div(num1, num2);
      break;
    default:
      alert('Esa funcion no es válida');
      break;
  }
};

calculadora(sum, resta, mult, div, action, numero1, numero2);

//LA VARIABLE PERSONA TIENE UN SCOPE GLOBAL, porque puedo llamarla en cualquier lado.
const persona = 'Constanza';

const hola = () => alert(`Hola: ${persona}`)

hola();

function chau() {
  console.log('Chau')
}

chau();
