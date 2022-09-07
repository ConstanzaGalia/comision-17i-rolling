//CRUD - ABM
// Alta - Baja - Modificación
// Create - Read - Update - Delete

let carrito = ['Notebook', 'Mouse', 'Teclado', 'Monitor'];

console.log(carrito);

const agregarProducto = () => {
  const producto = prompt('Ingrese el producto para el carrito');
  if (producto === '') {
    return alert('No puede agregar un producto vacio')
  } else if (producto === null){
    return
  }
  carrito.push(producto);
  console.log(carrito);
  actualizarLista();
}

const eliminarProducto = () => {
  const productoEliminado = prompt('Escriba el nombre del producto que desea eliminar');
  const productosActualizados = carrito.filter(p => p !== productoEliminado);
  carrito = productosActualizados;
  console.log(carrito);
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
    ${carrito.map((producto, i) => `
    <tr>
      <th scope="row">${++i}</th>
      <td>${producto}</td>
    </tr>
    `).join(' ')
  }
  </tbody>
</table>
  `
}

const editarProducto = () => {
  let numeroProducto = prompt('Ingrese numero del producto para editar');
  const productoEditado = prompt('Ingrese el nombre del producto a editar');
  carrito[--numeroProducto] = productoEditado;
  console.log(carrito[--numeroProducto])
  actualizarLista();
}
