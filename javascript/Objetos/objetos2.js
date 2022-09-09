//Clase Persona - Objeto
const persona = {
  //Estos son los atributos - Información
  nombre: 'Coco',
  edad: 0,
  fechaDeNacimiento: '14/09/1993',
  email: 'email@email.com',
  isActive: true,
  password: 'password',
  hobbies: [],

  //Con este método yo podría modificar el atributo edad.
  calcularEdad: () => {
    console.log('Calcular edad');
  },

  //Métodos - Funcionalidades
  caminar: function () {
    console.log('Estoy caminando');
  },
};

//Formas de acceder a los valores de la key de un objeto.
console.log(persona.nombre);
console.log(persona['nombre']);
console.log(persona.caminar());
persona.sexo = 'F';
console.log(persona);

//Conjunto de productos --> Pongo los objetos (productos) dentro de un array!
const products = [
  {
    id: 1,
    name: 'Leche',
    price: 120,
    categories: ['familiar', 'comida'],
    stock: 10,
  },
  {
    id: 2,
    name: 'Arroz',
    price: 80,
    categories: ['familiar', 'comida'],
    stock: 0,
  },
  {
    id: 3,
    name: 'Lavadora',
    price: 7800,
    categories: ['electrodomésticos'],
    stock: 5,
  },
  {
    id: 4,
    name: 'Notebook',
    price: 60000,
    categories: ['informatica', 'gamer'],
    stock: 0,
  },
];

const table = document.getElementById('productos');

const displayProducts = (products) => {
  table.innerHTML = products
    .map(
      (p) =>
        `
    <tr>
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td>${p.categories
        .map((category) => `<span> ${category} </span>`)
        .join('-')}</td>
      <td>${p.stock > 0 ? 'Hay Stock' : 'No hay stock'}
        <span class="badge ml-2 ${p.stock > 0 ? 'bg-success' : 'bg-danger'}">${
          p.stock
        }</span>
      </td>
    </tr>
  `
    )
    .join(' ');
};

displayProducts(products);

// Creando un objeto con una función constructora
function Persona(nombre, apellido, fechaNac, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.fechaNac = fechaNac;
  this.dni = dni;
}

//Aqui instanciamos la clase Persona, creando 2 objetos.
const coco = new Persona('Constanza', 'Galia', '14/09/1993', 37497308);
const gabo = new Persona('Gabo', 'Garcia', '28/02/1997', 37497307);
console.log(coco);
console.log(gabo);

//Creamos un objetos vacio y se le asigna los atributos por separado.
const emma = new Object();
emma.nombre = 'emmanuel';
console.log(emma);

class Persona2 {
  constructor(nombre, apellido, fechaNac, dni) {
    //Dentro del constructor van los atributos que se pasan por parámetros
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNac = fechaNac;
    this.dni = dni;
  }
  getFullName = () => {
    return `${this.nombre} ${this.apellido}`;
  };
  // Fuera del constructor declaramos los métodos propios de la clase.
  saludar = () => {
    console.log(`Hola me llamo ${this.nombre}`);
  };

  saludoCompleto = () => {
    const fullName = this.getFullName();
    console.log(`Hola me llamo ${fullName}`);
  };
}

const esteban = new Persona2('Esteban', 'Orrego', '19/06/1998', 31459789);
const coco2 = new Persona2('Constanza', 'Galia', '14/09/1993', 37497308);
const gabo2 = new Persona2('Gabo', 'Garcia', '28/02/1997', 37497307);
console.log(esteban);
esteban.saludoCompleto();
coco2.saludar();

//Herencia --> Profesor hereda de Persona2 todos los atributos y métodos. Reutilizamos el código de Persona2 en Profesor.
//Polimorfismo --> Sobre escribirmos el método saludoCompleto() con otro resultado. Es la capacidad de una instrucción comportarse de manera diferente según sea Persona2 o Profesor.
class Profesor extends Persona2 {
  constructor(nombre, apellido, fechaNac, dni, materia) {
    super(nombre, apellido, fechaNac, dni);
    this.materia = materia;
  }
  saludoCompleto = () => {
    const fullName = this.getFullName();
    console.log(`Hola me llamo ${fullName}, soy el profe de: ${this.materia}`);
  };
}

const profeMatematica = new Profesor(
  'Mario',
  'Galia',
  '12/07/1965',
  37497307,
  'Matematicas'
);
profeMatematica.saludoCompleto();


//Con get y set encapsulamos los métodos que pertenecen a la clase, para que no se tenga acceso a ellos a menos que los invoquemos, pero solo en el caso de invocarlos nos va a devolver el return.
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  set actualizarPrecio(precio) {
    this.precio = precio;
  }
  get precioFormateado() {
    return this.precio.toFixed(2);
  }
}

const arroz = new Producto('Arroz', 150);
console.log('Arroz', arroz)
console.log(arroz.precioFormateado)
arroz.actualizarPrecio = 200;
console.log('Arroz', arroz)