var registro = document.getElementsByClassName('registro');
var form = document.getElementsByClassName('form');

registro.addEventListener('click',function() {
  form.classList.toggle('mostrar');
});
