// Entamaños de pantalla pequeños se activa y desactiva el menú de navegación
const navegationButton = document.querySelector('.nav__toggle-button');
const navegationMenu = document.querySelector('.nav__list');

navegationButton.addEventListener('click', function () {
	navegationMenu.classList.toggle('active');
	navegationButton.classList.toggle('active');
});

// Evitamos que se active el menú en un tamaño de pantalla grande
const mediaQuery = window.matchMedia('(min-width: 992px)');

mediaQuery.addEventListener('change', function () {
  navegationMenu.classList.toggle('active', false);
});

// Habilitamos que se pueda desactivar el menú con la tecla scape
document.addEventListener('keyup', (event) => {
	if (event.key === 'Escape') {
		navegationMenu.classList.toggle('active', false);
		navegationButton.classList.toggle('active', false);
	}
});
