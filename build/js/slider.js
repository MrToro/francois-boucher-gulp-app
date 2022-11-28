const pageLabel = document.querySelector('.slider__page-label');
const statusBar = document.querySelector('.slider__page-status-bar--active');
const images = document.getElementsByClassName('slider__image-container');

const slideLoop = () => {
	images[state - 1].classList.toggle('active');

  state++;
	state = state > images.length ? 1 : state;

	statusBar.style.width = `${(state * 100) / images.length}%`;
	pageLabel.innerHTML = `${state} / ${images.length}`;
	images[state - 1].classList.toggle('active');

	setTimeout(slideLoop, 3000);
};

var state = 1;
slideLoop();
