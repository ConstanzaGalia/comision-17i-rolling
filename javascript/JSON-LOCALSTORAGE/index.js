//FORMULARIO DE REGISTRO
const formRegistro = document.getElementById('FormRegistro');
const inputNameRegistro = document.getElementById('InputNameRegistro');
const inputLastNameRegistro = document.getElementById('InputLastNameRegistro');
const inputEmailRegistro = document.getElementById('InputEmailRegistro');
const inputPassRegistro = document.getElementById('InputPasswordRegistro');
const modalRegistro = document.getElementById('Registro');

const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users)
formRegistro.onsubmit = (event) => {
  event.preventDefault();
  const name = inputNameRegistro.value;
  const lastName = inputLastNameRegistro.value;
  const email = inputEmailRegistro.value;
  const pass = inputPassRegistro.value;

  users.push({
    name,
    lastName,
    email,
    pass,
    role: 'user',
  })

  localStorage.setItem('users', JSON.stringify(users))
  formRegistro.reset();
  let modal = bootstrap.Modal.getInstance(Registro)
  modal.hide();
}