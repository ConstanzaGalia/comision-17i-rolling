//CRUD - ABM
// Alta - Baja - Modificación
// Create - Read - Update - Delete

let carrito = [];

const agregarProducto = () => {
  const producto = prompt('Ingrese el producto para el carrito');
  if (producto === '') {
    return alert('No puede agregar un producto vacio')
  } else if (producto === null) {
    return
  }
  carrito.push(producto);
  actualizarLista();
}

const eliminarProducto = () => {
  const idProductoEliminado = parseInt(prompt('Escriba el id del producto a eliminar'));
  ((idProductoEliminado <= 0) || (idProductoEliminado > carrito.length) || isNaN(idProductoEliminado)) ? alert("id no valido") : carrito = carrito.filter((p, i) => i !== idProductoEliminado - 1);
  actualizarLista();
}

const actualizarLista = () => {
  document.getElementById('tabla').innerHTML = `
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
    </tr>
  </thead>
  <tbody>
    ${carrito.map((p, index) => `
    <tr>
      <td scope="row">${++index}</td>
      <td>${p}</td>
    </tr>
    `).join(' ')
    }
  </tbody>
</table>
  `
}

const editarProducto = () => {
  let numeroProducto = parseInt(prompt('Ingrese id del producto a editar'));
  if ((numeroProducto <= 0) || (numeroProducto > carrito.length) || isNaN(numeroProducto)) {
    alert("id no valido");
  } else {
    const productoEditado = prompt('Ingrese el nombre del producto para editar');
    carrito[--numeroProducto] = productoEditado;
  }
  actualizarLista();
}
