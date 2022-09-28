//DECLARACIÓN DE VARIABLES
const tablaProductos = document.getElementById('TablaProductos');
// FORM AGREGAR PRODUCTOS
const formProductos = document.getElementById('FormProductos');
const inputImgProductos = document.getElementById('InputImgProductos');
const inputNameProductos = document.getElementById('InputNameProductos');
const inputDescripcionProductos = document.getElementById(
  'InputDescripcionProductos'
);
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

<!-- Modal Editar Productos -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="FormEditProductos">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Imágen</label>
              <input type="text" class="form-control" id="InputImgProductosE" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre</label><span class="text-danger">*</span>
              <input type="text" class="form-control" id="InputNameProductosE" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Descripción</label>
              <input type="text" class="form-control" id="InputDescripcionProductosE" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Precio</label><span class="text-danger">*</span>
              <input type="texto" class="form-control" id="InputPrecioProductosE" aria-describedby="emailHelp" autocomplete="off" required>
            </div>
            <button type="submit" class="btn btn-primary">Editar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`;

// FORM EDITAR PRODUCTOS
const formProductosE = document.getElementById('FormEditProductos');
const inputImgProductosE = document.getElementById('InputImgProductosE');
const inputNameProductosE = document.getElementById('InputNameProductosE');
const inputDescripcionProductosE = document.getElementById(
  'InputDescripcionProductosE'
);
const inputPrecioProductosE = document.getElementById('InputPrecioProductosE');

//FUNCIONES
const createProducts = (productos) => {
  tablaProductos.innerHTML = productos
    .map(
      (producto, index) =>
        `
    <tr>
      <td>${++index}</td>
      <td class="w-25"><img src="${producto.img}" alt="${
          producto.name
        }" class="w-25"/></td>
      <td>${producto.name}</td>
      <td>${producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td>
      <button type="button" onclick="uploadFormEditProduct(${producto.id})" class="btn btn-sm btn-warning text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i class="fas fa-user-edit"></i></button>
      <button type="button" onclick="deleteProduct(${
        producto.id
      })" class="btn btn-sm btn-danger">
      <i class="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  `
    )
    .join('');
};

const displayProducts = () => {
  const productosLocalStorage = JSON.parse(localStorage.getItem('productos')) || [];
  const productsAvailable = productosLocalStorage.filter(
    (producto) => !producto.hasOwnProperty('deleteAt')
  );
  createProducts(productsAvailable);
};
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
  bootstrap.Modal.getInstance(AgregarProducto).hide();
};

const deleteProduct = (id) => {
  const updateProducts = productos.map((producto) =>
    producto.id === id ? { ...producto, deleteAt: new Date() } : producto
  );
  localStorage.setItem('productos', JSON.stringify(updateProducts));
  displayProducts();
};

let idProductEdit;
const uploadFormEditProduct = (id) => {
  const producto = productos.find(producto => producto.id === id);
  inputImgProductosE.value = producto.img;
  inputNameProductosE.value = producto.name;
  inputDescripcionProductosE.value = producto.descripcion;
  inputPrecioProductosE.value = producto.precio;
  idProductEdit = id;
};

formProductosE.onsubmit = (event) => {
  event.preventDefault();

  const img = inputImgProductosE.value;
  const name = inputNameProductosE.value;
  const descripcion = inputDescripcionProductosE.value;
  const precio = inputPrecioProductosE.value;

  const updateProducts = productos.map((producto) =>
    producto.id === idProductEdit ? { ...producto, img, name, descripcion, precio } : producto
  );

  localStorage.setItem('productos', JSON.stringify(updateProducts));
  swal('Producto editado con éxito', 'success');
  formProductosE.reset();
  displayProducts();
  bootstrap.Modal.getInstance(exampleModal).hide();
};
