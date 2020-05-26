document.addEventListener('DOMContentLoaded',function () {
	var modalButtons = document.querySelectorAll('.modal-button');
	var overlay = document.querySelector('.overlay');
	var currentModal;

	modalButtons.forEach(function(button){
		button.addEventListener('click', function(e) {
			e.preventDefault();
			let data = this.getAttribute('data-modal');
			if (data === 'side-bar') {
				currentModal = document.querySelector('.side-bar');
			} else {
				currentModal = document.querySelector('.modal[data-modal="' + data + '"]');
			}
			currentModal.classList.add('active');
			overlay.classList.add('active');
		});
	});

	overlay.addEventListener('click', function(e) {
		currentModal.classList.remove('active');
		overlay.classList.remove('active');
	});
});
