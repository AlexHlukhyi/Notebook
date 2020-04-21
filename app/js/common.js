function showSideBar() {
	document.getElementById('side-bar').style.display = 'flex';
	document.getElementById('overlay').style.display = 'block';
}
function closeSideBar() {
	document.getElementById('side-bar').removeAttribute('style');
	document.getElementById('overlay').removeAttribute('style');
}