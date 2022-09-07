let opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];
let jugador = null;
let bot = null;

const playGame = () => {
  getRandomOption();
  seleccionJugador();
}
const getRandomOption = () => {
  return (bot = Math.round(Math.random() * 2));
};

const seleccionJugador = () => {
  jugador = parseInt(
    prompt('Ingrese su opción: 0 = PIEDRA | 1 = PAPEL | 2 = TIJERA')
  );

  switch (true) {
    case jugador === bot:
      mensaje('EMPATE');
      break;
    case jugador === 0 && bot === 2:
      mensaje('GANASTE');
      break;
    case jugador === 1 && bot === 0:
      mensaje('GANASTE');
      break;
    case jugador === 2 && bot === 1:
      mensaje('GANASTE');
      break;
    default:
      mensaje('PERDISTE');
      break;
  }
};

const mensaje = (resultado) => {
  if (resultado === "GANASTE") {
    swal(`GANASTE! Elegiste ${opciones[jugador]}, el bot eligió ${opciones[bot]}`);
  }
  if (resultado === "EMPATE") {
    swal(`EMAPTE! Ambos eligieron ${opciones[jugador]}`);
  }
  if (resultado === "PERDISTE") {
    swal(`PERDISTE! Elegiste ${opciones[jugador]}, el bot eligió ${opciones[bot]}`);
  }
}