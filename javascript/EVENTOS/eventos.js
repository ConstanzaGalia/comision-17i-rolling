const exOnchange = (value) => {
  console.log(value);
}

const btn = document.getElementById('button');
btn.addEventListener('click', () => { console.log('hola') }, false);