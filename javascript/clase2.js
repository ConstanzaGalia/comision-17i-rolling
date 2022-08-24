//Metodos de strings

const mensaje = "Rolling Code School";
const largo = mensaje.length;
console.log('El largo del mensaje es: ' + largo + 'caracteres');

const corte = mensaje.slice(0, -12);
console.log(corte);

const corte2 = mensaje.substring(0, 12);
console.log(corte2);

const reemplazo = mensaje.replace('School', 'Zoom');
console.log(reemplazo);

const minuscula = mensaje.toLowerCase();
console.log(minuscula);

const mayuscula = mensaje.toUpperCase();
console.log(mayuscula);

const mensajeConEspacios = "  Hola  "
const sinEspacios = mensajeConEspacios.trim();
console.log(sinEspacios);

const numero = 1;
const string = numero.toString();
console.log(numero);
console.log(string);
console.log(`La concatenación es: ${numero + string}`);

//Metodos números
//Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// const num1 = parseInt(prompt('Ingrese un número entero'));
// const num2 = parseFloat(prompt('Ingrese un número decimal'));

// console.log(num1 + num2);

//Objeto Math JS
//Math --> Permite realizar operaciones matemáticas.
const numero1 = Math.round(20.86);
const numero2 = Math.floor(20.86);
console.log(numero1, numero2);

const minimo = Math.min(5, 10, 100, 20, 50);
const maximo = Math.max(5, 10, 100, 20, 50);
console.log(minimo, maximo);

const random = Math.random();
console.log(random);


//Combinar funciones Maths
const numeroRandom = Math.floor(Math.random() * 10);
console.log(numeroRandom);


//Arrays - Metodos
// Se declara con [];
// Las posiciones del array se llaman indice --> [0, 1, 2, 3, ....]
// El numero de elementos determina la longitud.

const salad = ['🍄', '🥦', '🥒', '🌽', '🍅', '🥕', '🥑'];

// Puedo crear un array con un constructor
let mixSalad = new Array('🥬', '🍅');

// Acceder a un elemento por su indice
const tomate = mixSalad[1];
document.write(tomate);

const saladLength = salad.length;
document.write(`La ensalada tiene ${saladLength} verduras`);

//Agregan elementos a un array
mixSalad.push('🥕', '🌽');
mixSalad.unshift('🥒');

//Elimina elementos de un array
mixSalad.pop();
mixSalad.shift();
console.log(mixSalad);

//Une 2 Arrays
const superSalad = mixSalad.concat(salad);
console.log(superSalad);

const menu = superSalad.join('//');
document.write(`El menu de la semana es: ${menu}`)

const include = menu.includes('🍅');
console.log(include);

const menu2 = superSalad.splice(0, 5);
console.log(menu2);

const array = ['Cocó', 'Gabo', 'Esteban', 'Santi', 'Enzo']
console.log(array);
console.log(array.sort().reverse());