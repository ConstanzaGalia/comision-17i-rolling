/*const saludo = ()=> {
    return console.log("hola")
}*/
const saludo = nombre => `hola ${nombre}`
console.log(saludo("agustin"))


// ejemplo de desestructuracion de objetos
const persona = {
    nombre: "santi",
    edad: 17,
    poder: "volar",
}

const persona2 = {
    nombre: "agustin",
    edad: 17,
    poder: "volar",
}

const getPersonaNombre = ({nombre})=> `el nombre es ${nombre}`;
console.log(getPersonaNombre(persona))
console.log(getPersonaNombre(persona2))