//ejemplo
// function reFresh() {
//   location.reload(true);
// }
// const intervalRefresh = window.setInterval(reFresh(), 10000);

// function limpiarIntervalo() {
//   window.clearInterval(intervalRefresh);
// }

// setInterval(() => console.log("Hola Mundo"), 600)
// setTimeout(() => console.log("Hola Rolling"), 6000)


// const h1 = document.querySelector('#saludo')
// const h1 = document.getElementById('saludo')
// const div = document.getElementsByClassName('divPersona')
// console.log(h1.textContent);
// console.log(div);



//TEMPORIZADOR
let tiempo = document.querySelector("#tiempo");

let intervalo = 0, minutos = 0, segundos = 0;

const setearTiempo = (temp) => {
  clearInterval(intervalo);
  minutos = 0, segundos = 0;
  switch (temp) {
    case 15:
    case 30:
      segundos = temp;
      tiempo.innerHTML = `00:${segundos}`;
      break;
    case 1:
    case 2:
      minutos = temp;
      tiempo.innerHTML = `0${minutos}:00`;
      break;
    default:
      console.log("Tiempo no establecido");
  }
}

const iniciarTemp = () => {
  if (minutos > 0) {
    intervalo = setInterval(() => {
      if (minutos > 0 && segundos === 0) {
        minutos--;
        segundos = 60;
      } else {
        segundos--;
        tiempo.innerHTML = segundos < 10 ? `0${minutos}:0${segundos}` : `0${minutos}:${segundos}`
      }
      if (segundos === 0 && minutos === 0) {
        clearInterval(intervalo);
      }
    }, 1000)
    return;
  }
  if (segundos > 0 && minutos === 0) {
    intervalo = setInterval(() => {
      segundos--;
      tiempo.innerHTML = segundos < 10 ? `00:0${segundos}` : `00:${segundos}`
      if (segundos === 0) {
        clearInterval(intervalo);
      }
    }, 1000)
  }
}

const resetTemp = () => {
  tiempo.innerHTML = "00:00";
  segundos = 0;
  minutos = 0;
  clearInterval(intervalo);
}

const stopTemp = () => {
  tiempo.innerHTML = segundos < 10 ? `0${minutos}:0${segundos}` : `0${minutos}:${segundos}`
  clearInterval(intervalo);
}
