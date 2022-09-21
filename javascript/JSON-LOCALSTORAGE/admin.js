//INFO LOCAL STORAGE
const userAdmin = JSON.parse(localStorage.getItem('isAdmin'));

//FUNCION PARA CONTROL DE ACCESO
const redirect = (url) => {
    window.location.href = url;
};

const accessControl = () => {
  if (!userAdmin) {
    redirect('./index.html');
  }
}
accessControl();

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
`

const logOutAdmin = () => {
  localStorage.removeItem('isAdmin');
  setTimeout(() => {
    redirect('./index.html');
  }, 1000)
}