// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// const num1 = parseInt(prompt('Ingrese un número'));
// const num2 = parseInt(prompt('Ingrese un otro número'));
// const num3 = parseInt(prompt('Ingrese un otro número'));

// const iguales = num1 === num2;

// if (num1 > num2) {
//   alert(`El número: ${num1} es el mayor`);
// } else {
//   if (iguales) {
//     alert(`Los números son iguales`);
//   } else {
//     alert(`El número: ${num2} es el mayor`);
//   }
// }

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// if ((num1 > num2) && (num1 > num3)) {
//   alert(`El número: ${num1} es el mayor`);
// } else if (num2 > num3) {
//   alert(`El número: ${num2} es el mayor`);
// } else {
//   alert(`El número: ${num3} es el mayor`);
// }


// 8.- Escribe un programa que pida un número y diga si es par
// const numero = parseInt(prompt('Ingrese un número'));

// if ((numero % 2 === 0) && (numero !== 0)) {
//   alert(`El número: ${numero} es par`);
// } else if (numero === 0) {
//   alert(`El número es: ${numero}`);
// } else {
//   alert(`El número es: ${numero} es impar`);
// }

// if (numero === 0) {
//   alert(`El número es: ${numero}`);
// } else if (numero % 2 === 0) {
//   alert(`El número: ${numero} es par`);
// } else {
//   alert(`El número es: ${numero} es impar`);
// }

// 9. - Hacemos un menu, opciones del menu: 1 --> Añadir usuario, 2 --> Editar Usuario,  3 --> Borrar Usuario, 4 --> Salir de menu.

// const opcion = parseInt(prompt("opciones del menu: 1 --> Añadir usuario, 2 --> Editar Usuario,  3 --> Borrar Usuario, 4 --> Salir de menu."))

// switch (opcion) {
//   case 1:
//     alert("Añadir usuario")
//     break;
//   case 2:
//     alert("Editar usuario")
//     break;
//   case 3:
//   alert("Borrar usuario")
//   break;
//   case 4:
//     alert("Salir del menu")
//     break;
//   default:
//     alert(`La opción: ${opcion} no está en el menu`)
//     break;
// }


// const role = prompt('¿Cual es tu rol? -- ADMIN, PROFE, ALUMNO').toUpperCase();

// switch (role) {
//   case 'ADMIN':
//     alert("Hola ADMIN - Bienvenido al panel de administration");
//     break;
//   case 'PROFE':
//     alert("Hola PROFE - Bienvenido al panel de clase")
//     break;
//   case 'ALUMNO':
//   alert("Hola ALUMNO - Bienvenido al panel de estudiantes")
//   break;
//   default:
//     alert(`El rol: ${role} no pertenece a esta empresa`)
//     break;
// }



// WHILE


let contador = 5;
while (contador < 5) {
  console.log("Hola mundo 🌍");
  ++contador;
}


let contador2 = 5
do {
  console.log("Hola mundo 🚀");
    ++contador2;
} while (contador2 < 5)


//Ejercicio de tablas
// const opcion = parseInt(prompt('Elija del 1 al 10 que tabla quiere aprender'))

// console.log(`La tabla del: ${opcion} es:`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${opcion} por ${i} es igual a ${opcion * i}`);
// }

const edades = [10, 20, 25, 15, 18, 30, 12, 56, 17];

// for (let i = 0; i < edades.length; i++) {
//   if (edades[i] >= 18) {
//     console.log(`${edades[i]}: Es mayor de edad`)
//   } else {
//     console.log(`${edades[i]}: Es menor de edad`)
//   }
// }

// .filter() --> Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const productos = ['Notebook', 'Auriculares con cable', 'Mouse', 'Teclado', 'Mouse', 'Teclado Mecánico', 'Auriculares inahalambricos'];

const mouse = productos.filter(i => i === 'Mouse');
console.log('Mouse: ', mouse)

const mouse2 = [];
for (let index = 0; index < productos.length; index++) {
  if (productos[index] === 'Mouse') {
    mouse2.push(productos[index])
  }
}
console.log('Mouse 2', mouse2)

// .map() --> Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const condicion = edades.map(edad => {
  if (edad >= 18) {
    return 'Mayor'
  } else {
    return 'Menor'
  }
})
console.log(edades)
console.log('Condición:', condicion)

const lista = productos.map(producto => {
  document.write(`<li> ${producto} </li>`);
})

//.find() ---> Devuelve el primer elemento del array que cumple la función de prueba proporcionada (Solo 1). si no encuentra nada return undefined.

const notebook = productos.find(p => p === 'Notebook');
console.log(notebook)

//.reduce() -->  Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

// array.reduce((valorAnterior, valorActual, indice, array) => {
//   return valorAnterior + valorActual;
// }, valorInicial);


// const notas = [10, 6, 5, 3, 9, 7]
const notas = [3, 4, 2, 3, 1, 4]
const promedio = notas.reduce((prev, actual) => prev + actual) / notas.length

console.log(promedio);

if (promedio < 6) {
  alert('Chau niño a diciembre')
} else {
  alert('Aprobado')
}

// .some() --> Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Funciona como un OR

const boolean = notas.some(nota => nota > 5);
console.log('Tiene al menos 1 aprobado?', boolean);

// .every() --> Determina si todos los elementos en el array cumplen una condición. Funciona como un AND
const boolean2 = notas.every(nota => nota > 5);
console.log('Tiene todo aprobado?', boolean2);