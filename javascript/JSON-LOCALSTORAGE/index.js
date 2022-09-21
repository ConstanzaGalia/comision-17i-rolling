//FORMULARIO DE REGISTRO
const formRegistro = document.getElementById('FormRegistro');
const inputNameRegistro = document.getElementById('InputNameRegistro');
const inputLastNameRegistro = document.getElementById('InputLastNameRegistro');
const inputEmailRegistro = document.getElementById('InputEmailRegistro');
const inputPassRegistro = document.getElementById('InputPasswordRegistro');
const modalRegistro = document.getElementById('Registro');
const pAlreadyEmail = document.getElementById('alreadyEmail');

//FORMULARIO DE LOGIN
const formLogin = document.getElementById('FormularioLogin');
const inputEmailLogin = document.getElementById('InputEmailLogin');
const inputPassLogin = document.getElementById('InputPasswordLogin');
const modalLogin = document.getElementById('Login');
const pUserNotExist = document.getElementById('noExiste');

//INFO LOCAL STORAGE
const users = JSON.parse(localStorage.getItem('users')) || [];
const userLogged = JSON.parse(localStorage.getItem('userLogged'));

//HTML
const divShowbtnNavbar = document.querySelector('#divShowbtnNavbar');
if (!userLogged) {
  divShowbtnNavbar.innerHTML = `
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">
    Login
  </button>
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Registro">
    Registro
  </button>
  `;
} else {
  divShowbtnNavbar.innerHTML = `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${userLogged.name}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <button type="button" class="dropdown-item" onclick="profileRedirect()">Mi perfil</button>
    <button type="button" class="dropdown-item" onclick="logOut()">Cerrar Sesión</button>
  </div>
</div>
  `
}

//FUNCUIONES
function idRandom() {
  return new Date().getTime();
}

formRegistro.onsubmit = (event) => {
  event.preventDefault();
  const name = inputNameRegistro.value;
  const lastName = inputLastNameRegistro.value;
  const email = inputEmailRegistro.value;
  const pass = inputPassRegistro.value;

  const findUser = users.find((user) => user.email === email);

  if (!findUser) {
    users.push({
      id: idRandom(),
      name,
      lastName,
      email,
      pass,
      role: 'client',
      delete: false,
    });

    localStorage.setItem('users', JSON.stringify(users));
    swal('Usuario registrado con éxito', 'success');
    formRegistro.reset();
    let modal = bootstrap.Modal.getInstance(Registro);
    modal.hide();
  } else {
    pAlreadyEmail.classList.remove('d-none');
    return;
  }
};

formLogin.onsubmit = (e) => {
  e.preventDefault();
  const email = inputEmailLogin.value;
  const pass = inputPassLogin.value;

  const findClient = users.find(
    (user) => user.email === email && user.pass === pass
  );

  if (!findClient) {
    pUserNotExist.classList.remove('d-none');
    return;
  } else {
    localStorage.setItem('userLogged', JSON.stringify(findClient));
    swal('Bienvenido');
    //Delay para la redirection
    profileRedirect();
  }
};

const profileRedirect = () => {
  setTimeout(() => {
    window.location.href = './user.html';
  }, 1000);
}

const logOut = () => {
  localStorage.removeItem('userLogged');
  setTimeout(() => {
    location.reload();
  }, 1000)
}
