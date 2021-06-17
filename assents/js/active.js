document.oncontextmenu = function (e) {
    e.preventDefault();
    console("ERROR");
}

const enlaces = document.querySelectorAll('#categorias a');
enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        enlaces.forEach((enlace) => enlace.classList.remove('activo'));
        evento.target.classList.add('activo');
    });
});

//Menu Movil

const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
