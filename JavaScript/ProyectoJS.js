document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});

/*GALERIA 2*/
document.querySelectorAll('.contenedor-modal_2 .overlay_2').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal_2 ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});

/*GALERIA 3*/
document.querySelectorAll('.contenedor-modal_3 .overlay_3').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal_3 ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});

/*GALERIA 4*/
document.querySelectorAll('.contenedor-modal_4 .overlay_4').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal_4 ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});