// Operadores
// Asignación --> =
// Artiméticos --> + (suma), - (resta), * (multiplicación), / (división), % (resto de la div entera).
// Unarios / Unitarios --> ! (revertir el valor de un boleano), ++ (incrementar 1), -- (decrementar 1).
// Concatenación --> + (para unir dos cadenas de texto / strings).
// Lógicos --> && (AND --> comparación donde ambos datos deben ser true para que devuelva true).
// Lógicos --> || (OR --> comparación al menos un dato debe ser true para que devuelva true).
// Relacionales --> > (mayor), < (menor), == === (igualdad), >= (mayor igual), <= (menor igual),
// !== !===(distinto).


const nombre = 'Constanza'; //string
const dni = 37497308; // number - int (Entero)
const peso = 59.60 // float - numero decimales
const fullStack = true; // Boolean (true/false)
const sexo = 'Femenino'
// NaN --> //Not a Number;
// undefined --> //indefinido;
// null --> //nulo;

// console.log(!fullStack);

let index = 1;
index = ++index;
index = --index;

let isDni = true;


let edad = parseInt(prompt("Ingrese su edad"));

// const entrarAlBoliche = isDni && edad > 18;
if(edad < 18){
  alert("VUELVA A SU CASA NIÑO");
}


// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
const mensaje = "Hola mundo 🌍";
// alert('Un mensaje: ' + mensaje);
// alert(`Un mensaje: ${mensaje}`); //interpolación

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// document.write(mensaje);

// 3.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// const nombreUsuario = prompt('Escriba su nombre')
// document.write(nombreUsuario);