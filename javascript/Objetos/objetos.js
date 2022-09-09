// POO -> programación orientada a objetos
// JSON --> Javascript Object Notation
// Datos --> propiedades
// Funcionalidades --> Métodos

//Clase Persona - Objeto
const persona = {
  //Estos son los atributos - Información
  nombre: "Coco",
  edad: 0,
  fechaDeNacimiento: "14/09/1993",
  email: "email@email.com",
  isActive: true,
  password: "password",
  hobbies: [],

  //Con este método yo podría modificar el atributo edad.
  calcularEdad: function (){
    Console.log("Calcular edad")
  },

  //Métodos - Funcionalidades
  caminar: function () {
    console.log('Estoy caminando')
  }
}

const persona2 = {}
console.log(persona)
//Para acceder a una propiedad del objeto se puede hacer:
//Por notación de  .  --> ej: persona.nombre
//Por notación de [] --> ej: persona["nombre"]

document.getElementById('persona').innerHTML = `<p>${persona["nombre"]}</p>`;

// Agregar propiedades al objeto.
persona.sexo = "Femenino"
persona.email = "coco@email.com"

delete persona.sexo;

//Devuelve true o false si la propiedad existe dentro del objeto.
const haveEdad = persona.hasOwnProperty('sexo');
console.log(haveEdad);

//Devuelve un array con las properties del objeto.
const keys = Object.keys(persona);
console.log(keys);

//Asi puedo saber si un objeto esta vacio.
const key = Object.keys(persona2).length;
console.log(key);

const usuarios = [
  {nombre: "Pablo", edad: 25},
  {nombre: "Cocó", edad: 28}
]

console.log('Lista de usuarios');
for (let index = 1; index < usuarios.length; index++) {
  console.log(`El nombre del usuario es: ${usuarios[index].nombre},
  su edad es: ${usuarios[index].edad}`)
}


const products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] },
  { id: 4, name: "Notebook", price: 60000, categories: ["informatica", "gamer"] }
];
console.log(products);
console.log('Nombre: ', products[0].name);
const table = document.getElementById('productos');

const displayProducts = (products) => {
  table.innerHTML = products.map((product) => 
    `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.categories.map((category) =>
        `<span> ${category} </span>`
      )}</td>
    </tr>
  ` 
  ).join(' ')
}

displayProducts(products);
