window.onload = function () {
	let index = 0;
	// slides init
	let slides = document.getElementsByClassName('slide');
	let slideInterval = setInterval(nextSlide,5000);
	// indicators init
	for (let i = 0; i < slides.length; i++) {
		let indicator = document.createElement('div');
		indicator.className = 'indicator';
		indicator.onclick = function() {
			goToSlide(i);
		};
		document.getElementById('indicators').appendChild(indicator);
	}
	let indicators = document.getElementsByClassName('indicator');
	indicators[index].classList.toggle('active');
	// controls init
	document.getElementById('next').onclick = nextSlide;
	document.getElementById('prev').onclick = previousSlide;

	function nextSlide() {
		goToSlide(index + 1);
	}

	function previousSlide() {
		goToSlide(index - 1);
	}

	function goToSlide(n) {
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide,5000);
		slides[index].classList.toggle('active');
		indicators[index].classList.toggle('active');
		index = (n + slides.length) % slides.length;
		slides[index].classList.toggle('active');
		indicators[index].classList.toggle('active');
	}
};