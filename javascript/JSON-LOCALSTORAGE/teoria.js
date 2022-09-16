//LOCAL STORAGE
//JSON

const user = {
  id: 1235486,
  username: 'carlosrivera',
  password: 'fkldfn4r09330adafnanf9843fbcdkjdkks',
  data: {
    name: 'Carlos Rivera',
    email: 'example@gmail.com',
    city: 'Tucumán',
    country: 'ARG',
  },
  getSaludos: () => {
    return 'Hola mundo'
  }
};

//JSON Stringify nos sirve para convertir un objeto literal de JS a un String/Texto.
//Con este método vamos a almacenar los pares clave/valor en Local Storage.
const userStringify = JSON.stringify(user);
console.log('User Texto', userStringify);


//JSON Parse nos sirve para convertir un String/Texto a un objeto literal de JS.
// Con este método vamos a tomar el par clave/valor del Local Storage y convertirlos en Objeto para ser manipulado en nuestra app.
const userParse = JSON.parse(userStringify);
console.log('User Objeto', userParse);



//Metodos del Local Storage
/* 

setItem(clave, valor) --> Guardar la data en el local storage

getItem(clave) --> Me trae la data almacenada con la clave que le paso por parámetro

clear() --> Elimina todo el almacenamiento

removeItem(clave) --> Elimina solo la data que contiene la clave que le paso por parámetro


*/

//Guardo el usuario en el local storage
localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('userUsername', JSON.stringify(user.username));


//Traer el usuario en el local storage
const usuario = JSON.parse(localStorage.getItem('user'));
const userUsername = JSON.parse(localStorage.getItem('userUsername'));
console.log('USUARIO', usuario);
console.log('Username', userUsername);


//DESESTRUCTURACIÓN
const { data, id, getSaludos } = user;
console.log({dataUser: {data, id}})

console.log(getSaludos());
console.log(user.getSaludos());