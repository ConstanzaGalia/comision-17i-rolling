//FORMULARIO DE REGISTRO
const formRegistro = document.getElementById('FormRegistro');
const inputNameRegistro = document.getElementById('InputNameRegistro');
const inputLastNameRegistro = document.getElementById('InputLastNameRegistro');
const inputEmailRegistro = document.getElementById('InputEmailRegistro');
const inputPassRegistro = document.getElementById('InputPasswordRegistro');
const modalRegistro = document.getElementById('Registro');
const pAlreadyEmail = document.getElementById('alreadyEmail');
const pPassInvalid = document.getElementById('passValid');

//REGEX
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//FORMULARIO DE LOGIN
const formLogin = document.getElementById('FormularioLogin');
const inputEmailLogin = document.getElementById('InputEmailLogin');
const inputPassLogin = document.getElementById('InputPasswordLogin');
const modalLogin = document.getElementById('Login');
const pUserNotExist = document.getElementById('noExiste');
const formSearch = document.getElementById('formSearch');
const inputSearch = document.getElementById('inputSearch');

//INFO LOCAL STORAGE
const users = JSON.parse(localStorage.getItem('users')) || [];
const userLogged = JSON.parse(localStorage.getItem('userLogged'));
const productos = JSON.parse(localStorage.getItem('productos')) || [];

//HTML
const divShowbtnNavbar = document.querySelector('#divShowbtnNavbar');
const divContainerProductos = document.querySelector('#ContainerProductos');

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
    <button type="button" class="dropdown-item" onclick="redirect()">Mi perfil</button>
    <button type="button" class="dropdown-item" onclick="logOut()">Cerrar Sesión</button>
  </div>
</div>
  `;
}

//FUNCIONES
function idRandom() {
  return new Date().getTime();
}

formRegistro.onsubmit = (event) => {
  event.preventDefault();
  const name = inputNameRegistro.value;
  const lastName = inputLastNameRegistro.value;
  const email = inputEmailRegistro.value;
  const pass = inputPassRegistro.value;

  if (!regexPass.test(pass)) {
    console.log(regexPass.test(pass));
    pPassInvalid.classList.remove('d-none');
    return;
  }

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
  const findUser = users.find(
    (user) => user.email === email && user.pass === pass
  );

  if (!findUser) {
    pUserNotExist.classList.remove('d-none');
    return;
  } else if (findUser.role === 'admin') {
    localStorage.setItem('isAdmin', JSON.stringify(findUser));
    swal('Bienvenido Admin');
    redirect('./admin.html');
  } else {
    localStorage.setItem('userLogged', JSON.stringify(findUser));
    swal('Bienvenido');
    //Delay para la redirection
    redirect('./user.html');
  }
};

const redirect = (url) => {
  setTimeout(() => {
    window.location.href = url;
  }, 1000);
};

const logOut = () => {
  localStorage.removeItem('userLogged');
  setTimeout(() => {
    location.reload();
  }, 1000);
};

const displayProducts = (productos) => {
  const productsAvailable = productos.filter(
    (producto) => !producto.hasOwnProperty('deleteAt')
  );
  divContainerProductos.innerHTML = productsAvailable
    .map(
      (producto) =>
        `
        <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.name}</h5>
          <p class="card-text">${producto.descripcion}
          <span class="badge ${producto.precio < 3000 ? 'bg-success' : 'bg-danger'} ">$ ${producto.precio}</span>
          </p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
  `
    )
    .join('');
};
displayProducts(productos);

formSearch.onsubmit = (e) => {
  e.preventDefault();
  const term = inputSearch.value;
  const searchProducts = productos.filter(producto => 
    producto.name.toLowerCase().includes(term.toLowerCase())
  );
  displayProducts(searchProducts);
}

const clearSearch = () => {
  displayProducts(productos);
}
