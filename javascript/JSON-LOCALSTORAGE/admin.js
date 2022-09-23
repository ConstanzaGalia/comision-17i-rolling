//DECLARACIÓN DE VARIABLES
const tablaProductos = document.getElementById('TablaProductos');
// FORM AGREGAR PRODUCTOS
const formProductos = document.getElementById('FormProductos');
const inputImgProductos = document.getElementById('InputImgProductos');
const inputNameProductos = document.getElementById('InputNameProductos');
const inputDescripcionProductos = document.getElementById('InputDescripcionProductos');
const inputPrecioProductos = document.getElementById('InputPrecioProductos');

//INFO LOCAL STORAGE
const userAdmin = JSON.parse(localStorage.getItem('isAdmin'));
const productos = JSON.parse(localStorage.getItem('productos')) || [];

//FUNCION PARA CONTROL DE ACCESO
const redirect = (url) => {
  window.location.href = url;
};

const accessControl = () => {
  if (!userAdmin) {
    redirect('./index.html');
  }
};
accessControl();

const logOutAdmin = () => {
  localStorage.removeItem('isAdmin');
  setTimeout(() => {
    redirect('./index.html');
  }, 1000);
};

function idRandom() {
  return new Date().getTime();
}

//HTML
const showAdminName = document.querySelector('#showAdminName');
showAdminName.innerHTML = `
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
    data-bs-toggle="dropdown" aria-expanded="false">
    ${userAdmin.name}
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <button type="button" class="dropdown-item" onclick="redirect()">Mi perfil</button>
    <button type="button" class="dropdown-item" onclick="logOutAdmin()">Cerrar Sesión</button>
  </div>
</div>
`;
//FUNCIONES
const createProducts = (productos) => {
  tablaProductos.innerHTML = productos.map((producto, index) => (
    `
    <tr>
      <td>${++index}</td>
      <td class="w-25"><img src="${producto.img}" alt="${producto.name}" class="w-25"/></td>
      <td>${producto.name}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td>
      <button type="button" class="btn btn-sm btn-warning text-light" data-toggle="modal" data-target="#modalEditProduct">
      <i class="fas fa-user-edit"></i></button>
      <button class="btn btn-sm btn-danger">
      <i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  `
  ))
};

const displayProducts = () => {
  createProducts(productos);
}
displayProducts();

formProductos.onsubmit = (event) => {
  event.preventDefault();

  const img = inputImgProductos.value;
  const name = inputNameProductos.value;
  const descripcion = inputDescripcionProductos.value;
  const precio = inputPrecioProductos.value;

    productos.push({
      id: idRandom(),
      img,
      name,
      descripcion,
      precio,
    });

    localStorage.setItem('productos', JSON.stringify(productos));
    swal('Producto guardado con éxito', 'success');
    formProductos.reset();
    displayProducts();
    let modal = bootstrap.Modal.getInstance(AgregarProducto);
    modal.hide();
};